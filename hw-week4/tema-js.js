// 1.display in the console the numbers from 1 to 20


for (i = 1; i <= 20; i++) {
    console.log(i);
   }

   console.log('\n')

// 2.display in the console the odd numbers from 1 to 20


for  (i = 1; i <= 20; i++) {
    if (i % 2 != 0)
    console.log(i);
   }

   console.log('\n')

// 3.compute the sum of the elements of an array and display it in the console

var sum = 0;
var numbers = [1, 3, 7, 3, 5, 9, 7, 7 ,7]
   for (var i = 0; i< numbers.length; i++)
sum = sum + numbers[i];
console.log(sum)

console.log('\n')

// 4.compute the maximum of the elements of an array and display it in the console
// varianta cu for & if

var array = [1, 3, 7, 3, 5, 9, 7, 7 ,7]
var max = array[0];


for (var i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max)


/*varianta cu math.max
var numbers = [1, 3, 7, 3, 5, 9, 7, 7 ,7]
console.log(Math.max(...numbers));
*/

console.log('\n')

// 5.compute how many times a certain element appears in an array


var array = [1, 3, 7, 3, 5, 9, 7, 7 ,7]
var count = {};

for (var i=0;i<array.length;i++){
var num = array[i];

if (count[num]){
count[num]=count[num]+1;}
else{
count[num]=1;}

}
console.log(count);


console.log('\n')
// 6.Using nested control structures (for, while) for generate the following pattern 0 1 0 1

//Tips: la 6 nu aveti nevoie de array, cu doua for-uri care merg de la 0 la 3 

// in interiorul for-urilor avem nevoie de if-uri

for (i = 0; i <= 5; i++) {
   for (j = 1; j <= i; j++) {
       if ((i + j) % 2 == 0) {
           console.log("0");
       } else {
           console.log("1");
       }
   }
}