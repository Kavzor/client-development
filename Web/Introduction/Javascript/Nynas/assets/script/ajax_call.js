'use strict';

/*
ajax.call("").method("GET").then((response) => {
  console.log(response);
});
*/

const MIME = (function(){
  return {
    urlEncoded: 'application/x-www-form-urlencoded',
    json: 'application/json'
  }
})();

function RemoteCall(){
  this.xhttp = new XMLHttpRequest();
  this.status = 200;
}
Object.defineProperties(RemoteCall.prototype, {
  'method': {
    value: function(method){
      this.method = method;
      return this;
    },
    writable: true,
    configurable: false,
    enumerable: false
  },
  'status': {
    value: function(status){
      this.status = status;
      return this;
    },
    writable: true,
    configurable: false,
    enumerable: false
  },
  'param': {
    value: function(param){
      this.param = param;
      return this;
    },
    writable: true,
    configurable: false,
    enumerable: false
  },
  'content': {
    value: function(content){
      this.content = content;
      return this;
    }
  },
  'findContent': {
    value: function(param){
      if(json.isObject(param)){
        this.param = JSON.stringify(param);
        return MIME.json;
      }
      else if(json.isFormParam(param)){
        return MIME.urlEncoded;
      }
      else {
        return MIME.json;
      }
    }
  },
  'then': {
    value: function(execute){
      let status = this.status;
      this.xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
          if(this.status == status){
            execute(this);
          }
          else {
            return {
              status: this.xhttp.status,
              xhttp: this.xhttp
            };
          }
        }
      }
      if(!http.validMethod(this.method)){
        this.method = "GET";
      }
      console.log("METHOD: " + this.method + "\nURL: " + this.url);
      this.xhttp.open(this.method, this.url, true);

      if(this.method.toLowerCase() != 'get'){
        let content = this.findContent(this.param);

        console.log("Content-type: " + content);

        this.xhttp.setRequestHeader('Content-type', content);
        this.xhttp.send(this.param);
      }
      else {
        this.xhttp.send();
      }
    }
  }
});

var json = (function(){
  var isObject = function isJSONObject(param){
    return param instanceof Object;
  }

  var isString = function isJSONString(param){
      try{
        JSON.parse(param);
        return true;
      }
      catch(e){
        console.log(e);
      }
    return false;
  }

  var isFormParam = function isFormParam(param){
    return param.includes("=");
  }

  return {
    isObject: isObject,
    isString: isString,
    isFormParam: isFormParam
  }
})();

var ajax = (function(){
  var call = function call(url, remoteCall){
    if(remoteCall == undefined){
      remoteCall = new RemoteCall();
    }
    remoteCall.url = url;
    return remoteCall;
  }

  return {
    call: call
  }
})();

var http = (function (){
  var isHttpMethod = function(method){
    if(typeof method != 'string'){
      return false;
    }
    else {
      switch(method.toLowerCase()){
        case 'get': return true; break;
        case 'post': return true; break;
        default: return false;
      }
    }
  }
  return {
    validMethod: isHttpMethod
  }
})();
