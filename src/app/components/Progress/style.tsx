import styled from 'styled-components'

interface IProgressStyleProps {
   percent: number
}

export const Container = styled.div<IProgressStyleProps>`
   width: ${({ percent }) => String(percent) + '%'};
   background: #6c3;
   height: 2px;
   transition: all 0.2s ease;
`
