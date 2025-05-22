import { jsonRpcProvider } from "@starknet-react/core";

function localDevRpc() {
    return {
        nodeUrl: `http://127.0.0.1:5050`,
        fetchOptions: {
            // mode: 'no-cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            }
        }
    }
}

export const localDevProvider = jsonRpcProvider({rpc: localDevRpc});
