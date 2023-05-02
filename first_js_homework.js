//Arielle Gironza
//Unit 1 Week 1 Homework 1 -- May 02, 2023


//SECTION 1
/* 1. (Was this just an example of commenting out the answers? Maybe it wasn't one of the actual questions, oops)
Concatenation involves the addition of strings to one another where each respective string is not altered (e.g., adding strings of Christmas tree lights to each other). 
Interpolation involves the alteration of the original string being targeted, so rather than joining two separate strings, part(s) of a string will be replaced or substituted.

1 (real 1). DRY stands for 'Don't Repeat Yourself,' referring to the idea of writing more efficient code and avoiding very repetitive code.
Coding is a powerful tool -- by learning how to write functions and utilizing commands like 'for' loops or conditionals, we can improve on the quality of the code we write (e.g., make it easier to read and share).


2. All are commands that are used to declare variables in different contexts: 'const' should be used only for variables that will not be reassigned in the program;
'let' can be used for variables that may change later in the program in a different code block; and 'var' is an older keyword (prior to the other two) for variables that can also be reassigned.
'const' and 'let' both declare Block Scope variables -- they can only be accessed within the block of code they are in, whereas 'var' variables can be accessed anywhere in the program.
*/

//SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f  = false;

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b <c);
console.log(a == a != d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);

var g = 0;
    console.log(g);
var g = b + c;
    console.log(g);

/* First I tried to use 'let' but kept getting an error that said that the block scope variable could not be reassigned which continued even when I changed the formatting.
I didn't want to use 'const' since the variable would be getting reassigned later, so I used 'var.'
*/

//Without using 'const,' 'let,' or 'var' there seems to be no error produced.

//When '10 = g' is added there is a syntax error that says 'Invalid left-hand side in assignment.'


//SECTION 3
//infinite loop II
//I believe this code would be an infinite loop because the condition that needs to be met is for true to be true. There is nothing preventing true from being true, so true will continue to be true and there is no stopping point for the loop.

//infinite loop II
/* I think this would not be an infinite loop. It starts with the same condition issue as the first example where true continues to be true.
I'm not completely certain that the variable being redeclared would work, but if it did then we would exit the loop. If not, we would not be able to exit the loop.
Once we exit the loop, the variable goes back to being true but we should be past the loop code block and it wouldn't go backwards in the program to start the code block again.
*/

//reading code
//declaring/assigning variables
let letters = "A";
let i = 0;
//starting a while loop that will run as long as i is less than 20 (until i=19)
while (i < 20) {
    //adds an "A" onto the pre-existing string of the letters variable
    letters += "A";
    //increment command, increases i by +1 everytime we reach this part of the loop
    i++;
}

console.log(letters);

/* The loop should run 20 times because we start from i=0 and go through i=19. We start with one 'A,' so the expected result would be a chain of 21 'A's: 'AAAAAAAAAAAAAAAAAAAAA'
The output was what I expected which was exciting.
*/

//SECTION 4
//for loops
/*'for' and 'while' both create loops that that run for a designated amount of times determined by conditions outlined in the declaration of the loop. 
'for' loops outline a starting point, end point, and increments by which to continue, so they are good to use for more structure and when more is known about how many iterations are needed.
'while' loops are less structured and will run through the the loop while the conditional statement remains true. Less definined end points.

The first part of the control panel is: the variable's assigned value before/when the loop begins. Start point, only used once.
The second part of the control panel is: the parameters defined for when to run the loop -- e.g., as long as i is less than 1000. The loop checks if this is still true before looping again.
The third part of the control panel is: an alteration to the variable each time the code block is run -- e.g., increase by x, decrease by x. 
*/

//for loop II
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

//bonus challenge
/* The backslash used in a string is a way of saying the next character is not part of the string -- it exists the string/says to treat the next character differently.
For example, without the backslash in the string, the single quotation would be read as an alteration to the string (premature end point) rather than as an apostrophe which is what the intent is.
The forward slash is used as a separator in URLs and used for comment notation, amongst other things. 
*/

//for loop in reverse
for (let i = 999; i > -1; i--) {
    console.log(i);
}

//more counting
for(i=1; i < 11; i++){
    console.log('The value of i is: ' + i + ' of 10');
}

//bonus challenge
for(i=1; i < 11; i++){
    console.log(`The value of i is: ${i} of 10`);
}

//iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for(let i=0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
}

for(let i=0; i < StarWars.length; i++) {
    console.log(`${i}: ` + StarWars[i]);
}

//bonus challenge
for(let i=0; i < StarWars.length; i += 2) {
    console.log(StarWars[i]);
}

//SECTION 5 is in terminal_homework.bash

