import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
border-radius: 25px;
box-shadow: 2px 1px 8px rgba(7, 242, 78, 0.25);
`;
const Card = ({children, className}) => {
  return (
    <CardWrapper className={className}>{children}</CardWrapper>
  )
}

export default Card