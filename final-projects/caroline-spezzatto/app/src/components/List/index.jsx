import React, { useState } from "react"
import { user as userMock } from "../../Mock"
import { 
  ContainerHeaderList,
  InputSearch,
  ButtonOrder,
  Container,  
  Image, 
  ContainerInfos,
  ContainerNew,
  ListWorkplace,
  ListNew, 
  ListFeatured,
  ListOpportunity,
  Infos,
  Technologys
} from './style'

export default function App() {  
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState(1)
  const [columOrder, setColumOrder] = useState('list.id')

  const handlerOrder = fieldName => {
    setOrder(-order)
    setColumOrder(fieldName)
  }

  const user = userMock.sort((a,b) => {
    return a[columOrder] > b[columOrder] ? -order : order
  })

  return (
    <> 
      <ContainerHeaderList>
        <InputSearch 
          placeholder='Search...' 
          onChange={ e => {setSearch(e.target.value)}} 
        />
        <ButtonOrder 
          onClick={ e => handlerOrder('opportunity')}
        >
          Order ⇅
        </ButtonOrder>
      </ContainerHeaderList>
      {user.filter((list) =>{
        if (search === "") {
          return list
        } else if (list.opportunity.toLowerCase().includes(search.toLowerCase())) {
          return list
        }
          return false
        }).map(list => 
          <Container>
            <Image src={ list.image } />   
            <ContainerInfos>
              <ContainerNew>
                <ListWorkplace>
                  { list.workplace }
                </ListWorkplace>
                <ListNew isNegative={list.new === 'NEW!'}>
                  { list.new }
                </ListNew>  
                <ListFeatured isNegative={list.featured === 'FEATURED'}>
                  { list.featured }
                </ListFeatured>
              </ContainerNew>
              <ListOpportunity>
                { list.opportunity } 
              </ListOpportunity>
              <Infos>
                { list.data } { list.contract } { list.local } 
              </Infos>
            </ContainerInfos>
            <Technologys>
              { list.technology }
            </Technologys>
          </Container>
        )
      }
    </>
  )
}