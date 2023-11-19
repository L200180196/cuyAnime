import { getAnimeResponse } from "@/app/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"

const Page = async ({params}) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    // const searchAnime = await response.json()

    const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

    // const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/1/news?page=1`)
    // const newAnime = await response2.json()
    // console.log(newAnime)

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodedKeyword}`} />
                <AnimeList api={searchAnime} />
            </section>
            <div></div>
        </>
  )
}

export default Page
