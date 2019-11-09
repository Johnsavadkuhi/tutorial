
const Web3 = require('pweb3'); 


const web3 = new Web3('http://localhost:6969/pchain');

function getBlockNumber(){
    return web3.pi.getBlockNumber(); 
}

function getBlock (numberBlock){

     web3.pi.getBlock(3150).then((result) => {
        
        console.log("r : " , result) ;

    }).catch((err) => {
        
    });; 
    return web3.pi.getBlock(numberBlock); 
}

module.exports = {getBlockNumber , getBlock}  ; 