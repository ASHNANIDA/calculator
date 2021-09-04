function buttonclick(val){
    document.getElementById("t").value=document.getElementById("t").value+val
    console.log(val)
}
 function clearDisplay(){
     document.getElementById('t').value=""
 }
 function equalto(){
     var text=document.getElementById('t').value;
     var result=eval(text)
     document.getElementById('t').value= result;
 }