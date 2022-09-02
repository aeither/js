import { IAppURI__factory } from "@thirdweb-dev/contracts-js";
import IThirdweAppURIAbi from "@thirdweb-dev/contracts-js/abis/IAppURI.json";
import IContractMetadataAbi from "@thirdweb-dev/contracts-js/abis/IContractMetadata.json";
import IPermissionsAbi from "@thirdweb-dev/contracts-js/abis/IPermissions.json";
import IThirdwebPlatformFeeAbi from "@thirdweb-dev/contracts-js/abis/IPlatformFee.json";
import IThirdwebPrimarySaleAbi from "@thirdweb-dev/contracts-js/abis/IPrimarySale.json";
import IThirdwebRoyaltyAbi from "@thirdweb-dev/contracts-js/abis/IRoyalty.json";
import IAppURI from "@thirdweb-dev/contracts-js/abis/IRoyalty.json";

export const FEATURE_ROYALTY = {
  name: "Royalty",
  namespace: "royalty",
  docLinks: {
    sdk: "sdk.contractroyalty",
    contracts: "Royalty",
  },
  abis: [IThirdwebRoyaltyAbi],
  features: {},
} as const;

export const FEATURE_PRIMARY_SALE = {
  name: "PrimarySale",
  namespace: "sales",
  docLinks: {
    sdk: "sdk.contractprimarysale",
    contracts: "PrimarySale",
  },
  abis: [IThirdwebPrimarySaleAbi],
  features: {},
} as const;

export const FEATURE_PLATFORM_FEE = {
  name: "PlatformFee",
  namespace: "platformFee",
  docLinks: {
    sdk: "sdk.platformfee",
    contracts: "PlatformFee",
  },
  abis: [IThirdwebPlatformFeeAbi],
  features: {},
} as const;

export const FEATURE_PERMISSIONS = {
  name: "Permissions",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "PermissionsEnumerable",
  },
  abis: [IPermissionsAbi],
  features: {},
} as const;

export const FEATURE_METADATA = {
  name: "ContractMetadata",
  namespace: "metadata",
  docLinks: {
    sdk: "sdk.contractmetadata",
    contracts: "ContractMetadata",
  },
  abis: [IContractMetadataAbi],
  features: {},
} as const;

export const FEATURE_APPURI = {
  name: "ContractAppURI",
  namespace: "appuri",
  docLinks: {
    sdk: "sdk.appuri",
    contracts: "AppURI",
  },
  abis: [IAppURI],
  features: {},
} as const;
