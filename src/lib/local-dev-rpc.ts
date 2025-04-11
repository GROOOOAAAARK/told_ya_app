import { jsonRpcProvider } from "@starknet-react/core";

function localDevRpc() {
    return {
        nodeUrl: `http://localhost:5050`
    }
}

export const localDevProvider = jsonRpcProvider({rpc: localDevRpc});
