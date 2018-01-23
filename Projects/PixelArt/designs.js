// Select color input
const color = $('#colorPicker');

// Select size input
const gHeight = $('#input_height');
const gWidth = $('#input_width');

// Select table
const grid = $('#pixel_canvas');

// Function to color cell
function changeColor() {
    $(this).css('background-color', color.val());
}

// Create grid
function makeGrid(evt) {
    //prevent page reload
    evt.preventDefault();
    // Let's reset the grid first, so we don't have to reload the page each time
    $('.rows').remove();
    $('.cells').remove();

    // Variable to store HTML rows/cells
    let gridHTML = '';
    //Create table rows
    for (var x = 0; x < gHeight.val(); x++) {
        gridHTML += '<tr class="rows">';
        //Create table cells
        for (var i = 0; i < gWidth.val(); i++) {
            gridHTML += '<td class="cells"></td>';
        }
        // End table rows
        gridHTML += '</tr>';
    }
    // Append HTML to table
    grid.append(gridHTML);

}

// When size is submitted by the user, call makeGrid()
$('input:submit').click(makeGrid);

// Call changeColor() when cell is clicked
$(grid).on('click','td',changeColor);