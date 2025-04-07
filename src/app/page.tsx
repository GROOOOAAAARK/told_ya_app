import EventsFeed from "@/components/events-feed"
import Header from "@/components/header"
import PredictionsFeed from "@/components/predictions-feed"
import Footer from "@/components/footer"
import { mockEvents, mockPredictions } from "@/lib/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        <EventsFeed events={mockEvents} />
        <PredictionsFeed predictions={mockPredictions} />
      </main>
      <Footer />
    </div>
  )
}
