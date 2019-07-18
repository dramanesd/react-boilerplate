import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDom.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
