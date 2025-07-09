import React from 'react'

export default function user(props) {
  return (
    <div>
     <ul>
         <li>user1 name : {props.name} || user1age: {props.age}</li>
     </ul>
    </div>
  )
}
