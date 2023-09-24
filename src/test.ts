import {initUserFromEnv, airdropSolIfNeeded} from "./sol_account";
import {swap, swapETH} from "./util_orca"
import {Connection, Keypair, clusterApiUrl} from "@solana/web3.js";


async function main() {
  const connection = new Connection(clusterApiUrl('devnet'));
  const signer = await initUserFromEnv(connection);
  
  await airdropSolIfNeeded(signer, connection);
  console.log("pubkey:",signer.publicKey.toBase58());

//  await pingProgram(connection, signer);
  await swapETH(connection, signer);

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


