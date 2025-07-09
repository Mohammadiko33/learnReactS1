import React, { Component } from 'react'
import './componet/89-90-91-92.NoteApp/App.css'
import Note from'./componet/89-90-91-92.NoteApp/Note'
import Color from'./componet/89-90-91-92.NoteApp/colorBox'

export default class App89 extends Component {

  constructor(props){
    super(props)

    this.state = {
      colors: [
        {color: '#fff'},
        {color: '#ffb300'},
        {color: '#f6ff00'},
        {color: '#56f37d'},
        {color: '#00ff00'},
        {color: '#00d9ff'},
        {color: '#006eff'},
        {color: '#0000ff'},
        {color: '#ff1bff'},
        {color: '#ff86cd'},
        {color: '#ff0000'}
      ],
      notes: [],
      noteValue: '',
      IptnoteColor: "#fff",

    }

    this.putInNoteValue = this.putInNoteValue.bind(this)
    this.clearAllNotes = this.clearAllNotes.bind(this)
    this.addANote = this.addANote.bind(this)
    this.CheckKeyIsEnter = this.CheckKeyIsEnter.bind(this)
  }

  CheckKeyIsEnter(e){
      if (e.keyCode === 13){
        this.addANote()
      }
  }

  putInNoteValue(e){
    this.setState({
      noteValue: e.target.value
    })
  }
  changeInputColorHandler(color){
    this.setState({
      IptnoteColor: color.color
    })
  }

  addANote(){
 let {notes , noteValue , IptnoteColor} = this.state 

      if (noteValue.length > 2){
        let newNoteObj = {
          id: notes.length + 1,
          title: noteValue,
          color: IptnoteColor
        }
    
        this.setState(prevState => ({
          notes: [...prevState.notes, newNoteObj],
          noteValue: '',
          IptnoteColor: "#fff",
        }));
      }
  }

  clearAllNotes(){
    this.setState({
      notes: [],
      noteValue: '',
      IptnoteColor: "#fff",
    })
  }
  removeANote(NoteID){
      console.log(NoteID)

      let copyNote = [...this.state.notes]

      let FiltredNotes = copyNote.filter(note => note.id !== NoteID)

      this.setState({
        notes: FiltredNotes
      })
  }


  render() {
    return (
     <section className="NoteApp">
     <div className="box___hidden">
         <p className="box___hidden_title">your note is delete</p>
     </div>
     <h1>Leach Mob Note App</h1>
     <input type="text" placeholder="Something Note Type Here" style={{backgroundColor: `${this.state.IptnoteColor}`}} value={this.state.noteValue} onChange={this.putInNoteValue} onKeyUp={this.CheckKeyIsEnter} id="input" maxlength="30" autofocus/>
     <div className="colors">
        {
          this.state.colors.map(color => (
            <Color key={color.color} {...color} onColor={this.changeInputColorHandler.bind(this, color)} />
          ))
        }
     </div>
<div className="addandremove" onClick={this.addANote}>
 <div id="addBox">
     <img src="./film89-90-91-92/add.png" alt="add" id="add" />
     <img src="./film89-90-91-92/addHover.png" alt="addHover" id="addHover" />
 </div>
 <div id="removeBox" onClick={this.clearAllNotes}>
     <img src="./film89-90-91-92/remove.png" alt="remove" id="remove" />
     <img src="./film89-90-91-92/removeHover.png" alt="removeHover" id="removeHover" />
 </div>
</div>
<section className="results">
{
  this.state.notes.length && this.state.notes.map(note => (
    <Note key={note.id} {...note} onRemove={this.removeANote.bind(this)} />
  ))
}
</section>

<div className="wrong">
 <p>! همچین یاداشتی از قبل وجود دارد</p>
</div>
 </section>
    )
  }
}


{/* const             $ = document;
let body            = $.body
let colors          = $.querySelectorAll('.color')
let results         = $.querySelector('.results')
let add             = $.getElementById('addBox')
let remove          = $.getElementById('removeBox')
let input           = $.getElementById('input')

function addHandlerPlus(){
if (input.value.trim()){
  let newDiv      = $.createElement('div')
  let newDivTitle = $.createElement('p')
  newDivTitle.innerHTML = input.value
  newDiv.classList.add('result-box')
  newDiv.append(newDivTitle)
  results.append(newDiv)
  newDiv.style.backgroundColor = input.style.backgroundColor
  input.value = ""
  input.style.backgroundColor = "#fff"

}}

function removeNoteApp(event){
event.target.parentElement.remove()
}

function addHandler(event){
  if (event.keyCode === 13){
    if (input.value.trim()){
      let newDiv      = $.createElement('div')
      let newDivTitle = $.createElement('p')
      newDivTitle.innerHTML = input.value
      newDiv.classList.add('result-box')
      newDiv.append(newDivTitle)
      results.append(newDiv)
      newDivTitle.addEventListener('click', removeNoteApp)
      newDiv.style.backgroundColor = input.style.backgroundColor
      input.value = ""
      input.style.backgroundColor = "#fff"
    }}
    if (event.keyCode === 49){
      input.style.backgroundColor = colors[1].style.backgroundColor
      // input.value = input.value.slice(0 , -1)
    } else if (event.keyCode === 50){
      input.style.backgroundColor = colors[2].style.backgroundColor 
    } else if (event.keyCode === 51){
      input.style.backgroundColor = colors[3].style.backgroundColor
    } else if (event.keyCode === 52){
      input.style.backgroundColor = colors[4].style.backgroundColor
    } else if (event.keyCode === 53){
      input.style.backgroundColor = colors[5].style.backgroundColor
    } else if (event.keyCode === 54){
      input.style.backgroundColor = colors[6].style.backgroundColor
    } else if (event.keyCode === 55){
      input.style.backgroundColor = colors[7].style.backgroundColor
    } else if (event.keyCode === 56){
      input.style.backgroundColor = colors[8].style.backgroundColor
    } else if (event.keyCode === 57){
      input.style.backgroundColor = colors[9].style.backgroundColor
    } else if (event.keyCode === 48){
      input.style.backgroundColor = colors[10].style.backgroundColor
    }
}

colors.forEach(function (color) {
  color.addEventListener('click', function(event){
    input.style.backgroundColor = event.target.style.backgroundColor
  })})

remove.addEventListener('click' , function(){
  input.value = ""
  input.style.backgroundColor = "#fff"
})

  results.addEventListener("click", function(event){
  console.log(event.target);
  event.target.remove()
 })


add.addEventListener('click' , addHandlerPlus)
input.addEventListener('keydown' , addHandler)
body.addEventListener('keydown' , addHandler) */}