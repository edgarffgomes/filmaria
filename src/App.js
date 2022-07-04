import React from "react"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./routes"

function App() {
  return (
    <div className="app">
      <ToastContainer autoclose={3000}/>
      <Routes/>
    </div>
    )
}

export default App;
