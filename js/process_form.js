

  var flag = [false, false, false, false, false, false];
var count = 0;


var right = document.createElement("img");
right.setAttribute("src", "img/check.png");
right.classList.add("marker");


var wrong = document.createElement("img");
wrong.setAttribute("src", "img/wrong.png");
wrong.classList.add("marker");

function clearElement(el)
{
  while (el.hasChildNodes()) el.removeChild(el.lastChild);
}

function validateData() {
	function firstName() {
		x.style.visibility = "hidden";
		var first = document.forms["myform"]["first_name"].value;
		var firstBox = document.forms["myform"]["first_name"];
		var firstRe = /^[A-Z][A-Za-z]/;
    if (first.match(firstRe)) {
      x.textContent = "Valid Input";
      var y = document.getElementById("hintFirst");
      y.appendChild(right);
      x.style.visibility = "visible";
      flag[0] = true;
		} else {
      x.textContent = "Invalid Input";
       var y = document.getElementById("hintFirst");
				y.appendChild(wrong);
      x.style.visibility = "visible";
      flag[0] = false;
    }
    
	}
	function lastName()
	{
	  x.style.visibility = "hidden";
	  var last = document.forms["myform"]["last_name"].value;
	  var lastBox = document.forms["myform"]["last_name"];
    var lastRe = /^[A-Z][A-Za-z\' ]+$/;
    if (last.match(lastRe)) {
        x.textContent = "Valid Input";
				var y = document.getElementById("hintLast");
				y.appendChild(right);
        x.style.visibility = "visible";
        flag[1] = true;
    } else {
      x.textContent = "Invalid Input";
				var y = document.getElementById("hintLast");
				y.appendChild(wrong);
        x.style.visibility = "visible";
        flag[1] = false;
			}
	}
  function phoneNum()
  {
    x.style.visibility = "hidden";
	  var phone = document.forms["myform"]["phone_number"].value;
	  var pBox = document.forms["myform"]["phone_number"];
    var pRe = /^\d{3} \d{3}-\d{4}$/;
    if (phone.match(pRe)) {
        x.textContent = "Valid Input";
				var y = document.getElementById("hintPhone");
				y.appendChild(right);
        x.style.visibility = "visible";
        flag[2] = true;
    } else {
      x.textContent = "Invalid Input";
				var y = document.getElementById("hintPhone");
				y.appendChild(wrong);
        x.style.visibility = "visible";
        flag[2] = false;
			}
  }
  function emailValid()
    {
     x.style.visibility = "hidden";
	  var email = document.forms["myform"]["email_address"].value;
	  var eBox = document.forms["myform"]["email_address"];
    var emailRe = /^[A-Za-z0-9]+@[A-Za-z]+\.(com|edu)$/;
    if (email.match(emailRe)) {
        x.textContent = "Valid Input";
				var y = document.getElementById("hintEmail");
				y.appendChild(right);
        x.style.visibility = "visible";
         flag[3] = true;
    } else {
      x.textContent = "Invalid Input";
				var y = document.getElementById("hintEmail");
				y.appendChild(wrong);
        x.style.visibility = "visible";
        flag[3] = false;
			}
  }
   function webValid() {
			x.style.visibility = "hidden";
			var web = document.forms["myform"]["website_url"].value;
			var webBox = document.forms["myform"]["website_url"];
			var webRe = /^[https]*:\/\/[A-Za-z\.-]+[\/]+\~[A-Za-z0-9]+\/$/;
     if (web.match(webRe)) {
       x.textContent = "Valid Input";
				var y = document.getElementById("hintWeb");
				y.appendChild(right);
       x.style.visibility = "visible";
       flag[4]= true;
        
     } else {
       x.textContent = "Invalid Input";
				var y = document.getElementById("hintWeb");
				y.appendChild(wrong);
       x.style.visibility = "visible";
       flag[4]= false;
			}
   }
  
  return {
    firstName,
    lastName,
    phoneNum,
    emailValid,
    webValid
  }
	
}


var img; 
var ans;

function processForm(e) {
  
  e.preventDefault();
  


  if (document.forms[1].question_one.value == "Analytical" && document.forms[1].question_two.value == "Math")
  {
    flag[5] = true;
    console.log("left-brain");
    img = "img/logic.jpeg";
    ans = "Left-Brained";
  }
  else if (document.forms[1].question_one.value == "Creative" && document.forms[1].question_two.value == "Reading-Writing")
  {
    flag[5] = true;
    console.log("right-brain");
    img = "img/art.jpeg";
     ans = "Right-Brained";
  }
  else if (  document.forms[1].question_one.value == "" || document.forms[1].question_two.value == "")
  {
		flag[5] = false;	
  }
  else if ( (document.forms[1].question_one.value == "Analytical" && document.forms[1].question_two.value == "Reading-Writing") ||	(document.forms[1].question_one.value == "Creative" && document.forms[1].question_two.value == "Math"))
  {
    flag[5] = true;
    
    img = "img/both.jpeg";
     ans = "Both";
  }
  
		for (var i = 0; i < flag.length; i++) {
			if (flag[i] == true) {
				count += 1;
			}
		}
  if (count == 6 ) {
   
   

    
	var r = document.getElementById("results");
    clearElement(r);
	var pFirst = document.forms["myform"]["first_name"].value;
	var pTag = document.createElement("p");
	var fText = document.createTextNode("First Name: " + pFirst);
	pTag.appendChild(fText);
	r.appendChild(pTag);

	var pLast = document.forms["myform"]["last_name"].value;
	var pTag = document.createElement("p");
	var lText = document.createTextNode("Last Name: " + pLast);
	pTag.appendChild(lText);
	r.appendChild(pTag);

	var pPhone = document.forms["myform"]["phone_number"].value;
	var pTag = document.createElement("p");
	var phText = document.createTextNode("Phone Number: " + pPhone);
	pTag.appendChild(phText);
	r.appendChild(pTag);

	var pEmail = document.forms["myform"]["email_address"].value;
	var pTag = document.createElement("p");
	var eText = document.createTextNode("Email Address: " + pEmail);
	pTag.appendChild(eText);
	r.appendChild(pTag);

	var pWeb = document.forms["myform"]["website_url"].value;
	var pTag = document.createElement("p");
	var wText = document.createTextNode("Website URL: " + pWeb);
	pTag.appendChild(wText);
	r.appendChild(pTag);

	var startText = document.createElement("h2");
	var text = document.createTextNode("You Are " + ans);
	startText.appendChild(text);
	r.appendChild(startText);

	var badge = document.createElement("img");
	badge.setAttribute("src", img);
	badge.classList.add("badge");
	r.appendChild(badge);


  }

  
  count = 0;
  

}

function hintFirst()
{
  x = document.getElementById("hintFirst");
x.style.visibility = "visible";
}

function hintLast() {
	x = document.getElementById("hintLast");
	x.style.visibility = "visible";
	
}

function hintPhone() {
	x = document.getElementById("hintPhone");
	x.style.visibility = "visible";
}

function hintEmail() {
	x = document.getElementById("hintEmail");
	x.style.visibility = "visible";
}
function hintWeb() {
	x = document.getElementById("hintWeb");
	x.style.visibility = "visible";
}

window.onload = function ()
{
    var submit = document.getElementById("subutton");
		if (subutton) {
			submit.addEventListener("click", processForm, false);
    }
  
  x = document.getElementById("hintLast");
  x.style.visibility = "hidden";
  x2 = document.getElementById("hintPhone");
	x2.style.visibility = "hidden";
  x3 = document.getElementById("hintEmail");
  x3.style.visibility = "hidden";
  x4 = document.getElementById("hintWeb");
  x4.style.visibility = "hidden";
  x5 = document.getElementById("hintFirst");
  x5.style.visibility = "hidden";
}


