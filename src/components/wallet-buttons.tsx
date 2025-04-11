"use client"

import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { truncateAddress } from "@/lib/utils";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";


export function WalletButton() {
  const { connect, connectors } = useConnect({});
  const { disconnect } = useDisconnect();
  const { address, status } = useAccount();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({connectors: connectors as StarknetkitConnector[]});

  const handleConnect = async () => {

    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      console.log("No connector selected");
      return;
    }

    await connect({connector: connector as StarknetkitConnector});

  }

  const handleDisconnect = () => {
    disconnect();
  }

  return (
    <Button
      onClick={status === "connected" ? handleDisconnect : handleConnect}
      variant={status === 'connected' ? "outline" : "default"}
      className={
        status === 'connected' ? "bg-[#f5f3ee] text-[#0a2342] hover:bg-[#f5f3ee]/90" : "bg-[#FA3039] hover:bg-[#FA3039]/90"
      }

    >
      <Wallet className="mr-2 h-4 w-4" />
      {status === 'connected' && address ? truncateAddress(address) : "Connect Wallet"}
    </Button>
  )
}
