import styled from 'styled-components'
import { Summary } from './components/summary/Summary'
import { Results } from './components/results/Results'

const Container = styled('article')`
  display: grid;

  grid-template-areas:
    'item-1'
    'item-2';

  & :nth-child(1) {
    grid-area: item-1;
  }
  & :nth-child(2) {
    grid-area: item-2;
  }

  @media (min-width: 56.25rem) {
    grid-template-areas: 'item-1 item-2';
    border: 0.0625rem solid hsl(231, 100%, 96%);
    max-width: 62.5rem;
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
