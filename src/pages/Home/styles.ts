import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AddButton = styled(Link)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: 60px;
  z-index: 9;
`

export { AddButton }