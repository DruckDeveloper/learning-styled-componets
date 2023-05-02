import styled, { css } from 'styled-components'

const ListItemStyled = styled('li')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 1rem;
  ${({ type }) =>
    type === 'primary' &&
    css`
      background-color: var(--Light-red-opacity);

      & h4 {
        color: var(--Light-red);
      }
    `}
  ${({ type }) =>
    type === 'secondary' &&
    css`
      background-color: var(--Orange-yellow-opacity);

      & h4 {
        color: var(--Orangey-yellow);
      }
    `}
  ${({ type }) =>
    type === 'tertiary' &&
    css`
      background-color: var(--Green-teal-opacity);

      & h4 {
        color: var(--Green-teal);
      }
    `}
  ${({ type }) =>
    type === 'quaternary' &&
    css`
      background-color: var(--Cobalt-blue-opacity);

      & h4 {
        color: var(--Cobalt-blue);
      }
    `}
  border-radius: 3rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`

const SkillName = styled('h4')`
  display: inline-block;
`

const SkillItem = ({ children, name, score, type }) => {
  return (
    <ListItemStyled type={type}>
      <div>
        {children}
        <SkillName>{name}</SkillName>
      </div>
      <span>{score}</span>
    </ListItemStyled>
  )
}

export { SkillItem }
