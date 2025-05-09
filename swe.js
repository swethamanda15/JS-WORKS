function getalert() {
    document.write("welcome js");
}
function getalert1() {
    document.getElementById("result").innerHTML="hello";

}
function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 =  parseInt(document.getElementById("num2").value);

    var add= num1+num2;
    var sub= num1-num2;
    var mul= num1*num2;

    document.getElementById("result_add").innerHTML="addition:"+add;
    document.getElementById("result_sub").innerHTML="subtraction:"+sub;
    document.getElementById("result_mul").innerHTML="multiplication:"+mul;
}
function hid(id1) {
    var id1=id1;
    confirmw=confirm("do u want hide this row!");
    if(confirmw==true){
        document.getElementById(id1).style.visibility="hidden";
    }
}
function get_big_image() {

document.getElementById("img_id").style.width="700px";
document.getElementById("img_id").style.height="700px";
}
function get_normal_image()
{
    document.querySelector("#img_id").style.width="300px";
    document.querySelector("#img_id").style.height="300px";
}


  function get_word_count() { var wordCount =
    document.getElementById("get_word_count").value;

     wordCount1 = wordCount.split(' ').length; 
     length = wordCount.length; 
     cap = wordCount.toUpperCase(); 

     lowerCase = wordCount.toLowerCase();

     document.getElementById("result_here").innerHTML =length;
    document.getElementById("result_here_word").innerHTML =  wordCount1;
      document.getElementById("result_here_cap").innerHTML= cap;
   document.getElementById("result_here_low").innerHTML = lowerCase;
   }   
   function return_get_start() {
    Javascript:scroller.start()
   }
   function return_get_stop () {
    Javascript:scroller.stop()
   }
     document.getElementById("btn-9").onclick = addRow;

function newwindow() {
    openwindow=window,open("login.html",'popup','height=500,width=500');

}

function get_date_details() {
    var dateMonth=prompt("Give date/month ex:24/02");
    switch(dateMonth) {
        case'15/04':
        birthday=
        "Swetha"; break;
        case '09/04':
            birthday="Venky";
            break;
            case '03/03':
                birthday="Chinna"
                break;
                case '29/05':
                    birthday="Yuva";
                    break;
                    case '21/03':
                        birthday="Meenu";
                        break;
                        default: birthday="No one birthday to day";
    }
    document.getElementById("chang_color_id").innerHTML="Today Birth Day is:"+birthday;
}

