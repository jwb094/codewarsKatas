/*function shortcut (string) {
    let pieces = string.split(" ");
     //let newstring = "";
     let newstring = [];
    //console.log(pieces);
    //return '';
    for (let index = 0; index < pieces.length; index++) {
       // console.log(index);
       console.log(pieces[index]);
       console.log(pieces[index].replaceAll(/[a|e|i|o|u]/gi,""));
       
       pieces[index] = pieces[index].replaceAll(/[a|e|i|o|u]/gi,"");
        /*for (let str_index = 0; str_index < pieces[index].length; str_index++) {
           // console.log(pieces[index][str_index]);
            //console.log(  pieces[index][str_index].match(/[a|e|i|o|u]/i));
         //   console.log(str_index);
            if (!pieces[index][str_index].match(/[a|e|i|o|u]/i)) {
                console.log(pieces[index][str_index]);
                pieces[index][str_index] = pieces[index][str_index]
                //pieces.splice(pieces[index][str_index], 1);
                //pieces[index] = pieces[index][str_index];
                // if (str_index == pieces[index].length ) {
                //     console.log("space");
                // } else {
                //     console.log("spacenon");
                // }
                 //str_index === pieces[index].length ?  newstring +=  pieces[index][str_index]+" " :  newstring +=  pieces[index][str_index];
                //newstring += pieces[index][str_index];
                //newstring.push(pieces[index][str_index]);
            }

        }
       // const element = array[index];
        
    }
    console.log(pieces);
    console.log(newstring);
  }


  console.log(shortcut('how are you today?'));
*/
//   function shortcut (string){

//     // const regex = /[aeiou]/gi;
//     // string.match(/[aeiou]/gi).length;
//     // console.log(string);
//     let pieces = string.split(" ");

//     for (const key in pieces) {
//         console.log(pieces[key]);
//         if (Object.hasOwnProperty.call(object, key)) {
//             const element = object[key];
            
//         }
//     }
//   }
 // console.log(shortcut('how are you today?'));


 function shortcut (string) {
//     let pieces = string.split(" ");
//     for (let index = 0; index < pieces.length; index++) {
//      pieces[index] = pieces[index].replaceAll(/[a|e|i|o|u]/gi,"");
//      }

//   return pieces.join(" ");
// return string = string.replaceAll(/[a|e|i|o|u]/gi,"");
return string.replaceAll(/[a|e|i|o|u]/gi,""); 
}
 
   console.log(shortcut('how are you today?'));