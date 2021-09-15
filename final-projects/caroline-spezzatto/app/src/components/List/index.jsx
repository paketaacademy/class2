import React, { useState } from "react"
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

let user = [
  {
    id: 1,
    image: 'https://logospng.org/download/amazon-web-services/logo-amazon-web-services-256.png',
    workplace: 'Amazon',
    new : 'NEW!' ,
    featured: 'FEATURED',
    opportunity: 'Senior Frontend Developer',
    data: '1d ago -',
    contract: 'Full Time -',
    local: 'USA only',
    technology: [
      'Frontend | ',
      'Senior | ',
      'Html | ',
      'Css | ',
      'JavaScript'
    ]
  },
  {
    id: 2,
    image: 'https://logospng.org/download/google/logo-google-256.png',
    workplace: 'Google',
    new: 'NEW!',
    featured: 'FEATURED',
    opportunity: 'Fullstack Developer',
    data: '1d ago -',
    contract: 'Part Time -',
    local: 'Remote',
    technology: [
      'FullStack | ',
      'Midweight | ',
      'Python | ',
      'React'
    ]
  },
  {
    id: 3,
    image: 'https://www.z3bank.com.br/wp-content/uploads/elo.png',
    workplace: 'Elo',
    new: 'NEW!',
    opportunity: 'Junior Backend Developer',
    data: '2d ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Backend | ',
      'Junior | ',
      'Ruby | ',
      'RoR'
    ]
  },
  {
    id: 4,
    image: 'https://cdn.wizard.com.br/wp-content/uploads/sites/372/2020/09/03171646/logo-natura-256.png',
    workplace: 'Natura',
    new: 'NEW!',
    opportunity: 'Software Engineer',
    data: '5d ago -',
    contract: 'Full Time -',
    local: 'Worldwide',
    technology: [
      'FullStack | ',
      'Midweight | ',
      'Javascript | ',
      'Sass | ',
      'Ruby'
    ]
  },
  {
    id: 5,
    image: 'https://logospng.org/download/ifood/logo-ifood-256.png',
    workplace: 'Ifood',
    opportunity: 'Junior Frontend Developer',
    data: '1w ago -',
    contract: 'Contract -',
    local: 'USA only',
    technology: [
      'Frontend | ',
      'Junior | ',
      'Css | ',
      'JavaScript'
    ]
  },
  {
    id: 6,
    image: 'https://logospng.org/download/youtube/logo-youtube-256.png',
    workplace: 'YouTube',
    opportunity: 'Systems Analyst',
    data: '1w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Java | ',
      'Mobile | ',
      'Node.js | ',
      'React'
    ]
  },
  {
    id: 7,
    image: 'https://marcas-logos.net/wp-content/uploads/2020/01/Facebook-Logo-1.png',
    workplace: 'Facebook',
    opportunity: 'Junior Frontend Developer',
    data: '1w ago -',
    contract: 'Part Time -',
    local: 'USA only',
    technology: [
      'Frontend | ',
      'Junior | ',
      'React | ',
      'Sass | ',
      'JavaScript'
    ]
  },
  {
    id: 8,
    image: 'https://logospng.org/download/spotify/logo-spotify-256.png',
    workplace: 'Spotify',
    opportunity: 'Architectural Analyst',
    data: '2w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Architectural | ',
      'SQL | ',
      'PL/SQL | ',
      'Oracle '
    ]
  },
  {
    id: 9,
    image: 'https://cdn.iconscout.com/icon/free/png-256/coca-cola-1863554-1579762.png',
    workplace: 'Coca-cola',
    opportunity: 'Support Analyst',
    data: '2w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Support | ',
      'SQL '
    ]
  },
  {
    id: 10,
    image: 'https://logospng.org/download/tim/logo-tim-antiga-256.png',
    workplace: 'TIM',
    opportunity: 'Quality Analyst',
    data: '2w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'JavaScript | ',
      'PL/SQL | ',
      'Oracle '
    ]
  },
  {
    id: 11,
    image: 'https://persone.com.br/wp-content/uploads/2020/11/logo-Uniasselvi.png',
    workplace: 'Uniasselvi',
    opportunity: 'Deployment Consultant',
    data: '2w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Consultant | ',
      'PL/SQL '
    ]
  },
  {
    id: 12,
    image: 'https://aideiadigital.com.br/wp-content/uploads/2019/11/Tipos-de-logos-iconografia-abstrata-300x300.png',
    workplace: 'Pepsi',
    opportunity: 'TI Assistant',
    data: '2w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Infrastructure | ',
      'Hardware | ',
      'Software '
    ]
  },
  {
    id: 13,
    image: 'https://logospng.org/download/casas-bahia/logo-casas-bahia-256.png',
    workplace: 'Casas Bahia',
    opportunity: 'Electronic Technician',
    data: '3w ago -',
    contract: 'Contract -',
    local: 'Remote',
    technology: [
      'Electronic | ',
      'Printer | ',
      'Projector '
    ]
  },
  {
    id: 14,
    image: 'https://cdn.wizard.com.br/wp-content/uploads/sites/372/2020/09/03171646/logo-natura-256.png',
    workplace: 'Natura',
    opportunity: 'Tech Leader',
    data: '3w ago -',
    contract: 'Full Time -',
    local: 'Worldwide',
    technology: [
      'Leader | ',
      'Php | ',
      'Java '
    ]
  },
  {
    id: 15,
    image: 'https://persone.com.br/wp-content/uploads/2020/11/logo-Uniasselvi.png',
    workplace: 'Uniasselvi',
    opportunity: 'Software Architect (ERP)',
    data: '3w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Architect | ',
      'ERP'
    ]
  },
  {
    id: 16,
    image: 'https://logospng.org/download/tim/logo-tim-antiga-256.png',
    workplace: 'TIM',
    opportunity: 'Scrum Master',
    data: '4w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'BDD | ',
      'TDD | ',
      'CI/CD '
    ]
  },
  {
    id: 17,
    image: 'https://logospng.org/download/amazon-web-services/logo-amazon-web-services-256.png',
    workplace: 'Amazon',
    opportunity: 'Mobile Developer',
    data: '4w ago -',
    contract: 'Full Time -',
    local: 'USA only',
    technology: [
      'Mobile | ',
      'React Native | ',
      'Node.js '
    ]
  },
  {
    id: 18,
    image: 'https://logospng.org/download/netflix/logo-netflix-256.png',
    workplace: 'Netflix',
    opportunity: 'Treinee',
    data: '4w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'Treinee | ',
      'Power BI '
    ]
  },
  {
    id: 19,
    image: 'https://logospng.org/download/google/logo-google-256.png',
    workplace: 'Google',
    opportunity: 'C# Senior Developer',
    data: '4w ago -',
    contract: 'Part Time -',
    local: 'Remote',
    technology: [
      'C# | ',
      'Senior | ',
      'React.js'
    ]
  },
  {
    id: 20,
    image: 'https://logospng.org/download/netflix/logo-netflix-256.png',
    workplace: 'Netflix',
    opportunity: 'Web Developer',
    data: '4w ago -',
    contract: 'Full Time -',
    local: 'Remote',
    technology: [
      'WEB | ',
      'CSS | ',
      'HTML'
    ]
  }
]

export default function App() {  
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState(1)
  const [columOrder, setColumOrder] = useState('list.id')

  const handlerOrder = fieldName => {
    setOrder(-order)
    setColumOrder(fieldName)
  }

  user = user.sort((a,b) => {
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