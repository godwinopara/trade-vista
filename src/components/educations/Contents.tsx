import React from 'react'

type Props = {
    desc:string
}

export const Contents = ({desc}: Props) => {
  return (
    <p className=" text-lg text-gray-500">{desc}</p>
  )
}