import React from 'react'
import './Book.css'

function Book(props) {
    console.log(props)
  return (

    <div className='book'>       
       <div> {props.bookName}</div>
       <div> {props.price}</div>
       <div> {props.author}</div>
       <div> {props.children}</div>
    </div>
  )
}

export default Book