//for loops

for( let i= 0;i < 5;i ++){
    console.log('in loop', i)
    //console returns 
    /* 
    in loop 0
    in loop 1
    in loop 2
    in loop 3
    in loop 4
    */
} //remember no semicolons at the end of loops

console.log('loop finished');//cosole returns loop finshed

/* Typically we normally loop through a set of data */

//Lets create an array of names or say we have a very long list of data from a database but we dont know the actual number of items in the set of data, we could use the for loop technique to know as shown in the example below 

const names = ['kevin','kahwai','kagwima'];

for (let i=0; i<names.length; i++){
    console.log(i);
    /* console returns 0,1,2 */
}

/* lets say we want to log the names of any amount of array we will use square bracket notation */

for (let i=0; i<names.length; i++){
    console.log(names[i]);
    /* console returns 'kevin','kahwai','kagwima'*/
    //Use template literal
    let html =`<div>${names[i]}</div>`;
    console.log(html);
}

/* WHILE LOOP */

/* Has no bigger differnce with the for loop except for the syntax */

//with while loops, the initilization is done outside of the syntax

let i = 0;

while(i< 5){
    console.log('in loop', i);
    //however this will give us an endless loop,to combat this, we write the expression inside of the code block but outside of the while code block
    i ++;
    /* console returns
    in loop 0,in loop 1,in loop 2,in loop 3,in loop 4  */
}

//Another example using while loops
const namesA = ['kevinA','kahwaiA','kagwimaA','sbfrgsA','sgneymA'];

let n = 0;
while(n < 5){
    console.log(namesA[n])
    n++;
    /* console prints 
    'kevinA','kahwaiA','kagwimaA','sbfrgsA','sgneymA'
    */
}

//DO-WHILE LOOPS...it makes sure even if our condition is met the code only runs once

let p = 6;
do{
    console.log(p);
    p ++;
}while(p<5);

/* console returns 6, because in the first iteration the do code block will still run,but after it encounter whe while loop of p<5 then it will not */

let x = 1;
do{
    console.log(x);
    x ++;
}while(x < 5);
/* Console returns 1,2,3,4 */

/* CONDITIONAL STATEMENTS */

//IF STATEMENTS---the code block is only executed once and there is no looping, a declaration is made outside of the code block

const age = 2;

if (age > 20){
    console.log('You are above 20 years');
}//if statements are usually employed in sign-in to check whether password is a certain characters lonffg or checking whether users are online or offline

//Example

const password = "tinga96";

if(password.length >= 12){
    console.log('That password is long enough!')
}

if(password.length >= 10){
    console.log('That password is long enough!')
}else{
    console.log('Your password is not long enough');
};
/* else{
    console.log('you are below 20 years');
}; */


//IF,ELSE-IF & ELSE STATEMENTS EXAMPLE
const passwordA = "tingatinga9600";

if(passwordA.length >= 12){
    console.log('Your  password is super strong!')
}else if(passwordA.length >= 10){
    console.log('Your password is strong!')
}else{
    console.log('Your password is not strong enough!');
};


/* LOGICAL OPERATORS = OR || and AND && */

const passwordB = "tg@96";

if(passwordB.length >= 12 && passwordB.includes('@')){
    console.log('Your  password is super strong!')
}else if(passwordB.length >= 10 || passwordB.includes('@') && passwordB.length >7){
    console.log('Your password is strong!')
}else{
    console.log('Your password is not strong enough!');
};


/* LOGICAL NOT(!) This logical operator reverses the boolean if placed infront, to demo this. */

console.log(true);//console prints true
console.log(false);//console prints false

console.log(!true);//console prints false
console.log(!false);//console prints true

let userAloginDetails = false;

if(userAloginDetails){
    console.log('You must sign-in to continue');//code doessnt run as the condition is false,however on using the logical operator NOT, it will run
} else if(!userAloginDetails){
    console.log('Continue browsing');//code runs
}


//BREAK AND CONTINUE - Imagine a scenerio where you have an array of items, say scores and you want to loop over the array such that every time there is a cycle the console prints out the value of  the score

const scores = [50,25,125,0,265,100,229,200,0,132,54,250];

for( let x = 0; x < scores.length; x++){


    //Lets assume that the lowest score that could be achieved is zero, and we dont want it displayed, we will use continue  keyword, this makes the iteration continue though the value 0 is not displayed,it howe ver ignores the restof the code after 

    if(scores[x] === 0){
        continue;
    }


    console.log('Your score is :', scores[x]);
    //Lets say you can get to a max score of 200, thats the hoghest attainable mark one can getin a test and at that point we can break out the loop, we will use break keyword
    if( scores[x] === 250){
        console.log('Congrats, You are the top scorer!')
        break;//this break keyword stops the iteration further
    }
}

/* SWITCH STATEMENTS- They are used when checking multiple single value of a variable, we do this by the keyword SWITCH and CASE*/

const grade = "C";

switch(grade){
    case "A":
        console.log('You got an A!');
        break
    case "B":
        console.log('You got an B!');
        break
    case "C":
        console.log('You got an C!');
        break
    case "D":
        console.log('You got an D!');
        break
    case "E":
        console.log('You got an E!');
        break
    default:
        console.log('Not a valid grade');

        /* Howevwe you will notice that this code runs even after the conditon is met, to avoid this we use the break keyword */

        /* Switch statements use strict equality */
}


/* VARIABLES & BLOCK SCOPE(Global scope and local scope)
It is important to note that global scope variable is available for the whole DOM while local variable is only limited within a certain code block, Example
*/

let ageX = 42;//GLOBAL VARIABLE


if(true){
    let ageX = 30;//local variable
    let namesX = 'Kevin';//local variable
    console.log('I can have access to both global and variables ', ageX,namesX)
}

console.log('i can only have access to global variable',ageX,/* namesX */);

//We cannot redeclare a global variable but we can redeclare a local variable

/* Avoid using var when naming variables, this is because var ignores the block/local scope concepts */



