

# _Mr. Roboger's Neighborhood_

#### By _**Jordan Kennedy**_

#### _{The application takes numerical user input and outputs a message replacing 1, 2 & 3 with their respective message}_

## Technologies Used

* HTML
* JavaScript
* CSS

## Description

_{It takes numerical user input and outputs a message replacing 1, 2 & 3 with their respective message of "Beep!" "Boop!" and "Won't you be my neighbor?"}_

## Setup/Installation Requirements

* Clone or Fork project
* Make sure all images and files are in the proper folders
* deploy
* Enter numerical input in textbox

## Known Bugs

* None

## License

_{If you run into any issues or have questions, ideas or concerns, please email me at mod.jordan@icloud.com.}_

**License:** Apache License 2.0; June 17th, 2023

### _TESTS_

```Describe: beepBoop()

Test: "It should return an array of elements to the user's input text"
Code: 
let text = "10111011";
beepBoop(text);
Expected Output: ["1", "0", "1", "1", "1", "0", "1", "1"]

Test: "It should replace elements that contain a "1" with "Beep!"
Code:
let text = "1"; 
beepBoop(text);
Expected Output: "Beep!"

Test: "It should replace numbers that contain a "2" with "Boop!"
Code: 
let text = "2";
beepBoop(text);
Expected Output: "Boop!"

Test: "It should replace 3 with the string 'Won't you be my neighbor?'"
Code:
let text = "3";
beepBoop(text);
Expected Output: "Won't you be my neighbor?"

Test: "It should remove blank spaces if they are present."
Code:
let text = "01 25638 201 23"
beepBoop();
Expected Output: "0 Beep! Boop! 56 "Won't you be my neighbor?" 8 Boop! 0 Beep! Boop! Won't you by my neighbor?"

Test: "It should create an array with elements counting up to the input number amount."
Code:
let text = "13";
beepBoop(text);
Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 10 11 12 13"

Test: "It should replace 1, 2 or 3 according to their hiearchial position with 3 being the highest."
Code:
Let text = "13";
beepBoop();
Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?"```