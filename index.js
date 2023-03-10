

// //  {{{{{{{    1    }}}}}}}
//    function capitalizeFirstLetter(str) {

    
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
// }


// const string = prompt('wecodeacademy ');

// const result = capitalizeFirstLetter(string);

// console.log(result);

// // {{{ 2 }}}

// insert = function insert(main_string, ins_string, pos) {
//     if(typeof(pos) == "undefined") {
//      pos = 0;
//    }
//     if(typeof(ins_string) == "undefined") {
//      ins_string = '';
//    }
//     return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
//      }
//  console.log(insert('We are doing some exercises.'));
//  console.log(insert('We are doing some exercises.','JavaScript '));
//  console.log(insert('We are doing some exercises.','JavaScript ',14));



// //  {{{{{  3  }}}}}

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// // {{{{  4  }}}}

// let aji ="8875492"
// console.log(aji.padEnd(10,"*"));
// let jj=""

// let addr = "9573663527329";
// let index = addr.indexOf("8875767");
// let rightSide = addr.slice(index);
// let leftside = addr.slice(0, index);
// let finalHalf = leftside.slice(0, leftside.length / 2);
// let masked = finalHalf.padEnd(leftside.length, "*");
// console.log(masked + rightSide);

// let atm ="9876434"
// console.log(atm.padEnd(15,"*"));

// // {{{{{    5    }}}}}

// let p = 5;
// let st = "";

// for (let i = 1; i <= p; i++) {
 
//   for (let j = 1; j <= p - i; j++) {
//     st += " ";
//   }
  
//   for (let k = 0; k < 2 * i - 1; k++) {
//     st += "$";
//   }
//   st += "\n";
// }
// console.log(st);

// // {{{{{  6 }}}}}
// let b = prompt("what character is present at particular index in a word.")
// let a = "wecode academy";
// if(a ){
//     console.log("Congrulations")
//  }else{
//     console.log(NO)
// }


// // {{{{  7 }}}}
// let str = '';
// let substrings = str.concat('Wecode ', 'Hello ', 'World ', 'Academy');

// console.log(substrings);

// // {{{{{{{{   9    }}}}}}}}

// let n = 5;
// let strin = "";

// for (let i = 5; i >= 1; i--) {
 
//   for (let j = 1; j <= n - i; j++) {
//     strin += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     strin += "*";
//   }
//   strin += "\n";
// }
// console.log(strin);



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let str ="12325"
// // let str = aj.split("")
// let str2= ""
// for(let i = str.length-1;i>=0;i--){
//      str2 = str2 + str[i]     
// console.log(str[i]);
// }
// console.log(str2);
// if(str===str2){
//     console.log("yes");
// }else{
//     console.log("no");
// }





























// let arr= ["ajeet","8875492206","fatherName","bharunda","341031"]
// let arra=""
// console.log(arr),["ajeet","mobile","fatherName","address","pinode"];
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for(let o=arr.length-1;o>=0;o--){
//     console.log(arr[o]);
// }

// alert("ajeet")

// for(let a = 1;a<=100000;a++){
//     console.log(a);
// 


// for(let a =1;a<=10000;a++){
//     document.write("i love you ♥ parsti and buli","<br>")
// }


// let ary=[1,2,3,4,5,6,7,8,9,10]
// console.log(ary[2]);

// let arr=[0,1,4,3,2,5,6,7,8,9,10,11,12,13,14,55,66,87,99,101,140]
// let min=arr[0]
// for(let i=0;i>=arr.length-1;i--){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log(min);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let arr =[1,2,,34,5,5,56,67,87,33,22]
// let max=arr[0]
// for(let i=0;i<=arr.length-1;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }console.log(max);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// odd{ 1 }
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// let count=0
// for(let a=0;a<=arr.length;a++){
//     if(arr[a]%2===1){
//         count++
//     }
// }console.log(count);


// evne [ 2 ]

// let arr1=[1,2,3,4,5,6,7,8,9,10,11,12]
// let count1=0
// for(let b= 0;b<=arr1.length;b++){
//     if(arr[b]%2===0){
//         count1++
//     }
// }console.log(count1);

// // [ 4 ]

// let are=[1,2,3,4,5,6,7,8,9,10,11,1,2,3,3,3,2,2,2,2,2,2,2,1,1,1,11,1,1,1,1]
// let num=1
// let sum=0

// for(let c=0;c<=are.length;c++){
//     if(are[c]%2===0)
//     num=arr[c]
//     console.log(num);
// }
// \\\\\\\\\\\\\\\\\\\\]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,10)
// function sum1(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }sum1(10,22,22,22,2,)

// let a = 1243
// if(a===1243){
//     console.log("yes");
//     console.log("qwergthj");
// }

// const ajit = a
// function ajit(a){
//     console.log("yes");
// }
// ajit(123)

// function khan(a,b){
//     console.log(a*b);
// }
// khan(1,2)

// function loop(a,b){
//     for(let i =a;i<=b;i++){
//         console.log(i);
//     }
// }
// loop(10,20)




// function print_table(n, i = 1) {
//     if (i === 11) 
//     return;
//     console.log(n + " * " + i + " = " + n * i);
//     i++; 
//     print_table(n, i);
// }
// let n = 5;
// print_table(n);


// {  1  }

// function parint (n,i=2){
//     if(i===10)
// return;
// console.log(n+"*"+i+"="+n*i);
// i++;
// parint(n,i)
// }
// let n=5
// parint(n)

// {  2  }
// function malti(a,b){
//     console.log(a+b);
// }malti(2,5)

// {  3  }
// let arr=[1,2,3,4,5,6,7,8,9]
// function arre(ar){
//     console.log(ar);
// }ar(arr)

// {  4  }

// function trueFalse(a){

//     if(a<0){
//         console.log("yes");
//     }else{
//         console.log("no");
//     }
// }trueFalse(-7)
// trueFalse(6)

// [  5  ]
// function min(a,b)


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


            //  {   1   }

//   let arr1 = [1,2,3]
//    console.log(arr1[1]);




//    // {   2  } 


//     let arr2 = [1,2,3,4,5]
//     console.log(arr2.length)


//    //  {   3   }


//     let arr3 = [1,2,3,4]
//     for (let index = 0; index < arr3.length; index++) {
//       console.log(arr3[index])
      
//     }
//    //  {   4   }



//    //  {   5   }


//     let arr5 = [1,2,3]
//     arr5.push(4)
//     console.log(arr5)



//    //  {   6   }  



//     let arr6 = [1,2,3,4]
//     arr6.splice(1,1)
//     console.log(arr6);


//    //  {  7   }


//     let arr7 = [1,2,3,4,5]
//     arr7.splice(arr7.length-1)
//     console.log(arr7);




//     //{   8   }



//     let arr8 = [1,2,3]
//     let check = arr8.includes(11)
//     console.log(check);



//     //9

//    //  {  10  }

//    let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log(numbers);


//     //{  11  }



//     let arr111 =[1,2,3,4,5]
//     let arr112 =[6,7,8,9,10]
//     console.log(arr111.concat(arr112)); 



//     //{   12  }



//     let arr12 =[1,2,3,4,5]
//     console.log(arr12.join(","))


//     //{   13   }



//     let arr13 =[1,2,3,4]
//     console.log(arr13.reverse());

   //  {   14   }

   const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
   console.log .find(checkAge);
//   document.getElementById("demo").innerHTML = ages.find(checkAge);
}