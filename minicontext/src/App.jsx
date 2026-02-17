
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import BookDashboard from './components/BookDashboard'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
        <BookDashboard />
    </UserContextProvider>
  )
}

export default App