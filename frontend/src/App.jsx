import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Classifier from './pages/Classifier'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [predictions, setPredictions]=useState([])
  const addPrediction=(prediction)=>{
    setPredictions(prev=>[...prev,prediction])
  }
  return(
    <BrowserRouter>
    <nav className="bg-gray-800 border-b-2 border-purple-500 px-8 py-4 flex items-center justify-between">
  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    🌪️ TweetSense
  </div>
  <div className="flex gap-6">
    <Link 
      to="/" 
      className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all"
    >
      Classifier
    </Link>
    <Link 
      to="/dashboard" 
      className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all"
    >
      Dashboard
    </Link>
  </div>
  </nav>
        <Routes>
          <Route path="/" element={<Classifier onNewPrediction={addPrediction}/>} />
          <Route path="/dashboard" element={<Dashboard predictions={predictions}/>} />
        </Routes>
    </BrowserRouter>
  )
}
