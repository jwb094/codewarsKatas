function generateLink(user) {

    if (user.length === 0) {
        return false;
    }

    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}


console.log(generateLink('matt c'));
console.log(generateLink('g964'));//,'http://www.codewars.com/users/g964');
console.log(generateLink('GiacomoSorbi'));//,'http://www.codewars.com/users/GiacomoSorbi');
console.log(generateLink('ZozoFouchtra'));//,'http://www.codewars.com/users/ZozoFouchtra');
console.log(generateLink('colbydauph'));//,'http://www.codewars.com/users/colbydauph');