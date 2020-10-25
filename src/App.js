import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Planets from "./component/Planet";
import People from './component/People';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
    <div className="App">
      <h1>Star wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' panelProps='PropsObject'/>
    </>
  );
}

export default App;
