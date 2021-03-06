import React from "react"
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'

import { Layout, Input, Task, Button } from "./components"

const AddButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9;
`

function App() {
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
      <AddButton>
        <Button 
          className="p--16 br--12 bg--cta c--white is--icon is--primary" 
          onClick={() => console.log('click')}
        >
          <AiOutlinePlus size="1.6rem" />
        </Button>
      </AddButton>
    </Layout>
  );
}

export default App;
