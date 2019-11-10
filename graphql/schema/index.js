const {buildSchema} = require('graphql');

module.exports = buildSchema(`
type block{
    number : Int
    hash : String
    parentHash : String
    nonce :String
    sha3Uncles:String
    logsBloom :String
    transactionsRoot:String
    stateRoot:String
    receiptsRoot:String
    miner:String
    difficulty:String
    totalDifficulty:String
    extraData:String
    size:Float
    gasLimit:Float
    gasUsed:Float
    timestamp:String
    transactions:[String]!
    uncles:[Int]!
} 
type transaction {
    hash :String 
    nonce : Int 
    blockHash :Int
    transactionIndex : Int 
    from : String
    to : String
    value : String 
    gasPrice :String 
    gas : Float 
    input : String  

}   
type transactionReceipt{
    status :Boolean
    blockHash:String
    blockNumber:Int
    transactionHash:String
    transactionIndex:Int
    from :String
    to:String
    contractAddress:String
    cumulativeGasUsed:Int
    gasUsed:Float
    logs:[String]


}

type  RootQuery {

    getBlockNumber : String!
    getBlock(numberBlock : String! ) : block! 
    getTransaction (transactionHash : String ):transaction
    getPendingTransactions :[transaction]
    getBlockTransactionCount(numberBlock : String!) : Int
    getTransactionFromBlock(numberBlock : String , transactionIndex:Int) :transaction
    getTransactionReceipt(transactionHash:String) :transactionReceipt
    getTransactionCount(address:String):Int
    getChainId:Int
    getNodeInfo:String
    getPeerCount:Int
    getId:Int

 }

 schema { 
     query :RootQuery
 }
 `) ; 

