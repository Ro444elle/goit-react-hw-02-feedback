import React from 'react';

function Statistics({ feedbackCounts }) {
  const { good, neutral, bad } = feedbackCounts;
  const total = good + neutral + bad;
  const positivePercentage =
    total === 0 ? 0 : ((good / total) * 100).toFixed(2);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
