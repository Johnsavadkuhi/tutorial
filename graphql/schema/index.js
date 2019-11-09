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

type  RootQuery {
    getBlockNumber : String!
    getBlock(numberBlock : String! ) : block! 
 }

 schema { 
     query :RootQuery
 }
 `) ; 

