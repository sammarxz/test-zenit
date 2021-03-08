import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import { Layout, Input, TextArea, Calendar } from "../../components"

import { AddButton, RadioGroup, CalendarWrapper, CalendarOverlay } from './styles'

function AddTask() {
  const transition = {
    duration: 0.4,
    ease: [0.6, 0.1, -0.05, 0.9]
  }

  const [isOpen, openToggle] = useCycle(false, true)

  const variants = {
    open: {
      y: 0,
    },
    closed: {
      y: "100%",
    }
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
          <h1 className="mb--32">New Task</h1>
          <div className="mb--24">
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
          <div className="mb--24">
            <h3 className="fs--small c--light-gray mt--16 mb--8">Category</h3>
            <RadioGroup className="mb--16">
              <input type="radio" id="work" name="category" />
              <label htmlFor="work">Work</label>
              <input type="radio" id="house" name="category" />
              <label htmlFor="house">House</label>
              <input type="radio" id="family" name="category" />
              <label htmlFor="family">Family</label>
            </RadioGroup>
          </div>
          <label htmlFor="date" className="d--block c--light-gray fs--small mb--8 fw--bold">Remind me on a date</label>
          <Input
            name="date"
            type="text"
            isDate
            placeholder="Select an Date"
            click={() => openToggle()}
            className="w--100 br--8 border fs--small p--16"
          />
          <CalendarOverlay 
            animate={isOpen ? {
              opacity: 1, 
              display: 'block',
              visibility: 'visible',  
            } : {
              opacity: 0,
              display: "none"
            }}
            initial={{ opacity: 0 }}
            transition={transition}
            onClick={() => openToggle()} 
          />
          <CalendarWrapper 
            variants={variants} 
            initial={{ y: "100%" }}
            transition={transition}
            animate={isOpen ? "open" : "closed"}
          >
            <div className="container">
              <Calendar  />
              <motion.button 
                className="btn p--16 br--12 bg--cta c--white is--primary mt--32 mb--32" 
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
                  Select a date
                </motion.span>
              </motion.button>
            </div>
          </CalendarWrapper>
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
