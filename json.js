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
    ],
    "algorithms":
    [
      {"questions": "what is complexity theory?", "answers": "Study of how complex alogrithms are. Used to determine how slow or fast an algorithm is based on different circumstances."},
      {"questions": "What is a numerical algorithm?", "answers": "Algorithms that manipulate numbers. Like finding prime numbers, factoring integers, generating random values, calculating greatest common divisers, and calculating the areas of the curves"},
      {"questions": "Why are linked lists useful?", "answers": "Useful for storing and manipulating data"},
      {"questions": "What are special algorithms that let you build arrays?", "answers": "triangular and sparce arrays"},
      {"questions": "When does recursion occur?", "answers": "When a piece of code calls itself."},
      {"questions": "Why would you use backtracking algorithms?", "answers": "These let a program search for a solution(s) and then backtrack if it encounters a problem"},
      {"questions": "What are the three key features algorithms need related to the complexity theory?", "answers": "Alogrithms need to be 1)correct (give the right answers) 2)understandable (too complicated is a bad thing if it can't be implemented) 3) efficient"},
      {"questions": "What are types of complexity theory?", "answers": "Time, Space, Other Resources: -Network, Graphics, Hardware(Printers, 3D Printers, CPUs, sensors)"},
      {"questions": "Which sorting mehtod is quickest and the best for a list of a partially sorted list of numbers?", "answers": "Bubble sort is best if the list of numbers already is partially sorted. Quick sort is quickest if the list isn't sorted at all but slow if the list is partially sorted."},
      {"questions": "Describe Big O Notation", "answers": "Used to study performance of alogritms. looks at Worst case behavior to see performance, asympnotic behavior (preformance of algortihm as problem grows very large)"},
      {"questions": "What are the 5 Big O Notation rules?", "answers": "1) If an algorthim performs f(N) steps, then it is O(f(N)) pronounced:order f of n), 2)"}
    ]};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
