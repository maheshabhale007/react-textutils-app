// function for odd even numbers
function oddEven(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// function for prime numbers
function prime(num) {    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}

console.log(oddEven(10));
console.log(prime(11));