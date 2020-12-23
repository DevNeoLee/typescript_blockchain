"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "232323232323", "", "hi", 121312323);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(createNewBlock('hello'), createNewBlock("bye"));
// class Human {
//     public name: string;
//     private age: number;
//     public gender: string;
//     constructor(name: string, age:number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// const lynn = new Human("Lynn", 18, "female");
// const person = {
//     name: "Justin",
//     age: 43,
//     gender: "male"
// }
// const sayHi = (person: Human): string => {
//     return (`Hello ${person.name}, and you are a ${person.gender}`);
// }
// console.log(sayHi(lynn))
// export {}; 
//# sourceMappingURL=index.js.map