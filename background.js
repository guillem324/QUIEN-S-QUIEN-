window.addEventListener('load', function() {
  const backgroundContainer = document.querySelector('.background-questions');
  if (!backgroundContainer) return;
  
  const numQuestions = 30;
  
  for (let i = 0; i < numQuestions; i++) {
    const questionMark = document.createElement('div');
    questionMark.className = 'question-mark';
    questionMark.textContent = '?';
    questionMark.style.left = Math.random() * 100 + '%';
    questionMark.style.top = Math.random() * 100 + '%';
    
    questionMark.style.animationDelay = Math.random() * 8 + 's';
    
    questionMark.style.fontSize = (Math.random() * 90 + 60) + 'px';
    
    backgroundContainer.appendChild(questionMark);
  }
});
