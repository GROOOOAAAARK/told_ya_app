"use client";
import React from "react";

import { sepolia, mainnet } from "@starknet-react/chains";
import { localDevProvider } from '../lib/local-dev-rpc';
import { StarknetWrapperConfig } from "../lib/starknet-wrapper-config";
import {
  StarknetConfig,
  publicProvider,
  useInjectedConnectors,
  voyager
} from "@starknet-react/core";
import { localChain } from "../lib/local-chain";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors(StarknetWrapperConfig);

  return (
    <StarknetConfig
      chains={process.env.NEXT_PUBLIC_ENV === 'debug' ? [localChain] : [mainnet, sepolia]}
      provider={process.env.NEXT_PUBLIC_ENV === 'debug' ? localDevProvider : publicProvider()}
      connectors={connectors}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
