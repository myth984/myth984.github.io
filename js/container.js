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

const loadLoagPage = function(){
    let body = document.body;
    let iframe = document.createElement("iframe");
    iframe.src = "/loadpage/load" + randNum(1, 5) + ".html"
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.zIndex = 2;
    body.style.overflow = 'hidden';
    body.appendChild(iframe)
    window.onload=function(){ 
        iframe.remove();
        body.style.overflow = 'auto';
    } 
}
loadPostInfo()
loadLoagPage()

document.getElementsByClassName('search-btn')[0].onclick = () => {
    alert("搜索正在施工")
}

document.getElementById('switchEnglish').onclick = () => {
    alert("没有英文")
}

document.getElementById('closeSwitchEnglish').onclick = () => {
    document.getElementById('countryRedirectMessage').remove();
}

