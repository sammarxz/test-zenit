import React from 'react'
import { Moment } from 'moment'
import { motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import { MonthNavigation } from './styles'

interface HeadingProps {
  date: Moment;
  changeMonth: Function;
  resetDate: Function;
}

const Heading: React.FC<HeadingProps> = ({ 
  date, changeMonth, resetDate
}) => {
  return (
    <MonthNavigation className="d--flex ai--center jc--space-between mb--16">
      <h1 onClick={() => resetDate()}>
        <span className="mr--8">{date.format('MMM')}</span>
        <span>{date.format('YYYY')}</span>
      </h1>
      <div className="d--flex">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => changeMonth(date.month() - 1)}
          className="btn w--40 h--40 is--icon border br--8 mr--8"
        >
          <BiChevronLeft size="1.4rem" className="c--light-gray" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => changeMonth(date.month() + 1)}
          className="btn w--40 h--40 is--icon border br--8"
        >
          <BiChevronRight size="1.4rem" className="c--light-gray" />
        </motion.button>
      </div>
    </MonthNavigation>
  )
}

export { Heading }