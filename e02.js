function IsAPangrams(str = '') {
    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    for (let i = 0; i < alphabets.length; i++) {
        const loweredSentence = str.toLowerCase()
    
        if (!loweredSentence.includes(alphabets[i])) {
          return false
        }
    }
    
    return true
};

console.log(IsAPangrams("The quick brown fox jumps over the lazy dog"))
console.log(IsAPangrams("Hello Efrei"))

