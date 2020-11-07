const loadPostInfo = function () {
    let imageSet = new Set();
    let imageHtmllCollection = document.querySelectorAll("#hotVideosSection .videoPreviewBg img")
    let maxImageSum = 316;
    if (imageHtmllCollection.length < maxImageSum) {
        // 保证图片不重复
        while (imageSet.size < maxImageSum) {
            imageSet.add(randNum(1, 316))
        }
        let imageArray = Array.from(imageSet);
        imageHtmllCollection.forEach((i, n) => {
            i.src = '/image/blog-image/' + imageArray[n] + '.jpg'
        })
    } else {
        imageHtmllCollection.forEach(i => {
            i.src = '/image/blog-image/' + randNum(1, 316) + '.jpg'
        })
    }
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

const randNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

loadPostInfo()

document.getElementsByClassName('search-btn')[0].onclick = () => {
    alert("搜索正在施工")
}

document.getElementById('switchEnglish').onclick = () => {
    alert("没有英文")
}

document.getElementById('closeSwitchEnglish').onclick = () => {
    document.getElementById('countryRedirectMessage').remove();
}

