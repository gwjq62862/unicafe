import { useState } from 'react'

import StatisticsLine from './components/StatisticsLine'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table >
            <tbody>
              <StatisticsLine text={'good'} value={good} />
              <StatisticsLine text={'neutral'} value={neutral} />
              <StatisticsLine text={'bad'} value={bad} />
              <StatisticsLine text={'all'} value={all} />
              <StatisticsLine text={'average'} value={average} />
              <StatisticsLine text={'positive'} value={positive + ' %'} />
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default App