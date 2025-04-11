import { Chain } from "@starknet-react/chains";

export const localChain: Chain = {
    id: BigInt(11008330032),
    name: "Local",
    rpcUrls: {
        default: {
            http: ["http://localhost:5050"],
        },
        public: {
            http: ["http://localhost:5050"],
        },
    },
    nativeCurrency: {
        name: "Starknet",
        symbol: "STRK",
        decimals: 18,
        address: `0x${process.env.NEXT_PUBLIC_STRK_FEE_CONTRACT_ADDRESS}`, // TODO: move to config
    },
    network: "local",
};
