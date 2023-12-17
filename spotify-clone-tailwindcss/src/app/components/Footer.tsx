import Image from "next/image";
import { Shuffle as ShuffleIcon, SkipBack as SkipBackIcon, Play as PlayIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Mic2 as Mic2Icon, LayoutList as LayoutListIcon, Laptop2 as Laptop2Icon, Volume as VolumeIcon, Maximize2 as Maximize2Icon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 h-[80px] flex items-center justify-between">
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
        <div className="flex items-center gap-6 text-zinc-200">
          <ShuffleIcon size={20} />

          <SkipBackIcon size={20} />

          <button className="shadow w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <PlayIcon />
          </button>

          <SkipForwardIcon size={20} />
          <RepeatIcon size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:20</span>

          <div className="h1 rounded-full w-96 bg-zinc-600" >
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>

          <span className="text-xs text-zinc-400">3:20</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2Icon size={20} />
        <LayoutListIcon size={20} />
        <Laptop2Icon size={20} />

        <div className="flex items-center gap-2">
          <VolumeIcon size={20} />

          <div className="h1 rounded-full w-24 bg-zinc-600" >
            <div className="bg-zinc-200 w-10 h-1 rounded-full" />
          </div>
        </div>

        <Maximize2Icon size={18} />
      </div>
    </footer>
  )
}