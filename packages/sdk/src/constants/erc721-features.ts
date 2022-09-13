import IBurnableERC721Abi from "@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json";
import IClaimableERC721 from "@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json";
import DelayedRevealAbi from "@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json";
import IDropSinglePhase from "@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json";
import Erc721Abi from "@thirdweb-dev/contracts-js/dist/abis/IERC721.json";
import Erc721EnumerableAbi from "@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json";
import Erc721SupplyAbi from "@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json";
import ILazyMintAbi from "@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json";
import IMintableERC721Abi from "@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json";
import MulticallAbi from "@thirdweb-dev/contracts-js/dist/abis/IMulticall.json";
import SignatureMintERC721Abi from "@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json";

export const FEATURE_NFT_BURNABLE = {
  name: "ERC721Burnable",
  namespace: "nft.burn",
  docLinks: {
    sdk: "sdk.erc721burnable",
    contracts: "IBurnableERC721",
  },
  abis: [Erc721Abi, IBurnableERC721Abi],
  features: {},
} as const;

export const FEATURE_NFT_REVEALABLE = {
  name: "ERC721Revealable",
  namespace: "nft.drop.revealer",
  docLinks: {
    sdk: "sdk.drop.delayedreveal",
    contracts: "DelayedReveal",
  },
  abis: [Erc721Abi, ILazyMintAbi, DelayedRevealAbi],
  features: {},
} as const;

export const FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS = {
  name: "ERC721ClaimableWithConditions",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "DropSinglePhase",
  },
  abis: [Erc721Abi, ILazyMintAbi, IDropSinglePhase],
  features: {},
} as const;

export const FEATURE_NFT_CLAIMABLE = {
  name: "ERC721Claimable",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "IClaimableERC721",
  },
  abis: [Erc721Abi, ILazyMintAbi, IClaimableERC721],
  features: {},
} as const;

export const FEATURE_NFT_LAZY_MINTABLE = {
  name: "ERC721LazyMintable",
  namespace: "nft.drop",
  docLinks: {
    sdk: "sdk.erc721lazymintable",
    contracts: "LazyMint",
  },
  abis: [Erc721Abi, ILazyMintAbi],
  features: {
    [FEATURE_NFT_REVEALABLE.name]: FEATURE_NFT_REVEALABLE,
    [FEATURE_NFT_CLAIMABLE.name]: FEATURE_NFT_CLAIMABLE,
    [FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS.name]:
      FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS,
  },
} as const;

export const FEATURE_NFT_BATCH_MINTABLE = {
  name: "ERC721BatchMintable",
  namespace: "nft.mint.batch",
  docLinks: {
    sdk: "sdk.erc721batchmintable",
    contracts: "IMulticall",
  },
  abis: [Erc721Abi, IMintableERC721Abi, MulticallAbi],
  features: {},
} as const;

export const FEATURE_NFT_MINTABLE = {
  name: "ERC721Mintable",
  namespace: "nft.mint",
  docLinks: {
    sdk: "sdk.erc721mintable",
    contracts: "IMintableERC721",
  },
  abis: [Erc721Abi, IMintableERC721Abi],
  features: {
    [FEATURE_NFT_BATCH_MINTABLE.name]: FEATURE_NFT_BATCH_MINTABLE,
  },
} as const;

export const FEATURE_NFT_SIGNATURE_MINTABLE = {
  name: "ERC721SignatureMint",
  namespace: "nft.signature",
  docLinks: {
    sdk: "sdk.erc721signaturemint",
    contracts: "ISignatureMintERC721",
  },
  abis: [Erc721Abi, SignatureMintERC721Abi],
  features: {},
} as const;

export const FEATURE_NFT_ENUMERABLE = {
  name: "ERC721Enumerable",
  namespace: "nft.query.owned",
  docLinks: {
    sdk: "sdk.erc721enumerable",
    contracts: "IERC721Enumerable",
  },
  abis: [Erc721Abi, Erc721EnumerableAbi],
  features: {},
} as const;

export const FEATURE_NFT_SUPPLY = {
  name: "ERC721Supply",
  namespace: "nft.query",
  docLinks: {
    sdk: "sdk.erc721supply",
    contracts: "IERC721Supply",
  },
  abis: [Erc721Abi, Erc721SupplyAbi],
  features: {
    [FEATURE_NFT_ENUMERABLE.name]: FEATURE_NFT_ENUMERABLE,
  },
} as const;

export const FEATURE_NFT = {
  name: "ERC721",
  namespace: "nft",
  docLinks: {
    sdk: "sdk.erc721",
    contracts: "IERC721",
  },
  abis: [Erc721Abi],
  features: {
    [FEATURE_NFT_BURNABLE.name]: FEATURE_NFT_BURNABLE,
    [FEATURE_NFT_SUPPLY.name]: FEATURE_NFT_SUPPLY,
    [FEATURE_NFT_MINTABLE.name]: FEATURE_NFT_MINTABLE,
    [FEATURE_NFT_LAZY_MINTABLE.name]: FEATURE_NFT_LAZY_MINTABLE,
    [FEATURE_NFT_SIGNATURE_MINTABLE.name]: FEATURE_NFT_SIGNATURE_MINTABLE,
  },
} as const;
