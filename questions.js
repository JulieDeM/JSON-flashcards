var myObj, myJSON, text, obj;

//Storing data:
myObj = { "name":"John", "age":31, "city":"New York",
 "javascripts":
   [
     {"questions":"what does json stand for", "answers":"JavaScript Object Notation"},
     {"questions":"test", "answers": "test"}
   ],
  "html":
    [
      {"questions": "test", "answers": "test"}
    ]};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

//
function questions (){
  for (var i = 0; i < obj.javascripts.length; i++) {
    var quests = obj.javascripts[i].questions;
    var answers = obj.javascripts[i].answers;
    document.createElement('p')
    document.getElementById("question").innerHTML = quests
    }
  return
}
questions();

//variety of colors for notecard
// var colors = ['#ff0000', '#00ff00', '#0000ff'];
function changeColors(){
  var colors = ['red', 'lightyellow', 'blue'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  console.log(random_color);
  document.getElementsByClassName('notecard').style.backgroundColor = random_color;
  return;
}
changeColors();
