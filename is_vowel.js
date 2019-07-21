function is_vowel(char){
  let listofVowel= ['a','i','e','o','u','A','I','E','O','U'];
  
  return listofVowel.includes(char);
}

console.log(is_vowel('b'));