document.addEventListener('DOMContentLoaded', () => {
  // Pull projects list from external json file
  // This way I can add and modify project data with ease
  fetch('../data/projects.json')
    .then(response => response.json())
    .then(data => {
      runData(data.projects);
    });
});

runData = data => {
  const projectSection = document.getElementsByClassName(
    'projects-container'
  )[0];
  // Pull the last project first
  const lastEntry = data.length - 1;
  let html = '';

  for (let i = lastEntry; i >= 0; i--) {
    // Iterate over projects and add them to projects section of page
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
      `<div class="project-links">`;
    pUrl &&
      (html += `<a href="${pUrl}" class="project-live" target="_blank">Live Version</a>`);
    pUrl && source && (html += ` | `);
    source &&
      (html += `<a href="${source}" class="project-source" target="_blank">Source</a></div>`);
    html += `</div>`;
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
