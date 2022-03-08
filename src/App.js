import React from "react"
import "./App.css"
import s1 from "./div9/s1.png"
import s2 from "./div9/s2.jpg"
import s3 from "./div9/s3.jpg"
import s4 from "./div9/s4.jpg"
import s5 from "./div9/s5.jpg"
import s6 from "./div9/s6.jpg"
import OrangeQ from "./div9/OrangeQ.png"
import womantest from "./div9/womantest.png"
import mantest2 from "./div9/mantest2.png"
import mantest3 from "./div9/mantest3.png"
import angle from "./div9/angle.jpg"

function App () {
  return (
<div className="CARD9">

<div className="Screenshots"><h1>SCREENSHOT</h1></div>

<div className="DIV9PICS">
  <img src= {s2} className="s2"/>
  <img src={s3} className="s3"/>
  <img src={s4} className= "s4"/>
  <img src={s1} className="s1"/>
  <img src={s5} className= "s5"/>
  <img src= {s6} className="s6"/>
  </div>

<div className="COMMENT">
  <h2>COMMENT</h2></div>

  <div className="QuoteQ">
    <div className="OrangeQ">
  <img src={OrangeQ} className="OrangeQ"/> </div></div>

  <div className="LOREM">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugiat similique quisquam quae maiores <br/>
  quam illum eligendi, quidem repudiandae quaerat, animi inventore quod, dignissimos laboriosam, <br/>
  praesentium. Blanditiis delectus laborum ipsum
  </div>

<div className="NAMING">
  <h3>Tahsan.</h3>
  <p className="Designer">UI/UX Designer</p>
  </div>

  <div className="SLIDER2">
<div className="w1"><img src = {womantest} className="womantest"/></div>
<div className="m2"><img src= {mantest2} className="mantest2"/></div>
<div className="m3"><img src = {mantest3} className= "mantest3"/></div>
  </div>


</div>


  )
}

export default App