import { transferSolana } from "./solana_transfer" 
import { getSignedVAA, getSignedVAAWithRetry, redeemOnSolana, postVaaSolana, createWrappedOnSolana, getEmitterAddressEth } from "@certusone/wormhole-sdk";
import * as Web3 from "@solana/web3.js"
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import base58 = require("bs58");

// const srcChain = "solana";
const MAINNET_GUARDIAN_RPC: string[] =  [
    "https://wormhole-v2-mainnet-api.certus.one",
    "https://wormhole.inotel.ro",
    "https://wormhole-v2-mainnet-api.mcf.rocks",
    "https://wormhole-v2-mainnet-api.chainlayer.network",
    "https://wormhole-v2-mainnet-api.staking.fund",
    "https://wormhole-v2-mainnet.01node.com",
]

async function main() {
    // transferSolana("solana", "ethereum", "oxe", "native", "0.1",
    // "TESTNET", "https://api.devnet.solana.com")
    // const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
    // const secretKey = Uint8Array.from();
    // const secret = JSON.parse(process.env.SOL_MAINNET_KEY ?? '') as string;
    const secret = '2tmUNacCW3bXxVaba49WZNgT9mbYYjgoYu4CGNBPYqrarTU74mKzmV4Z8G9fSLQaNujZjdk4kt6e4NtibZXCbxYS'
    let secretKey = base58.decode(secret);
    const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);
    const connection = new Web3.Connection('https://api.mainnet-beta.solana.com');

    // const latestBlockhash = await connection.getLatestBlockhash();

    const SOL_BRIDGE_ADDRESS = 'worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth'
    const SOL_TOKEN_BRIDGE_ADDRESS = 'wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb'
    const ETH_TOKEN_BRIDGE_ADDRESS = '0x3ee18B2214AFF97000D974cf647E7C347E8fa585'
    const mintAddress = 'AFjbdcY23qcHDv2fBGiL4ZdxREi61b5diB9m2eqmqVjg'
    const WORMHOLE_RPC_HOST = MAINNET_GUARDIAN_RPC[1]
    const WORMHOLE_RPC_HOSTS = MAINNET_GUARDIAN_RPC

    const CHAIN_ID_ETH = 2
    
    const sequence = '129094'
    const emitterAddress = getEmitterAddressEth(
        ETH_TOKEN_BRIDGE_ADDRESS
      );    
    // const payerAddress = ''
    const payerAddress = keypairFromSecret.publicKey.toString();


    console.log("start VAA");

    const { vaaBytes: signedVAA } = await getSignedVAAWithRetry(
        WORMHOLE_RPC_HOSTS,
        CHAIN_ID_ETH,
        emitterAddress,
        sequence,
        {
          transport: NodeHttpTransport(),
        }
      );
      
      console.log("end VAA");
      console.log(signedVAA);
    await postVaaSolana(
        connection,
        async (transaction) => {
          transaction.partialSign(keypairFromSecret);
          return transaction;
        },
        SOL_BRIDGE_ADDRESS,
        payerAddress,
        Buffer.from(signedVAA)
      );
    const transaction = await createWrappedOnSolana(
        connection,
        SOL_BRIDGE_ADDRESS,
        SOL_TOKEN_BRIDGE_ADDRESS,
        payerAddress,
        signedVAA
      );
      
      try {
        transaction.partialSign(keypairFromSecret);
        const txid = await connection.sendRawTransaction(
          transaction.serialize()
        );
        await connection.confirmTransaction(txid);
      } catch (e) {
        // this could fail because the token is already attested (in an unclean env)
      }

}




main()
    .then(() => {
        console.log("Finished successfully")
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })


