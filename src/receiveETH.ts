
import {
  CHAIN_ID_BSC,
  CHAIN_ID_ETH,
  CHAIN_ID_SOLANA,
  redeemOnEth,
  WSOL_ADDRESS,
} from "@certusone/wormhole-sdk";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import {
  ETH_TEST_WALLET_PUBLIC_KEY,
  getSignerForChain,
  getTokenBridgeAddressForChain,
  SOLANA_TEST_TOKEN,
  SOLANA_TEST_WALLET_PUBLIC_KEY,
  WETH_ADDRESS,
} from "./consts";

import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { getEmitterAddressEth } from "@certusone/wormhole-sdk";
import * as Web3 from "@solana/web3.js"
import * as bs58 from "bs58";
import getSignedVAAWithRetry from "@certusone/wormhole-sdk/lib/cjs/rpc/getSignedVAAWithRetry";
import { postVaaSolana, redeemOnSolana } from "@certusone/wormhole-sdk";
import * as fs from 'fs';


const MAINNET_GUARDIAN_RPC: string[] =  [
    "https://wormhole-v2-mainnet-api.certus.one",
    "https://wormhole.inotel.ro",
    "https://wormhole-v2-mainnet-api.mcf.rocks",
    "https://wormhole-v2-mainnet-api.chainlayer.network",
    "https://wormhole-v2-mainnet-api.staking.fund",
    "https://wormhole-v2-mainnet.01node.com",
]

const SOL_BRIDGE_ADDRESS = 'worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth'
const SOL_TOKEN_BRIDGE_ADDRESS = 'wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb'
const WORMHOLE_RPC_HOSTS = MAINNET_GUARDIAN_RPC
// const connection = new Web3.Connection('https://api.mainnet-beta.solana.com');
const SOLANA_HOST = Web3.clusterApiUrl("mainnet-beta");
const connection = new Web3.Connection(SOLANA_HOST, "confirmed");
export async function receiveWithAddress(sequenceNumber:string, keypair:Web3.Keypair){
    const ETH_TOKEN_BRIDGE_ADDRESS = '0x3ee18B2214AFF97000D974cf647E7C347E8fa585'    
    const emitterAddress = getEmitterAddressEth(
        ETH_TOKEN_BRIDGE_ADDRESS
      );    

    const { vaaBytes: signedVaa } = await getSignedVAAWithRetry(
        WORMHOLE_RPC_HOSTS,
        CHAIN_ID_ETH,
        emitterAddress,
        sequenceNumber,
        {
        transport: NodeHttpTransport(),
        }
    );

    const payerAddress = keypair.publicKey.toString();
    console.log('start post');
    await postVaaSolana(
        connection,
        async (transaction) => {
          transaction.partialSign(keypair);
          return transaction;
        },
        SOL_BRIDGE_ADDRESS,
        payerAddress,
        Buffer.from(signedVaa)
      );

    console.log('end post');
    console.log('start redeem');
    const transaction = await redeemOnSolana(
        connection,
        SOL_BRIDGE_ADDRESS,
        SOL_TOKEN_BRIDGE_ADDRESS,
        payerAddress,
        signedVaa
      );
      transaction.partialSign(keypair);
          const txid = await connection.sendRawTransaction(
            transaction.serialize()
        );
      await connection.confirmTransaction(txid);      
    console.log('redeem succeed');
}
