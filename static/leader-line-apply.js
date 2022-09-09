color = 'rgba(0,0,0,0.1)'
var attrs = {
    color: color, startSocket: 'bottom', endSocket: 'top'
}

var attrs_info = {
    color: color, startSocket: 'top', endSocket: 'left'
}

// This function is called when the page is cleared. (form is submitted)
function connect(start, end, startSocket='bottom', endSocket='top', path='fluid') {
    startObj = document.getElementById(start)
    endObj = document.getElementById(end)
    if(startObj != null && endObj != null) {
        new LeaderLine(startObj, endObj, {color: color, startSocket: startSocket, endSocket: endSocket, path: path});
    }
}

function addAllLines() {
    connect('background', 'concepts', 'right', 'top')
//    connect('concepts', 'browse_catalogs', 'left', 'right')
//    connect('concepts', 'share_solutions', 'right', 'left')
//    connect('concepts', 'installer-line')
    connect('browse_catalogs', 'run_solution_from_catalog')
    connect('share_solutions', 'solution_writing')
    connect('solution_writing', 'sharing_via_catalogs')
    connect('local_catalog', 'packaging-coming-soon')
    connect('run_solution_from_catalog', 'solutions_data_workflows', 'bottom', 'top')
}

function clearLines() {
  var paras = document.getElementsByClassName('leader-line');

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
}
clearLines();
addAllLines();
