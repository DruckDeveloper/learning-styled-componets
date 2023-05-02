import styled from 'styled-components'
import { SkillsList } from '../skills-list/SkillsList'

const SummaryContent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & button {
    padding: 1rem 0;
    margin: 2rem 0;
    width: 85%;
    border-radius: 2rem;
    border: none;
    color: var(--White);
    background-color: var(--Dark-gray-blue);
    transition: background 0.5s ease-in-out;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
`

const SummaryTitle = styled('h2')`
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1.5rem;
`

const Summary = () => {
  return (
    <SummaryContent>
      <SummaryTitle>Summary</SummaryTitle>
      <SkillsList />
      <button>Continue</button>
    </SummaryContent>
  )
}

export { Summary }
