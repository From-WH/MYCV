!function () {
    let specialTags = document.querySelectorAll('[data-x]')  //返回[data-x]元素列表
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')         // 当滑动到最近下一个一个元素时，触发标签上浮
    }
    //如何实现topNavBar的下拉后高亮
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset()
    })

    //helper
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')  //返回[data-x]元素列表
        let minindex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - window.scrollY)) {
                minindex = i
            }   // 距离窗口最近的元素
        }
        specialTags[minindex].classList.remove('offset')
        let id = specialTags[minindex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('aaa')
        }
        li.classList.add('aaa')
    }

    //如何实现 鼠标悬停弹出菜单
    let liTags = document.getElementsByClassName('menuTigger')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (xx) {
            xx.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (xx) {
            xx.currentTarget.classList.remove('active')
        }
    } 
}.call()
