import React from 'react'

const Word = (props) => {
  const { original, correct_count, incorrect_count, id } = props
  return (
    <li key={id} className='word-list-item'>
      <h4>{original}</h4>
      <div>
        <div>correct: <span className='bold'>{correct_count}</span></div>
        <div>incorrect: <span className='bold'>{incorrect_count ? incorrect_count : 0}</span></div>
      </div>
    </li>
  )
}

export default Word
