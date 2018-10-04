class SweetSelector {
    static select(v) {
      return console.log(v[0] == "#" ? document.querySelector(v)
      : document.querySelectorAll(v))
    }
  }

  class DOM {
    static hide(v) {
      return document.querySelector(v).visibility = "hidden"
    }
  
    static show(v) {
      return document.querySelector(v).visibility = "visible"
    }
  
    static addClass(value1, value2) {
      return document.querySelector(value1).classList.add(value2)
    }
  
    static removeClass(value1, value2) {
      return document.querySelector(value1).classList.remove(value2)
    }
  }
  
  class EventDispatcher {
    static on(value1, value2, cb) {
      let temp = document.querySelector(value1)
      temp.addEventListener(value2, cb)
    }
  
    static trigger(value1, value2) {
      let temp = document.querySelector(value1)
      temp.dispatchEvent(new MouseEvent(value2))
    }
  }

  
  const AjaxWrapper = {
    request : (oReq) => {
        let xmlReq = new XMLHttpRequest()
        xmlReq.onreadystatechange = function () {
            if(this.status == 200 && this.readyState == 4 ) { //The operation is complete. and The request has succeeded.
                oReq.success(this.responseText);
            } else { //400 Bad Request,404 Not Found,500 Internal Server Error
                oReq.fail();
            }
        }
        xmlReq.open(oReq.type, oReq.url, true)
        xmlReq.send()
    }
  }
  
  AjaxWrapper.request({
    url: 'http://google.com',
    type: 'GET',
    success: function(datum) {
        console.log(datum);
    },
    fail : function() {
        console.log("Request Failed !");
    }
  })