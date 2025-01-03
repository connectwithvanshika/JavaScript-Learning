// This code prints all vowels in a string 
function printVowels(str){
    let v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(let i = 0; i < v.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[j] === v[i]){
                console.log(str[j]);
            };
        };
    };
}

printVowels("Vanshika")



// This code prints count of all vowels in a string 

function countvow(str) {
    let count = 0
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countvow("Vanshika");



// This code prints count of all vowels in a string using arrow function  

const countarrow = (str) =>{

        let count = 0
      for (const char of str) {
        if (
          char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u"
        ) {
          count++;
        }
      }
      console.log(count);
    }
countvow("Vanshika");
    