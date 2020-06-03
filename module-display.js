import {math} from './module-math.js'
import{dom} from './module-dom.js'

export  const display = (()=>{

 function log () {
    console.log(` the somme is : ${math.sum()}`)
    console.log(` the sum odd numbers is : ${math.sumOddNumbers()}`) 
    console.log(` the is odd is : ${math.isOdd(11)}`) 
    console.log(` the is max is : ${math.max()}`) 
    console.log(` the is max is : ${math.min()}`) 
    dom.create();
}
return{ log}
})();