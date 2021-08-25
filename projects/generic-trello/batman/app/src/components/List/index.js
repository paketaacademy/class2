import React from 'react'
import { Container , Header , Title , Button , Ul} from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'

export default function List({ data, index: listIndex }) {  
  return (
    <Container done={data.done}>   
      <Header>
        <Title>{data.title}</Title>
        {data.creatable && (
          <Button type='button'>
            <MdAdd size={24} color='#fff' /> 
          </Button>
        )}
      </Header>

      <Ul>
        {data.cards.map((card, index) => (
        <Card 
          key={card.id} 
          listIndex={listIndex}
          index={index} 
          data={card}
        /> 
        ))}
      </Ul>
    </Container>
  )
}