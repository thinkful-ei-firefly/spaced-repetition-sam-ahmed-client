import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ApiLanguageService from '../../services/api-language-service'
import { Link } from 'react-router-dom'

import Word from '../../components/Word/Word'
import './DashboardRoute.css'

class DashboardRoute extends Component {

  static contextType = UserContext;

  componentDidMount() {
    const { id } = this.context.user
    ApiLanguageService.getLanguage(id)
      .then(res => {
        this.context.setLanguage(res.language)
        this.context.setWords(res.words)
      })
  }

  render() {
    const { language, words } = this.context
    const wordComponents = [];
    words.forEach(word => wordComponents.push(
      <Word 
        key={word.id}
        original={word.original}
        correct_count={word.correct_count}
        incorrect_count={word.incorrect_count}
      />
    ))
    return (
      <section className='dashboard'>
        <header className='dashboard-header'>
          <h2 className="language-header">{language.name}</h2>
          </header>
          <div className="bar">
          <p  className="score" >Total correct answers: {language.total_score}</p>
          <Link to='/learn'>
          <button className="start">Start practicing</button>
          </Link>
          </div>
          
          <div className="practice-words">
            <h3 className="words-header">Your Words</h3>
            <ul>{wordComponents ? wordComponents : ''}</ul>
          </div>
        
      </section>
    );
  }
}

export default DashboardRoute
