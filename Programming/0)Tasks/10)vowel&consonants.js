
let str = "tgregrytrytoijkdscsudyhsdoijsdryhroli"

let vowels = []
let consonants = []

// a , e , i , o , u 

console.log(str[0])

for(let i = 0; i < str.length; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        vowels.push(str[i])
    } else {
        consonants.push(str[i])
    }
}

console.log(vowels)
console.log(consonants)