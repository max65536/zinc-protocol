import { Connection, Keypair } from "@solana/web3.js";
// import { getOrca, OrcaFarmConfig, OrcaPoolConfig } from "@orca-so/sdk";
import { getOrca, OrcaPoolConfig, Network, getTokens } from "@orca-so/sdk";
import Decimal from "decimal.js";


export async function swap(connection: Connection, owner: Keypair){
  const orca = getOrca(connection, Network.DEVNET);
  try {
    /*** Swap ***/
    // 3. We will be swapping 0.1 SOL for some ORCA
    const orcaSolPool = orca.getPool(OrcaPoolConfig.ORCA_SOL);
    const solToken = orcaSolPool.getTokenB();
//    const solToken = orcaSolPool.getTokenB();
    const solAmount = new Decimal(0.1);
    const quote = await orcaSolPool.getQuote(solToken, solAmount);
    const orcaAmount = quote.getMinOutputAmount();

    console.log(`Swap ${solAmount.toString()} SOL for at least ${orcaAmount.toNumber()} ORCA`);
    const swapPayload = await orcaSolPool.swap(owner, solToken, solAmount, orcaAmount);
    const swapTxId = await swapPayload.execute();
    console.log("Swapped:", swapTxId, "\n");

  } catch (err) {
    console.warn(err);
  }
}

export async function swapETH(connection:Connection, owner:Keypair){
  const orca = getOrca(connection, Network.DEVNET);
  try {
    /*** Swap ***/
//    const orcaSolPool = orca.getPool(OrcaPoolConfig.ORCA_SOL);
//    const solToken = orcaSolPool.getTokenB();

    const ethSolPool = orca.getPool(OrcaPoolConfig.ETH_SOL);
    const solToken = ethSolPool.getTokenB();
    console.log(orca)
    const solAmount = new Decimal(0.1);
    const quote = await ethSolPool.getQuote(solToken, solAmount);
    const orcaAmount = quote.getMinOutputAmount();

    console.log(`Swap ${solAmount.toString()} SOL for at least ${orcaAmount.toNumber()} ETH`);
    const swapPayload = await ethSolPool.swap(owner, solToken, solAmount, orcaAmount);
    const swapTxId = await swapPayload.execute();
    console.log("Swapped:", swapTxId, "\n");

  } catch (err) {
    console.warn(err);
  }
}
