var APP_ID = 'U42NTGFfgjD4gP4pmr1pBCaS-gzGzoHsz';
var APP_KEY = 'X6BIXXme08ag0FKu3GrNsLec';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
console.log('运行到这里显示')



var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    })
})




let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var Message = new Message();
    Message.save({
        'content': content
    }).then(function (object) {
        alert('留言成功');
    })
})

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })