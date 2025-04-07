import { WalletButton } from "@/components/wallet-buttons"

export default function Header() {
  return (
    <header className="bg-[#0a2342] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Told Ya
              <span className="text-[#FA3039]">.</span>
            </h1>
            <p className="text-sm md:text-base text-[#f5f3ee]/80 italic mt-1">tired of repeating this?</p>
          </div>
          <WalletButton />
        </div>
      </div>
    </header>
  )
}
