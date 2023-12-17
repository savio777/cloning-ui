import { Home as HomeIcon, Search as SearchIcon, Library as LibraryIcon } from 'lucide-react'

export default function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6 overflow-y-auto">
      <nav className="space-y-5">
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-zinc-100">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
          <SearchIcon />
          Search
        </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
          <LibraryIcon />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
      </nav>
    </aside>
  )
}