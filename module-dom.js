import {math} from './module-math.js'
export const dom =(()=>{
     function selectIds(){
  
        let btn = document.getElementById('submit');
        btn.addEventListener('click' ,()=>{
            let num1 = document.getElementById('num1');
            let num2 = document.getElementById('num2');
            let num3 = document.getElementById('num3');
            let num4 = document.getElementById('num4');
            location.reload();
        })
        return{ num1 , num2 ,num3 , num4};
     }
     function create(){
        let somePara = document.getElementById('the-some-para');
        let ppPara = document.getElementById('pp-para');
        let MinMaxPara = document.getElementById('min-max-para');
        somePara.innerHTML = ` the some total :  ${math.sum()}. <br> the some of nombers pairs : ${math.sumOddNumbers()} . `
        ppPara.innerHTML =` ${math.isOdd()}`
        MinMaxPara.innerHTML=`the nomber Min : ${math.min()}. <br> The nomber Max :  ${math.max()}.`
    }
     return{
         selectIds,
         create
     }
})();
