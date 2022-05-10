const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let contentMultiplier3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedMultiplier3 = contentMultiplier3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedMultiplier3 = bumpedMultiplier3.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedMultiplier3);

const plonkVerifierRegex = /contract PlonkVerifier/

let contentMultiplier3_plonk = fs.readFileSync("./contracts/Multiplier3_plonkVerifier.sol", { encoding: 'utf-8' });
let bumpedMultiplier3_plonk = contentMultiplier3_plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedMultiplier3_plonk = bumpedMultiplier3_plonk.replace(plonkVerifierRegex, 'contract Multiplier3_plonkVerifier');

fs.writeFileSync("./contracts/Multiplier3_plonkVerifier.sol", bumpedMultiplier3_plonk);