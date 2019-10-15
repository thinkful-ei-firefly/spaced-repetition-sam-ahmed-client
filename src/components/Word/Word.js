import React from 'react'

const Word = (props) => {
  const { original, correct_count, incrorrect_count, id } = props
  return (
    <li key={id}>
      <h4>{original}</h4>
      <div>
        <div>correct: {correct_count}</div>
        <div>incorrect: {incrorrect_count ? incrorrect_count : 0}</div>
      </div>
    </li>
  )
}

export default Word
