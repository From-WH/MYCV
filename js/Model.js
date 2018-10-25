window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function () {
      var APP_ID = 'U42NTGFfgjD4gP4pmr1pBCaS-gzGzoHsz';
      var APP_KEY = 'X6BIXXme08ag0FKu3GrNsLec';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var query = new AV.Query(resourceName);
      return query.find() //promise对象
    },
    save: function (object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object)
    }
  }
}