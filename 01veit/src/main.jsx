import React from 'react' // ✅ Required for JSX and createElement
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Call from './First.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom React !</h1>
    </div>
  )
}
const AnotherReact = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const ThirdReact = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click to go to Google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {/* {ThirdReact} */}
    {/* {AnotherReact} */}
    <App />
    {/* <Call /> */}
  </StrictMode>
)