
  <script>
    // Your JavaScript goes here!
   
   let message = window.prompt('Who\'s there?');

   if (message == 'Admin'){
     let password = window.prompt('password');
  
     if (password == 'theMaster'){
     let welcomeMessage = 'welcome Admin';
     alert(welcomeMessage);
   }

   else if(password == '') {
     let cancelMessage='Cancel';
     alert(cancelMessage);
   }

   else{
     let errorMessage = 'I don\'t know you';
     alert(errorMessage);
   }

   }
   else if(message == '') {
     let cancelMessage='Cancel';
     alert(cancelMessage);
   }

   else{
     let errorMessage = 'I don\'t know you';
     alert(errorMessage);
   }
  
  </script>