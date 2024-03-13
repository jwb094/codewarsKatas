function sumTriangularNumbers(n) {
    let trinagularNumberArray = [];
    let index = 0;
    do {
        if(isTriangular(index)){
            trinagularNumberArray.push(index);
        }
        index++;
    } while (n > trinagularNumberArray.length);
    return trinagularNumberArray.reduce((acc, currVal) => acc + currVal,0);
}

function isTriangular(num) 
{
    if (num < 0)
        return false;

    // Considering the equation
    // n*(n+1)/2 = num
    // The equation is :
    // a(n^2) + bn + c = 0";
    var c = (-2 * num);
    var b = 1, a = 1;
    var d = (b * b) - (4 * a * c);

    if (d < 0)
        return false;

    // Find roots of equation
    var root1 = (-b +  Math.sqrt(d)) / (2 * a);

    var root2 = (-b -  Math.sqrt(d)) / (2 * a);

    // checking if root1 is natural
    if (root1 > 0 && Math.floor(root1) == root1)
        return true;

    // checking if root2 is natural
    if (root2 > 0 && Math.floor(root2) == root2)
        return true;

    return false;
}



console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
console.log(sumTriangularNumbers(943));
console.log(sumTriangularNumbers(-971));
