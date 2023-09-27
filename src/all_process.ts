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
//    const SOLANA_HOST = Web3.clusterApiUrl("devnet");
    const SOLANA_HOST = Web3.clusterApiUrl("mainnet-beta");
    const connection = new Web3.Connection(SOLANA_HOST, "confirmed");

//    console.log(secret);
    await receiveWithAddress(connection, sequence, keypairFromSecret);
    await swapWETHToSOL(connection, keypairFromSecret, new Decimal(parseFloat(amount)))
    const toKeypair = await initUserFromETHFile(ethaddress)
    console.log("start transfer to "+toKeypair.publicKey.toString());
    await transfer(connection, keypairFromSecret, toKeypair.publicKey, amount);
}
