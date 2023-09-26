import { PublicKey, Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
import {getForeignAssetSolana} from "@certusone/wormhole-sdk";
import { transferFromEth, parseSequenceFromLogEth } from "@certusone/wormhole-sdk";
import { Transaction } from "@solana/web3.js";
import { MultisigInfo, Token } from "@solana/spl-token";
import getSignedVAAWithRetry from "@certusone/wormhole-sdk";


import dotenv from 'dotenv';
dotenv.config()

const TESTNET_GUARDIAN_RPC: string[] =  [
    "https://wormhole-v2-testnet-api.certus.one",
]

const TESTNET_GUARDIAN_PUBKEY: string = "0x13947Bd48b18E53fdAeEe77F3473391aC727C638"

async function transferFromEthToSolana(): Promise<string> {
  // create a keypair for Solana
//  const connection = new Connection(SOLANA_HOST, "confirmed");
//  const keypair = Keypair.fromSecretKey(SOLANA_PRIVATE_KEY);
  const connection = new Connection(clusterApiUrl('devnet'));
  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
  const secretKey = Uint8Array.from(secret);
  const keypair = Keypair.fromSecretKey(secretKey);


  // determine destination address - an associated token account
  const solanaMintKey = new PublicKey(
    (await getForeignAssetSolana(
      connection,
      CONTRACTS.DEVNET.solana.token_bridge,
      CHAIN_ID_ETH,
      tryNativeToUint8Array(TEST_ERC20, CHAIN_ID_ETH)
    )) || ""
  );
  const recipient = await Token.getAssociatedTokenAddress(
    solanaMintKey,
    keypair.publicKey
  );
  // create the associated token account if it doesn't exist
  const associatedAddressInfo = await connection.getAccountInfo(recipient);
  if (!associatedAddressInfo) {
    const transaction = new Transaction().add(
      await createAssociatedTokenAccountInstruction(
        keypair.publicKey, // payer
        recipient,
        keypair.publicKey, // owner
        solanaMintKey
      )
    );
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = keypair.publicKey;
    // sign, send, and confirm transaction
    transaction.partialSign(keypair);
    const txid = await connection.sendRawTransaction(transaction.serialize());
    await connection.confirmTransaction(txid);
  }
  // create a signer for Eth
  const provider = new ethers.providers.WebSocketProvider(ETH_NODE_URL);
  const signer = new ethers.Wallet(ETH_PRIVATE_KEY, provider);
  const amount = parseUnits("1", 18);
  // approve the bridge to spend tokens
  await approveEth(
    CONTRACTS.DEVNET.ethereum.token_bridge,
    TEST_ERC20,
    signer,
    amount
  );
  // transfer tokens
  const receipt = await transferFromEth(
    CONTRACTS.DEVNET.ethereum.token_bridge,
    signer,
    TEST_ERC20,
    amount,
    CHAIN_ID_SOLANA,
    tryNativeToUint8Array(recipient.toString(), CHAIN_ID_SOLANA)
  );
  // get the sequence from the logs (needed to fetch the vaa)
  const sequence = await parseSequenceFromLogEth(
    receipt,
    CONTRACTS.DEVNET.ethereum.core
  );
  provider.destroy();
  return sequence;
}
