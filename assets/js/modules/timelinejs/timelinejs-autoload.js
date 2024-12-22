document.addEventListener("DOMContentLoaded", function() {
    const tlObj = document.querySelector('.mod-timeline');
    let blockId = tlObj.id;
    let jsonFile = tlObj.dataset.name;

    window.timeline = new TL.Timeline(blockId, jsonFile);
});