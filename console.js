console.log('hello user')
//navbars
bars = document.querySelector(".menu1");
nav = document.querySelector(".navbar1");
sec=document.querySelector(".body")
fo=document.querySelector(".footer")
bars.onclick = function() {
    nav.classList.toggle("act");
    sec.classList.toggle("act");
    fo.classList.toggle("act");
}
//feedback
/*const scriptURL = 'https://script.google.com/macros/s/AKfycbzrmvgOmiGKL9WF1ck6E2iBqbxtkPlYCK7_OAtmM4w074oCuEyyYfELN5Ws3pQgkffs/exec'
const form = document.forms['feedback-bunkcalsi']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank you! your form is submitted successfully." ))
      .then(() => {  window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
})*/
//infopopup
function togglepopup(){
      document.getElementById("info1").classList.toggle("act2");
}
function togglepopup1(){
      document.getElementById("info2").classList.toggle("act2");
}
//limit input
document.querySelectorAll('input[type="number"]').forEach( input => {
      input.oninput =() =>{
    if(input.value.length > input.maxLength)
    input.value = input.value.slice(0,input.maxLength);
      };
});
//  gauge
function gauge(value,lim){
      const gaugeElement = document.querySelector(".gauge");
      function setGaugeValue(gauge, value,lim) {
        if (value < 0 || value > 1) {
          return;
        }
      li=lim-0.1;
      if( value<li){
        gauge.querySelector(".gauge_fill").style.background="Red"
      }
      else if( value>li && value<lim){
            gauge.querySelector(".gauge_fill").style.background="orange"
          }
      else{
         gauge.querySelector(".gauge_fill").style.background="#009578"
      } 
      gauge.querySelector(".gauge_fill").style.transform = `rotate(${
          value / 2
        }turn)`;
        gauge.querySelector(".gauge_cover").textContent = `${Math.round((value * 100)*100)/100
        }%`;
      }
      setGaugeValue(gaugeElement,value,lim);
      }

      gauge(0,0.75);
// on cal click
function altc(){
      let tc = document.querySelector('#tc')
      let ac = document.querySelector('#ac')
      let op=document.querySelector('#pc');
      let pc= Number(op.value)
      let t = Number(tc.value)
      let a= Number(ac.value)
      let tm=Number(tc.max)
      let am=t
      var p=a/t *100;
      
      if((t>=0) && (t<=tm )& (a>=0) && (a<=t) && (tc.value!="") && (ac.value!="")){
         document.getElementById('inputs').innerHTML=document.getElementById('results').innerHTML;   
         gauge(p/100,pc);
      }
      else{
            if(tc.value==""){
                  document.querySelector("#altc1").style.display="block"
            }
            else {
                  document.querySelector("#altc1").style.display="none";
            }
            if(t>tm){
                  document.querySelector("#altc2").style.display="block"
            }
            else {
                  document.querySelector("#altc2").style.display="none";
            }
            if(t<0){
                  document.querySelector("#altc3").style.display="block"
            }
            else {
                  document.querySelector("#altc3").style.display="none";
            }
            //ac.max = tc.value;
            // ac
            if( ac.value==""){
                  document.querySelector("#alac1").style.display="block"
            }
            else {
                  document.querySelector("#alac1").style.display="none";
                 }
            if( a<0){
                  document.querySelector("#alac2").style.display="block"
            }
            else {
                  document.querySelector("#alac2").style.display="none";
                 }
            if( a>am){
                  document.querySelector("#alac3").style.display="block"
            }
            else {
                  document.querySelector("#alac3").style.display="none";
                 }
      }
// classes calculation
    var x,y,d,pt;
    if(p<(pc*100)){
         let c=2;
         for(x=1;x<c;x++){
            pt=((a+x)/(t+x))*100;
            if(pt<(pc*100)){
                  c++;
            }
            else{
                  c=0;
            }
         }
        d=x/5+1;
    }
    else{
      let c=2;
      for(y=1;y<c;y++){
         pt=((a)/(t+y))*100;
         if(pt<(pc*100)){
               c++;
         }
         else{
               c=0;
         }
      }
      d=y/5+1;
    } 
    y=y-2;
    //console.log(pc*100-10)
    //results display
    if(p<((pc*100)-10)){
      document.querySelector('#cheer').textContent=`OOPS!!!`;
      document.querySelector('#cheer').style.color="red";
      document.querySelector('#clas').textContent = `YOU HAVE TO ATTEND MORE : ${x} Classes or ${d.toFixed(0)} days (appox.)`;
     }
     else if(p>((pc*100)-10)&& p<(pc*100)){
      document.querySelector('#cheer').textContent=`VERY CLOSE!!!`;
      document.querySelector('#cheer').style.color="orange";
      document.querySelector('#clas').textContent = `YOU HAVE TO ATTEND MORE : ${x} Classes or ${d.toFixed(0)} days (appox.)`;    
     }
     else{
      document.querySelector('#clas').textContent = `BUNKS YOU HAVE : ${y} Classes or ${d.toFixed(0)} days (appox.) `;
      }
}



/*errors*/
/*function recal(){
      document.getElementById('results').innerHTML= document.getElementById('inputs').innerHTML;
      console.log("asdfg")
}*/



/*let tc=document.querySelector('#tc');
let ac=document.querySelector('#ac');
let cal=document.querySelector('#cal');
let op=document.querySelector('#pc');
let pc=op.value;
cal.addEventListener('click',(e) =>{
      ac.max =tc.value;
});*/



/*form.addEventListener('submit',function(event){
     event.preventDefault()
if(tc.value && ac.value){
      document.querySelector('.results').style.display="block"
      document.querySelector('.inputs').style.display="none"
}

})*/
