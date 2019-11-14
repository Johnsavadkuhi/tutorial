
const Web3 = require('pweb3'); 

const web3 = new Web3(`http://${process.env.IP}/pchain`);

function getBlockNumber(){
    return web3.pi.getBlockNumber(); 
}
function getPendingTransactions (){
    return web3.pi.getPendingTransactions(); 
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
function getBlock (numberBlock){

    return web3.pi.getBlock(numberBlock); 
}
function getCode(address){

    return web3.pi.getCode(address); 
}
async function getTransaction (transactionHash ){

    return await web3.pi.getTransaction(transactionHash);


}
function getBlockTransactionCount(numberBlock ) {

    web3.pi.getBlockTransactionCount(numberBlock).then((result) => {
        
        console.log("getBlockTransactionCount : " , result); 

    }).catch((err) => {
        throw err; 
    });

    return web3.pi.getBlockTransactionCount(numberBlock); 

}
function getTransactionReceipt(transactionHash){

    return web3.pi.getTransactionReceipt(transactionHash)
}
function getTransactionCount(address){
 
    return web3.pi.getTransactionCount(address); 

}
function getBalance(address){
    return web3.pi.getBalance(address)
}
function getTransactionFromBlock(blocknumber , transactionIndex){
    return web3.pi.getTransactionFromBlock(blocknumber , transactionIndex) ; 
}
function getFullBalance(address , numberBlock ){
    
    return web3.pi.getFullBalance(address , numberBlock); 

}
function getStorageAt(address , index ){

    return web3.pi.getStorageAt(address, index); 
}

module.exports = {

     getBlockNumber ,//1 
     getBlock, //2
     getTransaction ,//3
     getPendingTransactions ,//4
     getBlockTransactionCount  ,//5
     getTransactionFromBlock  ,//6
     getTransactionReceipt ,//7
     getTransactionCount , //8
     getChainId ,//9
     getNodeInfo ,//10
     getPeerCount , 
     getId ,
     getBalance ,
     getFullBalance , 
     getStorageAt , 
     getCode
    }  ; 