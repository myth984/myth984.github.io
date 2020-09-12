const loadPostImg = function() {
    document.querySelectorAll("#hotVideosSection .videoPreviewBg img").forEach(i => {
        i.src = `https://spider-1252739196.cos.ap-beijing.myqcloud.com/spider/img/${Math.floor(Math.random() * 10000)}.jpg`
    })

}
loadPostImg()