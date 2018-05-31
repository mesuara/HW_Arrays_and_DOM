// function askUser(){
// 	var fruitArr = [];
// 	for (var i =0; i <5; i++){
// 		fruitArr.push(prompt('Enter your fruit ' + (i+1)));
// 		console.log(fruitArr.sort());
// 	 document.getElementById('aFruit').innerHTML = fruitArr.join(' ');
// 	}

   
// }
//  
  var fruitArr = [];
function askUser(){
  fruitArr.push(prompt('Enter your fruit'));
  fruitArr.sort();
  document.getElementById("b").innerHTML = 'Click again to add another fruit';
  document.getElementById('aFruit').innerHTML = '"' + fruitArr.join(' with ')  + '"';

}