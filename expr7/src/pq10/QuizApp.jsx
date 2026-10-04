import { useState } from 'react';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    { question: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], answer: 2 },
    { question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 1 },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
    { question: 'Who wrote Romeo and Juliet?', options: ['Dickens', 'Hemingway', 'Shakespeare', 'Twain'], answer: 2 },
    { question: 'What is the largest ocean?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 3 }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Quiz App</h3>
      {showScore ? (
        <div style={{ textAlign: 'center' }}>
          <h4>Quiz Complete!</h4>
          <p style={{ fontSize: '24px', margin: '20px 0' }}>Your Score: {score} / {questions.length}</p>
          <button onClick={resetQuiz} style={{ padding: '10px 20px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <p style={{ marginBottom: '15px' }}>Question {currentQuestion + 1} of {questions.length}</p>
          <h4 style={{ marginBottom: '20px' }}>{questions[currentQuestion].question}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  backgroundColor: selectedAnswer === index
                    ? index === questions[currentQuestion].answer
                      ? '#10b981'
                      : '#ef4444'
                    : selectedAnswer !== null && index === questions[currentQuestion].answer
                      ? '#10b981'
                      : '#374151',
                  color: '#f9fafb',
                  border: '1px solid #4b5563',
                  borderRadius: '4px',
                  cursor: selectedAnswer === null ? 'pointer' : 'not-allowed'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
