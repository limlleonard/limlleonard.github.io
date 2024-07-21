function toggleRows(cell, rowCount) {
  const row = cell.closest('tr');
  let nextRow = row.nextElementSibling;
  let rowsToggled = 0;

  while (nextRow && rowsToggled < rowCount) {
      nextRow.classList.toggle('hidden');
      nextRow = nextRow.nextElementSibling;
      rowsToggled++;
  }

  // const triangle = cell.querySelector('.triangle');
  // if (triangle) {
  //     if (triangle.classList.contains('hidden-triangle')) {
  //         triangle.classList.remove('hidden-triangle');
  //         cell.innerHTML = cell.innerHTML.replace(' &#9662;', ''); // Remove the added triangle
  //         cell.insertAdjacentHTML('beforeend', ' <span class="triangle">&#9662;</span>'); // Add back the original triangle
  //     } else {
  //         triangle.classList.add('hidden-triangle');
  //     }
  // }
}


  // Dictionary of skills and their levels
const skills = {
    'Python': 9,
    'HTML, CSS, JavaScript': 7,
	'PHP':2,
	'SQL':6,
	'Bash':6,
    'C/C++': 2,
	'Azure DevOps': 4,
	'Docker': 4,
	'PowerBI': 4,
	'Word, PowerPoint, Excel':7
};
// Function to create skill bars based on the skill level
function createSkillBars(id1) {
    const table = document.getElementById(id1);
    let row;
    let count = 0;
    for (const [skillName, skillLevel] of Object.entries(skills)) {
        // Create a new row every two skills
        if (count % 2 === 0) {
            row = document.createElement('tr');
            table.appendChild(row);
        }

        const skillCell = document.createElement('td');
		skillCell.className='skillCell'
        const levelCell = document.createElement('td');
		levelCell.className='levelCell'

        skillCell.innerHTML = `${skillName}`;
        levelCell.innerHTML = `
            <div class="skill-bar-container">
                <div class="skill-bar" style="width: ${skillLevel * 10}%"></div>
            </div>
        `;

        row.appendChild(skillCell);
        row.appendChild(levelCell);

        count++;
    }

    // Handle case where there's an odd number of skills
    if (count % 2 !== 0) {
        const emptyCell1 = document.createElement('td');
        const emptyCell2 = document.createElement('td');
        row.appendChild(emptyCell1);
        row.appendChild(emptyCell2);
    }
}

// Call the function to create skill bars
createSkillBars('table-skill');