const reverseArr = (arr66)=>{
    for(let i = 0; i < reverseArr.length; i++){
          let element = arr66.pop()
          arr66.unshift(element)
    }

    return arr;
}

let arr66 = ["akhilesh", "darsh", "chinki", "monjulika"];

console.log(reverseArr(arr66));