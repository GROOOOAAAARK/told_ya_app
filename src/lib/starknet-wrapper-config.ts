import { argent, braavos, UseInjectedConnectorsProps } from "@starknet-react/core";

export const StarknetWrapperConfig: UseInjectedConnectorsProps = {
  // Show these connectors if the user has no connector installed.
  recommended: [
    argent(),
    braavos(),
  ],
  // Hide recommended connectors if the user has any connector installed.
  includeRecommended: "always",
  // Randomize the order of the connectors.
  order: "random"
};