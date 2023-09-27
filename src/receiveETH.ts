import {
  CHAIN_ID_ETH,
  CHAIN_ID_ARBITRUM
} from "@certusone/wormhole-sdk";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { getEmitterAddressEth } from "@certusone/wormhole-sdk";
import * as Web3 from "@solana/web3.js"
import getSignedVAAWithRetry from "@certusone/wormhole-sdk/lib/cjs/rpc/getSignedVAAWithRetry";
import { postVaaSolana, redeemOnSolana } from "@certusone/wormhole-sdk";


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



export async function receiveWithAddress(connection:Web3.Connection, sequenceNumber:string, keypair:Web3.Keypair){
   // const ETH_TOKEN_BRIDGE_ADDRESS = '0x3ee18B2214AFF97000D974cf647E7C347E8fa585'    
    const ETH_TOKEN_BRIDGE_ADDRESS = '0x0b2402144bb366a632d14b83f244d2e0e21bd39c'    //arbitrum
    const emitterAddress = getEmitterAddressEth(
        ETH_TOKEN_BRIDGE_ADDRESS
      );    
    console.log("start signvaa")
    const { vaaBytes: signedVaa } = await getSignedVAAWithRetry(
        WORMHOLE_RPC_HOSTS,
//        CHAIN_ID_ETH,
        CHAIN_ID_ARBITRUM,
        emitterAddress,
        sequenceNumber,
        {
        transport: NodeHttpTransport(),
        }
    );
  console.log(signedVaa)
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
