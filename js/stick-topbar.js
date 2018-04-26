!function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            TopNavBar.classList.add('stick')
        } else {
            TopNavBar.classList.remove('stick')
        }
    })
}.call()
