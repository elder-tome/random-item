import { NextPage } from "next"
import { Check, Trash } from "phosphor-react"

type itemListProps = {
  title: string,
  description: string,
  placeholderText: string,
}

const LIST = [
  {
    name: 'Lucas'
  },
  {
    name: 'Felipe'
  },
  {
    name: 'Mateus'
  },
  {
    name: 'Marcos'
  },
]

const ItemList: NextPage<itemListProps> = ({ title, description, placeholderText }) => {
  return (
    <>
      <label className='text-xl mr-2 mb-2 leading-6'>{title}</label>
      <span className='text-xs text-text-300'>{description}</span>
      <div className='flex mt-2 mb-3 gap-3'>
        <input
          className='w-full block bg-surface-300 rounded px-4 py-3 placeholder:text-text-300 focus:ring-2 focus:ring-main-primary-100 focus:outline-none'
          type="text"
          placeholder={placeholderText}
        />
        <button
          className='bg-surface-300 rounded p-3 hover:bg-surface-100 focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 
        ease-linear'
          title='Adicionar item'
        >
          <Check className='w-[1.1875rem] h-[1.1875rem]' />
        </button>
      </div>
      <ol className='w-full h-44 bg-surface-300 rounded border-4 borde border-transparent pl-3 pr-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-surface-100 scrollbar-track-transparent'>
        {
          LIST.map(item => (
            <li className='flex justify-between items-center py-3 border-b-[0.0625rem] border-surface-100'>
              {item.name}
              <button
                className='p-1 rounded focus:ring-2 focus:ring-main-primary-100 focus:outline-none'
                title='Remover item'
              >
                <Trash className='w-[1.1875rem] h-[1.1875rem]' />
              </button>
            </li>
          ))
        }
      </ol>
    </>
  )
}

export default ItemList
