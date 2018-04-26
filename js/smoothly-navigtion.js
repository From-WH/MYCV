//如何实现页面跳转
!function () {
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    //这五行是抄的
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault() //阻止默认动作
            let a = x.currentTarget //获取点击元素
            let href = a.getAttribute('href') // 'siteAbout'
            let element = document.querySelector(href)
            let top = element.offsetTop
            let currentTop = window.scrollY     //文档在垂直方向已滚动的像素值
            let targetTop = top - 80            //需要跳转到的位置
            let s = targetTop - currentTop      // 位置差=跳转的位置-跳转前的位置
            var coords = { y: currentTop };     //跳转前的视口的位置
            let t = Math.abs((s / 100) * 500)   // 跳转像素每增加100px 就增加300毫秒
            if (t > 800) { t = 800 }            // 跳转的时间
            var tween = new TWEEN.Tween(coords)  // 获得目前视口位置
                .to({ y: targetTop }, t)          //跳转的位置及需要的时间
                .easing(TWEEN.Easing.Quadratic.Out)  //抄的，跳转形式
                .onUpdate(function () {              //更新后的update 调用
                    window.scrollTo(0, coords.y)     //跳转的位置
                })
                .start();        //   立即开始跳转
        }
    }   
}.call()
