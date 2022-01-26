//Exercise 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  print(); 
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 
  
  function blast(){
    setInterval(() => {

      for (let i = 0; i<=15; i++){

        if (i % 5 === 0 && i % 3 === 0) console.log(i, "BOOM!! BANG!!")
        else if (i % 3 === 0) console.log(i, "BOOM!!")
        else if (i % 5 === 0) console.log(i, "BANG!!")
      }
      
    }, 1 * 1000);

  }

  blast()