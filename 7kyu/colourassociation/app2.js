function colourAssociation(array){
   return  array.map(([colour, association]) => ({[colour]:association}))
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));