import { NFTCollection } from "../../src/solana";
import { sdk } from "./before-setup";
import { Keypair } from "@solana/web3.js";
import { expect } from "chai";

describe("NFTCollection", async () => {
  let collection: NFTCollection;
  let addr: string;

  before(async () => {
    addr = await sdk.deployer.createNftCollection({
      name: "Test Collection",
      description: "Test Description",
      symbol: "TC",
    });
    collection = await sdk.getNFTCollection(addr);
  });

  it("should mint an NFT", async () => {
    const mint = await collection.mint({
      name: "Test NFT",
      description: "Test Description",
    });
    const nft = await collection.get(mint);
    expect(nft.metadata.name).to.eq("Test NFT");
    expect(nft.owner).to.eq(sdk.wallet.getAddress());
    expect(nft.supply).to.eq(1);
  });

  it("should fetch NFTs", async () => {
    const all = await collection.getAll();
    expect(all.length).to.eq(1);
    expect(all[0].metadata.name).to.eq("Test NFT");
  });

  it("should fetch balance of NFTs", async () => {
    const all = await collection.getAll();
    const balance = await collection.balanceOf(
      sdk.wallet.getAddress() || "",
      all[0].metadata.id,
    );
    expect(balance).to.eq(1);
  });

  it("should transfer NFTs", async () => {
    const all = await collection.getAll();
    const wallet = Keypair.generate();
    await collection.transfer(
      wallet.publicKey.toBase58() || "",
      all[0].metadata.id,
    );
    const balance = await collection.balanceOf(
      wallet.publicKey.toBase58() || "",
      all[0].metadata.id,
    );
    expect(balance).to.eq(1);
    const balance2 = await collection.balanceOf(
      sdk.wallet.getAddress() || "",
      all[0].metadata.id,
    );
    expect(balance2).to.eq(0);
  });

  it("should mint additional supply", async () => {
    const mint = await collection.mint({
      name: "Test NFT",
      description: "Test Description",
    });
    const printed = await collection.mintAdditionalSupply(mint);
    let balance = await collection.balance(mint);
    expect(balance).to.equal(1);
    balance = await collection.balance(printed);
    expect(balance).to.equal(1);
  });

  it("test supply of", async () => {
    const mint = await collection.mint({
      name: "Test NFT",
      description: "Test Description",
    });

    const amount = 2;
    for (let i = 0; i < amount; i++) {
      await collection.mintAdditionalSupply(mint);
    }

    const supply = await collection.supplyOf(mint);
    expect(supply).to.equal(BigInt(amount + 1));
  });

  it("should burn nfts", async () => {
    const mint = await collection.mint({
      name: "Test NFT to burn",
      description: "Test Description",
    });
    const all = await collection.getAll();
    expect(all.length).to.eq(4);
    await collection.burn(mint);
    const all2 = await collection.getAll();
    expect(all2.length).to.eq(3);
  });
});
