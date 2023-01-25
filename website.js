    function myFunc() {
        window.open("page1.html", "_blank"); 
    }

    function mydelhiFunc() {
        window.open("page2.html", "_blank"); 
    }

function newbookFunc() {
        alert("thank you for booking.. we will send details "); 
    }

function mycontactpageFunc()
 {
        window.open("contactus.html"); 
    }
   function newmainhomeFunc() {
        window.open("#mainhome"); 
    }
   
    



function ValidateForm(frm) {
if (frm.Name.value == "") { alert('Name is required.'); frm.Name.focus(); return false; }
if (frm.FromEmailAddress.value == "") { alert('Email address is required.'); frm.FromEmailAddress.focus(); return false; }
if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
if (frm.Comments.value == "") { alert('Please enter comments or questions.'); frm.Comments.focus(); return false; }
return true; }

  
    