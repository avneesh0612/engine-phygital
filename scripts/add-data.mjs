import prisma from "./prisma.mjs";

const NFTs = [
  {
    name: "Blue Circle",
    description: "A blue circle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_circle.png",
    attributes: {
      shape: "circle",
      color: "blue",
      sides: "0",
    },
  },
  {
    name: "Green Circle",
    description: "A green circle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_circle.png",
    attributes: {
      shape: "circle",
      color: "green",
      sides: "0",
    },
  },
  {
    name: "Purple Circle",
    description: "A purple circle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_circle.png",
    attributes: {
      shape: "circle",
      color: "purple",
      sides: "0",
    },
  },
  {
    name: "Red Circle",
    description: "A red circle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_circle.png",
    attributes: {
      shape: "circle",
      color: "red",
      sides: "0",
    },
  },
  {
    name: "Yellow Circle",
    description: "A yellow circle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_circle.png",
    attributes: {
      shape: "circle",
      color: "yellow",
      sides: "0",
    },
  },
  {
    name: "Blue Hexagon",
    description: "A blue hexagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_hexagon.png",
    attributes: {
      shape: "hexagon",
      color: "blue",
      sides: "6",
    },
  },
  {
    name: "Green Hexagon",
    description: "A green hexagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_hexagon.png",
    attributes: {
      shape: "hexagon",
      color: "green",
      sides: "6",
    },
  },
  {
    name: "Purple Hexagon",
    description: "A purple hexagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_hexagon.png",
    attributes: {
      shape: "hexagon",
      color: "purple",
      sides: "6",
    },
  },
  {
    name: "Red Hexagon",
    description: "A red hexagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_hexagon.png",
    attributes: {
      shape: "hexagon",
      color: "red",
      sides: "6",
    },
  },
  {
    name: "Yellow Hexagon",
    description: "A yellow hexagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_hexagon.png",
    attributes: {
      shape: "hexagon",
      color: "yellow",
      sides: "6",
    },
  },
  {
    name: "Blue Pentagon",
    description: "A blue pentagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_pentagon.png",
    attributes: {
      shape: "pentagon",
      color: "blue",
      sides: "5",
    },
  },
  {
    name: "Green Pentagon",
    description: "A green pentagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_pentagon.png",
    attributes: {
      shape: "pentagon",
      color: "green",
      sides: "5",
    },
  },
  {
    name: "Purple Pentagon",
    description: "A purple pentagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_pentagon.png",
    attributes: {
      shape: "pentagon",
      color: "purple",
      sides: "5",
    },
  },
  {
    name: "Red Pentagon",
    description: "A red pentagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_pentagon.png",
    attributes: {
      shape: "pentagon",
      color: "red",
      sides: "5",
    },
  },
  {
    name: "Yellow Pentagon",
    description: "A yellow pentagon NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_pentagon.png",
    attributes: {
      shape: "pentagon",
      color: "yellow",
      sides: "5",
    },
  },
  {
    name: "Blue Square",
    description: "A blue square NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_square.png",
    attributes: {
      shape: "square",
      color: "blue",
      sides: "4",
    },
  },
  {
    name: "Green Square",
    description: "A green square NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_square.png",
    attributes: {
      shape: "square",
      color: "green",
      sides: "4",
    },
  },
  {
    name: "Purple Square",
    description: "A purple square NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_square.png",
    attributes: {
      shape: "square",
      color: "purple",
      sides: "4",
    },
  },
  {
    name: "Red Square",
    description: "A red square NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_square.png",
    attributes: {
      shape: "square",
      color: "red",
      sides: "4",
    },
  },
  {
    name: "Yellow Square",
    description: "A yellow square NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_square.png",
    attributes: {
      shape: "square",
      color: "yellow",
      sides: "4",
    },
  },
  {
    name: "Blue Star",
    description: "A blue star NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_star.png",
    attributes: {
      shape: "star",
      color: "blue",
      sides: "10",
    },
  },
  {
    name: "Green Star",
    description: "A green star NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_star.png",
    attributes: {
      shape: "star",
      color: "green",
      sides: "10",
    },
  },
  {
    name: "Purple Star",
    description: "A purple star NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_star.png",
    attributes: {
      shape: "star",
      color: "purple",
      sides: "10",
    },
  },
  {
    name: "Red Star",
    description: "A red star NFT from the Shapes Collection",
    image: "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_star.png",
    attributes: {
      shape: "star",
      color: "red",
      sides: "10",
    },
  },
  {
    name: "Yellow Star",
    description: "A yellow star NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_star.png",
    attributes: {
      shape: "star",
      color: "yellow",
      sides: "10",
    },
  },
  {
    name: "Blue Triangle",
    description: "A blue triangle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/blue_triangle.png",
    attributes: {
      shape: "triangle",
      color: "blue",
      sides: "3",
    },
  },
  {
    name: "Green Triangle",
    description: "A green triangle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/green_triangle.png",
    attributes: {
      shape: "triangle",
      color: "green",
      sides: "3",
    },
  },
  {
    name: "Purple Triangle",
    description: "A purple triangle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/purple_triangle.png",
    attributes: {
      shape: "triangle",
      color: "purple",
      sides: "3",
    },
  },
  {
    name: "Red Triangle",
    description: "A red triangle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/red_triangle.png",
    attributes: {
      shape: "triangle",
      color: "red",
      sides: "3",
    },
  },
  {
    name: "Yellow Triangle",
    description: "A yellow triangle NFT from the Shapes Collection",
    image:
      "ipfs://QmPL8z4axPydaRK9wq3Pso2z5gfnDVcgTjf6yx88v3amr2/yellow_triangle.png",
    attributes: {
      shape: "triangle",
      color: "yellow",
      sides: "3",
    },
  },
];

const main = async () => {
  try {
    await prisma.nFT.createMany({
      data: NFTs.map((nft) => ({
        ...nft,
        minted: false,
      })),
    });

    console.log("NFTs added to DB");
  } catch (e) {
    console.error("Error details:", e);
    console.error("Error name:", e.name);
    console.error("Error message:", e.message);
    if (e.code) console.error("Error code:", e.code);
  }
};

main();
