import React from 'react'
import './Book.css'

function Book(props) {
    const {bookName,price,author}=props
    let purchase=(price)=>{
        alert(`Price is ${ price}`)
    }
    let eventFun=(e)=>{
        // console.log(e)
        console.log(e.target.value)
    }
    
  return (
    <div className='book'>       
       <h3>{bookName}</h3>
       <h4>{price}</h4>
       <h6>{author}</h6>
       <button type='button' onClick={()=>purchase(price)}>Purchase</button>
       <input type="text" onChange={eventFun} />
    </div>
  )
}

export default Book