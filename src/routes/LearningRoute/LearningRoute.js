import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ApiLanguageService from '../../services/api-language-service'

import Feedback from '../../components/Feedback/Feedback'
import Question from '../../components/Question/Question'

import './LearningRoute.css'


class LearningRoute extends Component {

  static contextType = UserContext

  componentDidMount() {
  const { totalScore } = this.context.head
    const { id } = this.context.user

    if (!totalScore ) {
      ApiLanguageService.getLanguageHead(id)
      .then(head => this.context.setHead(head))
    }
    ApiLanguageService.getLanguage(id)
    .then(res => {
      this.context.setLanguage(res.language)
    })
  }


  render() {
    const {correct} = this.context
    return (
      <div className='LearningRoute' id='learningRoute-aria' aria-live="assertive">
        {correct === null ?
          <Question /> :
          <Feedback />
        }
      </div>
    );
  }
}

export default LearningRoute
