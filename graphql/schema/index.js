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
    blockHash :String
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
type proxiedDetailed {
    ProxiedBalance:String
    DepositProxiedBalance :String
    PendingRefundBalance:String
}
type balance {
    balance : String
    delegateBalance:String
    depositBalance:String
    depositProxiedBalance:String
    pendingRefundBalance:String
    proxiedBalance:String
    proxied_detail:proxiedDetailed
}

type  RootQuery {

    getBlockNumber : String!
    getBlock(numberBlock : String! ) : block! 
    getTransaction (transactionHash : String ):transaction
    getPendingTransactions :[transaction]
    getBlockTransactionCount(numberBlock : String!) : Int
    getTransactionFromBlock(numberBlock : String , transactionIndex:String) :transaction
    getTransactionReceipt(transactionHash:String) :transactionReceipt
    getTransactionCount(address:String):Int
    getChainId:Int
    getNodeInfo:String
    getPeerCount:Int
    getId:Int
    getBalance(address:String) : String
    getFullBalance(address:String , numberBlock : String , fullProxied:Boolean):balance 
    getStorageAt(address: String , index:Int):String
    getCode(address:String) : String

 }

 type RootMutation{
    sendRawTransaction(signedTransaction:String):String

 }

 schema { 
     query :RootQuery
     mutation:RootMutation 
 }
 `) ; 

