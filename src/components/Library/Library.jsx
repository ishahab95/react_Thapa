import React from 'react'
import Book from '../Book/Book'
import Magzine from '../Magzine/Magzine'
import './Library.css'
import bookData from '../../assets/Data.jsx'

const Library = () => {
  return (
    <div className='library'>
        <Book bookName='C++' price='2500' author='Shahab'>Yaseen</Book>
        <Book bookName='JS' price='2400' author='ali' />
        <Book bookName='Java' price='2300' author='waqar' />
        <Book bookName='Python' price='2100' author='captain' />
        <Book bookName='C#' price='2000' author='Nofil' />
        <Magzine/>
    </div>
  )
}

export default Library