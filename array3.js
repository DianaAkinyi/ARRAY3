//Write a function that accepts an array of strings and
// console.logs each element using a for loop.
function strings(string){
    for(let i=0;i<string.length;i++){

console.log(string[i]);
}
}
const string =["kelly","klein","akelo"]
strings(string)


//Write a function that accepts an array of numbers and uses the forEach() 
//method to console.log each number multiplied by 2.
let number=[1,2,3,4,5] 
function numbers(number){
let results =[];
number.forEach(function(item){
results.push(item *2) 
})
console.log(results);
   
} 
 numbers(number) 
 //Write a function that takes in an array of numbers and consoles 
 //the first four items multiplied by 8 and the last two added by 5. 
 // the array with the new values
  let array =[3,5,10,30,8,6];
//   let multiplication=1
   

   function arrays(array){    
     for(let i=0;i<4;i++){
     array[i]*=8
     }
     for(let i=array.length-2;i < array.length;i++){
        array[i]+=5
        
        
    }
    console.log(array)
  } 
  arrays(array)  
 //let i =0;
// let multiplication=1
// let sum =0;
// while(i<num.length-2){
//     console.log(num[i]);
//     sum+=num[i]
//     multiplication *=num[i]
//     i++;
    

    
// }
// console.log({sum});
// console.log({multiplication})}
        // arrays(array) 
 //Write a function that takes in the following array and 
 //use a while loop to iterate and break when the item is equal to the fourth index
let aray = [1,2,3,4,5,6,7,8,9];

function iterate(aray){
    for(let i=0;i<aray.length;i++){
        console.log(aray[i]);
        if(i === 4){
            break;
        }
}
}
iterate(aray)


//Write a function that takes in a an array of strings and use a continue 
//statement when the item is at the second index
let indes= ['apple','plum','banana','strawberries','kiwi']
function indexs(indes){
    for(let i=0;i<indes.length;i++){
        
        
        if(i === 2){
            continue;
        }
        console.log(indes[i]);
}
}
indexs(indes)

