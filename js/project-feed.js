document.addEventListener('DOMContentLoaded', () => {
  // Pull projects list from external json file
  // This way I can add and modify project data with ease
  fetch('http://127.0.0.1:8080/data/projects.json')
    .then(response => response.json())
    .then(data => {
      runData(data.projects);
    });
});

runData = data => {
  const projectSection = document.getElementsByClassName('projects-container')[0];
  // Pull the last project first
  const lastEntry = data.length - 1;
  let html = '';

  for (let i = lastEntry; i >= 0; i--) {
    // Iterate over projects
    const name = data[i].name;
    const category = setCategory(data[i].category);
    const description = data[i].description;
    const pUrl = data[i].url;
    const source = data[i].source;
    html +=
      `<div class="project-item">` +
      `<div><h3 class="project-title">${name}</h3></div>` +
      `<div class="project-category">${category}</div>` +
      `<div class="project-description">${description}</div>` +
      `<div class="project-links">` +
      `<a href="${pUrl}" class="project-live" target="_blank">Live Version</a> | ` +
      `<a href="${source}" class="project-source" target="_blank">Source</a></div>` +
      `</div>`;
  }
  projectSection.innerHTML += html;
};

setCategory = data => {
  switch (data) {
    case 1:
      return 'Udemy: The Web Developer Bootcamp by Colt Steele';
      break;
    case 2:
      return 'FreeCodeCamp';
      break;
    case 3:
      return 'Udacity Front-end Nanodegree';
      break;
    default:
      return 'N/A;';
  }
};
