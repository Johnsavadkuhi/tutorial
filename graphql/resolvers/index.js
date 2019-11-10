const { getBlockNumber, getBlock, getTransaction, getPendingTransactions, getBlockTransactionCount,
    getTransactionFromBlock, getTransactionCount , getChainId ,getNodeInfo ,
    getPeerCount , getId } = require('../../pweb3');

module.exports = {
    getBlockNumber: () => {
        return getBlockNumber().then(result => {
            return result;
        })

    },

    getBlock: (args) => {

        return getBlock(args.numberBlock).then(result => {
            return result;

        })
    },

    getTransaction: (args) => {

        return getTransaction(args.transactionHash).then(result => {
            return result;
        })

    },
    getPendingTransactions: () => {


        getPendingTransactions().then(result => {

            return result;
        })
    },
    getBlockTransactionCount: (args) => {

        return getBlockTransactionCount(args.numberBlock).then(result => {
            return result;
        })
    },
    getTransactionFromBlock: (args) => {
        return getTransactionFromBlock(args.numberBlock, args.transactionIndex).then(result => {
            return result;
        })
    },
    getTransactionReceipt: (args) => {
        return getTransactionReceipt(args.transactionHash).then(result => {
            return result;
        })
    },

    getTransactionCount:(args)=>{
        return getTransactionCount(args.address).then(result=>{
            return result; 
        })
    },
    getChainId:()=>{
        return getChainId().then(result=>{
            return result; 
        })
    },
    getNodeInfo:()=>{
        return getNodeInfo().then(result=>{
            return result; 
        })
    },
    getPeerCount:()=>{
       return  getPeerCount();
    },

    getId:()=>{

        return getId().then(r=>{
            return r ; 
        }) ; 
    }

} 
