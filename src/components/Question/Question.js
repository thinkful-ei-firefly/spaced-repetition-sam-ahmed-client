import React from 'react'

import AnswerSubmit from '../AnswerSubmit/AnswerSubmit'
import UserContext from '../../contexts/UserContext'

class Question extends React.Component {

  static contextType = UserContext

  render() {
    const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.context.head
    return (
      <section className="word-page-body" aria-controls="learningRoute-aria">
        
          <header className="DisplayScore">
          <p>Your total score is: {totalScore}</p>
          </header>
          <h2>Translate the word:</h2>
          <span className="bold word"><h3>{nextWord}</h3></span>
          
          {/* <Word 
            original={nextWord}
            correct_count={wordCorrectCount}
            incorrect_count={wordIncorrectCount}
          /> */}
          <section className="flexbox answers-count">
          <p className="count">You have answered this word correctly
           <span className="bold green"> {wordCorrectCount} </span>times.
          </p>
          <p className="count">You have answered this word incorrectly <span className="bold red">{wordIncorrectCount} </span> times.</p>
          </section>
          <AnswerSubmit />
      </section>
    )
  }
}

export default Question
