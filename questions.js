// var myObj, myJSON, text, obj;
//
// //Storing data:
// myObj = { "name":"John", "age":31, "city":"New York",
//  "javascripts":
//    [
//      {"questions":"what does json stand for", "answers":"JavaScript Object Notation"},
//      {"questions":"test", "answers": "test"}
//    ],
//   "html":
//     [
//       {"questions": "test", "answers": "test"}
//     ],
//     "algorithms":
//     [
//       {"questions": "what is complexity theory?", "answers": "Used to determine how slow or fast an algorithm is based on different circumstances."},
//       {"questions": "What is a numerical algorithm?", "answers": "Algorithms that manipulate numbers. Like finding prime numbers, factoring integers, generating random values, calculating greatest common divisers, and calculating the areas of the curves"},
//       {"questions": "Why are linked lists useful?", "answers": "Useful for storing and manipulating data"},
//       {"questions": "What are special algorithms that let you build arrays?", "answers": "triangular and sparce arrays"},
//       {"questions": "When does recursion occur?", "answers": "When a piece of code calls itself."},
//       {"questions": "Why would you use backtracking algorithms?", "answers": "These let a program search for a solution(s) and then backtrack if it encounters a problem"}
//     ]};
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);
//
// //Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
document.getElementById("language").innerHTML = obj.name;

//questions function
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
