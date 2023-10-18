// add the game address here and update the contract name if necessary
const gameAddr = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr)
  
    const tx1 = await game.giveMeAllowance(11000)
    tx1.wait()
    const tx2 = await game.mint(11000)
    tx2.wait()

    const tx = await game.win()
  
    const receipt = await tx.wait()
    console.log(receipt)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })