import { Connection, PublicKey, Transaction, Keypair, SystemProgram } from '@solana/web3.js'
import { sendAndConfirmTransaction } from '@solana/web3.js';

export async function transfer(connection:Connection, fromKeypair:Keypair, toPubkey:PublicKey, amount:string){
  let lamportsToSend:number = parseFloat(amount) * 1e9;
  lamportsToSend = 5000;
  const fromPubkey = fromKeypair.publicKey;
  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: toPubkey,
      lamports: lamportsToSend,
    })
  );
  console.log("sending Transaction");
  await sendAndConfirmTransaction(connection, transferTransaction, [fromKeypair]);
  console.log("transfer to "+ toPubkey) 
}
