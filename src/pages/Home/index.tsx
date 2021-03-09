/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-use-before-define
import React, { Component } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { Todo } from "../../store/ducks/todos/types";
import * as TodosActions from "../../store/ducks/todos/actions";
import { ApplicationState } from "../../store";

import { Layout, Input, Task } from "../../components";

import { AddButton } from "./styles";

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  todos: Todo[];
  removeTodo(id: number): any;
}

class Home extends Component<DispatchProps, StateProps> {
  deleteTodo = (id: number) => {
    const { removeTodo } = this.props;
    removeTodo(id);
  };

  render() {
    const { todos } = this.props;

    const transition = {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    };

    return (
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={transition}
        >
          <div className="container">
            <h1 className="mt--72 mb--16">To-Do List</h1>
            <Input
              name="search"
              isSearch
              type="text"
              placeholder="Search Task"
              className="w--100 br--8 border fs--small p--16"
            />
            <div className="mt--32 fw--bold">
              <strong className="mr--8">Category</strong>
              <select className="c--gray">
                <option>Work</option>
                <option>House</option>
                <option>Family</option>
              </select>
            </div>
          </div>
          <hr className="mt--32" />
          <div className="mt--16">
            {todos.map((todo) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Task
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  handleDelete={this.deleteTodo}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <AddButton to="/add">
          <motion.button
            className="btn h--100 bg--cta c--white is--icon is--primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            initial={{ borderRadius: "32px" }}
            animate={{ borderRadius: "32px" }}
            exit={{ borderRadius: "12px" }}
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
              style={{
                y: "4px",
              }}
            >
              <AiOutlinePlus size="1.4rem" />
            </motion.span>
          </motion.button>
        </AddButton>
      </Layout>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
