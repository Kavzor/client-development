var remote = (function() {

  const CONTENT = {
    urlEncoded: 'application/x-www-form-urlencoded',
    json: 'application/json'
  }

  const CONTENT_URL_ENCODED = "application/x-www-form-urlencoded";
  const CONTENT_JSON ="application/json";

  function Ajax(){
    this.xhttp = new XMLHttpRequest();
    this.status = 200;
  }
  Object.defineProperties(Ajax.prototype, {
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
        if(isJSONObject(param)){
          this.param = JSON.stringify(param);
          return CONTENT.json;
        }
        else if(isFormParam(param)){
          return CONTENT.urlEncoded;
        }
        else {
          return CONTENT.json;
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

  function isJSONObject(param){
    return param instanceof Object;
  }

  function isJSONString(param){
      try{
        JSON.parse(param);
        return true;
      }
      catch(e){
        console.log(e);
      }
    return false;
  }

  function isFormParam(param){
    return param.includes("=");
  }

  var call = function call(url){
    var ajax = new Ajax();
    ajax.url = url;
    return ajax;
  }

  return {
    call: call
  }

})();
