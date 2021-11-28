let username1 = document.getElementById("username");
let password2= document.getElementById("password");
let checkcredential= document.getElementById("checkcredential");

function validate(callback){


    if(username1.value=="admin"&& password2.value =="12345")
    {
    
    callback();
    }else{
        checkcredential.innerHTML="Invalid Credentials";
      return false;
    }
    
}

function redirect() {
    
 location.href = 'todo.html';

}

// reading data

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status == 200){
         var response = JSON.parse(this.responseText)
         console.log(response);
         var output = "";
         counter=0
         for(var i=0 ; i<response.length; i++){
             output+="<div class='checkbox'><input type =checkbox  id='check_box_"+counter+"' onchange='strikethrough(this)'> &nbsp &nbsp" + "<b> <label for='check_box_"+counter+"' class='strikethrough' id='text_"+counter+"'>"+ response[i].title +"</label></div></b>" +  "<br> <br>";
             counter++
            }
         document.getElementById("demo").innerHTML = output;

    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

function strikethrough(checkBox){
    var chid = checkBox.id.split('_')[2]

   if( checkBox.checked ){
    var ele = document.getElementById("text_"+chid);
    ele.style.setProperty("text-decoration", "line-through");
   }else{
    var ele = document.getElementById("text_"+chid);
    ele.style.setProperty("text-decoration", "");
   }

var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
if(checkboxes.length == 5){
alert("Congrats!!! 5 Tasks have been successfully Completed.");
}
}