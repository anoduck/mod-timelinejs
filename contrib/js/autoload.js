const tlCon = document.querySelector('#timeline-container');
const tlObj = tlCon.querySelector('div:first-child');
let blockId = tlObj.id;
let tlData = tlObj.dataset.name;
let scripts = document.getElementsByTagName('script');
let jsPath = scripts[scripts.length-1].src;

let Options ={
    script_path: jsPath,
    debug: false
};

window.onload = function () {
    window.timeline = new TL.Timeline(blockId, tlData);
};
