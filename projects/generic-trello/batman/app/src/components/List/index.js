import React from 'react'
import { Container } from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>   
      <header className='header--card'>
        <h2 className='title--card'>{data.title}</h2>
        {data.creatable && (
          <button className='button--add' type='button'>
            <MdAdd size={24} color='#fff' /> 
          </button>
        )}
      </header>

      <ul className='ul--list'>
        {data.cards.map((card, index) => (
        <Card 
          key={card.id} 
          listIndex={listIndex}
          index={index} 
          data={card}
        /> 
        ))}
      </ul>
    </Container>
  )
}