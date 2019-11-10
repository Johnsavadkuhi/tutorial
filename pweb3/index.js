
const Web3 = require('pweb3'); 


const web3 = new Web3('http://localhost:6969/pchain');

function getBlockNumber(){
    return web3.pi.getBlockNumber(); 
}

function getBlock (numberBlock){

    return web3.pi.getBlock(numberBlock); 
}

function getTransaction (transactionHash ){

    return web3.pi.getTransaction(transactionHash); 

}
function getPendingTransactions (){
    return web3.pi.getPendingTransactions(); 
}
function getBlockTransactionCount(numberBlock ) {

    web3.pi.getBlockTransactionCount(numberBlock).then((result) => {
        
        console.log("getBlockTransactionCount : " , result); 

    }).catch((err) => {
        throw err; 
    });

    return web3.pi.getBlockTransactionCount(numberBlock); 

}

function getTransactionFromBlock(blocknumber , transactionIndex){
    return web3.pi.getTransactionFromBlock(blocknumber , transactionIndex) ; 
}

function getTransactionReceipt(transactionHash){

    return web3.pi.getTransactionReceipt(transactionHash)
}

function getTransactionCount(address){
 
    return web3.pi.getTransactionCount(address); 

}
function getChainId(){
    
    web3.pi.getChainId().then(result=>{
        console.log(result) ; 
    })
    return web3.pi.getChainId(); 

}

function getNodeInfo (){

    return web3.pi.getNodeInfo() ;
}
function getPeerCount(){
  
    return web3.pi.net.getPeerCount();
}
function getId(){

    try{
        return web3.pi.net.getId(); 

    }catch(error){
        throw error ; 
    }

}

module.exports = {getBlockNumber , getBlock, getTransaction , getPendingTransactions ,
     getBlockTransactionCount  , getTransactionFromBlock  , getTransactionReceipt ,
      getTransactionCount , getChainId ,getNodeInfo , getPeerCount , getId
    }  ; 