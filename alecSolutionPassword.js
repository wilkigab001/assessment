let password = 'abcdefg123';
let minChars = false;
let upperCheck = false;
let numCheck = false;
let letterCheck = false;

for(let i = 0; i < password.length; i++){
    console.log(password[i].toUpperCase())
    //checking if the character can be converted to a number data type
    if(!isNaN(+password[i])){
        numCheck = true;
    }
    //checking if number is uppercase
    if(password[i] === password[i].toUpperCase()){
        upperCheck = true;
    }
}
//check that the password has a letter

if(/[a-zA-Z]/.test(password)){
    letterCheck = true;
}
//check that password meets minimum and maximum amount of characters
if(password.length >= 10 && password.length < 20){
    minChars = true;
}
//check that everything is true

if(minChars && upperCheck && numCheck && letterCheck){
    console.log('success')
} else{
    console.log('failure')
}

console.log(letterCheck)