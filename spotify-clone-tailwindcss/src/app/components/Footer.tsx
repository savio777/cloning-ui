import Image from "next/image";
import { Shuffle as ShuffleIcon, SkipBack as SkipBackIcon, Play as PlayIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 h-[80px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="album cover"
          className="rounded-md"
          width={48}
          height={48}
        />

        <div className="flex flex-col">
          <strong className="font-normal ">Title music</strong>
          <span className="text-xs text-zinc-400">Band</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 text-zinc-200">
          <ShuffleIcon />

          <SkipBackIcon />

          <button className="shadow w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <PlayIcon />
          </button>

          <SkipForwardIcon />
          <RepeatIcon />
        </div>
      </div>

      <div />
    </footer>
  )
}