import React from "react";

import { Layout, Input } from "./components";

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
        <div className="mt-16">

        </div>
      </div>
      <hr />
      
    </Layout>
  );
}

export default App;
