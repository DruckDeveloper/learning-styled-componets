import styled from 'styled-components'
import { SkillItem } from './SkillItem'
import { ReactionIcon } from '../icons/ReactionIcon'
import { MemoryIcon } from '../icons/MemoryIcon'
import { VerbalIcon } from '../icons/VerbalIcon'
import { VisualIcon } from '../icons/VisualIcon'

const ListStyled = styled('ul')`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SkillsList = () => {
  return (
    <ListStyled>
      <SkillItem name='Reaction' score='80 / 100'>
        <ReactionIcon />
      </SkillItem>
      <SkillItem name='Memory' score='92 / 100'>
        <MemoryIcon />
      </SkillItem>
      <SkillItem name='Verbal' score='61 / 100'>
        <VerbalIcon />
      </SkillItem>
      <SkillItem name='Visual' score='72 / 100'>
        <VisualIcon />
      </SkillItem>
    </ListStyled>
  )
}

export { SkillsList }
