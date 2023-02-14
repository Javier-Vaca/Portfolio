let project1 = document.getElementById('project-1');
let project1Desc = document.getElementById('project-1-desc');

project1Desc.hidden = true;

project1.onclick = function() {
    project1Desc.hidden = false;
}