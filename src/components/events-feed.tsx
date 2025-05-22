import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import { Clock, Users } from "lucide-react"
import type { Event } from "@/lib/types"
import { Abi } from "starknet"
import { StarknetTypedContract, useCall, useNetwork } from "@starknet-react/core"

interface EventsFeedProps {
  events: Event[]
  contract: StarknetTypedContract<Abi>
}

export default function EventsFeed({ events, contract }: EventsFeedProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Ongoing Events Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#0a2342]">{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-1 text-[#0a2342]/70">
                <Clock className="h-4 w-4" />
                <span>Deadline: {formatDate(event.deadline)}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-[#0a2342]/70">
                <Users className="h-4 w-4" />
                <span>{event.predictions} predictions</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
