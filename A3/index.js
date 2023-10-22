let addBtn = document.getElementById("Add");
let subBtn = document.getElementById("Sub");
let mulBtn = document.getElementById("Mul"); 
let divBtn = document.getElementById("Div");

addBtn.addEventListener("click", function sum() {
  let num1 = parseInt(document.getElementById("num1").value, 10);
  
  let num2 = parseInt(document.getElementById("num2").value, 10);

  if (isNaN(num1) || isNaN(num2)) { document.write("Please enter valid numbers in the input fields.");
  } else {
    let sum = num1 + num2;
    document.write(`The sum of the numbers is ${sum}`);
  }
});

subBtn.addEventListener("click", function sub() {
  let num1 = parseInt(document.getElementById("num1").value, 10);
  let num2 = parseInt(document.getElementById("num2").value, 10);

  if (isNaN(num1) || isNaN(num2)) {
    document.write("Please enter valid numbers in the input fields.");
  } else {
    let sub = num1 - num2;
    document.write(`The subtraction of the numbers is ${sub}`);
  }
});

mulBtn.addEventListener("click", function mul() {
  let num1 = parseInt(document.getElementById("num1").value, 10);
  let num2 = parseInt(document.getElementById("num2").value, 10);

  if (isNaN(num1) || isNaN(num2)) {
    document.write("Please enter valid numbers in the input fields.");
  } else {
    let mul = num1 * num2;
    document.write(`The multiplication of the numbers is ${mul}`);
  }
});

divBtn.addEventListener("click", function div() {
  let num1 = parseFloat(document.getElementById("num1").value, 10);
  let num2 = parseFloat(document.getElementById("num2").value, 10);

  if (isNaN(num1) || isNaN(num2)) {
    document.write("Please enter valid numbers in the input fields.");
  } else {
    let div = num1 / num2;
    document.write(`The division of the numbers is ${div}`);  }
});
