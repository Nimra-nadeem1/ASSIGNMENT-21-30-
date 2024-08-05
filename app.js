document.write("<h1>ASSIGNMENT (21-25)</h1>");
document.write("<h2>QUESTION # 1:</h2>");
var firstname = prompt("Enter your first name:");
var lastname = prompt("Enter your last name:");
var fullname = firstname + lastname;
document.write("Hello miss " + fullname);



document.write("<h2>QUESTION # 2:</h2>");
var mobilemodel = prompt("What is your favourite mobile model?");
var length = mobilemodel.length;
document.write("My favourite phone is: " + mobilemodel + "<br>" + "Length of string is: " + length);



document.write("<h2>QUESTION # 3:</h2>");
var word = "pakistani";
var letter = "n";
var index = word.indexOf(letter);
document.write("String: " + word + "<br>" + "Index of 'n' is: " + index);



document.write("<h2>QUESTION # 4:</h2>");
var word = "Hello World";
var letter = "l";
var index = word.lastIndexOf(letter);
document.write("String: " + word + "<br>" + "Last index of 'l' is: " + index);



document.write("<h2>QUESTION # 5:</h2>");
var word = "pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>" + "Character at index 3 is: " + character);



document.write("<h2>QUESTION # 6:</h2>");
var firstname = prompt("Enter your first name:");
var lastname = prompt("Enter your last name:");
var fullname = firstname.concat(" " , lastname);
document.write("Hello miss " + fullname);



document.write("<h2>QUESTION # 7:</h2>");
var city = "Hyderabad";
var replace = city.replace("Hyder","Islam");
document.write("City: " + city + "<br>" + "After replacement: " + replace);




document.write("<h2>QUESTION # 8:</h2>");
var message = "Ali and Sami are best friends .They play cricket and football together";
var replacement = message.replace(/and/g , "&");
document.write("Message: " + message + "<br>" + "After replacement: " + replacement);




document.write("<h2>QUESTION # 9:</h2>");
var string = "475";
var number = Number(string);
var typeN = typeof(string);
var typeS = typeof(number);
document.write("Value: " + string + "<br>" + "Type: " + typeN + "<br>" + "Value: " + number + "<br>" + "Type: " + typeS);




document.write("<h2>QUESTION # 10:</h2>");
var word = prompt("Enter any word");
var capital = word.toUpperCase();
document.write("User input: " + word + "<br>" + "Uppercase: " + capital);




document.write("<h2>QUESTION # 11:</h2>");
var userinput = prompt("Enter any word");
var firstletter = userinput.charAt(0);
var firstcapital = firstletter.toUpperCase();
var remaining = userinput.slice(1);
document.write(firstcapital + remaining);





document.write("<h2>QUESTION # 12:</h2>");
var num = 35.36;
var str = num.toString();
var display = str.replace("." , "");
document.write("Number: " + num + "<br>" + "Dispaly: " + display); 




document.write("<h2>QUESTION # 13:</h2>");
function isValidUsername(username) {
  var invalidChars = /[@.,!]/;
  return !invalidChars.test(username);
}

function getUsername() {
  var username = prompt("Enter your username:");
  
  while (!isValidUsername(username)) {
    alert("Invalid username. Please avoid using @, ., , or !");
    username = prompt("Enter a valid username:");

  }
  alert("Username accepted: " + username);
  return username;
}

document.write(getUsername());










document.write("<h2>QUESTION # 14:</h2>");
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("welcome to nimra's bakery.what do want to order sir/ma'am");
var orderfound = false;
var itemindex = -1;
    for (var i = 0; i <= A.length; i++) {
    if (order == A[i]) {
        orderfound = true;
        itemindex = i;
        break;
    }
  }

    if (orderfound) {
        document.write(
          order + " available at index " + itemindex + " in bakery."
        );
    } else {
        document.write(order + " is not available in bakery.");
    }






