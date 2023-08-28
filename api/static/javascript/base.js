// global variable (boolean) that indicates if the instructions message should be opened or closed
var showInstructions = true;

// global variable (boolean) that indicates if the about message should be opened or closed
var showAbout = true;

// global variable (Element) that represents the highest HTML element in the document tree
var root = document.documentElement;


$(document).keydown(
    /**
    * Event handling function for the keydown event 
    * @param {Event} e  Keyboard event object handler
    */
    function (e) {

        // true if one of the arrow keys is pressed; false otherwise
        var arrowKeyPressed = false;

        // if the active element is valid and the id is between 0-80
        if (document.activeElement.id != "" && document.activeElement.id >= 0 && document.activeElement.id < 81) {

            // select the cell in order to easily replace the number
            document.getElementById(document.activeElement.id).select();

            // if the key is the "RIGHT ARROW", move the focus to the cell after it
            if (event.keyCode == 39) {
                currentId = document.activeElement.id;
                if (currentId != 80) {
                    nextId = parseInt(currentId) + 1;
                }
                arrowKeyPressed = true;
            }

            // if the key is the "LEFT ARROW", move the focus to the cell before it
            if (e.keyCode == 37) {
                currentId = document.activeElement.id;
                if (currentId != 0) {
                    nextId = parseInt(currentId) - 1;
                }
                arrowKeyPressed = true;
            }

            // if the key is the "DOWN ARROW", move the focus to the cell below it
            if (e.keyCode == 40) {
                currentId = document.activeElement.id;
                if (currentId < 72) {
                    nextId = parseInt(currentId) + 9;
                }
                else if (currentId != 80) {
                    nextId = parseInt(currentId) - 71;
                }
                arrowKeyPressed = true;
            }

            // if the key is the "UP ARROW", move the focus to the cell above it
            if (e.keyCode == 38) {
                currentId = document.activeElement.id;
                if (currentId > 8) {
                    nextId = parseInt(currentId) - 9;
                }
                else if (currentId != 0) {
                    nextId = parseInt(currentId) + 71;
                }
                arrowKeyPressed = true;
            }

            // if one of the "ARROW" keys was pressed, focus on the cell that was set by "nextId"
            if (arrowKeyPressed) {
                document.getElementById(nextId).focus();
            }
        }
    }
);

document.onreadystatechange = function () {
    /**
    * Alter the class of the body once the window has finished loading
    */
    if (document.readyState === "complete") {
        document.getElementById("body").className = "all-loaded";
    }
}

/**
 * Changes the inner HTML of the "Change Theme" div to display the theme options the user can select from 
 */
function themeOption() {
    document.getElementById("changetheme").innerHTML = `
    <div id="themescontainer">
    <div class="themes" id="cybergreen" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="white" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="red" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="blue" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    </div>
    `;
}

/**
 * If a theme has been selected, reverts the "Change Theme" div back to its original HTML
 */
function revertChangeTheme() {
    document.getElementById("changetheme").innerHTML = `
    <div onclick="themeOption()">Change Theme</div>`;
}


/**
 * Changes theme based on user specified selection
 */
