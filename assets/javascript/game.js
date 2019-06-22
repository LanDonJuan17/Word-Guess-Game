
var game = function(wrapper){

    return document.getElementById(wrapper);
  }
  

var words 
var wordChoice 
var answer 
var myLength 
var display 
var win 
var letters 
var attemptsLeft 
var output 
var userWord 

    var setup = function()
    {
       words = [ "galaxy",
       "asteroid",
       "stars",
       "planet",
       "sun",
       "moon",
       "universe",
       "supernova",
       "blackhole",
       "comet"]
       wordChoice = Math.floor(Math.random()*11);
       answer = words[wordChoice];
       myLength = answer.length;
       display = [myLength];
       win = myLength;
       letters = answer.split('');
       attemptsLeft = 10;
       output = "";
       userWord = "";
      

   


    for (var i=0; i<answer.length; i++)
    {
  
      display[i] =  "- ";
      output = output + display[i];
    };
    
    game("words").innerHTML = output;
    output = "";
    
    }
  
  
  
  
  var submit = function()
  {
  
      output= "";
      userWord=game("letters").value;
      game("letters").value="";
  
      for( var c=0; c< answer.length; c++)
      {
        
          if (userWord.toLowerCase()== letters[c])
          {
              display[c] = userWord.toLowerCase();
              win--;
          }
          output = output + display[c]+ " ";
          
  
          
      }
  
      
  
      game("words").innerHTML = output;
      output="";
      attemptsLeft--;
      if (win < 1)
      {game("guesses").innerHTML = "YOU WIN !!!"
      
      setup();
    
    }
  
    
  
      else if(attemptsLeft <1)
  
      {
        
        game("guesses").innerHTML ="YOU LOSE!!!";
        setup();
    
      }
  
      else {
  
          game("guesses").innerHTML = " YOU HAVE "+ attemptsLeft + " GUESSES LEFT";
      }
  }
  
  
      window.onload = function()
  
      {
           setup();
        
  
      }
  
    
      
  