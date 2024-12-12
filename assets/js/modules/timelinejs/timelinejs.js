document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('#timeline-container');

    if (container != null && doc != null) {
        let docobj = document.getElementsByClassName('.mod-timeline');
        let blockId = docobj.id;
        let elobj = document.querySelector('.mod-timeline')
        let jsonFile = elobj.dataset.name;

        var timelineOptions = {
            height: 600,
            language: 'en'
        }
        
        window.timeline = new TL.Timeline(blockId, jsonFile, timelineOptions);
    }
});