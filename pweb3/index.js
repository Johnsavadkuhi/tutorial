
const Web3 = require('pweb3'); 

const web3 = new Web3(`http://${process.env.IP}/pchain`);
console.log( web3.isConnected);

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
 function getTransaction (transactionHash ){

    return  web3.pi.getTransaction(transactionHash);


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
function getFullBalance(address , numberBlock , fullProxied){
    
    return web3.pi.getFullBalance(address , numberBlock , fullProxied ); 

}
function getStorageAt(address , index ){

    return web3.pi.getStorageAt(address, index); 
}
function sendRawTransaction(signedTransaction){

    return web3.pi.sendRawTransaction(signedTransaction )
       
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
     getPeerCount , //11
     getId ,//12
     getBalance ,//13
     getFullBalance ,//14 
     getStorageAt , //15
     getCode , //16
     sendRawTransaction ,//17
     
    }  ; 