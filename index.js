document.getElementById("myButton").onclick = function() {

    var cardNumber = document.getElementById("myText").value
    // "-" işareti geldiğinde kart numarasını kabul etmesini sağladık.
    var edittedNum = "";
    
    for (let i = 0; i < cardNumber.length; i++) {
    if (cardNumber[i] !== "-") {
    edittedNum += cardNumber[i];
    }
    }
    
    // Kart numarasının 16 haneli ve tipinin string olmasını sağladık.
    if (typeof(edittedNum) !== "string" || edittedNum.length !== 16) { 
       alert('Your Card Number Must Be 16 Digits!')
    } 
     // Harf girildiği taktirde uyarı vermesini sağladık.
    else if( parseInt(edittedNum) != edittedNum) {
         alert("Your Card Number Must Be Contain Just Number!")
    } 
      // Kart numaralarının toplamının 16'dan büyük olmasını, en az 2 farklı rakam olmasını ve son hanesinin çift  sayı olmasını sağladık.
    else if (true) {
       let counter = total = 0;
  
       for (let i = 0; i < edittedNum.length; i++) {
          if (edittedNum[0] === edittedNum[i]) {
           counter++;
           total += parseInt(edittedNum[i])
          } else total += parseInt(edittedNum[i]) 
       }
         
         if ( counter == 16) {
           alert("Your Card Number Must Contain At Least 2 Different Digits!")
         } else if ( total <= 16) {
           alert("The Sum Of The Digits Of Your Card Number Must Be Greater Than 16!")
         } else if (edittedNum[15] % 2 == 1 ) {
           alert("The Last Digit Of Your Card Number Must Be An Even Number!")
         } 
         // Luhn Algoritmasını kullanarak kart numarasının son kullanma tarihinin geçerli olup olmadığını hesaplamasını sağladık.
         else if (true) {
          let arr1 = arr2 = "";
          let total = total1 = total2 = "0"
           
              for (let i = 0; i < edittedNum.length; i += 2) {
               arr1 += Number(edittedNum[i]) * 2
               }
               arr1 = arr1.split("")
               arr1 = arr1.map((cardNumber) => Number(cardNumber))
               total1 = arr1.reduce((acc, number) => acc + number);
               
               for (let i = 1; i < edittedNum.length; i += 2) {
               arr2 += Number(edittedNum[i]) 
               }
               arr2 = arr2.split("")
               arr2 = arr2.map((cardNumber) => Number(cardNumber))
               total2 = arr2.reduce((acc, number) => acc + number);
               
               total = total1 + total2
               
               total % 10 == 0 ? alert("Great! Your Card Number Is Valid 🥳") : alert("Please Enter A Real Card Number!") 
               }
        
     }
    }
     
     
    // isCreditCardNumberValid ("9999777788880000") // "Great, Your Card Number Is Valid!"
    // isCreditCardNumberValid ("6666666666661666") // "Please Enter a Real Card Number!"
    
    // isCreditCardNumberValid ("a92332119c011112") // "Your Card Number Must Be Contain Just Number!"
    // isCreditCardNumberValid ("4444444444444444") // "Your Card Number Must Contain at Least 2 Different Digits!"
    // isCreditCardNumberValid ("1111111111111110") // "The Sum of the Digits of Your Card Number Must Be Greater Than 16!"
    // isCreditCardNumberValid ("6666666666666661") // "The Last Digit of Your Card Number Must Be an Even Number!"
    
    // isCreditCardNumberValid ("-9999-7777-8888-0000") // "Great, Your Card Number Is Valid!"
    // isCreditCardNumberValid ("-6666-6666-6666-1666") // "Please Enter a Real Card Number!"
  
    
    
  
    
     
  
  
  
  
  
   
   
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
  