function changeTheme() {

    // obtain the theme in cache and assign it to "themeid"
    var themeid = window.localStorage.getItem("storedTheme");

    // reset the shift indicator
    document.getElementById("shiftIndication").style = "background-color: none";

    // if theme is white
    if (themeid == "white") {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "rgba(130, 129, 129)"); //board line color
        root.style.setProperty('--itemBackground',"rgba(0, 0, 0)"); //square color
        root.style.setProperty('--textColor', "#f6f0e8"); 
        root.style.setProperty('--readOnlyColor', "#f6f0e8");
        root.style.setProperty('--tableColor', "#f6f0e8");
        root.style.setProperty('--headerColor', "#0a0a0a");
        root.style.setProperty('--tableItemBackground', "#808080");
        root.style.setProperty('--buttonBackground', "#808080");
        root.style.setProperty('--buttonText', "#0a0a0a");
        root.style.setProperty('--highlightColor', "rgba(129, 133, 129)");
        root.style.setProperty('--messageTextColor', "#0a0a0a");
        root.style.setProperty('--focusText', "#808080");
        root.style.setProperty('--highlightOpacity', "brightness(90%)");
        root.style.setProperty('--shiftIndication', "#0a0a0a");
        root.style.setProperty('--linkColor', "#4f4f4f");
        root.style.setProperty('--buttonColor', "#f6f0e8");
        root.style.setProperty('--darkerButtonColor', "#595959");
        root.style.setProperty('--lighterButtonColor', "#7f7f7f;");
        root.style.setProperty('--bodyTextColor', "white");
        root.style.setProperty('--underlineColor', "white");
        root.style.setProperty('--opPreColor', "rgba(255, 255, 255, 0.8)");
        root.style.setProperty('--opFocusedColor', "rgba(130, 129, 129, 0.8)");

        window.localStorage.setItem("storedTheme", "white");

    }

    // if theme is green
    else if (themeid == "cybergreen") {

        root.style.setProperty('--primaryColor', "rgba(0, 158, 0)"); //board line color
        root.style.setProperty('--itemBackground', "rgba(0, 0, 0)"); //square in each board color
        root.style.setProperty('--textColor', "rgba(209, 255, 219)"); //button text color??
        root.style.setProperty('--readOnlyColor', "rgba(209, 255, 219)");
        root.style.setProperty('--tableColor', "#04f700");
        root.style.setProperty('--headerColor', "#04f700");
        root.style.setProperty('--tableItemBackground', "#a1c4db");
        root.style.setProperty('--buttonBackground', "#4f4f4f");
        root.style.setProperty('--buttonText', "#04f700");
        root.style.setProperty('--highlightColor', "rgba(17, 128, 0)");
        root.style.setProperty('--messageTextColor', "#bbe1fa");
        root.style.setProperty('--focusText', "#226897");
        root.style.setProperty('--highlightOpacity', "brightness(75%)");
        root.style.setProperty('--shiftIndication', "#bbe1fa");
        root.style.setProperty('--linkColor', "orange");
        root.style.setProperty('--buttonColor', "rgba(0, 255, 0, 0.7)");
        root.style.setProperty('--darkerButtonColor', "rgba(0, 255, 0, 1)");
        root.style.setProperty('--lighterButtonColor', "#8cff8a");
        root.style.setProperty('--bodyTextColor', "#8cff8a");
        root.style.setProperty('--underlineColor', "rgba(0, 255, 0, 0.7)");
        root.style.setProperty('--opPreColor', "rgba(140, 255, 138, 0.8)");
        root.style.setProperty('--opFocusedColor', "rgba(0, 158, 0, 0.8)");

        window.localStorage.setItem("storedTheme", "cybergreen");
    }
    
    // if theme is red
    else if (themeid == "red") {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "rgb(252, 0, 0)");
        root.style.setProperty('--itemBackground', "rgba(0, 0, 0)");
        root.style.setProperty('--textColor', "rgba(250, 124, 115)");
        root.style.setProperty('--readOnlyColor', "rgba(250, 124, 115)");
        root.style.setProperty('--tableColor', "#e43a19");
        root.style.setProperty('--headerColor', "#e43a19");
        root.style.setProperty('--tableItemBackground', "#f2f4f7");
        root.style.setProperty('--buttonBackground', "#e43a19");
        root.style.setProperty('--buttonText', "#020205");
        root.style.setProperty('--highlightColor', "rgba(232, 93, 0)");
        root.style.setProperty('--messageTextColor', "#f6f0e8");
        root.style.setProperty('--focusText', "#F3ECE7");
        root.style.setProperty('--highlightOpacity', "brightness(75%)");
        root.style.setProperty('--shiftIndication', "#e43a19");
        root.style.setProperty('--linkColor', "#e43a19");
        root.style.setProperty('--buttonColor', "rgba(255, 17, 0)");
        root.style.setProperty('--darkerButtonColor', "rgba(0, 255, 0, 1)");
        root.style.setProperty('--lighterButtonColor', "rgba(250, 124, 115)");
        root.style.setProperty('--bodyTextColor', "rgba(250, 124, 115)");
        root.style.setProperty('--underlineColor', "rgba(255, 17, 0)");
        root.style.setProperty('--opPreColor', "rgba(250, 124, 115, 0.8)");
        root.style.setProperty('--opFocusedColor', "rgba(252, 0, 0, 0.8)");


        window.localStorage.setItem("storedTheme", "red");
    }

    // if theme is blue
    else {
        // change document CSS colors
        root.style.setProperty('--primaryColor', "rgba(0, 50, 252)");
        root.style.setProperty('--itemBackground', "rgba(0,0,0)");
        root.style.setProperty('--textColor', "rgba(120, 140, 255)");
        root.style.setProperty('--readOnlyColor', "rgba(120, 140, 255)");
        root.style.setProperty('--tableColor', "#28595c");
        root.style.setProperty('--headerColor', "#28595c");
        root.style.setProperty('--tableItemBackground', "#62a7a1");
        root.style.setProperty('--buttonBackground', "#4db492");
        root.style.setProperty('--buttonText', "#d2fff0");
        root.style.setProperty('--highlightColor', "rgba(159, 33, 255)");
        root.style.setProperty('--messageTextColor', "#1b4857");
        root.style.setProperty('--focusText', "#28595c");
        root.style.setProperty('--highlightOpacity', "brightness(90%)");
        root.style.setProperty('--shiftIndication', "#28595c");
        root.style.setProperty('--linkColor', "#b266ff");
        root.style.setProperty('--buttonColor', "rgba(5, 43, 255)");
        root.style.setProperty('--darkerButtonColor', "rgba(0, 255, 0, 1)");
        root.style.setProperty('--lighterButtonColor', "rgba(120, 140, 255)");
        root.style.setProperty('--bodyTextColor', "rgba(120, 140, 255)");
        root.style.setProperty('--underlineColor', "rgba(5, 43, 255)");
        root.style.setProperty('--opPreColor', "rgba(120, 140, 255, 0.8)");
        root.style.setProperty('--opFocusedColor', "rgba(0, 50, 252, 0.8)");

        // store the theme "light" in local cache
        window.localStorage.setItem("storedTheme", "blue");
    }

    // if "curId" is valid
    if (curId != null) {

        // focus onto "curId"
        document.getElementById(curId).focus();
        
        // if the highlightRcb toggle is on, call it
        if (isHighlightRcb) {
            highlightRcb();
        }

         // if the highlightNums toggle is on, call it
        if (isHighlightNums) {
            highlightNums();
        }

    }

    // select all cells
    for (var i = 0; i < 81; i++) {
        selectArray[i] = true;
    }
    
    // indicate that selecting has finished
    isSelectMultiple = false;
    
    // loop through all 81 cells
    for (var i = 0; i < 81; i++) {

        // if the cell is selected
        if (selectArray[i]) {

                document.getElementById(i).style.backgroundColor = root.style.getPropertyValue('--itemBackground');
            

            // deselect the cell
            selectArray[i] = false;
        }
    }
}

