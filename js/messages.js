!function () {

    var model = Model({resourceName:'Message'})

    var view = View('section.message')

    var controller = Controller({
        messageList: null,
        form:null,
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.append(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e)=> {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('textarea[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            if (name.trim().length !== 0 && content.trim().length !== 0 ) {
                this.model.save({
                    'name':name, 
                    'content':content
                }).then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}:${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.append(li)
                    myForm.querySelector('textarea[name=content]').value = ''
                })               
            } else{
                alert('亲~记得输入昵称和内容喔~')
            }

        }
    })
    controller.init(view, model)
}.call()



// MVC前代码
// !function () {
//     var APP_ID = 'U42NTGFfgjD4gP4pmr1pBCaS-gzGzoHsz';
//     var APP_KEY = 'X6BIXXme08ag0FKu3GrNsLec';

//     AV.init({
//         appId: APP_ID,
//         appKey: APP_KEY
//     });


//     var query = new AV.Query('Message');
//     query.find().then(function (messages) {
//         let array = messages.map((item) => item.attributes)
//         array.forEach((item) => {
//             let li = document.createElement('li')
//             li.innerText = `${item.name}:${item.content}`
//             let messageList = document.querySelector('#messageList')
//             messageList.append(li)
//         })
//     })



//     let myForm = document.querySelector('#postMessageForm')

//     myForm.addEventListener('submit', function (e) {
//         e.preventDefault()
//         let content = myForm.querySelector('input[name=content]').value
//         let name = myForm.querySelector('input[name=name]').value
//         var Message = AV.Object.extend('Message');
//         var Message = new Message();
//         Message.save({
//             'content': content,
//             'name': name
//         }).then(function (object) {
//             let li = document.createElement('li')
//             li.innerText = `${object.attributes.name}:${object.attributes.content}`
//             let messageList = document.querySelector('#messageList')
//             messageList.append(li)
//             myForm.querySelector('input[name=content]').value = ''
//         })
//     })
// }.call()