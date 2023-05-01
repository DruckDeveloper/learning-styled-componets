import styled from 'styled-components'
import { RateCircle } from '../rate-circle/RateCircle'

const ResultsStyled = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: center;
  background: linear-gradient(180deg, var(--Light-slate-blue) 0%, var(--Light-royal-blue) 80%, var(--Violet-blue) 100%);
  gap: 1rem;
  color: var(--White);

  @media (min-width: 56.25rem) {
    border-radius: 1.5rem;
  }
`

const ResultsTitle = styled('h1')`
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
`
const RateSubject = styled('h4')`
  font-weight: bold;
  font-size: 1.2rem;
`

const ResultsParagraph = styled('p')`
  max-width: 70%;
  padding: 0.8rem 0 1.6rem 0;
  font-size: 1rem;
  font-weight: 300;
`

const Results = () => {
  return (
    <ResultsStyled>
      <ResultsTitle>Your results</ResultsTitle>
      <RateCircle />
      <RateSubject>Great</RateSubject>
      <ResultsParagraph>You scored higher than 65% of the people who have taken these tests.</ResultsParagraph>
    </ResultsStyled>
  )
}

export { Results }
