import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 37.5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 37.5rem) {
    min-width: 25rem;
  }
  @media (max-width: 25rem) {
    min-width: 18.75rem;
  }
`

export const Title = styled.h4`
  font-size: 0.75rem;
  margin: 0 0.625rem;
`

export const BoxTheme = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`