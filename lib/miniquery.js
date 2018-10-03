/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector{
    static select(input){
        
        //check first character
        let firstChar = input[0]
        let theRest = ''
        if(firstChar==='#'){
            theRest = input.substr(1);
            return document.getElementById(theRest);
        }else if(firstChar==='.'){
            theRest = input.substr(1);
            return document.getElementsByClassName(theRest);

        }else if(firstChar!=='#'&&firstChar!=='.'){
             return document.getElementsByTagName(input);
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM{
    static hide(input){
        
        let element =  document.querySelector(input);
        // console.log(element)
        element.style.display = 'none';
    }

    static show(input){
        let element = document.querySelector(input);
        element.style.display = 'block';
    }

    static addClass(elem,kelasName){
        let element = document.querySelector(elem);
        // console.log(element)
        if(element.classList){
            element.classList.add(kelasName)
        }else{
            element.className += ' ' + kelasName;
        }
    }

    static removeClass(elem,kelasName){
        let element = document.querySelector(input);
        // element.classList.remove(input)
        if (element.classList){
            element.classList.remove(kelasName);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + kelasName.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}    

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
    static request(obj){
        let xhttp = new XMLHttpRequest()
        xhttp.open(obj['type'],obj['url'],true)

        xhttp.onload = function() {
            if (xhttp.status >= 200 && xhttp.status < 400) {
              // Success!
                    // var data = JSON.parse(xhttp.responseText);
                  obj.success('test')  
            } else {
              // We reached our target server, but it returned an error
                  obj.failed()
            }
          };
          
          xhttp.onerror = function() {
            // There was a connection error of some sort
                obj.fail()
          };

        xhttp.send()
    }
}