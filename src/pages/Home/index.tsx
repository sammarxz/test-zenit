import { Component } from 'react'
import { motion } from 'framer-motion'
import { AiOutlinePlus } from 'react-icons/ai'
import { connect } from 'react-redux'

import { Todo } from '../../store/ducks/todos/types'
import { ApplicationState } from '../../store'

import { Layout, Input, Task } from "../../components"

import { AddButton } from './styles'

interface StateProps {
  todos: Todo[]
}

interface DispatchProps {
  todos: Todo[],
}

class Home extends Component<StateProps, DispatchProps> {
  state = {
    todos: this.props.todos
  }

  render() {
    const { todos } = this.state

    const transition = {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }

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
           {todos.map(todo => (
             <Task key={todo.id} title={todo.title} completed={todo.completed} />
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
                  delay: .3,
                  ...transition
                }
              }}
              exit={{
                opacity: 0
              }}
              style={{
                y: "4px"
              }}
            >
              <AiOutlinePlus size="1.4rem" />
            </motion.span>
          </motion.button>
        </AddButton>
      </Layout>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.data,
})

export default connect(mapStateToProps)(Home);
