document.addEventListener("DOMContentLoaded", function() {
    const docobj = document.querySelector('.mod-timeline');
    let blockId = docobj.id;
    let jsonFile = docobj.dataset.name;
    var timelineOptions = {
        height: 650,
        timenav_height: 250,
        language: 'en'
    }
    window.timeline = new TL.Timeline(blockId, jsonFile, timelineOptions);
});