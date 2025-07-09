import React, { Component } from "react";
import MakerBook from "./BookMakerComponet/BookMaker";
import "./bookList.css";

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: [],

      title: "",
      author: "",
      year: null,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();


        let {title, author, year} = this.state


    if (title && author && year) {
      if (title.length > 1 && author.length > 2 && year.length > 3 && year.length < 5) {
        let newBook = {
                id: this.state.book.length + 1,
                title: title.trim(),
                author: author.trim(),
                year,  
        }
        this.setState(
            {book: [...this.state.book, newBook]}
        // prevState => {
        //   console.log(prevState);
        //   return {
        //     book: [
        //       ...prevState.book,
        //       {
        //         id: this.state.book.length + 1,
        //         title: title.trim(),
        //         author: author.trim(),
        //         year,
        //       },
        //     ],
        //   };
        // }
        );
      }
    }
    this.setState({
      title: "",
      author: "",
      year: '',
    });
  }

  titleHandler(e) {
    this.setState({
      title: e.nativeEvent.target.value,
    });
  }

  authorHandler(e) {
    this.setState({
      author: e.nativeEvent.target.value,
    });
  }

  yearHandler(e) {
    this.setState({
      year: e.nativeEvent.target.value,
    });
  }

  render() {
    return (
      <section className="BookList">
        <header>
          <img src="film79/(210)Book.png" alt="yellow book"/>
          <p>
            leach mob js <span className="book_header_book">book</span> list
          </p>
        </header>
        <main>
          <form bindsubmit="" action="">
            <label for="nameBook">name Book</label>
            <input
              type="text"
              placeholder="book name"
              id="nameBook"
              onChange={this.titleHandler}
              value={this.state.title}
              maxlength="23"
              autofocus
            />
            <label for="author">author</label>
            <input
              type="text"
              placeholder="author name"
              id="author"
              onChange={this.authorHandler}
              value={this.state.author}
              maxlength="18"
            />
            <label for="yaer">yaer</label>
            <input
              type="number"
              id="yaer"
              placeholder="2012"
              onChange={this.yearHandler}
              value={this.state.year}
              minLength={4}
              maxLength={4}
            />
          </form>
          <button id="btn" type="submit" onClick={this.submitHandler}>
            add book <div className="anim"></div>
          </button>

          <table>
            <thead>
              <th>name book</th>
              <th>author</th>
              <th>year</th>
            </thead>
            <tbody>
              {this.state.book.length &&
                this.state.book.map(book => <MakerBook {...book} key={book.id} />)}
            </tbody>
          </table>
        </main>
      </section>
    );
  }
}

// const $ = document;
// const body = $.body;

// let nameBookInput = $.getElementById('nameBook')
// let authorInput = $.getElementById('author')
// let yaerInput = $.getElementById('yaer')
// let btn = $.getElementById('btn')
// let tableBody = $.querySelector('tbody')
// let table = $.querySelector('table')

// let bookArray = []

// function removeHandler(){
//   nameBookInput.value = ""
//   authorInput.value = ""
//   yaerInput.value = ""
// }

// function addHandler(){
//   if (nameBookInput.value.trim()){
//     if (authorInput.value.trim()){
//       if (yaerInput.value.trim()){
//         let mainResult = $.createElement("tr")

//         let nameBook = $.createElement("th")
//         nameBook.classList.add("nameBook")
//         nameBook.innerHTML = nameBookInput.value

//         let author = $.createElement("th")
//         author.classList.add("author")
//         author.innerHTML = authorInput.value

//         let yaer = $.createElement("th")
//         yaer.classList.add("yaer")
//         if (yaerInput.value > 1923 ){
//           if (yaerInput.value < 2025){
//             yaer.innerHTML = yaerInput.value
//           } else {
//                     yaer.innerHTML = "book from future"
//           }
//         } else {
//           yaer.innerHTML = "book from past"
//         }
//         table.style.display = "revert-layer"

//         newBookObj = {
//           id: bookArray.length + 1,
//           bookName: nameBook.innerHTML,
//           authorName: author.innerHTML,
//           yearBook: yaer.innerHTML,
//         }
//         bookArray.push(newBookObj)
//         console.log(bookArray);
//         setLocalStorage(bookArray)

//          mainResult.append(nameBook , author , yaer)
//          tableBody.append(mainResult)
//          nameBookInput.focus()

//          removeHandler()
//   }}}
// }

// function setLocalStorage(bookList){
//   localStorage.setItem("bookList", JSON.stringify(bookList))
// }

// window.onload = function(){
//   let localResult = JSON.parse(localStorage.getItem("bookList"))
//   localResult.forEach(function(locRes){
//     console.log(locRes);
//     let mainResult = $.createElement("tr")
//     let nameBook = $.createElement("th")
//     nameBook.classList.add("nameBook")
//     nameBook.innerHTML = locRes.bookName

//     let author = $.createElement("th")
//     author.classList.add("author")
//     author.innerHTML = locRes.authorName

//     let yaer = $.createElement("th")
//     yaer.classList.add("yaer")
//     if (locRes.yearBook > 1923 ){
//       if (locRes.yearBook < 2025){
//         yaer.innerHTML = locRes.yearBook
//       } else {
//                 yaer.innerHTML = "book from future"
//       }
//     } else {
//       yaer.innerHTML = "before 1920"
//     }
//     table.style.display = "revert-layer"

//      mainResult.append(nameBook , author , yaer)
//      tableBody.append(mainResult)
//      nameBookInput.focus()
//   })
// }

// table.style.display = "none"
// btn.addEventListener("click", addHandler)

// body.addEventListener("keydown", function(event){
//   if (event.keyCode === 27){
//     removeHandler()
//   } else if (event.keyCode === 46){
//     removeHandler()
//   }  else if (event.keyCode === 13){
//     addHandler()
//   }
// })
