/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {

    static select(toBeSelected) {
        if (toBeSelected[0] === '#') {
            return document.getElementById(toBeSelected.slice(1)).innerHTML
        } else if (toBeSelected[0] === '.') {
            let result = [];
            for (var i = 0; i < document.getElementsByClassName(toBeSelected.slice(1)).length; i++) {
                result.push(document.getElementsByClassName(toBeSelected.slice(1))[i].innerHTML)
            }
            return result
        } else {
            let result = [];
            for (var i = 0; i < document.getElementsByTagName(toBeSelected).length; i++) {
                result.push(document.getElementsByTagName(toBeSelected)[i].innerHTML)
            }
            return result
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

  class DOM {

    static hide(toBeHidden) {
        if (toBeHidden[0] === '#') {
            document.getElementById(toBeHidden.slice(1)).style.visibility = 'hidden'
        } else if (toBeHidden[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(toBeHidden.slice(1)).length; i++) {
                document.getElementsByClassName(toBeHidden.slice(1))[i].style.visibility = 'hidden'
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(toBeHidden).length; i++) {
                document.getElementsByTagName(toBeHidden)[i].style.visibility = 'hidden'
            }
        }
    }

    static show(toBeShowed) {
        if (toBeShowed[0] === '#') {
            document.getElementById(toBeShowed.slice(1)).style.visibility = 'visible'
        } else if (toBeShowed[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(toBeShowed.slice(1)).length; i++) {
                document.getElementsByClassName(toBeShowed.slice(1))[i].style.visibility = 'visible'
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(toBeShowed).length; i++) {
                document.getElementsByTagName(toBeShowed)[i].style.visibility = 'visible'
            }
        }
    }

    static addClass(beforeAdd, toBeAdded) {
        if (beforeAdd[0] === '#') {
            document.getElementById(beforeAdd.slice(1)).classList.add(toBeAdded)
        } else if (beforeAdd[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(beforeAdd.slice(1)).length; i++) {
                document.getElementsByClassName(beforeAdd.slice(1))[i].classList.add(toBeAdded)
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(beforeAdd).length; i++) {
                document.getElementsByTagName(beforeAdd)[i].classList.add(toBeAdded)
            }
        }
    }

    static removeClass(identifier, toBeRemoved) {
        if (identifier[0] === '#') {
            document.getElementById(identifier.slice(1)).classList.remove(toBeRemoved)
        } else if (identifier[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(identifier.slice(1)).length; i++) {
                document.getElementsByClassName(identifier.slice(1))[i].classList.remove(toBeRemoved)
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(identifier).length; i++) {
                document.getElementsByTagName(identifier)[i].classList.remove(toBeRemoved)
            }
        }
    }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {

    static on(identifier, event, fnctn) {
        if (identifier[0] === '#') {
            document.getElementById(identifier.slice(1)).addEventListener(event, fnctn)
        } else if (identifier[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(identifier.slice(1)).length; i++) {
                document.getElementsByClassName(identifier.slice(1))[i].addEventListener(event, fnctn)
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(identifier).length; i++) {
                document.getElementsByTagName(identifier)[i].addEventListener(event, fnctn)
            }
        }
    }

    static trigger(identifier, triggerOn) {
        let event = document.createEvent('HTMLEvents');
        event.initEvent(triggerOn, true, false);
        if (identifier[0] === '#') {
            document.getElementById(identifier.slice(1)).dispatchEvent(event)
        } else if (identifier[0] === '.') {
            for (var i = 0; i < document.getElementsByClassName(identifier.slice(1)).length; i++) {
                document.getElementsByClassName(identifier.slice(1))[i].dispatchEvent(event)
            }
        } else {
            for (var i = 0; i < document.getElementsByTagName(identifier).length; i++) {
                document.getElementsByTagName(identifier)[i].dispatchEvent(event)
            }
        }
    }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 class AjaxWrapper {

    static request(obj) {
        let request = new XMLHttpRequest();
        request.open(obj.type, obj.url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                obj.success()
            } else {
                obj.fail('on Load')

            }
        };

        request.onerror = function() {
            obj.fail('on Error')
        };

        request.send();
    }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 function miniquery(syntax) {
    return [syntax]
 }

 function $(syntax) {
    return [syntax]
 }