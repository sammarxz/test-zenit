import React, { useState } from 'react'
import moment, { Moment } from 'moment'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import { Layout, Input, TextArea, Calendar } from "../../components"

import { AddButton, RadioGroup } from './styles'

function AddTask() {
  const transition = {
    duration: 0.4,
    ease: [0.6, 0.1, -0.05, 0.9]
  }

  const [date, setDate] = useState(moment())
  const [startDate, setStartDate] = useState<Moment | null>(moment().subtract(5, 'day'))
  const [endDate, setEndDate] = useState<Moment | null>(moment().add(3, 'day'))

  const onChangeDate = (newDate: any) => {
    let newStartDate = null
    let newEndDate = null

    if (startDate === null || newDate.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
      newStartDate = moment(newDate)
      newEndDate = moment(newDate)
    } else if (newDate.isSame(startDate, 'day') && newDate.isSame(endDate, 'day')) {
      newStartDate = null
      newEndDate = null
    } else if (newDate.isAfter(startDate, 'day')) {
      newEndDate = moment(newDate)
    }

    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  const onResetDate = () => {
    setDate(moment())
  }

  const onChangeMonth = (month:any) => {
    console.log('click')
    date.month(month)
    setDate(date)
    console.log(date.month())
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
          <h3 className="fs--small c--light-gray mt--16 mb--8">Category</h3>
          <RadioGroup className="mb--16">
            <input type="radio" id="work" name="category" />
            <label htmlFor="work">Work</label>
            <input type="radio" id="house" name="category" />
            <label htmlFor="house">House</label>
            <input type="radio" id="family" name="category" />
            <label htmlFor="family">Family</label>
          </RadioGroup>
          <label htmlFor="">Remind me on a date</label>
          <Calendar  />
          {null !== startDate && (
            <>{startDate.date}</>
          )}
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
