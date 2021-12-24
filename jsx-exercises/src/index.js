import React from "react";
import ReactDOM from "react-dom";


function Mything(){
  return (
    <div>
      This is my thing
    </div>
  )
}

function TheBooks() {
  return (
    <div className="books">
      <div className="author">The Author</div>
      <div className="title">The Title</div>
        <ul className="star">
        <li className="rating">5 star rating</li>
        <li className='isbn'>
          12-345678-910
        </li>
        </ul>
      
    </div>
  )
}

ReactDOM.render(<Mything/>,document.querySelector('#root'))