document.write("<h2>QUESTION # 15:</h2>");
function isvalidpassword(password) {
  // [A-Za-z] denotes a character class that includes all uppercase and lowercase letters. and /\d/ This is a regular expression that matches any digit (0-9)  .\d is shorthand for the digit character class in regular expression
  var alphaandnum = /[A-Za-z]/.test(password) && /\d/.test(password);

  // /^:  The ^ character in a regular expression signifies the start of the string.This means that whatever pattern follows ^ must appear at the beginning of the string.
  var startwithnum = /^[A-Za-z]/.test(password);
  var passwordlength = password.passwordlength > 7;

  return alphaandnum&&startwithnum&&passwordlength;
}

function writepassword() {
  var password = prompt("Enter any password");

if (!isvalidpassword(password)) {
      alert ("Invalid password. Please write it as:\n" +
                "- Contains both alphabets and numbers\n" +
                "- Does not start with a number\n" +
                "- Is at least 6 characters long" );
  
      password = prompt("Enter a valid password");
    }else{
      alert("Password accepted");
      return password;
    }   
  }

document.write(writepassword());






document.write("<h2>QUESTION # 17:</h2>");
function displayLastCharacter() {
  var userInput = prompt("Enter a string:");
  var lastCharacter = userInput.charAt(userInput.length - 1);

  var outputDiv = document.getElementById("output");
      outputDiv.textContent = "The last character of the input is: " + lastCharacter;
}

document.addEventListener("DOMContentLoaded", function() {
  displayLastCharacter();
});








document.write("<h1>ASSIGNMENT (26-30)</h1>");
document.write("<h2>QUESTION # 1:</h2>");
var number = prompt("Enter any positive integer:");
var round = Math.round(number);
var ceil = Math.ceil(number);
var floor = Math.floor(number);
document.write("Number: " + number + "<br>" + "Round of value: " + round + "<br>" +"Ceil value: " + ceil + "<br>" +"Floor value: " + floor);





document.write("<h2>QUESTION # 2:</h2>");
var negvalue = prompt("Enter a negative float value:");
negvalue = parseFloat(negvalue);
var round = Math.round(negvalue);
var ceil = Math.ceil(negvalue);
var floor = Math.floor(negvalue);
if (negvalue < 0) {
  document.write("Number: " + negvalue + "<br>" + "Round of value: " + round + "<br>" +"Ceil value: " + ceil + "<br>" +"Floor value: " + floor)
}else{
  document.write("Plz enter negative float value:");
}





document.write("<h2>QUESTION # 3:</h2>");
var num = prompt("Enter a value:");
var absNum = Math.abs(num);
document.write("The absolute value of " + num + " is " + absNum);






document.write("<h2>QUESTION # 4:</h2>");
var dicenum = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dicenum);






document.write("<h2>QUESTION # 5:</h2>");
var coinnum = Math.floor(Math.random() * 2) + 1;
if (coinnum === 2) {
  document.write(coinnum + "<br>" + "Random coin value: Heads");  
}
else{
  document.write(coinnum + "<br>" + "Random coin value: Tails"); 
}





document.write("<h2>QUESTION # 6:</h2>");
var randNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100 is: " + randNum);








document.write("<h2>QUESTION # 7:</h2>");
var userInput = prompt("Enter your weight in kilograms i.e: ");
var weight = parseFloat(userInput.replace(/[^0-9.]/g, ''));
      if (isNaN(weight)) {
        document.write("Invalid input. Please enter a valid weight.");
      }else{
        document.write("The weight of user is " + weight + " kilograms");
      }




      

document.write("<h2>QUESTION # 8:</h2>");  
var secretnum = Math.floor(Math.random() * 10) + 1; 
var usernum = prompt("Enter the value between 1-10:");
if (secretnum === usernum) {
  document.write("Conratulations you got the right number that is:" + secretnum)
} 
else {
  document.write("OHHH NO! you get that wrong secret number is: " + secretnum);
};