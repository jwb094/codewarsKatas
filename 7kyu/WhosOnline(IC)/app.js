const whosOnline = (friends) => {
  let output = {};
  //const online = friends.filter(
//     (friend) => friend.status == "online" && friend.lastActivity <= 10
//   );
//   const away = friends.filter(
//     (friend) => friend.status == "online" && friend.lastActivity > 10
//   );

const online = friends.filter(function (friend) {

    if ( friend.status == "online") {
        if ( friend.lastActivity < 10) {
        
        } else{
            
        }
    }


    });
  const offline = friends.filter((friend) => friend.status == "offline");

  if (online.length !== 0) {
    for (let index = 0; index < online.length; index++) {
      output["online"] = [`${online[index].username}`];
    }
  }
  if (away.length !== 0) {
    for (let index = 0; index < away.length; index++) {
      output["away"] = [`${away[index].username}`];
    }
  }
  if (offline.length !== 0) {
    for (let index = 0; index < offline.length; index++) {
      output["offline"] = [`${offline[index].username}`];
    }
  }
  //console.log(output);

  return  output.length == 0 ? [] : output;
};
// const whosOnline = (friends) => {

// //   let output = {};

//   const online = friends.filter(function (friend) {
//     if (friend.status == "online" && friend.lastActivity <= 10) {
//         new_array = {};
//       new_array["online"] = [`${friend.username}`];
//      // output.push(new_array);
//     }
//   });

//   const away =  friends.filter(function (friend) {
//     if (friend.status == "online" && friend.lastActivity > 10) {
//      new_array = {};
//       new_array["away"] = [`${friend.username}`];
//      // output.push(new_array);
//     }
// });

// const offline =  friends.filter(function (friend) {
//     if (friend.status == "offline") {
//       new_array = {};
//       new_array["offline"] = [`${friend.username}`];
//       return new_array;
//     //  output.push(new_array);
//     }
// });

// console.log(online);
// console.log(away);
// console.log(offline);
// return output;

// };

let Arr = [];
// const whossOnline = (friends) => friends.filter( function (friend)  {
//     if ( friend.status == 'online' && friend.lastActivity  <= 10) {
//         //console.log(friend);
//         new_array = {};
//         new_array['online']  = friend.username;
//         return  Arr.push(new_array);

//     } else if (friend.status == 'online' && friend.lastActivity  > 10) {
//         new_array = {};
//         new_array['away']  = friend.username;
//         return  Arr.push(new_array);
//     } else {
//         new_array = {};
//         new_array[friend.status]  = friend.username;
//        return   Arr.push(new_array);
//     }
//    //console.log(Arr);

//   //  return Arr;
// }
// );

console.log(
  whosOnline(
    (friends = [
      {
        username: "David",
        status: "online",
        lastActivity: 10,
      },
      {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
      },
      {
        username: "Bob",
        status: "online",
        lastActivity: 104,
      },
    ])
  )
);

console.log(
  whosOnline(
    (friends = [
      {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
      },
      {
        username: "Bob",
        status: "online",
        lastActivity: 104,
      },
    ])
  )
);
