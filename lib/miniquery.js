/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
    select : function(param){
        let end = param.length

        if(param[0] === '#'){
            return document.getElementById(param.slice(1))
        } else if(param[0] === '.'){
            return document.getElementsByClassName(param.slice(1))[0]
        } else {
            return document.getElementsByTagName(param)[0]
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 var DOM = {
     hide: function(param){
        SweetSelector.select(param).style.display = "none";
     },
     show: function(param){
        SweetSelector.select(param).style.display = "block"
     },
     addClass: function(param, paramClass){
        SweetSelector.select(param).classList.add(paramClass.slice(1))
     },
     removeClass: function(param, paramClass){
        SweetSelector.select(param).classList.remove(paramClass.slice(1))
     }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
