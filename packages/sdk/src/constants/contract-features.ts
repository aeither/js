import {
  FEATURE_TOKEN,
  FEATURE_TOKEN_BATCH_MINTABLE,
  FEATURE_TOKEN_BURNABLE,
  FEATURE_TOKEN_DROPPABLE,
  FEATURE_TOKEN_MINTABLE,
  FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS,
  FEATURE_TOKEN_SIGNATURE_MINTABLE,
} from "./erc20-features";
import {
  FEATURE_NFT,
  FEATURE_NFT_BATCH_MINTABLE,
  FEATURE_NFT_BURNABLE,
  FEATURE_NFT_CLAIMABLE,
  FEATURE_NFT_LAZY_MINTABLE,
  FEATURE_NFT_ENUMERABLE,
  FEATURE_NFT_MINTABLE,
  FEATURE_NFT_REVEALABLE,
  FEATURE_NFT_SIGNATURE_MINTABLE,
  FEATURE_NFT_SUPPLY,
  FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS,
} from "./erc721-features";
import {
  FEATURE_EDITION,
  FEATURE_EDITION_BATCH_MINTABLE,
  FEATURE_EDITION_BURNABLE,
  FEATURE_EDITION_CLAIMABLE,
  FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS,
  FEATURE_EDITION_ENUMERABLE,
  FEATURE_EDITION_LAZY_MINTABLE,
  FEATURE_EDITION_MINTABLE,
  FEATURE_EDITION_REVEALABLE,
  FEATURE_EDITION_SIGNATURE_MINTABLE,
} from "./erc1155-features";
import {
  FEATURE_METADATA,
  FEATURE_PERMISSIONS,
  FEATURE_PLATFORM_FEE,
  FEATURE_PRIMARY_SALE,
  FEATURE_ROYALTY,
  FEATURE_APPURI,
} from "./thirdweb-features";

/**
 * @internal
 */
export type Feature =
  | typeof FEATURE_TOKEN
  | typeof FEATURE_TOKEN_MINTABLE
  | typeof FEATURE_TOKEN_BATCH_MINTABLE
  | typeof FEATURE_TOKEN_BURNABLE
  | typeof FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS
  | typeof FEATURE_TOKEN_SIGNATURE_MINTABLE
  | typeof FEATURE_NFT
  | typeof FEATURE_NFT_SUPPLY
  | typeof FEATURE_NFT_ENUMERABLE
  | typeof FEATURE_NFT_MINTABLE
  | typeof FEATURE_NFT_BATCH_MINTABLE
  | typeof FEATURE_NFT_LAZY_MINTABLE
  | typeof FEATURE_NFT_CLAIMABLE
  | typeof FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS
  | typeof FEATURE_NFT_REVEALABLE
  | typeof FEATURE_NFT_SIGNATURE_MINTABLE
  | typeof FEATURE_NFT_BURNABLE
  | typeof FEATURE_EDITION
  | typeof FEATURE_EDITION_ENUMERABLE
  | typeof FEATURE_EDITION_MINTABLE
  | typeof FEATURE_EDITION_CLAIMABLE
  | typeof FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS
  | typeof FEATURE_EDITION_LAZY_MINTABLE
  | typeof FEATURE_EDITION_REVEALABLE
  | typeof FEATURE_EDITION_BATCH_MINTABLE
  | typeof FEATURE_EDITION_BURNABLE
  | typeof FEATURE_EDITION_SIGNATURE_MINTABLE
  | typeof FEATURE_ROYALTY
  | typeof FEATURE_PLATFORM_FEE
  | typeof FEATURE_PRIMARY_SALE
  | typeof FEATURE_PERMISSIONS
  | typeof FEATURE_METADATA
  | typeof FEATURE_APPURI;

/**
 * @internal
 */
export type FeatureName = Feature["name"];
/**
 * @internal
 */
export type FeatureWithEnabled = Feature & {
  features: Record<string, FeatureWithEnabled>;
  enabled: boolean;
};

/**
 * @internal
 */
export const SUPPORTED_FEATURES: Record<string, Feature> = {
  [FEATURE_TOKEN.name]: FEATURE_TOKEN,
  [FEATURE_NFT.name]: FEATURE_NFT,
  [FEATURE_EDITION.name]: FEATURE_EDITION,
  [FEATURE_ROYALTY.name]: FEATURE_ROYALTY,
  [FEATURE_PLATFORM_FEE.name]: FEATURE_PLATFORM_FEE,
  [FEATURE_PRIMARY_SALE.name]: FEATURE_PRIMARY_SALE,
  [FEATURE_PERMISSIONS.name]: FEATURE_PERMISSIONS,
  [FEATURE_METADATA.name]: FEATURE_METADATA,
  [FEATURE_APPURI.name]: FEATURE_APPURI,
};
