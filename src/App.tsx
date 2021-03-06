import React, { useState } from "react"
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'
import { AiOutlinePlus } from 'react-icons/ai'

import { Layout, Input, Task } from "./components"

const AddButton = styled.div`
`

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const variants = {
    open: { 
      left: '32px',
    },
    closed: { 
      left: 'auto',
    },
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="mt--72 mb--16">To-Do List</h1>
        <Input 
          name="search"
          isSearch
          type="text" 
          placeholder="Search Task" 
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
        <Task className="mb--16" title="Non-stop only" />
        <Task className="mb--16" title="With baggage only" />
        <Task className="mb--16" title="Refundable only" />
      </div>
      <motion.div 
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 9
        }}
      >
        <AddButton>
          <motion.button 
            className={`btn p--16 ${isOpen ? 'br--12' : 'br--32'} bg--cta c--white is--icon is--primary`} 
            onClick={() => toggleOpen()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <>
              {isOpen ? (
                <span>Create Task</span>
              ):(
                <AiOutlinePlus size="1.4rem" />
              )}
            </>
          </motion.button>
        </AddButton>
      </motion.div>
    </Layout>
  );
}

export default App;
