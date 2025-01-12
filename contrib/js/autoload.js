var Options ={
    debug: true,
    lang: 'en',
    height: 650,
};

document.addEventListener('DOMContentLoaded', function() {
    var tlCon = document.querySelector('#timeline-container')
    var tlObj = tlCon.querySelector('div:first-child')
    var blockId = tlObj.id
    console.log('blockID = ', blockId)
    var tlData = tlObj.dataset.name
    console.log('tlData = ', tlData)
    window.timeline = new TL.Timeline(blockId, tlData, Options)
})
