Describe: beepBoop()

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

Test: "It should replace numbers that contain a "2" with "Boop"
Code: 
let text = "2";
beepBoop(text);
Expected Output: "Boop"

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

