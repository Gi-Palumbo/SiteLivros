import Titulo from '@/components/titles.jsx'
import Image from 'next/image'
import CardFilme from '@/components/CardName'

export default function Home() {
  const filmes=[
    {
      titulo: "Fourth Wing" ,
      autor:"Rebecca Yarros",
      nota:4.66,
      poster:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666994927i/61431922.jpg"
    },
    {
      titulo: "Happy Place" ,
      autor:"Emily Henry",
      nota:4.12,
      poster:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660145160i/61718053.jpg"
    },
    {
      titulo: "Yellow Face" ,
      autor:"R.F Kuang",
      nota:3.98,
      poster:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687082673i/59357120.jpg"
    },
    {
      titulo: "The Stolen Heir" ,
      autor:"Holly Black",
      nota:4.05,
      poster:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654625328i/61198133.jpg"
    },
    {
      titulo: "Hell Bent" ,
      autor:"Leigh Bardugo",
      nota:4.18,
      poster:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648744962i/34019110.jpg"
    }
  ]
 
  




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

    <section className="flex flex-wrap gap-10 ml-14 ">
    {filmes.map( filme => <CardFilme filme={filme}/>)}
    </section>


    <Titulo>Trending</Titulo>

    <Titulo texto="Best Books of 2023" />
    <Titulo texto="Trending" />

  </>
  )
}
