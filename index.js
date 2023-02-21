

//  {{{{{{{    1    }}}}}}}
   function capitalizeFirstLetter(str) {

    
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


const string = prompt('wecodeacademy ');

const result = capitalizeFirstLetter(string);

console.log(result);

// {{{ 2 }}}

insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',14));



//  {{{{{  3  }}}}}

function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// {{{{  4  }}}}

let aji ="8875492"
console.log(aji.padEnd(10,"*"));
let jj=""

let addr = "9573663527329";
let index = addr.indexOf("8875767");
let rightSide = addr.slice(index);
let leftside = addr.slice(0, index);
let finalHalf = leftside.slice(0, leftside.length / 2);
let masked = finalHalf.padEnd(leftside.length, "*");
console.log(masked + rightSide);

let atm ="9876434"
console.log(atm.padEnd(15,"*"));

// {{{{{    5    }}}}}

let p = 5;
let st = "";

for (let i = 1; i <= p; i++) {
 
  for (let j = 1; j <= p - i; j++) {
    st += " ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    st += "$";
  }
  st += "\n";
}
console.log(st);

// {{{{{  6 }}}}}
let b = prompt("what character is present at particular index in a word.")
let a = "wecode academy";
if(a ){
    console.log("Congrulations")
 }else{
    console.log(NO)
}


// {{{{  7 }}}}
let str = '';
let substrings = str.concat('Wecode ', 'Hello ', 'World ', 'Academy');

console.log(substrings);

// {{{{{{{{   9    }}}}}}}}

let n = 5;
let strin = "";

for (let i = 5; i >= 1; i--) {
 
  for (let j = 1; j <= n - i; j++) {
    strin += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    strin += "*";
  }
  strin += "\n";
}
console.log(strin);



