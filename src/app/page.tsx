import EventsFeed from "@/components/events-feed"
import Header from "@/components/header"
import PredictionsFeed from "@/components/predictions-feed"
import Footer from "@/components/footer"
import { mockEvents, mockPredictions } from "@/lib/mock-data"

import { useContract } from "@starknet-react/core"
import { abi } from "@/lib/const"

export default function Home() {
  const { contract } = useContract({
    abi,
    address: `0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        <EventsFeed events={mockEvents} contract={contract!} />
        <PredictionsFeed predictions={mockPredictions} contract={contract!} />
      </main>
      <Footer />
    </div>
  )
}
