function countSheeps(arrayOfSheep) {
    // TODO May the force be with you

 const size = arrayOfSheep.filter((sheep) => sheep == true);

 return size.length;

}


  console.log(countSheeps( [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));