document.getElementById('careerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const task = document.getElementById('taskPreference').value;
  const style = document.getElementById('workStyle').value;
  const skill = document.getElementById('skillFocus').value;

  // Simple tally logic for pathway matching
  const scores = { stem: 0, social: 0, arts: 0 };
  scores[task]++;
  scores[style]++;
  scores[skill]++;

  let selectedPathway = 'stem';
  if (scores.social > scores.stem && scores.social >= scores.arts) {
    selectedPathway = 'social';
  } else if (scores.arts > scores.stem && scores.arts > scores.social) {
    selectedPathway = 'arts';
  }

  displayResults(selectedPathway);
});

function displayResults(pathway) {
  const resultsCard = document.getElementById('results');
  const pathwayOutput = document.getElementById('pathwayOutput');
  const subjectsOutput = document.getElementById('subjectsOutput');
  const kemisStrategy = document.getElementById('kemisStrategy');

  subjectsOutput.innerHTML = '';

  if (pathway === 'stem') {
    pathwayOutput.innerHTML = '<strong>Recommended Pathway: STEM (Science, Tech, Engineering & Math)</strong>';
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
    subjects.forEach(sub => subjectsOutput.innerHTML += `<li>${sub}</li>`);
    kemisStrategy.innerText = 'Select National and Extra-County schools with dedicated pure science and technical laboratories on KEMIS.';
  } else if (pathway === 'social') {
    pathwayOutput.innerHTML = '<strong>Recommended Pathway: Social Sciences (Humanities & Business)</strong>';
    const subjects = ['History & Citizenship', 'Geography', 'Business Studies', 'Literature in English', 'Languages'];
    subjects.forEach(sub => subjectsOutput.innerHTML += `<li>${sub}</li>`);
    kemisStrategy.innerText = 'Select National and Extra-County schools offering double pathways in Social Sciences and Business on KEMIS.';
  } else {
    pathwayOutput.innerHTML = '<strong>Recommended Pathway: Arts and Sports Science</strong>';
    const subjects = ['Sports & Recreation', 'Human Anatomy', 'Music & Dance', 'Fine Arts', 'General Science'];
    subjects.forEach(sub => subjectsOutput.innerHTML += `<li>${sub}</li>`);
    kemisStrategy.innerText = 'Select schools with high-tier sports academies or creative arts centers registered on KEMIS.';
  }

  resultsCard.classList.remove('hidden');
  resultsCard.scrollIntoView({ behavior: 'smooth' });
}
