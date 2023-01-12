import "./components/css/style.css"
import Home from "./components/Home";
import Question from "./components/Question";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";

function App() {

  return (

    <div className="App">
          <Navbar/>
          {/* <div className="mid">
              <div className="content"> */}
                <Router>
                  <Routes>
                    <Route path="/personality-paws/" element={<Home/>}/>
                    <Route path="/personality-paws/q/:no" element={<Question/>}/>
                    <Route path="/personality-paws/result" element={<Result/>}/>     
                  </Routes>
                </Router>
              
            {/* </div> */}
          {/* </div> */}
          <Footer/>

      {/* <!-- Social media sharing buttons --> */}
      {/* <div class="social-media-sharing">
        <a href="#" class="fa fa-facebook">F</a>
        <a href="#" class="fa fa-twitter"></a>
      </div> */}

    </div>
  
  );
}

export default App;