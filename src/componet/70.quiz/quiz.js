import React, { Component } from 'react'
import "./quiz.css"

export default class quiz extends Component {

 constructor(props) {
  super(props)


  this.state = {
   quiztion: [
    {
      quizTexT: "What is the capital of france",
      answers: [
        {answerText: "Moscow" , isCorrent: false},
        {answerText: "New york" , isCorrent: false},
        {answerText: "paris" , isCorrent: true},
        {answerText: "Kabol" , isCorrent: false},
      ],
    },
    {
      quizTexT: "who is CEO of Tesla",
      answers: [
        {answerText: "Jeff bezos" , isCorrent: false},
        {answerText: "Elon Musk" , isCorrent: true},
        {answerText: "bill gates" , isCorrent: false},
        {answerText: "tony stark" , isCorrent: false},
      ],
    },
    {
      quizTexT: "the Iphone was created by which company",
      answers: [
        {answerText: "Apple" , isCorrent: true},
        {answerText: "Intel" , isCorrent: false},
        {answerText: "amazon" , isCorrent: false},
        {answerText: "microsoft" , isCorrent: false},
      ],
    },
    {
      quizTexT: "What is biggest country of the world",
      answers: [
        {answerText: "china" , isCorrent: false},
        {answerText: "amarica" , isCorrent: false},
        {answerText: "canada" , isCorrent: false},
        {answerText: "Russia" , isCorrent: true},
      ],
    },
   ],
   correntQuiztion: 0,
   showScore: false,
   score: 0,
  }
}


clickHandler(quiz){
  this.setState(prevState => {
    return {correntQuiztion: prevState.correntQuiztion + 1}
  })

  if (quiz){
    this.setState(prevState => {
      return {score: prevState.score + 1}
    })
  }

  if (this.state.correntQuiztion > (this.state.quiztion.length - 2 ) || this.state.correntQuiztion > 2){
    this.setState({
      showScore: true
    })
  }
}


render() {
    {if (this.state.showScore){
      return (
        <div className='quizContiner'>
          <p className='natiga'>you scored {this.state.score} true of {this.state.quiztion.length} quiz</p>
        </div>
      )
    } else {
      return (
        <div className='quizContiner'>
           <p className="quiz">{this.state.quiztion[this.state.correntQuiztion].quizTexT}</p>
           <div className="javabs">
          {this.state.quiztion[this.state.correntQuiztion].answers.map(quiz => (
             <button className="javab" onClick={() => this.clickHandler(quiz.isCorrent)}>{quiz.answerText}</button>
          ))}
            </div>
        </div>
      )
    } }
  }
}
