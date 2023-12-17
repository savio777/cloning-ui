import { ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, Play as PlayIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center gap-4">
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeftIcon />
        </button>

        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRightIcon />
        </button>

      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-6 mt-4">
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
        <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            width={104}
            height={104}
          />
          <strong>Album</strong>
          <button className="shadow w-12 h-12 flex items-center justify-center pl-1 invisible group-hover:visible rounded-full bg-green-400 text-black ml-auto mr-8">
            <PlayIcon />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Sávio</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <a href="" className="bg-white/5 p-3 flex flex-col rounded-md hover:bg-white/10">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            className="w-full rounded"
            width={120}
            height={120}
          />

          <strong className="font-semibold">Daily Mix -</strong>
          <span className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </a>

        <a href="" className="bg-white/5 p-3 flex flex-col rounded-md hover:bg-white/10">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            className="w-full rounded"
            width={120}
            height={120}
          />

          <strong className="font-semibold">Daily Mix -</strong>
          <span className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </a>

        <a href="" className="bg-white/5 p-3 flex flex-col rounded-md hover:bg-white/10">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            className="w-full rounded"
            width={120}
            height={120}
          />

          <strong className="font-semibold">Daily Mix -</strong>
          <span className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </a>

        <a href="" className="bg-white/5 p-3 flex flex-col rounded-md hover:bg-white/10">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            className="w-full rounded"
            width={120}
            height={120}
          />

          <strong className="font-semibold">Daily Mix -</strong>
          <span className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </a>

        <a href="" className="bg-white/5 p-3 flex flex-col rounded-md hover:bg-white/10">
          <Image
            src="https://images.unsplash.com/photo-1516916759473-600c07bc12d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="album cover"
            className="w-full rounded"
            width={120}
            height={120}
          />

          <strong className="font-semibold">Daily Mix -</strong>
          <span className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </a>
      </div>
    </main>
  )
}
