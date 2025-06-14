import { vi } from "vitest";
import { generateAssetResponseList } from "./helpers/generateMockAssetResponseList";
import { generateTokenAccountsResponseList } from "./helpers/generateMockTokenAccountResponse";

module.exports = {
  helius: {
    rpc: {
      getAssetsByOwner: vi.fn(() => generateAssetResponseList()),
      getTokenAccounts: vi.fn(() => generateTokenAccountsResponseList()),
      searchAssets: vi.fn(() => generateAssetResponseList()),
    },
  },
};
