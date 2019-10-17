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
      <section className="word-page-body" aria-controls="learningRoute-aria" >

      <header className="DisplayScore">
          <p>Your total score is: <span className='bold'>{total_score}</span></p>
          <h2>{correct ? 'You were correct!' : 'Good try, but not quite right'}</h2>
        </header>

        <div className="DisplayFeedback">
        <p>The correct translation for <span className="bold">"{original}"</span> was <span className="bold">"{translation}"</span> and you chose <span className="bold">"{answer}"</span></p>
        </div>

        <section className="flexbox answers-count">
        <p className="count">You have answered this word correctly 
         <span className="bold green">  {correct_count} </span>times.
        </p>
        <p className="count">You have answered this word incorrectly <span className="bold red">{incorrect_count} </span> times.</p>
        </section>

        <button className='nextWord__btn' onClick={this.handleNext}><span></span>Next Word</button>
      </section>
    )
  }
}

export default Feedback
