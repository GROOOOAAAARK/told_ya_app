import type React from "react"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/GROOOAAAARK/told_ya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA3039] transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://voyager.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA3039] transition-colors"
          >
            <StarknetIcon className="h-6 w-6" />
            <span className="sr-only">Starknet Explorer</span>
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-[#f5f3ee]/60">
          © {new Date().getFullYear()} Told Ya. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function StarknetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6L7 9V15L12 18L17 15V9L12 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
