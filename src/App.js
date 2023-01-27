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
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
 
  return (

    <div className="App">
          <Navbar/>
          {/* <div className="mid">
              <div className="content"> */}
                {/* <Router> */}
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/q/:no" element={<Question/>}/>
                    <Route path="/result" element={<Result/>}/>
                    <Route path="*" element={<NotFound/>}/>

                  </Routes>
                {/* </Router> */}
              
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