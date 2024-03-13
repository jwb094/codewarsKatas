function findSpaceship(map) {
    // Help ALF find his spaceship
  }


  console.log(findSpaceship('..........\n..........\n.......X..\n..........\n..........'), [7, 2]);
   console.log(findSpaceship('.......\nX.......'), [0, 0]);
   console.log(findSpaceship('........................'), 'Spaceship lost forever.');
   console.log(findSpaceship(), 'Spaceship lost forever.');
   console.log(findSpaceship('X'), [0, 0]);