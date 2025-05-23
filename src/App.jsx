import { useState } from 'react'
import PatientForm from './components/PatientForm'
import SqlQuery from './components/SqlQuery'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('register')

  return (
    <div className="app">
      <h1>Patient Registration System</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => setActiveTab('register')}
        >
          Register Patient
        </button>
        <button 
          className={activeTab === 'query' ? 'active' : ''}
          onClick={() => setActiveTab('query')}
        >
          SQL Query
        </button>
      </div>

      <div className="content">
        {activeTab === 'register' ? <PatientForm /> : <SqlQuery />}
      </div>

      <footer>
        <p>Data persists across page refreshes and browser tabs</p>
      </footer>
    </div>
  )
}

export default App