function toCamelCase(str){
    if (!str) return str;
    if((/_/ig).test(str)) return str.split("_").map((item, i) => i !== 0? item[0].toUpperCase() + item.substring(1) : item).join("");
    if((/-/ig).test(str)) return str.split("-").map((item, i) => i !== 0? item[0].toUpperCase() + item.substring(1) : item).join("");
}

console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))// 'Jacob and Alex like this'
console.log(toCamelCase("A-B-C"))//, 'Max, John and Mark like this');

