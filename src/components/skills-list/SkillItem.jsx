import styled from 'styled-components'

const ListItemStyled = styled('li')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  & div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`

const SkillName = styled('h4')`
  display: inline-block;
`

const SkillItem = ({ children, name, score }) => {
  return (
    <ListItemStyled>
      <div>
        {children}
        <SkillName>{name}</SkillName>
      </div>
      <span>{score}</span>
    </ListItemStyled>
  )
}

export { SkillItem }
