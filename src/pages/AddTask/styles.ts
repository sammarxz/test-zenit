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

const RadioGroup = styled.div`
  display: flex;
  overflow: hidden;

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;

    &:checked + label {
      background-color: var(--color-cta);
      color: #fff;
      opacity: 1;
    }
  }

  & label {
    background-color: var(--color-border);
    border-radius: 4px;
    color: var(--color-gray);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    padding: 12px 24px;
    margin-right: 16px;
    opacity: .6;
    transition: all .3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`

const CalendarWrapper = styled(motion.div)`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  padding-top: 42px;
  border-radius: 16px 16px 0 0;
`

const CalendarOverlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.79);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
`

export { AddButton, RadioGroup, CalendarWrapper, CalendarOverlay }