/**
 * Displays "Instructions" message
 */
function instructionsDisplay() {

    // close check message if it is open
    if (document.getElementById("checkoverlay").style.display != "none") {
        document.getElementById("checkoverlay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
    }

    // close "About Us" message if it is open
    if (!showAbout) {
        document.getElementById("aboutdisplay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("about").innerHTML = "About";
        showAbout = true;
    }

    // display "Instructions" message
    if (showInstructions) {
        document.getElementById("instructionsdisplay").style.display = "block";
        document.getElementById("grid-container").style.display = "none";
        document.getElementById("instructions").innerHTML = "Close Instructions";
        showInstructions = false;
    }

    // close "Instructions" message
    else {
        document.getElementById("instructionsdisplay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("instructions").innerHTML = "Instructions";
        showInstructions = true;
    }
}

/**
 * Displays "About Us" message
 */
function aboutDisplay() {
    
    // close check message if it is open
    if (document.getElementById("checkoverlay").style.display != "none") {
        document.getElementById("checkoverlay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
    }

    // close "Instructions" message if it is open 
    if (!showInstructions) {
        document.getElementById("instructionsdisplay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("instructions").innerHTML = "Instructions";
        showInstructions = true;
    }

    // display "About Us" message
    if (showAbout) {
        document.getElementById("aboutdisplay").style.display = "block";
        document.getElementById("grid-container").style.display = "none";
        document.getElementById("about").innerHTML = "Close About Us";
        showAbout = false;
    }
    
    // close "About Us" message
    else {
        document.getElementById("aboutdisplay").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("about").innerHTML = "About Us";
        showAbout = true;
    }

}

/**
 * Ensures that the inputted sudoku is valid
 * @return {boolean}  True if the inputted sudoku is valid; false otherwise
 */
function validate() {

    // initialize variable "grid" as an array; this will hold all numbers from the sudoku
    var grid = [];

    // loop through 0-8; this will serve as the row number
    for (i = 0; i < 9; i++) {

        // initialize variable "gridRow" in order to create a 2D array
        var gridRow = [];

        // loop through 0-8; this will serve as the column number
        for (j = 0; j < 9; j++) {

            // if the there is no inputted value in a cell, add a 0 to "gridRow"
            if (document.getElementById(i * 9 + j).value == "") {
                gridRow.push(0);
            }

            // else add the inputted value to "gridRow"
            else {
                gridRow.push(parseInt(document.getElementById(i * 9 + j).value));
            }
        }

        // add "gridRow" to "grid"
        grid.push(gridRow);
    }

    // loop through all 81 positions in "grid" using a nested for loop
    for (x = 0; x < 9; x++) {
        for (y = 0; y < 9; y++) {

            // "listR" contains all the numbers in a given row "x"
            var listR = grid[x];

            // "listC" contains all the numbers in a given column "y"
            var listC = [];
            for (i = 0; i < 9; i++) {
                listC.push(grid[i][y])
            }

            // "listB" contains all the numbers in a given cell's box
            var listB = [];
            var listMR = [];
            var listMC = [];
            var modR = (x + 1) % 3;
            var modC = (y + 1) % 3;
            if (modR == 0) {
                var listMR = [x, x - 1, x - 2];
            }
            else if (modR == 1) {
                listMR = [x, x + 1, x + 2];
            }
            else {
                listMR = [x - 1, x, x + 1];
            }

            if (modC == 0) {
                listMC = [y, y - 1, y - 2];
            }

            else if (modC == 1) {
                listMC = [y, y + 1, y + 2];
            }
            else {
                listMC = [y - 1, y, y + 1];
            }
            for (i = 0; i < listMR.length; i++) {
                for (j = 0; j < listMC.length; j++) {
                    listB.push(grid[listMR[i]][listMC[j]]);
                }
            }

            // obtain the number in a specific cell
            num = grid[x][y];

            // reset the counts of each list to 0
            var countR = 0;
            var countC = 0;
            var countB = 0;

            // loop through lists "listR", "listC", and "listB"; count how many times num appears in each list
            for (i = 0; i < listR.length; i++) {
                if (listR[i] != 0 && num == listR[i]) {
                    countR += 1;
                }
            }
            for (i = 0; i < listC.length; i++) {
                if (num == listC[i] && listC[i] != 0) {
                    countC += 1;
                }
            }
            for (i = 0; i < listB.length; i++) {
                if (num == listB[i] && listB[i] != 0) {
                    countB += 1;
                }
            }

            // if any count is greater than 1, the sudoku is invalid
            if (countR > 1 || countC > 1 || countB > 1) {

                // close "Instructions" message if open
                if (!showInstructions) {
                    document.getElementById("instructionsdisplay").style.display = "none";
                    document.getElementById("grid-container").style.display = "grid";
                    document.getElementById("instructions").innerHTML = "Instructions";
                    showInstructions = true;
                }

                // close "About Us" message if open
                if (!showAbout) {
                    document.getElementById("aboutdisplay").style.display = "none";
                    document.getElementById("grid-container").style.display = "grid";
                    document.getElementById("about").innerHTML = "About Us";
                    showAbout = true;
                }

                // show message that the sudoku is invalid
                document.getElementById("checkoverlay").innerHTML = `
                <div id="checkcenter">
                The board you inputted is invalid.
                <br>
                <div onclick="
                document.getElementById('checkoverlay').style.display = 'none';
                document.getElementById('grid-container').style.display = 'grid';
                " class="optiondivs" id="close">Close</div>
                </div>
                `;
                document.getElementById("checkoverlay").style.display = "block";
                document.getElementById("grid-container").style.display = "none";
                return false;
            }
        }
    }

    // the sudoku is valid
    return true;
}