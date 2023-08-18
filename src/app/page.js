import Titulo from '@/components/titles'
import Image from 'next/image'

export default function Home() {
  return (
<>
    <nav className="bg-cyan-950 p-2 flex gap-10  items-end ">
      <h1 className= "text-2xl italic text-fuchsia-200 font-semibold">The Book Labyrinth</h1>

<ul>
  <li>
    <a className= " text-1xl text-fuchsia-100 font-normal border-d-4 hover:font-bold" href="#">Favorites</a>
  </li>
</ul>
    </nav>

    <Titulo>Best books of 2023</Titulo>
    <Titulo>Trending</Titulo>

    <Titulo texto="Best Books of 2023" />
    <Titulo texto="Trending" />
  </>
  )
}
