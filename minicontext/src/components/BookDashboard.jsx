import React, { useContext } from "react"
import UserContext from "../context/UserContext"

function BookDashboard() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <h2>Please login to see your book dashboard 📚</h2>
  }

  return (
    <div>
      <h2>📚 Book Dashboard</h2>
      <p>Welcome, {user.username}</p>

      <ul>
        <li>Atomic Habits</li>
        <li>Clean Code</li>
        <li>Deep Work</li>
        <li>You Don't Know JS</li>
      </ul>
    </div>
  )
}

export default BookDashboard
