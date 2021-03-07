import React from "react"
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import { Layout, Input, TextArea } from "../../components"

import { AddButton } from './styles'

function AddTask() {
  const transition = {
    duration: 0.4,
    ease: [0.6, 0.1, -0.05, 0.9]
  }

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={transition}
      >
        <div className="container mt--72">
          <NavLink to="/" className="c--black">
            <BiChevronLeft size="1.8rem" />
          </NavLink>
          <h1 className="mb--16">New Task</h1>
          <Input 
            name="title"
            type="text" 
            placeholder="Title"
            className="w--100 br--8 border fs--small p--16 mb--16"
          />
          <TextArea 
            name="note"
            placeholder="Write a note"
            className="w--100 br--8 border fs--small p--16"
          />
        </div>
      </motion.div>
      <AddButton 
        initial={{ 
          left: "auto", 
          width: "60px", 
        }}
        animate={{
          left: "32px",
          width: "auto",
          right: "32px",
          transition: {
            delay: 0.2,
            ...transition
          },
        }}
        exit={{
          left: "auto", 
          width: "60px", 
          transition: {
            delay: 0.2,
            ...transition
          },
        }}
      >
        <motion.button 
          className="btn h--100 br--12 bg--cta c--white is--icon is--primary" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          exit={{
            borderRadius: "32px",
            transition: {
              delay: .3,
              ...transition
            }
          }}
        >
          <motion.span
            initial={{ opacity: 0 }} 
            animate={{ 
              opacity: 1,
              transition: {
                delay: .3,
                ...transition
              }
            }}
            exit={{
              opacity: 0
            }}
          >
            Create Task
          </motion.span>
        </motion.button>
      </AddButton>
    </Layout>
  );
}

export { AddTask };
