
// Clicking on a project will show the project description below it (hopefully)

var x = document.getElementById("project-1-desc");
var y = document.getElementById("project-2-desc");
var z = document.getElementById("project-3-desc");

x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';

function toggle() {
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};

function toggle1() {
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
};

function toggle2() {
    if (z.style.display === 'none') {
        z.style.display = 'block';
    } else {
        z.style.display = 'none';
    }
};

// End of Project toggling
