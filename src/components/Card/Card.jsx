import React from 'react'
import './Card.css'

export default function Card(props) {
    const clases =  'card ' + props.className;
  return (
    <div className={clases}>
        {props.children}
    </div>
  )
}
