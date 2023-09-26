import {receiveWithAddress} from "./receiveETH"
import dotenv from 'dotenv'
dotenv.config()

async function main(){

    const secret = process.env.SOL_MAINNET_KEY ?? '';
    console.log(secret);
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

