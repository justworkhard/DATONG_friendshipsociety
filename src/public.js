exports.obj = {
  getHash: function() {
    var hash;
    hash = window.location.hash.match(/#(.*?)$/) && window.location.hash.match(/#(.*?)$/)[1];
    return hash;
  },
  set: function(key, val) {
    var hash, obj;
    if (!key) {
      return;
    }
    hash = this.getHash();
    obj = {};
    if (hash) {
      obj = this.createObjFromURI(hash);
      obj[key] = val;
    } else {
      obj = {};
      obj[key] = val;
    }
    hash = $.param(obj);
    window.location.replace('#' + hash);
  },
  setObject: function(object) {
    var hash, obj, param;
    hash = this.getHash() || '';
    obj = this.createObjFromURI(hash);
    param = $.param($.extend(obj, object));
    window.location.replace('#' + param);
  },
  get: function(key) {
    var hash, obj;
    if (!key) {
      return;
    }
    hash = this.getHash();
    if (!hash) {
      return '';
    }
    obj = this.createObjFromURI(hash);
    return obj[key];
  },
  getAll: function() {
    var hash, obj;
    hash = this.getHash();
    if (!hash) {
      return {};
    }
    obj = this.createObjFromURI(hash);
    return obj;
  },
  clearAll: function() {
    return window.location.hash = '';
  },
  createObjFromURI : function(paramStr) {
    var paramArr, paramObj;
    if (!paramStr) {
      return {};
    }
    paramArr = paramStr.split('&');
    paramObj = {};
    paramArr.forEach(function(item) {
      var param;
      param = item.split('=');
      paramObj[param[0]] = decodeURIComponent(param[1]);
    });
    return paramObj;
  }
};