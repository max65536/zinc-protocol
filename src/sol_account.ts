import * as Web3 from '@solana/web3.js'
import * as fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

export async function initUserFromEnv(connection: Web3.Connection): Promise<Web3.Keypair> {
  // 如果没有私钥，生成新密钥对
  if (!process.env.PRIVATE_KEY) {
    console.log('正在生成新密钥对... 🗝️');
    const signer = Web3.Keypair.generate();

    console.log('正在创建 .env 文件');
    fs.writeFileSync('.env', `PRIVATE_KEY=[${signer.secretKey.toString()}]`);

    return signer;
  }

  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
  const secretKey = Uint8Array.from(secret);
  const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);
  return keypairFromSecret;
}

export async function initUserFromETHFile(ethaddress:string): Promise<Web3.Keypair> {
  // 如果没有私钥，生成新密钥对
  const filePath = "keys/ETH_"+ethaddress
  if (!fs.existsSync(filePath)){
    
    console.log('正在生成新密钥对... 🗝️');
    const signer = Web3.Keypair.generate();
    console.log('正在创建文件');
    fs.writeFileSync(filePath, signer.secretKey.toString());
    return signer;
  }

  const privateKeyString = fs.readFileSync(filePath, 'utf-8');

  // 将字符串转换为数字数组
  const secret: number[] = privateKeyString.split(',').map(Number);
  const secretKey = Uint8Array.from(secret);
  const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);
  return keypairFromSecret;
}



export async function airdropSolIfNeeded(
  signer: Web3.Keypair,
  connection: Web3.Connection
) {
  // 检查余额
  const balance = await connection.getBalance(signer.publicKey);
  console.log('当前余额为', balance / Web3.LAMPORTS_PER_SOL, 'SOL');

  // 如果余额少于 1 SOL，执行空投
  if (balance / Web3.LAMPORTS_PER_SOL < 1) {
    console.log('正在空投 1 SOL');
    const airdropSignature = await connection.requestAirdrop(
      signer.publicKey,
      Web3.LAMPORTS_PER_SOL
    );

    const latestBlockhash = await connection.getLatestBlockhash();

    await connection.confirmTransaction({
      blockhash: latestBlockhash.blockhash,
      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      signature: airdropSignature,
    });

    const newBalance = await connection.getBalance(signer.publicKey);
    console.log('新余额为', newBalance / Web3.LAMPORTS_PER_SOL, 'SOL');
  }
}

export async function createUser(){
    const signer = Web3.Keypair.generate();
    return signer;
}


