import {receiveWithAddress} from "./receiveETH"
import dotenv from 'dotenv'
import * as Web3 from "@solana/web3.js"
import * as bs58 from "bs58";
import { swapWETHToSOL, swapETHToSOL } from "./util_orca";
import Decimal from "decimal.js";
import { initUserFromETHFile } from "./sol_account";
import { transfer } from "./transfer";
dotenv.config()

export async function all_process(sequence:string, ethaddress:string, amount:string){
    const secret = process.env.SOL_MAINNET_KEY ?? '';
    const keypairFromSecret = Web3.Keypair.fromSecretKey(bs58.decode(secret));
    console.log(keypairFromSecret.secretKey)
    const SOLANA_HOST = Web3.clusterApiUrl("devnet");
//    const SOLANA_HOST = Web3.clusterApiUrl("mainnet-beta");
    const connection = new Web3.Connection(SOLANA_HOST, "confirmed");

//    console.log(secret);
//    await receiveWithAddress(sequence, keypairFromSecret);
//    await swapETH(connection, keypairFromSecret);
//    await swapETHToSOL(connection, keypairFromSecret, new Decimal(0.00001))
//    await swapWETHToSOL(connection, keypairFromSecret, new Decimal(0.00001))
    const toKeypair = await initUserFromETHFile(ethaddress)
    console.log("start transfer to "+toKeypair.publicKey.toString());
    await transfer(connection, keypairFromSecret, toKeypair.publicKey, amount);
}

async function main(){
    const sequence = "17040";
    all_process(sequence,"0x4eF4913B5A0294d7a0F96E867f4BA2ec41452aF4" , "0.00001")
//    const SOLANA_HOST = Web3.clusterApiUrl("devnet");
//    const SOLANA_HOST = Web3.clusterApiUrl("mainnet-beta");
//    const connection = new Web3.Connection(SOLANA_HOST, "confirmed");

//    console.log(secret);
//    await receiveWithAddress(sequence, keypairFromSecret);
//    await swapETH(connection, keypairFromSecret);
//    await swapETHToSOL(connection, keypairFromSecret, new Decimal(0.00001))
//    await swapWETHToSOL(connection, keypairFromSecret, new Decimal(0.00001))
//    const toKeypair = await initUserFromETHFile(ethaddress)
//    await transfer(connection, keypairFromSecret, pub, 5000);
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

