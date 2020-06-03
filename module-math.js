import  {dom}  from "./module-dom.js";

export const math = (()=>{

    let table = [];
    //PUSH TABLE
    (function _pushtable(){
        table.push(parseInt(dom.selectIds().num1.value) , parseInt(dom.selectIds().num2.value) , parseInt(dom.selectIds().num3.value) , parseInt(dom.selectIds().num4.value))
    })();

    //SUM
    function sum(){
    //  let t = table.length;
    //  let s = 0;
    //  for( let i =0 ; i < t ; i++){
    //      s = s + table[i];
    //     };
    //     return s;
    let s = (acc , cv)=>acc + cv
    return table.reduce(s);
    }

    //IS ODD
  function isOdd(any){
    if(any%2 == 0){ return 'pair' }else{ return 'impair'}  
  }

  //sumOddNumbers
  function sumOddNumbers() {
    let t = table.length;
    let s = 0;

    for( let i =0 ; i < t ; i++){
        if(table[i]%2 != 0){
        s = s+table[i];
       }
    }
       return s;
  }

// MAX
  function max(){
    if(table.length > 1 || table !== undefined){ // not  empty
        return  Math.max.apply(null, table);
    }
}

// MIN 
function min(){
    if(table.length > 1 || table !== undefined){ // not  empty
        return  Math.min.apply(null, table);
    }
}

    return{
        sum,
        isOdd,
        sumOddNumbers,
        max,
        min
    };
})();