function validate()
{ 
   if( document.donarcard.firstname.value == "" )
   {
     alert( "Please provide your Name!" );
     document.donarcard.firstname.focus() ;
     return false;
   }
   if( document.donarcard.lastname.value == "" )
   {
     alert( "Please provide your last Name!" );
     document.donarcard.lastname.focus() ;
     return false;
   }
   var a;
   a=Number(document.donarcard.age1.value);
   if(a<=18)
   {
     alert( "you must be above 18" );
     document.donarcard.age1.focus() ;
     return false;
   }
   if ( ( donarcard.sex[0].checked == false ) && ( donarcard.sex[1].checked == false ) && ( donarcard.sex[2].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female or Transgender" );
   return false;
   }   
   if( document.donarcard.bloodgroup.value == "-1" )
   {
     alert( "Please provide your BloodGroup!" );
     document.donarcard.bloodgroup.focus() ;
     return false;
   }  
   if(!(document.donarcard.c1.checked || document.donarcard.c2.checked || document.donarcard.c3.checked || document.donarcard.c4.checked || document.donarcard.c5.checked || document.donarcard.c6.checked ) )
   {
       alert("please select any one organ");
       return false;
   }
   if( document.donarcard.country.value == "" )
   {
     alert( "Please provide your Country!" );
    
     return false;
   } 
   if( document.donarcard.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.donarcard.personaladdress.focus() ;
     return false;
   }  
   if( document.donarcard.dist.value == "" )
   {
     alert( "Please provide your  District!" );
    
     return false;
   }   
   if( document.donarcard.state.value == "" )
   {
     alert( "Please provide your  State!" );
     
     return false;
   }
   if( document.donarcard.pincode.value == "" ||
           isNaN( document.donarcard.pincode.value) ||
           document.donarcard.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.donarcard.pincode.focus() ;
     return false;
   }
 var email = document.donarcard.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.donarcard.emailid.focus() ;
     return false;
 }
  /*if( document.StudentRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }*/
  if( document.donarcard.mobileno.value == "" ||
           isNaN( document.donarcard.mobileno.value) ||
           document.donarcard.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.donarcard.mobileno.focus() ;
     return false;
   }
   if( document.donarcard.efirstname.value == "" )
   {
     alert( "Please provide correct firstName in emergency details!" );
     document.donarcard.efirstname.focus() ;
     return false;
   }
   if( document.donarcard.elastname.value == "" )
   {
     alert( "Please provide your last Name in emergency details!" );
     document.donarcard.elastname.focus() ;
     return false;
   }
   if( document.donarcard.relation.value == "" )
   {
     alert( "Please provide correct relationship" );
     document.donarcard.relation.focus() ;
     return false;
   }  
   var b;
   b=Number(document.donarcard.eage1.value)
   if( b<=18 )
   {
     alert( "age must be above 18 in emergency details" );
     document.donarcard.eage1.focus() ;
     return false;
   }
   if( document.donarcard.epersonaladdress.value == "" )
   {
     alert( "Please provide correct Personal Address in emergency details!" );
     document.donarcard.epersonaladdress.focus() ;
     return false;
   }  
   if( document.donarcard.edist.value == "" )
   {
     alert( "Please provide correct  District in emergency details!" );
    
     return false;
   }   
   if( document.donarcard.estate.value == "" )
   {
     alert( "Please provide correct  State in emergency details!" );
     
     return false;
   }
   if( document.donarcard.epincode.value == "" ||
           isNaN( document.donarcard.epincode.value) ||
           document.donarcard.epincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ###### in emergency details." );
     document.donarcard.epincode.focus() ;
     return false;
   }
 var email = document.donarcard.eemailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID in emergency details")
     document.donarcard.eemailid.focus() ;
     return false;
 }
 if( document.donarcard.emobileno.value == "" ||
           isNaN( document.donarcard.emobileno.value) ||
           document.donarcard.emobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.donarcard.emobileno.focus() ;
     return false;
   }
   return( true );
}

