document.addEventListener('DOMContentLoaded', function() {
    var tlCon = document.querySelector('#timeline-container');
    var tlObj = tlCon.querySelector('div:first-child');
    var blockId = tlObj.id;
    var tlData = tlObj.dataset.name;
    var debugData = tlObj.dataset.debug;

    if (debugData == 'true') {
        var debugOn = true
    } else {
        var debugOn = false
    };

    if (debugOn) {
        console.log('blockID = ', blockId)
        console.log('tlData = ', tlData)
        console.log('Debug = ', debugOn)
    };

    var Options ={
        debug: debugData,
        lang: 'en',
        height: 650,
    };
    window.timeline = new TL.Timeline(blockId, tlData, Options);
})
