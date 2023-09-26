
import * as web3s from "@solana/web3.js";
// import { SolanaChainName, ChainName, Network } from "@certusone/wormhole-sdk";

import {
    CHAINS,
    CONTRACTS,
    ChainName,
    Network,
    SolanaChainName,
  } from "@certusone/wormhole-sdk";

import { transferNativeSol, transferFromSolana } from "@certusone/wormhole-sdk";
import { tryNativeToUint8Array } from "@certusone/wormhole-sdk";

const setupConnection = (rpc: string): web3s.Connection =>
  new web3s.Connection(rpc, "confirmed");

export async function transferSolana(
    srcChain: SolanaChainName,
    dstChain: ChainName,
    dstAddress: string,
    tokenAddress: string,
    amount: string,
    network: Network,
    rpc: string
  ) {
    const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
    const key = Uint8Array.from(secret);

    const connection = setupConnection(rpc);
    const keypair = web3s.Keypair.fromSecretKey(key);

    const { core, token_bridge } = CONTRACTS[network][srcChain];
    if (!core) {
        throw new Error(
          `Core bridge address not defined for ${srcChain} ${network}`
        );
      }
      if (!token_bridge) {
        throw new Error(
          `Token bridge address not defined for ${srcChain} ${network}`
        );
      }

    const bridgeId = new web3s.PublicKey(core);
    const tokenBridgeId = new web3s.PublicKey(token_bridge);
    const payerAddress = keypair.publicKey.toString();

    let transaction;
    if (tokenAddress === "native") {
    transaction = await transferNativeSol(
        connection,
        bridgeId,
        tokenBridgeId,
        payerAddress,
        BigInt(amount),
        tryNativeToUint8Array(dstAddress, dstChain),
        dstChain
    );
    } 
    // else {
        
    // // find the associated token account
    // const fromAddress = (
    //     await getAssociatedTokenAddress(
    //     new PublicKey(tokenAddress),
    //     keypair.publicKey
    //     )
    // ).toString();

    // const fromAddress = (
    //     await Token.getAssociatedTokenAddress(
    //     new PublicKey(tokenAddress),)
    // ).toString()

    // transaction = await transferFromSolana(
    //     connection,
    //     bridgeId,
    //     tokenBridgeId,
    //     payerAddress,
    //     fromAddress,
    //     tokenAddress, // mintAddress
    //     BigInt(amount),
    //     tryNativeToUint8Array(dstAddress, dstChain),
    //     dstChain
    // );
    // }
}