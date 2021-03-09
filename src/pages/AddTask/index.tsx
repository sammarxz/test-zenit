/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Moment } from "moment";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { NavLink } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

import { Todo } from "../../store/ducks/todos/types";
import * as TodosActions from "../../store/ducks/todos/actions";

import { Layout, Input, Calendar } from "../../components";

import {
  AddButton,
  RadioGroup,
  CalendarWrapper,
  CalendarOverlay,
} from "./styles";

interface StateProps {
  isOpen: boolean;
  todo: {
    id: number;
    title: string;
    note: string;
    category: string;
    date: string;
    completed: boolean;
  };
}

interface DispatchProps {
  addTodo(data: Todo): any;
}

class AddTask extends Component<DispatchProps, StateProps> {
  constructor(props: DispatchProps) {
    super(props);
    this.state = {
      isOpen: false,
      todo: {
        id: Math.floor(Math.random() * 100) + 1,
        title: "",
        note: "",
        category: "",
        date: "",
        completed: false,
      },
    };
  }

  handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { todo } = this.state;
    const { value, name } = e.target;

    this.setState({
      todo: {
        ...todo,
        [name]: value,
      },
    });
  };

  addNewTodo = () => {
    const { todo } = this.state;
    const { addTodo } = this.props;

    if (todo.title && todo.note && todo.category && todo.date) {
      addTodo(todo);

      this.setState({
        todo: {
          id: Math.floor(Math.random() * 100) + 1,
          title: "",
          note: "",
          category: "",
          date: "",
          completed: false,
        },
      });
    }
  };

  openToggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  selectDate(start: Moment, end: Moment) {
    const { todo } = this.state;

    if (start !== undefined) {
      const startDate = start.format("MM/DD/YY");
      const endDate = end.format("MM/DD/YY");

      this.setState({
        todo: {
          ...todo,
          date: `from ${startDate} to ${endDate}`,
        },
      });
    }
  }

  render() {
    const {
      isOpen,
      todo: { title, note, category, date },
    } = this.state;

    const variants = {
      open: {
        y: 0,
      },
      closed: {
        y: "100%",
      },
    };
    const transition = {
      duration: 0.4,
      ease: [0.6, 0.1, -0.05, 0.9],
    };

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
            <h1 className="mb--8">New Task</h1>
            <div className="mb--24">
              <Input
                name="title"
                type="text"
                placeholder="Title"
                className="w--100 br--8 border fs--small p--16 mb--16"
                value={title}
                onChange={this.handleChange}
              />
              <textarea
                name="note"
                placeholder="Write a note"
                className="w--100 br--8 border fs--small p--16"
                value={note}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb--24">
              <h3 className="fs--small c--light-gray mt--16 mb--8">Category</h3>
              <RadioGroup className="mb--16">
                <input
                  type="radio"
                  id="work"
                  name="category"
                  value="Work"
                  onChange={this.handleChange}
                  checked={category === "Work"}
                />
                <label htmlFor="work">Work</label>
                <input
                  type="radio"
                  id="house"
                  name="category"
                  value="House"
                  onChange={this.handleChange}
                  checked={category === "House"}
                />
                <label htmlFor="house">House</label>
                <input
                  type="radio"
                  id="family"
                  name="category"
                  value="Family"
                  onChange={this.handleChange}
                  checked={category === "Family"}
                />
                <label htmlFor="family">Family</label>
              </RadioGroup>
            </div>
            <label
              htmlFor="date"
              className="d--block c--light-gray fs--small mb--8 fw--bold
            "
            >
              Remind me on a date
            </label>
            <Input
              name="date"
              type="text"
              isDate
              placeholder="Select an Date"
              click={() => this.openToggle()}
              value={date}
              className="w--100 br--8 border fs--small p--16"
            />
            <CalendarOverlay
              animate={
                isOpen
                  ? {
                      opacity: 1,
                      display: "block",
                      visibility: "visible",
                    }
                  : {
                      opacity: 0,
                      display: "none",
                    }
              }
              initial={{ opacity: 0 }}
              transition={transition}
              onClick={() => this.openToggle()}
            />
            <CalendarWrapper
              variants={variants}
              initial={{ y: "100%" }}
              transition={transition}
              animate={isOpen ? "open" : "closed"}
            >
              <div className="container">
                <Calendar
                  onSelectDate={(startDate: Moment, endDate: Moment) =>
                    this.selectDate(startDate, endDate)
                  }
                />
                <motion.button
                  className="btn p--16 br--12 bg--cta c--white is--primary mt--32 mb--32"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => this.openToggle()}
                  exit={{
                    borderRadius: "32px",
                    transition: {
                      delay: 0.3,
                      ...transition,
                    },
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        ...transition,
                      },
                    }}
                    exit={{
                      opacity: 0,
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
              ...transition,
            },
          }}
          exit={{
            left: "auto",
            width: "60px",
            transition: {
              delay: 0.2,
              ...transition,
            },
          }}
          onClick={this.addNewTodo}
        >
          <motion.button
            className="btn h--100 br--12 bg--cta c--white is--icon is--primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            exit={{
              borderRadius: "32px",
              transition: {
                delay: 0.3,
                ...transition,
              },
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  ...transition,
                },
              }}
              exit={{
                opacity: 0,
              }}
            >
              Create Task
            </motion.span>
          </motion.button>
        </AddButton>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(null, mapDispatchToProps)(AddTask);
