import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  // const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/1/news?page=1`)
  // const newAnime = await response2.json()
  // console.log(newAnime)

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
{/* 
      <section>
        <Header title="Terbaru" linkTitle="Lihat Semua Terbaru" linkHref="/new" />
        <AnimeList api={newAnime} />
      </section> */}
    </>
  )
}

export default Page
