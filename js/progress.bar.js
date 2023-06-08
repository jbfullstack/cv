// Find all elements with the class "progress-bar-component"
const progressBarElements = document.querySelectorAll('.progress-bar-component');

// Loop through each element
progressBarElements.forEach((element) => {
  // Get the skill and value from the data attributes
  const skill = element.getAttribute('data-skill');
  const value = parseInt(element.getAttribute('data-value'));

  // Create the progress bar element
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.style.width = `${value}%`;

  // Create the percentage element
  const percentage = document.createElement('div');
  percentage.classList.add('percentage');
  percentage.textContent = value + '%';

  // Create the skill element
  const skillElement = document.createElement('div');
  skillElement.classList.add('skill');
  skillElement.textContent = skill;

  // Append the skill and percentage to the progress bar
  progressBar.appendChild(skillElement);
  progressBar.appendChild(percentage);

  // Replace the content of the progress bar component with the progress bar
  element.innerHTML = '';
  element.appendChild(progressBar);
});
