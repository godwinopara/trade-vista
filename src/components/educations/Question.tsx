import React from 'react'

type Props = {
    title:string
}

export const Question = ({title}: Props) => {
  return (
    <h1 className=' text-3xl xl:text-4xl font-bold tracking-wide leading-[120%] text-gray-600'>{title}</h1>
  )
}