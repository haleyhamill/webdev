/**
 * @param {string[]} name
 */
 function printFullName(name) {
    console.log(name);
    const [first, last] = name;
    return `${first} ${last}`;
}


// Sample usage (do not modify)
console.log(printFullName(["Sam", "Doe"]));
console.log(printFullName(["John", "Malaga"]));