document.getElementById('orange').onclick = switchToOrange;
document.getElementById('green').onclick = switchToGreen;
document.getElementById('blue').onclick = switchToBlue;
document.getElementById('pink').onclick = switchToPink;

function switchToOrange(){
    document.getElementsByTagName('body')[0].style.background ='orange';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchToGreen(){
    document.getElementsByTagName('body')[0].style.background ='green';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchToBlue(){
    document.getElementsByTagName('body')[0].style.background ='blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchToPink(){
    document.getElementsByTagName('body')[0].style.background ='pink';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