function validate()
{ 
   if( document.donarcard.firstname.value == "" )
   {
     alert( "Please provide your Name!" );
     document.donarcard.firstname.focus() ;
     return false;
   }
   if( document.donarcard.lastname.value == "" )
   {
     alert( "Please provide your last Name!" );
     document.donarcard.lastname.focus() ;
     return false;
   }
   var a;
   a=Number(document.donarcard.age1.value);
   if(a<=18)
   {
     alert( "you must be above 18" );
     document.donarcard.age1.focus() ;
     return false;
   }
   if ( ( donarcard.sex[0].checked == false ) && ( donarcard.sex[1].checked == false ) && ( donarcard.sex[2].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female or Transgender" );
   return false;
   }   
   if( document.donarcard.bloodgroup.value == "-1" )
   {
     alert( "Please provide your BloodGroup!" );
     document.donarcard.bloodgroup.focus() ;
     return false;
   }  
   if(!(document.donarcard.c1.checked || document.donarcard.c2.checked || document.donarcard.c3.checked || document.donarcard.c4.checked || document.donarcard.c5.checked || document.donarcard.c6.checked ) )
   {
       alert("please select any one organ");
       return false;
   }
   if( document.donarcard.country.value == "" )
   {
     alert( "Please provide your Country!" );
    
     return false;
   } 
   if( document.donarcard.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.donarcard.personaladdress.focus() ;
     return false;
   }  
   if( document.donarcard.dist.value == "" )
   {
     alert( "Please provide your  District!" );
    
     return false;
   }   
   if( document.donarcard.state.value == "" )
   {
     alert( "Please provide your  State!" );
     
     return false;
   }
   if( document.donarcard.pincode.value == "" ||
           isNaN( document.donarcard.pincode.value) ||
           document.donarcard.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.donarcard.pincode.focus() ;
     return false;
   }
 var email = document.donarcard.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.donarcard.emailid.focus() ;
     return false;
 }
  /*if( document.StudentRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }*/
  if( document.donarcard.mobileno.value == "" ||
           isNaN( document.donarcard.mobileno.value) ||
           document.donarcard.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.donarcard.mobileno.focus() ;
     return false;
   }
   if( document.donarcard.efirstname.value == "" )
   {
     alert( "Please provide correct firstName in emergency details!" );
     document.donarcard.efirstname.focus() ;
     return false;
   }
   if( document.donarcard.elastname.value == "" )
   {
     alert( "Please provide your last Name in emergency details!" );
     document.donarcard.elastname.focus() ;
     return false;
   }
   if( document.donarcard.relation.value == "" )
   {
     alert( "Please provide correct relationship" );
     document.donarcard.relation.focus() ;
     return false;
   }  
   var b;
   b=Number(document.donarcard.eage1.value)
   if( b<=18 )
   {
     alert( "age must be above 18 in emergency details" );
     document.donarcard.eage1.focus() ;
     return false;
   }
   if( document.donarcard.epersonaladdress.value == "" )
   {
     alert( "Please provide correct Personal Address in emergency details!" );
     document.donarcard.epersonaladdress.focus() ;
     return false;
   }  
   if( document.donarcard.edist.value == "" )
   {
     alert( "Please provide correct  District in emergency details!" );
    
     return false;
   }   
   if( document.donarcard.estate.value == "" )
   {
     alert( "Please provide correct  State in emergency details!" );
     
     return false;
   }
   if( document.donarcard.epincode.value == "" ||
           isNaN( document.donarcard.epincode.value) ||
           document.donarcard.epincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ###### in emergency details." );
     document.donarcard.epincode.focus() ;
     return false;
   }
 var email = document.donarcard.eemailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID in emergency details")
     document.donarcard.eemailid.focus() ;
     return false;
 }
 if( document.donarcard.emobileno.value == "" ||
           isNaN( document.donarcard.emobileno.value) ||
           document.donarcard.emobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.donarcard.emobileno.focus() ;
     return false;
   }
   return( true );
}