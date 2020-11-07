document.getElementsByClassName('phoneMenu')[0].onclick = () => {
    if(document.getElementById('phoneMenuPanel').style.display=='block'){
        document.getElementById('phoneMenuPanel').style.display='none'
    }else{
        document.getElementById('phoneMenuPanel').style.display='block'
    }
}