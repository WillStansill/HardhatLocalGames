// add the game address here and update the contract name if necessary
const gameAddr = "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr)
  
    // do whatever you need to do to win the game here:
    const tx = await game.win(56)
  
    const receipt = await tx.wait()
    console.log(receipt)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })