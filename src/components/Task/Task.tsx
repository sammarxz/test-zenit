import React, { useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'

import { Wrapper } from './wrapper'
import { Checkbox } from './checkbox'
import { Actions } from './actions'

interface TaskProps {
  completed?: boolean;
  title: string;
}

type Info = {
  offset: any,
  velocity: any
}

const Task: React.FC<TaskProps> = ({ title, completed }) => {
  const [checked, setChecked] = useState(completed)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const input = [-120, 0, 120]
  const output = [1, 0, 1]
  const opacity = useTransform(x, input, output)

  async function handleDragEnd(event:any, info:Info) {
    if (undefined !== info) {
      const offset = info.offset.x
      const velocity = info.velocity.x
  
      if (offset < -140 || velocity < -500) {
        await controls.start({
          x: "-110px",
        })
      } else {
        controls.start({
          x: 0,
          opacity: 1,
        })
      }
    }
  }

  return (
    <Wrapper>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        style={{
          x,
          width: "100%", 
          overflow: "hidden", 
          willChange: "transform",
          zIndex: 2 
        }}
        dragDirectionLock
        onDragEnd={handleDragEnd}
        animate={controls}
        className="p--relative bg--white pt--16 pb--16"
      >
        <Checkbox className="container">
          <input type="checkbox" checked={checked} />
          <label onClick={() => setChecked(!checked)}>
            <span></span>
            <ins>{title}</ins>
          </label>
        </Checkbox>
      </motion.div>
      <motion.div style={{ opacity }}>
        <Actions className="d--flex">
          <button className="edit bg--cta p--16 d--flex ai--center jc--space-between">
            <AiOutlineEdit size="1.4rem" className="c--white" />
          </button>
          <button className="delete bg--red p--16 d--flex ai--center jc--space-between">
            <AiOutlineDelete size="1.4rem" className="c--white" />
          </button>
        </Actions>
      </motion.div>
    </Wrapper>
  )
}

export { Task }