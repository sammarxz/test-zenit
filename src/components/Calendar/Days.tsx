import React from 'react'
import moment from 'moment'

import { Day } from './Day'

import { DaysWrapper } from './styles'

interface DaysProps {
  date: any;
  startDate: any;
  endDate: any;
  onClick: Function;
}

const Days: React.FC<DaysProps> = ({
  date, startDate, endDate, onClick
}) => {
  const thisDate = moment(date)
  const daysInMonth = moment(date).daysInMonth()
  const firstDayDate = moment(date).startOf('month')
  const previousMonth = moment(date).subtract(1, 'month')
  const previousMonthDays = previousMonth.daysInMonth()
  const nextsMonth = moment(date).add(1, 'month')

  let days = []
  let labels = []

  for (let i = 1; i <= 7; i++) {
    labels.push(
      <span className="label">
        {moment().day(i).format('ddd')}
      </span>
    )
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day 
        key={moment(previousMonth).format('DD MM YYYY')} 
        onClick={(date:any) => onClick(date)} 
        currentDate={date} 
        date={moment(previousMonth)} 
        startDate={startDate} 
        endDate={endDate}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day 
        key={moment(thisDate).format('DD MM YYYY')} 
        onClick={(date:any) => onClick(date)} 
        currentDate={date} 
        date={moment(thisDate)} 
        startDate={startDate} 
        endDate={endDate}
      />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= (42 - daysCount); i++) {
    nextsMonth.date(i);
    days.push(
      <Day 
        key={moment(nextsMonth).format('DD MM YYYY')} 
        onClick={(date:any) => onClick(date)} 
        currentDate={date} 
        date={moment(nextsMonth)} 
        startDate={startDate} 
        endDate={endDate} 
      />
    );
  }

  return (
    <DaysWrapper>
      {labels.concat()}
      {days.concat()}
    </DaysWrapper>
  );
}

export { Days }