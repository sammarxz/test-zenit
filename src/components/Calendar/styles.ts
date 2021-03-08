import styled from 'styled-components'

const CalendarWrapper = styled.div``

const MonthNavigation = styled.nav`
  h1 {

  }
`

const DaysWrapper = styled.nav`
  font-size: 0;
      
  span {
    width: 14.28571%;
    display: inline-block;
    text-align: center;
    user-select: none;
    cursor: pointer;
    margin: 4px 0;
    padding: 8px;
    position: relative;
    font-size: 16px;

    &.label {
      text-transform: uppercase;
      font-weight: 700;
      color: var(--color-light-gray);
      font-size: 12px;
      cursor: initial;
      margin: 0;
    }

    &.is--muted {
      color: rgba(0, 0, 0, 0.3);
    }

    &.is--between {
      border-radius: 0;
    }

    &.is--start, 
    &.is--between, 
    &.is--end {
      background-color: var(--color-cta);
      color: #fff;
    }

    &.is--start {
      border-radius: 40px 0 0 40px;
    }

    &.is--end {
      border-radius: 0 40px 40px 0;
    }

    &.is--start.is--end {
      border-radius: 40px;
    }

    &.is--start.is--end:after {
      display: none;
    }
  }
`

export { CalendarWrapper, MonthNavigation, DaysWrapper }