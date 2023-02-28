import React from 'react'
import ReactDOM from 'react-dom'
import { HolaMundo } from './HolaMundo'
import '../src/styles.css'
import { Contador } from './Contador'




ReactDOM.render(
  <React.StrictMode>
    <Contador valor={0}/>
  </React.StrictMode>,
  document.getElementById('root')
)