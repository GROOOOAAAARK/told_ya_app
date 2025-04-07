import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { truncateAddress } from "@/lib/utils"
import { Tag, TrendingUp } from "lucide-react"
import type { Prediction } from "@/lib/types"

interface PredictionsFeedProps {
  predictions: Prediction[]
}

export default function PredictionsFeed({ predictions }: PredictionsFeedProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Latest Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {predictions.map((prediction) => (
          <Card
            key={`${prediction.username}-${prediction.event_id}`}
            className="border-none shadow-md hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#0a2342] flex items-center gap-2">
                <span className="bg-[#0a2342] text-white px-2 py-1 rounded text-xs">
                  {truncateAddress(prediction.username)}
                </span>
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-[#0a2342]/70">
                <Tag className="h-4 w-4" />
                <span>Event ID: {prediction.event_id}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-[#FA3039]">
                <TrendingUp className="h-4 w-4" />
                <span>{prediction.sells} sells</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
