const { getBlockNumber, getBlock, getTransaction, getPendingTransactions,
    getBlockTransactionCount, getTransactionFromBlock, getTransactionCount,
    getChainId, getNodeInfo, getPeerCount, getId, getBalance,
    getFullBalance, getStorageAt, getCode, getTransactionReceipt , sendRawTransaction } = require('../../pweb3');


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


        return getPendingTransactions();
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

    getTransactionCount: (args) => {

        return getTransactionCount(args.address);
    },
    getChainId: () => {

        return getChainId();
    },
    getNodeInfo: () => {

        return getNodeInfo();

    },
    getPeerCount: () => {
        return getPeerCount();
    },

    getId: () => {

        return getId();
    },
    getBalance: (args) => {
        return getBalance(args.address)
    },
    getFullBalance: (args) => {
        let blockNumber = "";




        if (!Number.isNaN(Number.parseInt(args.numberBlock))) {

            console.log('inside');
            blockNumber = Number.parseInt(args.numberBlock);
            blockNumber = "0x" + blockNumber.toString(16);
            console.log(blockNumber);


        } else {

            blockNumber = args.numberBlock;
            console.log(blockNumber);
        }
        console.log(args.fullProxied);

        return getFullBalance(args.address, blockNumber, Boolean(args.fullProxied));
    },

    getStorageAt: (args) => {
        return getStorageAt(args.address, args.index);
    },

    getCode: (args) => {
        return getCode(args.address);
    },

    sendRawTransaction : (args) =>{

        return sendRawTransaction(args.signedTransaction);
    }


} 
