// Write a faster implementation of the following method:
//Number.prototype.isPrime = function() {
//         for( let i=2; i<this; i++ ) {
//                 if( this % i === 0 ) {
//                     return false;
//                 }
//             }
//             return true;
//         }

const isPrime = num => {
    for (let i = 2; i * i <= num; i++){
        if(this % i === 0){
            return false;
        }
    }
    return true;
}




//Which implementation of Fibonacci should be faster?
// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);

//rFib has a big O of 2 to the power of N. This is because it has 2 branches with a depth of N. branches^depth. In other words, this algorithms stinks!

//iFib has a big O of N. This is faster :)




//Write a more efficient function to reverse a string:
//const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
//const reversed1 = story.split("").reverse().join("");

const reverseString = str => {
    let newStr = "";
    for(let i  = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr
}
