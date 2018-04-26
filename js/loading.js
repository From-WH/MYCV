//实现进入页面的loading
!function () {
    setTimeout(function () {
        sitewelcome.classList.remove('active')
    }, 500);          //loading动画1秒
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 1000);         // 内容浮动一秒内完成   
}.call()
