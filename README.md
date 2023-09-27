# **Zinc Protocol 🌉**

An intent-centric cross-chain transaction protocol



## **Introduction**

In the rapidly evolving world of blockchain and cryptocurrencies, the ability to seamlessly transact across different networks has become imperative. The Zinc Protocol is an innovative platform designed to ease cross-chain transactions for users, bridging the gap between various blockchain networks such as Ethereum and Solana. With Zinc Protocol, users no longer have to grapple with the intricacies of identifying suitable cross-chain bridges or decentralized exchanges. Instead, they simply express their intent, and Zinc handles the rest.



## **Core Components**
![image](https://github.com/max65536/zinc-protocol/blob/main/zinc%20protocol%20image/1.png)

When users interact with the Zinc Protocol, the DepositContract stores the user's EVM address and the amount of ETH sent. Based on the user's requirements, it then iterates through various cross-chain bridges to find the most optimal cross-chain path. Once the best path is identified, the DepositContract calls the corresponding cross-chain bridge contract, passing in the amount of ETH from the user and subsequently receives a unique VAA. Using the user's EVM address, the amount of ETH sent, and the VAA for each transaction, the Zinc Protocol generates a Proof. This Proof ensures the security of the user's cross-chain amount. 

After generating the Proof, the Zinc Protocol on Solana swaps the user's ETH for the desired token. The protocol iterates through various DEXs to find the most optimal trading path. Once the best path is located, the WithdrawContract calls the respective DEX contract to swap the ETH for the corresponding token. Concurrently, the Zinc Protocol assists the user in creating a wallet, transferring the final tokens into the user's newly created wallet.



## **Usage Example**
![image](https://github.com/max65536/zinc-protocol/blob/main/zinc%20protocol%20image/2.png)

For example, users need to perform cross-chain transactions and only have ETH but not Sol, they simply need to use the Zinc Protocol. With just one click, the transaction is completed.

Suppose 1 ETH = 1600 USDC. Users submit their requirement to the Zinc Protocol to swap 1 ETH on Ethereum for 1600 USDC on Solana. This request is then processed by the Zinc Protocol, which uses its own contracts to assist users in the cross-chain transfer and swap. Ultimately, it helps users acquire 1600 USDC on Solana


## **Features 🌟**

### **Declarative Intent 📜**

- Express your transactional intent without delving into the complexities. Simply state your end goal, and Zinc does the rest.

### **User-centric Approach 🚀**

- Designed with users in mind. From novices to crypto veterans, Zinc ensures a smooth and intuitive experience.

### **Safety First 🔒**

- Prioritizing your digital assets' security. With best-in-class security practices, your assets are in safe hands.

### **Cost and Speed Optimization ⚡**

- Swift cross-chain swaps without burning a hole in your pocket.

### **Collaborative Ecosystem 🌐**

- Built with a wide range of collaborations in the blockchain universe, ensuring compatibility and ease of operation.
