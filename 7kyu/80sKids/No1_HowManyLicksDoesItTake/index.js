function totalLicks(env) {
    // The Owl says, "Code Me!"
let averageLicks  = 252;
    console.log(env);
    for (const key in env) {

        // console.log(env.hasOwnProperty.call(env, key));
        // console.log(env[key]);
        // console.log( Object.entries(env));


        averageLicks = averageLicks  + env[key];
    }



    console.log(averageLicks)

  // env =  sort_val(env);
 
   console.log(Object.values(env).sort((b,a)=>{
    return b - a ? 1 : -1;
   }));
  }

//   function sort_val(a,b){

//     console.log(a.value,b.value)
//     // if (condition) {
         
//     // } 



//   }


  console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 }))
  console.log(totalLicks({ "happiness": -5, "clear skies": -2 }));
  console.log(totalLicks({"dragons": 100, "evil wizards": 110, "trolls": 50}));
 /* console.log(totalLicks({ "white magic": 10, }));
  */