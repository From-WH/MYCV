!function () {
    var view = document.querySelector('#TopNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', (x) => {
                var view = this.view
                if (window.scrollY > 0) {
                    view.classList.add('stick')
                } else {
                    view.classList.remove('stick')
                }
            })
        }
    }
    controller.init(view)
}.call()