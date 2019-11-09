const {getBlockNumber , getBlock } = require('../../pweb3'); 

module.exports = {
    getBlockNumber :()=>{
     return getBlockNumber().then(result=>{
        return result ; 
    })

},

getBlock : (args) =>{

    console.log("number block : " , args.numberBlock); 

     
    return getBlock(args.numberBlock).then(result=>{
        console.log("result : " , result); 
        return result ; 

    })
}

}