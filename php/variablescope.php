<?php 
// variable scope

// local variable
function myFunction(){
    $price =10;
    // local variable only exists inside function
    echo $price;
}
// myFunction();
// echo $price;


function myAge($age){
    echo $age;
}
// myAge(18);

// echo $age;

// global variable

$name = "Autumn Fall";

// function sayHello(){
//     // make the variable to global
//     global $name;

//  $name = 'sandy';
//  $name ='ion';
//     echo "Hello $name";
// }

// sayHello();
// echo $name;
// another way to make this variable global
function sayBye(&$name){
$name ="Bill";
echo "bye $name";
}

sayBye($name);
echo $name;
?>