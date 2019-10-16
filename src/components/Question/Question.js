import React from 'react'

import AnswerSubmit from '../AnswerSubmit/AnswerSubmit'
import UserContext from '../../contexts/UserContext'

class Question extends React.Component {

  static contextType = UserContext

  render() {
    const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context.head
    return (
      <section>
        <h2>Translate the word:</h2>
          <span>{nextWord}</span>
          <p>Your total score is: {totalScore}</p>
          {/* <Word 
            original={nextWord}
            correct_count={wordCorrectCount}
            incorrect_count={wordIncorrectCount}
          /> */}
          <AnswerSubmit />
          You have answered this word correctly {wordCorrectCount} times.
          You have answered this word incorrectly {wordIncorrectCount} times.
      </section>
    )
  }
}

export default Question
