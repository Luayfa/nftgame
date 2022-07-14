const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('DBZGame');
    
    const gameContract = await gameContractFactory.deploy(                        
      ["Goku", "Vegeta", "Piccolo"],       
      ["https://i.imgur.com/HfZKHG8.jpeg", 
      "https://i.imgur.com/PlzsNxZ.jpeg", 
      "https://i.imgur.com/93rtVIg.jpeg"],
      [100, 200, 300],                    
      [100, 50, 25],
      "Frieza",
      "https://i.imgur.com/PKza8nL.jpeg",
      10000,
      50
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();