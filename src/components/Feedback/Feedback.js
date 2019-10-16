import React from 'react'

import UserContext from '../../contexts/UserContext'
import ApiLanguageService from '../../services/api-language-service'

class Feedback extends React.Component {

  static contextType = UserContext

  componentDidMount() {
    const { id } = this.context.user
    ApiLanguageService.getLanguageHead(id)
      .then(head => {
        this.context.setHead(head)
      })
  }

  handleNext = () => {
    this.context.setCorrect(null)
  }

      // original: word.original,
      // translation: word.translation,
      // correct_count: word.correct_count,
      // incorrect_count: word.incorrect_count+1,
      // nextWord: head.original,
      // total_score: head.total_score
  
  render() {
    const { answer, correct, original, translation, total_score, correct_count, incorrect_count } = this.context.answerResponse
    return (
      <section>
        <h2>{correct ? 'You were correct!' : 'Good try, but not quite right'}</h2>
        <div>Your total score is: {total_score}</div>
        <p>{`The correct translation for "${original}" was "${translation}" and you chose "${answer}"`}</p>
        You have answered this word correctly {correct_count} times.
        You have answered this word incorrectly {incorrect_count} times.
        <button onClick={this.handleNext}>Next Word</button>
      </section>
    )
  }
}

export default Feedback
