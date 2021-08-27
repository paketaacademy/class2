import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import CreateIcon from '@material-ui/icons/Create';

export const ContainerTitle = styled.div`
  ${({ theme }) => `    
    width: 100%;
    background: #77a7ef;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    padding: 0.313rem 0;
    @media (max-width: 46.875rem) {
      flex-direction: column;
      padding: 0.313rem;
    }
  `
  }`

export const Details = styled.div`
  ${({ theme }) => `
    color: #000;
    font-size: 1.125rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    margin: 0 4.375rem;
    
    align-items: center;
    @media (max-width: 37.5rem) {
      flex-direction: column;
      margin: 0.313rem;      
    }
  `
  }`

export const DetailsBtn = styled.div`
  margin: 0.188rem;
  @media (max-width: 37.5rem) {   
    margin: 0.008rem;      
  }
`

export const boxButton = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: row;
  `
  }`

export const BoxModal = styled(Modal)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
  `
  }`

export const BoxModalMember = styled(Modal)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    `
  }`

export const BoxModalOn = styled.div`
  ${({ theme }) => `
    background: #fff;
    border: 0.125rem solid #000;
    box-shadow: 0.625ren 0.625rem 0.625rem #7c7c7c;
    padding: 0.625rem;
    min-width: 18.75rem;
    max-height: 18.75rem;
    overflow: auto;
  `
  }`

export const UserItem = styled(ListItem)`
  ${({ theme }) => `
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
  `
  }`

export const ContainerList = styled(List)`
  ${({ theme }) => `
  width: 100%;
  max-width: 22.5rem;
  background: #fff;
  `
  }`

export const AvatarMembers = styled.div`
  ${({ theme }) => `
    cursor: pointer;
  `
  }`

export const FixedBtn = styled.div`
  ${({ theme }) => `
  position: fixed;
  z-index: 1;
  `
  }`

export const ListMembers = styled.div`
  ${({ theme }) => `
  margin-top: 2.5rem;
  `
  }`

export const ButtonEstyled = styled(Button)`
  ${({ theme }) => `
    max-width: 6.25rem;
  `
  }`

export const ButtonEdit = styled(Button)`
  ${({ theme }) => `
    width: 0.625rem;
    margin-left: 0.625rem;
  `
  }`


  export const ModalBox = styled(Modal)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
  `
  }`

export const PaperBox = styled.div`
  ${({ theme }) => `    
    background-color: #fff;
    border: 0.125rem solid #000;
    box-shadow: 0.625rem 0.313rem 0.313rem #a8a1a1;   
    display: flex;
    flex-direction: column;
    padding: 0.938rem;
  `
  }`

export const BoxDetails = styled.div`
  ${({ theme }) => `    
    margin: 0.625rem;
    display: flex;
    justify-content: space-around;
  `
  }`

export const EditPencil = styled(CreateIcon)`
  ${({ theme }) => `    
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
    
  `
  }`
  