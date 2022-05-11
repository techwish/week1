const fs = require("fs");
const solidityRegex = /pragma solidity >=\d+\.\d+\.\d+ <\d+\.\d+\.\d+/

const verifierRegex = /contract PlonkVerifier/

// Multiplier3 with plonk
let content = fs.readFileSync("./contracts/Multiplier3pVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract Multiplier3pVerifier');

fs.writeFileSync("./contracts/Multiplier3pVerifier.sol", bumped);
