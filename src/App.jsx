import styled from 'styled-components'
import { Summary } from './components/summary/Summary'
import { Results } from './components/results/Results'

const Container = styled('article')`
  display: grid;

  @media (min-width: 56.25rem) {
    grid-template-columns: repeat(2, 1fr);
    border: 0.0625rem solid hsl(231, 100%, 96%);
    max-width: 60rem;
  }
`

const App = () => {
  return (
    <Container>
      <Results />
      <Summary />
    </Container>
  )
}

export default App
