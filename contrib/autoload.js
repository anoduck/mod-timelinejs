document.addEventListener("DOMContentLoaded", function () {
    const tlElem = document.querySelector('.mod-timeline');
    const blockId = tlElem.id;
    const jsonFile = tlElem.dataset.src;
    let options = {
        height: 650,
        timenav_height: 150
    };
    window.timeline = new TL.Timeline( blockId, jsonFile, options )
});