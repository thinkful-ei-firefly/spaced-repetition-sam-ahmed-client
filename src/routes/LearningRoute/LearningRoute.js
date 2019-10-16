import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ApiLanguageService from '../../services/api-language-service'

import Feedback from '../../components/Feedback/Feedback'
import Question from '../../components/Question/Question'


class LearningRoute extends Component {

  static contextType = UserContext

  componentDidMount() {
    const { id } = this.context.user
    ApiLanguageService.getLanguageHead(id)
      .then(head => this.context.setHead(head))
    ApiLanguageService.getLanguage(id)
    .then(res => {
      this.context.setLanguage(res.language)
    })
  }


  render() {
    const {correct} = this.context
    return (
      <div>
        {correct === null ?
          <Question /> :
          <Feedback />
        }
      </div>
    );
  }
}

export default LearningRoute
