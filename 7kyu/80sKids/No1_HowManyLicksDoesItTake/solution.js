function totalLicks(env) {
    let challenge
    let averageLicks  = 252;

    for (const key in env) {
        averageLicks = averageLicks  + env[key];
    }

    for (const key in env) {

      if (Math.sign(env[key]) === -1  ) {
        delete env[key];
      }
  
  }

  for (const key in env) {
    if (env.hasOwnProperty.call(env, key)) {
      const element = env[key];
      if (element === Object.values(env).sort((b,a)=>{return a > b ? 1 : -1;}).shift() ) {
        challenge = key;
       
      }
    }
  }


    return `It took ${averageLicks} licks to get to the tootsie roll center of a tootsie pop.` +
    (challenge ? ` The toughest challenge was ${challenge}.` : "")
  }



  console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 }))
  console.log(totalLicks({ "happiness": -5, "clear skies": -2 }));
  console.log(totalLicks({"dragons": 100, "evil wizards": 110, "trolls": 50}));
  console.log(totalLicks({ "white magic": -250, }));
  