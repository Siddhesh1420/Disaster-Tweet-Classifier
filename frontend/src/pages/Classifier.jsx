import { useState } from "react"
import { predictTweet } from "../api"

export default function Classifier({ onNewPrediction }) {
    const[text,setText]=useState('')
    const[result,setResult]=useState(null)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)

    const handlePredict=async()=>{
        if(!text.trim()) {
            setError('Please enter a tweet')
            return
        }
        setLoading(true)
        setError(null)
        try{
            const data=await predictTweet(text)
            setResult(data)
            onNewPrediction(data)
        }
        catch(err){
            setError('Something went wrong. Please try again.')
        }
        setLoading(false)
    }
    return (
  <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-16 px-4">
    
    {/* Header */}
    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Disaster Tweet Classifier
    </h1>
    <p className="text-gray-400 mb-8">
    Real-time disaster detection using{" "}
    <span className="text-purple-400 font-semibold">DistilBERT</span>
    {" "}fine-tuned on 7,000+ tweets
    </p>

    {/* Input card */}
    <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a tweet..."
        className="w-full bg-gray-900 text-white border border-gray-600 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition-all resize-none"
        rows={4}
      />
      <button
        onClick={handlePredict}
        disabled={loading}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50"
      >
        {loading ? "Predicting..." : " Predict"}
      </button>
    </div>

    {/* Error */}
    {error && (
      <p className="mt-4 text-red-400">{error}</p>
    )}

    {/* Result card */}
    {result && (
      <div className={`mt-6 w-full max-w-2xl rounded-2xl p-6 border ${
        result.label === "Disaster" 
          ? "bg-red-900/30 border-red-500" 
          : "bg-green-900/30 border-green-500"
      }`}>
        <p className={`text-2xl font-bold mb-2 ${
          result.label === "Disaster" ? "text-red-400" : "text-green-400"
        }`}>
          {result.label === "Disaster" ? "🚨 Disaster" : "✅ Not Disaster"}
        </p>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${result.label === "Disaster" ? "bg-red-500" : "bg-green-500"}`}
              style={{ width: `${(result.confidence * 100).toFixed(1)}%` }}
            />
          </div>
          <span className="text-white font-semibold">
            {(result.confidence * 100).toFixed(1)}%
          </span>
        </div>
        <p className="text-gray-400 text-sm">"{result.tweet}"</p>
      </div>
    )}
  </div>
)
}
