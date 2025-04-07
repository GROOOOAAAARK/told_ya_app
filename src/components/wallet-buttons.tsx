"use client"

import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { useState } from "react"

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")

  const handleConnect = async () => {
    try {
      // This is a stub for Starknet wallet connection
      // In a real implementation, we would use starknet.js to connect
      console.log("Connecting to Starknet wallet...")

      // Mock successful connection
      setIsConnected(true)
      setAddress("0x1234...5678")
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress("")
  }

  return (
    <Button
      onClick={isConnected ? handleDisconnect : handleConnect}
      variant={isConnected ? "outline" : "default"}
      className={
        isConnected ? "bg-[#f5f3ee] text-[#0a2342] hover:bg-[#f5f3ee]/90" : "bg-[#FA3039] hover:bg-[#FA3039]/90"
      }
    >
      <Wallet className="mr-2 h-4 w-4" />
      {isConnected ? address : "Connect Wallet"}
    </Button>
  )
}
