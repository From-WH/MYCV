!function () {
    var APP_ID = 'U42NTGFfgjD4gP4pmr1pBCaS-gzGzoHsz';
    var APP_KEY = 'X6BIXXme08ag0FKu3GrNsLec';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });


    var query = new AV.Query('Message');
    query.find().then(function (messages) {
        let array = messages.map((item) => item.attributes)
        array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
            let messageList = document.querySelector('#messageList')
            messageList.append(li)
        })
    })



    let myForm = document.querySelector('#postMessageForm')

    myForm.addEventListener('submit', function (e) {
        e.preventDefault()
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value
        var Message = AV.Object.extend('Message');
        var Message = new Message();
        Message.save({
            'content': content,
            'name': name
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}:${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.append(li)
            myForm.querySelector('input[name=content]').value = ''
        })
    })
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