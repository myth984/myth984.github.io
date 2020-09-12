const loadPostInfo = function() {
    document.querySelectorAll("#hotVideosSection .videoPreviewBg img").forEach(i => {
        i.src = 'http://lorempixel.com/258/145/?v=' + Math.floor(Math.random() * 10000)
    })
    for (let i of document.getElementsByClassName("js-viewCount")) {
        let r = Math.random()
        i.innerHTML = Math.round(r * 1000) + (r > 0.5 ? 'M' : 'K') + '次观看'

    }
    for (let i of document.getElementsByClassName("js-likeCount")) {
        let min = 70;
        let max = 100;
        i.innerHTML = parseInt(Math.random() * (max - min + 1) + min, 10) + '%'
    }
}
loadPostInfo()