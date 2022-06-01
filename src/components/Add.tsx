import { Popover, Transition } from '@headlessui/react'
import type { NextPage } from 'next'
import { Plus } from "phosphor-react"
import { Fragment } from 'react'
import AddForm from './AddForm'

const Add: NextPage = () => {
  return (
    <Popover className='fixed bottom-12 right-12 flex flex-col items-end'>
      <Popover.Overlay className='fixed inset-0 bg-surface-background/90 backdrop-blur-sm' />
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform translate-x-10 opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-10 opacity-0"
      >
        <Popover.Panel>
          <AddForm />
        </Popover.Panel>
      </Transition>
      <Popover.Button
        className='bg-main-primary-500 p-3 rounded-full hover:bg-main-primary-300 hover:scale-110 focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear z-10'
        title='Adicionar uma nova lista'
      >
        <Plus className='w-[1.5rem] h-[1.5rem]' />
      </Popover.Button>
    </Popover>
  )
}

export default Add
