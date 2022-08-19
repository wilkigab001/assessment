//create a variable password
//create an array based off of that password to be able to loop through
//check 3 conditions: length, if has letters, and if has numbers
//check if there is at least one uppercase
//check to make sure there is no whitespace


let password = 'fr1edChicken'
let passwordArray = password.split('')
let letterCheck = /[a-z]/
let numberCheck = /[0-9]/
let x = false
//console.log(passwordArray)
let capitals = /[A-Z]/


if(passwordArray.length > 10 && passwordArray.length < 20 ){ // checks for maximum length and minimum length
    if(password.search(letterCheck) > -1){        // checks to make sure that it has letters
        //console.log('success')
        if(password.search(numberCheck) > 0){ // checks that it has numbers
            //console.log('success')
            if(password.includes(" ") !== true){ // checks to make sure it has no whitespace
                //console.log('success')
                if(capitals.test(password) === true){ // checks to make sure it has capitals
                    console.log('success')
                    console.log('                                         __          \n' 
+ `  ____  ____   ____    ________________ _/  |_  ______\n` 
+ `_/ ___\/  _ \ /    \  / ___\_  __ \__  \\   __\/  ___/\n` +
'\  \__(  <_> )   |  \/ /_/  >  | \// __ \|  |  \___ \ \n' +
' \___  >____/|___|  /\___  /|__|  (____  /__| /____  > \n' +
'     \/           \//_____/            \/          \// \n' )

                }
                else{
                    console.log('failure')
                }
            }
            else{
                console.log('failure')
            }
        }
        else{
            console.log('failure')
        }
    }else{
        console.log('failure')
    }
}else{
    console.log('failure')
}
console.log(
`                                          __          \n`+
`  ____  ____   ____    ________________ _/  |_  ______\n`+
`_/ ___\/  _ \ /    \  / ___\_  __ \__  \\   __\/  ___/\n`+
`\  \__(  <_> )   |  \/ /_/  >  | \// __ \|  |  \___ \ \n`+
` \___  >____/|___|  /\___  /|__|  (____  /__| /____  > \n`+
`     \/           \//_____/            \/          \// \n` )


