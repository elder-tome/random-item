import { Popover } from '@headlessui/react'
import type { NextPage } from 'next'
import { X } from "phosphor-react"
import Button from './Button'
import ItemList from './ItemList'

const AddForm: NextPage = () => {
  return (
    <form className='bg-surface-500 w-[calc(100vw-6rem)] md:w-auto mb-4 rounded-xl'>
      <header className='flex justify-between p-6'>
        <h2>Nova lista</h2>
        <Popover.Button
          className='bg-surface-300 rounded p-3 hover:bg-surface-100 focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear'
          title='Fechar formulário'
        >
          <X className='w-[1.1875rem] h-[1.1875rem]' />
        </Popover.Button>
      </header>
      <main className='p-6'>
        <label className='text-xl mr-2 leading-6'>Título</label>
        <span className='text-xs text-text-300'>
          Insira um título para personalizar
        </span>
        <input
          className='w-full block bg-surface-300 rounded px-4 py-3 mt-2 mb-6 placeholder:text-text-300 focus:ring-2 focus:ring-main-primary-100 focus:outline-none'
          type="text"
          placeholder='Ex: Nomes de Pessoas'
        />
        <ItemList
          title='Item'
          description='Insira novos itens a sua lista'
          placeholderText='Ex: Marcos'
        />
      </main>
      <footer className='flex justify-between gap-3 p-6 border-t border-surface-100'>
        <Button type='primary'>Salvar lista</Button>
        <Button type='secondary'>Cancelar</Button>
      </footer>
    </form>
  )
}

export default AddForm
