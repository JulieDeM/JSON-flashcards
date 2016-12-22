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

function questions (){
for (var i = 0; i < obj.javascripts.length; i++) {
  var quests = obj.javascripts[i].questions;
  }
  return document.getElementById("question").innerHTML = quests
}
questions();
