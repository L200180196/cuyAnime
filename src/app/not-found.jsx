"use client"
import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className='flex justify-center items-center flex-col'>
            <FileSearch size={32} className='text-color-accent' />
            <h3 className='text-color-accent text-2xl font-bold'>
                Not Found
            </h3>
            <Link href="/" className='text-color-primary hover:text-color-accent'>
                Kembali
            </Link>
        </div>
    </div>
  )
}

export default Page