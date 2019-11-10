const { getBlockNumber, getBlock, getTransaction, getPendingTransactions, getBlockTransactionCount,
    getTransactionFromBlock, getTransactionCount , getChainId ,getNodeInfo ,
    getPeerCount , getId } = require('../../pweb3');

    
module.exports = {
  
    getBlockNumber: () => {

         return getBlockNumber() 

    },

    getBlock: (args) => {

        return getBlock(args.numberBlock)
    },

    getTransaction: (args) => {

        return getTransaction(args.transactionHash);

    },
    getPendingTransactions: () => {


       return  getPendingTransactions();
    },
    getBlockTransactionCount: (args) => {

        return getBlockTransactionCount(args.numberBlock);
    },

    getTransactionFromBlock: (args) => {

        return getTransactionFromBlock(args.numberBlock, args.transactionIndex); 
   
    },

    getTransactionReceipt: (args) => {

        return getTransactionReceipt(args.transactionHash);
    },

    getTransactionCount:(args)=>{

        return getTransactionCount(args.address);
    },
    getChainId:()=>{

        return getChainId();
    },
    getNodeInfo:()=>{
        
        return getNodeInfo();

    },
    getPeerCount:()=>{
       return  getPeerCount();
    },

    getId:()=>{

        return getId() ;  
    }

} 
