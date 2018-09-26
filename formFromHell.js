/* formFromHell.js
   Homework 1 (ISTE 754)
   Created by Sankarsh Vittal
*/

  function validate(){
      let errorMsg = "";
      var name =document.getElementById("name").value;
      if(parseInt(name.length) > 2){ // check if the entered name is greater than 3 characters.
        errorMsg += "We find your name to be funny and rediculously long. Use a shortened form of your name (like initials) with no more that 2 characters </br>";
      }

      var email = document.getElementById("email").value;
      if(email.charAt(0) === "j"){ //check if email entered starts with character j.
        //do nothing
      }
      else{
        errorMsg += "We dont like your email id and we are clearing it out. Enter an email id starting with letter 'j'.</br>";
          document.getElementById("email").value = "";
      }

      var msg = document.getElementById("message").value;
      if(parseInt(msg.length) > 1){ // check if the entered message has more that one character.
        errorMsg += "We find your message to be long and boring. Limit it to one character </br>";
      }

      if(errorMsg.length){ // Check if error exists and display them on screen accordingly
        document.getElementById("error-msg").innerHTML = errorMsg ;
        return false;
      }

     if(document.getElementById("id").innerHTML == "Website:"){ // Condition used to replace Website field with a Zip code
         document.getElementById("id").innerHTML = "Zip Code";
         document.getElementById("id1").type = "number";
         document.getElementById("id1").name = "zipCode";
         alert("We changed our mind and we love doing so. Enter your ZipCode instead of website and press submit.");
         return false;
      }

     let	bodyEle = document.getElementById("anotherEmail");
      //check if another Email address field exits.
      //if it dosent exist, create its label and the text box.
     if (bodyEle == null){
        var label, textbox;
        label = document.createElement('label');
        label.appendChild(document.createTextNode('Another email address: '));
        textbox = document.createElement('input');
        textbox.type = 'email';
        textbox.setAttribute( "id", "anotherEmail");
        label.appendChild(textbox);
        document.getElementById('contact_form').appendChild(label);
        alert("Now, We want you to fill out another email field and click submit.");
        return false;
      }

    //final confirmation message
    alert("You are not important to us and we will not be able to confirm the succcesfull submition of your contact details. We may get back to you after 2 years")
    return true;
 }

  function  nameValidate(){
    if(document.getElementById("name").value )  {
    if (confirm("Press OK if you really are " + document.getElementById("name").value + ". Press Cancel is you forgot your real name.")) {
      alert("Good job!! " + document.getElementById("name").value + ". Lets complete other fields.");
    } else {
     alert("Since you pressed cancel, we are going to clear out your entered name");
     document.getElementById("name").value = "";
    }
  }
}

  function  emailValidate(){
    if(document.getElementById("email").value )  {
    if (confirm("Press OK if you  are sure that " + document.getElementById("email").value + " is your email. Press cancel is you are not sure about your emailID")) {
      alert("That's good!! You confirmed your email as " + document.getElementById("email").value+ ". Lets continue.");
    } else {
     alert("Since you pressed cancel we are going to clear out your entered email");
     document.getElementById("email").value = "";
    }
    var inputVal = document.getElementById("name");
    if (inputVal.value != "") { // condition used to change background color of name text box to yello
        inputVal.style.backgroundColor = "yellow";
    }
  }
}

 function  websiteValidate(){
   if(document.getElementById("website").value )  {
   if (confirm("Press OK if you really are " + document.getElementById("email").value + "Press cancel is you are not sure about your real name")) {
      alert("Good job!! " + document.getElementById("website").value);
   } else {
     alert("Since you pressed cancel we are going to clear out your entered name");
     document.getElementById("website").value = "";
   }
 }
}
