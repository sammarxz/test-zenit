/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import moment from "moment";
import { motion } from "framer-motion";

interface DayProps {
  currentDate: any;
  date: any;
  startDate: any;
  endDate: any;
  onClick: Function;
}

const Day: React.FC<DayProps> = ({
  currentDate,
  date,
  startDate,
  endDate,
  onClick,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
      },
    },
  };

  const className = [];

  if (moment().isSame(date, "day")) {
    className.push("is--active");
  }

  if (date.isSame(startDate, "day")) {
    className.push("is--start");
  }

  if (date.isBetween(startDate, endDate, "day")) {
    className.push("is--between");
  }

  if (date.isSame(endDate, "day")) {
    className.push("is--end");
  }

  if (!date.isSame(currentDate, "month")) {
    className.push("is--muted");
  }

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      animate="show"
      onClick={() => onClick(date)}
      className={className.join(" ")}
    >
      {date.date()}
    </motion.span>
  );
};

export { Day };
