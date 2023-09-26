import {Connection, Keypair, clusterApiUrl} from "@solana/web3.js";
import {initUserFromEnv, airdropSolIfNeeded} from "./sol_account";
import {  parseSequenceFromLogSolana, 
          getEmitterAddressSolana, 
          getSignedVAA,
          redeemOnEth
 } 
from "@certusone/wormhole-sdk";

const SOL_BRIDGE_ADDRESS = "Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o"
const SOL_TOKEN_BRIDGE_ADDRESS = "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE"
const CHAIN_ID_ETH_GOERLI = 5

import { postVaaSolanaWithRetry } from "@certusone/wormhole-sdk/lib/esm/solana";
import {
  createRegisterChainInstruction as createNFTBridgeRegisterChainInstruction,
  createUpgradeContractInstruction as createNFTBridgeUpgradeContractInstruction,
} from "@certusone/wormhole-sdk/lib/esm/solana/nftBridge";
import {
  createCompleteTransferNativeInstruction,
  createCompleteTransferWrappedInstruction,
  createCreateWrappedInstruction,
  createRegisterChainInstruction as createTokenBridgeRegisterChainInstruction,
  createUpgradeContractInstruction as createTokenBridgeUpgradeContractInstruction,
  deriveEndpointKey,
  getEndpointRegistration,
} from "@certusone/wormhole-sdk/lib/esm/solana/tokenBridge";
import {
  createUpgradeGuardianSetInstruction,
  createUpgradeContractInstruction as createWormholeUpgradeContractInstruction,
} from "@certusone/wormhole-sdk/lib/esm/solana/wormhole";
import {
  CHAINS,
  CONTRACTS,
  ChainName,
  Network,
  SolanaChainName,
} from "@certusone/wormhole-sdk/lib/esm/utils/consts";
import * as web3s from "@solana/web3.js";
import base58 from "bs58";
import { NETWORKS } from "./consts";
import { Payload, VAA, impossible } from "./vaa";
import { getEmitterAddress } from "./emitter";
import {
  transferFromSolana,
  transferNativeSol,
} from "@certusone/wormhole-sdk/lib/esm/token_bridge/transfer";
import {
  hexToUint8Array,
  tryNativeToUint8Array,
} from "@certusone/wormhole-sdk/lib/esm/utils";
import { PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";


// Submit transaction - results in a Wormhole message being published
async function main() {
  const connection = new Connection(clusterApiUrl('devnet'));
  const signer = await initUserFromEnv(connection);

  const transaction = await transferFromSolana(
    connection,
    SOL_BRIDGE_ADDRESS,
    SOL_TOKEN_BRIDGE_ADDRESS,
    payerAddress,
    fromAddress,
    mintAddress,
    amount,
    targetAddress,
    CHAIN_ID_ETH_GOERLI,
    originAddress,
    originChain
  );
  const signed = await wallet.signTransaction(transaction);
  const txid = await connection.sendRawTransaction(signed.serialize());
  await connection.confirmTransaction(txid);
  // Get the sequence number and emitter address required to fetch the signedVAA of our message
  const info = await connection.getTransaction(txid);
  const sequence = parseSequenceFromLogSolana(info);
  const emitterAddress = await getEmitterAddressSolana(SOL_TOKEN_BRIDGE_ADDRESS);
  // Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
  const signedVAA  = await getSignedVAA(
    WORMHOLE_RPC_HOST,
    CHAIN_ID_SOLANA,
    emitterAddress,
    sequence
  );
  // Redeem on Ethereum
  await redeemOnEth(ETH_TOKEN_BRIDGE_ADDRESS, signer, signedVAA);

}