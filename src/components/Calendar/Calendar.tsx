import React from 'react'
import moment, { Moment } from 'moment'

import { Heading } from './Heading'
import { Days } from './Days'

import { CalendarWrapper } from './styles'

interface CalendarState {
  date: any;
  startDate?: Moment;
  endDate?: Moment;
}

class Calendar extends React.Component<{}, CalendarState> {
  constructor(props:any) {
    super(props)

    this.state = {
      date: moment(),
      startDate: moment().subtract(5, 'day'),
      endDate: moment().add(3, 'day')
    }
  }

  resetDate() {
    this.setState({
      date: moment()
    })
  }

  changeMonth(month:any) {
    const { date } = this.state

    date.month(month)
    this.setState(
      date
    )
  }

  changeDate(date:any) {
    let { startDate, endDate } = this.state

    if (undefined !== startDate) {
      if (startDate === null || date.isBefore(startDate, 'day') || ! startDate.isSame(endDate, 'day')) {
        startDate = moment(date);
        endDate = moment(date);
      } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
        startDate = undefined;
        endDate = undefined;
      } else if (date.isAfter(startDate, 'day')) {
        endDate = moment(date);
      }
  
      this.setState({
        startDate,
        endDate
      });

      console.log()
    }
  }

  render() {
    const { date, startDate, endDate } = this.state;

    return (
      <CalendarWrapper>
        <Heading 
          date={date} 
          changeMonth={(month:any) => this.changeMonth(month)}
          resetDate={() => this.resetDate()}
        />
        <Days 
          onClick={(date:any) => this.changeDate(date)} 
          date={date} 
          startDate={startDate} 
          endDate={endDate}
        />
      </CalendarWrapper>
    )
  }
}

export { Calendar }