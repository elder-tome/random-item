import { NextPage } from "next"
import { DotsThreeVertical } from "phosphor-react"
import ItemList from "./ItemList"

type cardProps = {
  title: string,
  item?: Array<string>
}

const Card: NextPage<cardProps> = ({ title }) => {
  return (
    <div>
      <header className='flex justify-between p-6'>
        <h2>{title}</h2>
        <button
          className='bg-surface-300 rounded p-3 hover:bg-surface-100 focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear'
          title='Fechar formulário'
        >
          <DotsThreeVertical className='w-[1.1875rem] h-[1.1875rem]' />
        </button>
      </header>
      <main>
        <ItemList
          title='Itens'
          description='Adicione novos itens, exclua e edite'
          placeholderText='Novo Item'
        />
      </main>
    </div>
  )
}

export default Card