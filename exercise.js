// const q1array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// const q1_arrayStr = [1, "2", "3", 2];


// function solutionArray (array) {
//     let cleanArr = [];
//     let temp = [];
//     let subArray = [];
//     let sortedArray = array.slice().sort((a,b) => a-b);
//     let arrNum = sortedArray.filter(item => typeof item === "number");
//     let arrString = sortedArray.filter(item => typeof item === "string");
//     let arrNumLength = arrNum.length
//     for(let i = 0; i < arrNumLength; i++) {
//         if(arrNum[i] === arrNum[i+1]) {
//             temp.push(arrNum[i]);
//         } else if(arrNum[i] === arrNum[i-1]) {
//             temp.push(arrNum[i]);
//             subArray.push(temp);
//             temp = [];
//         } else if(arrNum[i] !== arrNum[i+1]) {
//             subArray.push(arrNum[i]);
//         }
//     }
//     cleanArr = cleanArr.concat([subArray], [arrString]);
//     return cleanArr;
// }

// console.log("////// START OF Q1 //////");
// console.log("\t array with numbers =>", cleanArr(q1array));

// console.log("\t array with strings =>", cleanArr(q1_arrayStr));
// console.log("////// END OF Q1 //////");

function solutionArray (array) {

    let sortedArray = array.slice().sort((a,b) => a-b);
    let arrNum = sortedArray.filter(item => typeof item === "number");
    let arrString = sortedArray.filter(item => typeof item === "string");
    let arrNumLength = arrNum.length
    for(let i = 0; i < arrNumLength; i++) {
        if(arrNum[i] === arrNum[i+1]) {
            temp.push(arrNum[i]);
        } else if(arrNum[i] === arrNum[i-1]) {
            temp.push(arrNum[i]);
            subArray.push(temp);
            temp = [];
        } else if(arrNum[i] !== arrNum[i+1]) {
            subArray.push(arrNum[i]);
        }
    }
    cleanArr = cleanArr.concat([subArray], [arrString]);
    return cleanArr;
}

const displayGroupedArray = () => {
    const inputArray = document.querySelector("#array1").value.replace(/ /g, "");
    const outputArray = document.querySelector("#output_array");

    // const arrayPattern = /^(-?\d+|\"-?\d+\")(,-?\d+|,\"-?\d+\")*$/;
	// if(!arrayPattern.test(inputArray)) {
	// 	outputArray.innerText = "Oops! Incorrect input format, please try again.";
	// 	return;
    // }
    
    const actualArray = inputArray.split(",").map(element => element.charAt(0) === "\"" ? element.slice(1,-1) : Number(element));
    outputArray.innerHTML = solutionArray(actualArray);
}

//Listening to clicks on the 'Clean array' button
document.querySelector("#submit_array").addEventListener("click", displayGroupedArray());