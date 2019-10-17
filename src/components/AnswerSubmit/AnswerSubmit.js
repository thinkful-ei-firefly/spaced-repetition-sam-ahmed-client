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
        this.context.setHead({totalScore: res.total_score})
        this.context.setAnswerResponse(res)
        this.context.setCorrect({correct: res.correct})
      })
  }


  render() {
    return (
     <div className='container'>
     <form 
     id="learn-guess-form" 
     onSubmit={event => this.handleSubmit(event)}>
     <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
     <input name='guess' type='text' required id='learn-guess-input'
    
     aria-label="Word guess entry"
     aria-required="true"
     tabIndex='0'
     required ></input>
     <button type='submit'>Submit your answer</button>
 </form>
     </div>
    )
  }
}

export default AnswerSubmit