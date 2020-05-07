<?php 
// functions

// 1. define a function
// 2. Call the function
// parameter
// function sayHello($name){
//     echo "Goo morning $name";
// }
// // aergument
// sayHello('jungeun kim');

// function, but doesn't have argument, but shows default argument because we defined the default values
// function sayHello($name = 'Josuh', $time ='morning'){
//     // echo "Good Morning $name";
//     echo "Good $time, $name";
// }
// sayHello('kelly', 'night');
// We nedd to wrap with {} when we hace variable with key that expects value
 $product = ['name'=>"chocolate", 'price'=> 35];
function formatProduct($product){
    echo "{$product['name']} costs \${$product['price']} to buy <br>"; 
}
// formatProduct(['name'=> 'pasta', 'price'=> 2.50]);
$formatted = formatProduct(['name'=>'pasta', 'price'=> 20]);
echo $formatted;

?>