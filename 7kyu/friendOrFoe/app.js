function friend(friends){
    //your code here

    console.log(friends.filter((friend) => friend.length <= 4 && /[a-zA-Z]/.test(friend)));

    let friendsLengthsLessThanFour = friends.filter((friend) => friend.length <= 4 );
    //console.log(friendsLengthsLessThanFour);
    let friendsDoesntContainsNumbers = friendsLengthsLessThanFour.filter((friend) => /[a-zA-Z]/.test(friend));
    //console.log(friendsDoesntContainsNumbers);

    return friends.filter((friend) => friend.length === 4 && /[a-zA-Z]/.test(friend));


}



  console.log(friend(["Ryan", "Kieran", "Mark"]));
  console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
  console.log(friend(["Love", "Your", "Face", "1"]));
  console.log(friend( [ 'Hell', 'Is', 'a', 'badd', 'word' ]))