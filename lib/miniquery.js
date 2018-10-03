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