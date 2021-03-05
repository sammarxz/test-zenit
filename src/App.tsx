import React from "react";

import { Layout, Input, Task } from "./components";

function App() {
  return (
    <Layout>
      <div className="container">
        <h1 className="mt--32 mb--16">To-Do List</h1>
        <Input 
          name="search"
          isSearch
          type="search" 
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
      <div className="container mt--32">
        <Task className="mb--16" title="Non-stop only"/>
        <Task className="mb--16" title="With baggage only"/>
        <Task className="mb--16" title="Refundable only"/>
      </div>
    </Layout>
  );
}

export default App;
