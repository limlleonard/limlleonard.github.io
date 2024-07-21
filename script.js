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
