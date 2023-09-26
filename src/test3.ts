import {
    CHAIN_ID_BSC,
    CHAIN_ID_ETH,
    CHAIN_ID_SOLANA,
    redeemOnEth,
    WSOL_ADDRESS,
  } from "@certusone/wormhole-sdk";
import { redeem } from "./redeem";
import { redeemOnSolana, getSignedVAAWithRetry, getEmitterAddressEth, postVaaSolana } from "@certusone/wormhole-sdk";
import { getSignedVAABySequence } from "./guardianQuery";
import { getTokenBridgeAddressForChain, getSignerForChain, SOLANA_HOST} from "./consts";
import * as Web3 from "@solana/web3.js"
import base58 = require("bs58");
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import dotenv from 'dotenv'

dotenv.config()

async function main() {
    const sequenceNumber = '129094'
    const ETH_TOKEN_BRIDGE_ADDRESS = '0x3ee18B2214AFF97000D974cf647E7C347E8fa585'    
    const emitterAddress = getEmitterAddressEth(
        ETH_TOKEN_BRIDGE_ADDRESS
      );    
//     const signedVaa = await getSignedVAABySequence(
//     CHAIN_ID_SOLANA,
//     sequenceNumber,
//     false
//   );
    const MAINNET_GUARDIAN_RPC: string[] =  [
        "https://wormhole-v2-mainnet-api.certus.one",
        "https://wormhole.inotel.ro",
        "https://wormhole-v2-mainnet-api.mcf.rocks",
        "https://wormhole-v2-mainnet-api.chainlayer.network",
        "https://wormhole-v2-mainnet-api.staking.fund",
        "https://wormhole-v2-mainnet.01node.com",
    ]

    const WORMHOLE_RPC_HOSTS = MAINNET_GUARDIAN_RPC
    // const connection = new Web3.Connection('https://api.mainnet-beta.solana.com');
    const connection = new Web3.Connection(SOLANA_HOST, "confirmed");

    const recentBlockhashInfo = await connection.getRecentBlockhash();
    console.log('Recent blockhash:', recentBlockhashInfo.blockhash);
    console.log('Fee calculator:', recentBlockhashInfo.feeCalculator);
    
    const { vaaBytes: signedVaa } = await getSignedVAAWithRetry(
        WORMHOLE_RPC_HOSTS,
        CHAIN_ID_ETH,
        emitterAddress,
        sequenceNumber,
        {
        transport: NodeHttpTransport(),
        }
    );
    console.log(signedVaa);
//   await redeemOnEth(
//     getTokenBridgeAddressForChain(CHAIN_ID_ETH),
//     getSignerForChain(CHAIN_ID_ETH),
//     signedVaa
//   );

    // const secret = '2tmUNacCW3bXxVaba49WZNgT9mbYYjgoYu4CGNBPYqrarTU74mKzmV4Z8G9fSLQaNujZjdk4kt6e4NtibZXCbxYS'
    const secret = process.env.SOL_MAINNET_KEY ?? '';
    let secretKey = base58.decode(secret);
    const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);


    // const latestBlockhash = await connection.getLatestBlockhash();

    const SOL_BRIDGE_ADDRESS = 'worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth'
    const SOL_TOKEN_BRIDGE_ADDRESS = 'wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb'


    // const payerAddress = ''
    const payerAddress = keypairFromSecret.publicKey.toString();
    console.log('start post');
    await postVaaSolana(
        connection,
        async (transaction) => {
          transaction.partialSign(keypairFromSecret);
          return transaction;
        },
        SOL_BRIDGE_ADDRESS,
        payerAddress,
        Buffer.from(signedVaa)
      );

      console.log('start redeem');
    await redeemOnSolana(
        connection,
        SOL_BRIDGE_ADDRESS,
        SOL_TOKEN_BRIDGE_ADDRESS,
        payerAddress,
        signedVaa
      );
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

