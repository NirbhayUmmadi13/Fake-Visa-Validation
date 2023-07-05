// When user clicks on submit button, we should get the information user has entered in console 
// so that we can process that to check the credit card number length.

function getData() {
   var name = document.getElementById("name").value;
   console.log(name) 
   var credNumber = document.getElementById("cred-number").value
   console.log(credNumber.length)
   var cvv = document.getElementById("cvv").value
   console.log(cvv) 
   var date = document.getElementById("date").value
   console.log(date) 


  
   if(credNumber.length!='16' && credNumber.length!='4' & credNumber.length!='13'){
      document.getElementById('showdata').innerHTML='The cred card number length is not accepted'
      setTimeout(() => {
         document.getElementById("showdata").innerHTML="" 
         console.log("in timeout")  }, 2000);
   }
  



   //  if cred number is equal to 16 then proceed

   // if cred number is equal to 13 then proceedd
   // if cred number is equal to 4 then proceedd







// if (credNumber.length!=16) {
// document.getElementById("showdata").innerHTML="Fix your mistake or the IRS will come after you."
// }
// else if (credNumber.length!=13){
//    document.getElementById("showdata").innerHTML="Fix your mistake or the IRS will come after you."
// }
// else if(credNumber.length!=4){
//    document.getElementById("showdata").innerHTML="Fix your mistake or the IRS will come after you."

// }
}