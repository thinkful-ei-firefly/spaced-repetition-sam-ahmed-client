import React from 'react'
import UserContext from '../../contexts/UserContext'
import ApiLanguageService from '../../services/api-language-service'

class AnswerSubmit extends React.Component {

  static contextType = UserContext

  handleSubmit = (event) => {
    const { nextWord } = this.context.head
    const { id } = this.context.language
    event.preventDefault()
    const guess = event.target.guess.value
    this.context.setGuess(guess)
    ApiLanguageService.submitAnswer(guess, nextWord, id)
      .then(res => {
        console.log(res)
        this.context.setAnswerResponse(res)
        this.context.setCorrect({correct: res.correct})
      })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input name='guess' type='text' required id='learn-guess-input'></input>
          <button type='submit'>Submit your answer</button>
      </form>
    )
  }
}

export default AnswerSubmit