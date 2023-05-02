import styled from 'styled-components'

const RateCircleStyled = styled('div')`
  padding: 1rem 2rem;
  border-radius: 100%;
  background: linear-gradient(180deg, var(--Light-royal-blue) 0%, var(--Light-slate-blue) 100%);
`
const RateNumber = styled('div')`
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const RateTotal = styled('span')`
  font-size: 0.9rem;
  font-weight: 400;
`

const RateCircle = () => {
  return (
    <RateCircleStyled>
      <RateNumber>
        76
        <RateTotal>of 100</RateTotal>
      </RateNumber>
    </RateCircleStyled>
  )
}

export { RateCircle }
