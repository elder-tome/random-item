import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Add from '../components/Add'

const Home: NextPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Head>
        <title>O que vai ser ?</title>
      </Head>
      <header className='fixed top-0 left-0 w-full flex justify-center p-12 z-10'>
        <h1>O que vai ser ?</h1>
      </header>
      <main className=''>
        <div className='flex flex-col'>
          <Image
            src='/img/no_list.svg'
            width={159}
            height={154}
          />
          <h2 className='mt-6 mb-3'>Nenhuma lista foi encontrada !</h2>
          <span className='text-center text-text-300'>
            Crie uma nova lista clicando no<br /> botão mais.
          </span>
        </div>
      </main>
      <Add />
    </div>
  )
}

export default Home
