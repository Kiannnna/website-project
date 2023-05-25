document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

  // Correct answers
  const correctAnswers = {
    q1: ['7'],
    q2: ['3'],
    q3: ['28'],
    q4: ['8']
  };

  // User answers
  const userAnswers = {
    q1: document.getElementById('Answer1').value.trim().toLowerCase(),
    q2: document.getElementById('Answer2').value.trim().toLowerCase(),
    q3: document.getElementById('Answer3').value.trim().toLowerCase(),
    q4: document.getElementById('Answer4').value.trim().toLowerCase()
  };

  // Score variables
  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  // Feedback and score container
  const feedbackContainer = document.getElementById('feedbackContainer');
  const resultContainer = document.getElementById('resultContainer');
  feedbackContainer.innerHTML = '';
  resultContainer.innerHTML = '';

  // Check answers and provide feedback
  for (const question in correctAnswers) {
    const userAnswer = userAnswers[question];
    const correctAnswer = correctAnswers[question];
    const feedback = document.createElement('p');
    const isCorrect = correctAnswer.some(answer => answer.toLowerCase() === userAnswer);

    if (isCorrect) {
      feedback.textContent = `Question ${question}: Correct!`;
      feedback.style.color = 'green';
      score++;
    } else {
      feedback.textContent = `Question ${question}: Incorrect. The correct answer is ${correctAnswer.join(' or ')}.`;
      feedback.style.color = 'red';
    }

    feedbackContainer.appendChild(feedback);
  }

  // Calculate score percentage
  const percentage = (score / totalQuestions) * 100;

  // Display score and percentage
  const result = document.createElement('p');
  result.textContent = `You got ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
  resultContainer.appendChild(result);

  // Provide appropriate response based on score
  const response = document.createElement('p');
  if (percentage === 100) {
    response.textContent = 'Congratulations! Perfect score!';
  } else if (percentage >= 75) {
    response.textContent = 'Well done! Keep up the good work!';
  } else {
    response.textContent = 'You can do better! Keep practicing!';
  }
  resultContainer.appendChild(response);
})
});