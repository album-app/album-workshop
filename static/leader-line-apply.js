color = 'rgba(0,0,0,0.3)'
var attrs = {
    color: color, startSocket: 'bottom', endSocket: 'top'
}

var attrs_info = {
    color: color, startSocket: 'top', endSocket: 'left'
}

// This function is called when the page is cleared. (form is submitted)
function connect(start, end, startSocket='bottom', endSocket='top') {
    startObj = document.getElementById(start)
    endObj = document.getElementById(end)
    console.log(startObj)
    console.log(endObj)
    if(startObj != null && endObj != null) {
    console.log("adding line")
        new LeaderLine(startObj, endObj, {color: color, startSocket: startSocket, endSocket: endSocket});
    }
}

function addAllLines() {
    console.log("adding all lines");
    //new LeaderLine(document.getElementById('album'), document.getElementById('concepts'), attrs);
    connect('concepts', 'background', 'top', 'right')
    //new LeaderLine(document.getElementById('concepts'), document.getElementById('background'), {color: color, startSocket: 'top', endSocket: 'right'});
    //new LeaderLine(document.getElementById('concepts'), document.getElementById("browse_catalogs"), {color: color, startSocket: 'left', endSocket: 'right'});
    //new LeaderLine(document.getElementById('concepts'), document.getElementById("share_solutions"), {color: color, startSocket: 'right', endSocket: 'left'});
    //new LeaderLine(document.getElementById('concepts'), document.getElementById("installer-line"), attrs);
    //new LeaderLine(document.getElementById('browse_catalogs'), document.getElementById("run_solution_from_catalog"), attrs);
    //new LeaderLine(document.getElementById('share_solutions'), document.getElementById("solution_writing"), attrs);
    //new LeaderLine(document.getElementById('run_solution_from_catalog'), document.getElementById("solutions_data_workflows"), {color: color, startSocket: 'bottom', endSocket: 'top'});
    //new LeaderLine(document.getElementById('solution_writing'), document.getElementById("sharing_via_catalogs"), attrs);
    //new LeaderLine(document.getElementById('local_catalog'), document.getElementById("packaging-coming-soon"), attrs);
}

function clearLines() {
  var paras = document.getElementsByClassName('leader-line');

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
}
clearLines();
addAllLines();
