import React from 'react'
import Book from '../Book/Book'
import Magzine from '../Magzine/Magzine'
import './Library.css'
import bookData from '../../assets/Data.jsx'

const Library = () => {
  // let {bookName,Price,Author,key}=bookData

  return (
    <div className='library'>
      {
          bookData.map((item)=>{
            let {id,...rest}=item
            return(
              <Book key={id} {...rest}/>
            )
          })
      }
        <Magzine/>
    </div>
  )
}

export default Library