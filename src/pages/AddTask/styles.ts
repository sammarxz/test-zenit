import styled from 'styled-components'
import { motion } from 'framer-motion'

const AddButton = styled(motion.div)`
  position: fixed;
  bottom: 32px;
  left: 32px;
  right: 32px;
  width: auto;
  height: 60px;
  z-index: 9;
`

export { AddButton }