function checkStrength()
{
    let password=document.getElementById("paw").value;
    let result=document.getElementById("result")
    let fill=document.getElementById("strength-fill");
    
        
    let hasUpper=/[A-Z]/.test(password);
    let hasLower=/[a-z]/.test(password);
    let hasNumber=/[0-9]/.test(password);
    let hasSpecial=/[!@#$%^&*\/]/.test(password);
    let length=password.length>=0

    let strength=0;
    if(hasUpper)
    {
        strength++;

    }
    if(hasLower)
    {
    strength++;
    }
    if(hasNumber)
    {
    strength++;
    }
    if(hasSpecial)
    {
    strength++;
    }
    if(length)
    {
        strength++;
    }
       
if(strength<=2)
{
    result.textContent="Weak Password";
    result.style.color="red";
    fill.style.width="33%";
    fill.style.backgroundColor="red";

}
else if(strength==3 || strength===4)
{
    result.textContent="Medium Password";
    result.style.color="yellow";
    fill.style.width="75%";
    fill.style.backgroundColor="yellow";

}else
    {
        result.textContent="strong Password";
        result.style.color="green";
        fill.style.width="100%";
        fill.style.backgroundColor="green";
    
    }
}

function show(tab_id){ id=tab_id + "_result";

if(tab_id=="tab1"){ tab1.className +=" active";
document.getElementById(id).style.display="block";
document.getElementById("tab2_result").style.display="none";
document.getElementById("tab3_result").style.display="none";
} if(tab_id=="tab2"){ tab2.className +=" active";
document.getElementById(id).style.display="block";
document.getElementById("tab1_result").style.display="none";
document.getElementById("tab3_result").style.display="none";
} if(tab_id=="tab3"){ tab3.className +=" active";
document.getElementById(id).style.display="block";
document.getElementById("tab1_result").style.display="none";
document.getElementById("tab2_result").style.display="none";
}

}
function validate() {
    var name= document.getElementById("pr_name").value;
     
    var imageName = document.getElementById("pr_img").value;

    var cost=document.getElementById("pr_cost").value;

    var email=document.getElementById("pr_email").value;

    female= document.getElementById('female').checked;

    tel= document.getElementById('tel').checked;
    eng= document.getElementById('eng').checked;
    hin= document.getElementById('hin').checked;
    male= document.getElementById('male').checked;
    area= document.getElementById('area').checked;

    
    if(name==="") {
        document.getElementById("pr_name_result").innerHTML="Please Enter Your Name";
        document.getElementById("pr_name").focus();
        return false;
    }
    else {
        document.getElementById("pr_name_result").innerHTML="";
    } 
    
    if(imageNmae===""){
        document.getElementById("pr_img_result").innerHTML="Please Enter Your number";
        document.getElementById("pr_img").focus();
        return false;
    }
    else {
        document.getElementById("pr_img_result").innerHTML="";
    } 
    if(cost==="") {
        document.getElementById("pr_cost_result").innerHTML="Please Enter Your number";
        document.getElementById("pr_cost").focus();
        return false;
    } else if(isNaN(cost)==true) {
        document.getElementById("pr_cost_result").innerHTML="please Enter your number only";
        document.getElementById("pr_cost").focus();
        return false;
    }
     else {
        document.getElementById("pr_cost_result").innerHTML="";
     }
     if(email=="") {
        document.getElementById("pr_email_result").innerHTML="Please enter your mail";

        document.getElementById("pr_email").focus();

        document.getElementById("pr_email").value="";
        document.getElementById("pr_email").focus();
        return false;
     }
     else if (checkmail.test(email) == false) {
        document.getElementById("pr_email_result").innerHTML="Please Enter a Valid Email";
        return false;
    } else {
        document.getElementById("pr_cost_result").innerHTML="";
     }
     if(male==false&&female==false) 
     {
        document.getElementById("male_result").innerHTML="Please Check Male or Female";
        document.getElementById('male').focus();

        return false;

     }
     else {
        document.getElementById("male_result").innerHTML="";
     }
     if (tel==false&& eng==false&&hin==false){
        document.getElementById("lang_result").innerHTML="Please Check language";
         document.getElementById("tel").focus();
         return false;
     } else {
        document.getElementById("lang_result").innerHTML="";
     }
     if(area=="") {
        document.getElementById("area_result").innerHTML="Please Check Language";
        document.getElementById('area').focus();
        return false;
     }
     return true;
    }
    function validate1() {
        validate();
    }

  let currentIndex = 0;

  function showImage(index) {
    const images = document.getElementsByClassName('slidername');
    
    
    if (index >= images.length) currentIndex = 0;
    else if (index < 0) currentIndex = images.length - 1;
    else currentIndex = index;

    
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }

    
    images[currentIndex].style.display = 'block';
  }

  function next(n) {
    showImage(currentIndex + n);
  }

  
  window.onload = function() {
    showImage(currentIndex);
  };
function addRow() {
    let parent = document.querySelector(".parent");
    let existingInput = document.getElementById("inp");

    let br = document.createElement("br");
    let newInput = document.createElement("input");
    
    
    newInput.type = "text";
    newInput.style.width = "300px";
    newInput.style.marginTop = "5px"; 
    
    parent.insertBefore(br, existingInput.nextSibling);
    parent.insertBefore(newInput, br.nextSibling);
    
}
    

    document.getElementById("btn-9").addEventListener("click", addRow);
