"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/headerMenu'
import Pagination from '@/components/Utilities/pagination'
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '../libs/api-libs'

const Page = () => {
  const [page, setPage] = useState(1  )
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    // const data = await response.json()
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  )
}

export default Page