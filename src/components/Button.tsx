import { Popover } from "@headlessui/react"
import { NextPage } from "next"

type buttonProps = {
  children: string,
  type: 'primary' | 'secondary' | 'delete',
}

const Button: NextPage<buttonProps> = ({ children, type }) => {
  return (
    <>
      {
        type === "primary" ?
          <button className='w-full bg-main-primary-500 p-4 rounded-lg hover:bg-main-primary-300 focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear'>
            {children}
          </button >
          :
          type === "secondary" ?
            <Popover.Button className='w-full border-2 border-main-primary-500 p-4 rounded-lg hover:bg-main-primary-300 hover:border-main-primary-300 focus:border-transparent focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear'>
              {children}
            </Popover.Button>
            :
            type === "delete" &&
            <button className='w-full border-2 border-main-delete p-4 rounded-lg hover:bg-main-delete focus:border-transparent focus:ring-2 focus:ring-main-primary-100 focus:outline-none transition-all duration-100 ease-linear'>
              {children}
            </button >
      }
    </>
  )
}

export default Button
