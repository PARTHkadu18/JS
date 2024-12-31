const marvel=["thor", "ironman", "spiderman"]
const dc=["superman", "flash", "batman"]
// marvel.push("parth")


// marvel.push(dc) *Pushes dc as a single element in marvel

// const allHeros=marvel.concat(dc)
const allHeros=[...marvel,...dc]
// console.log(allHeros)

const arr2=[1,2,[2,3,3],[5,[6,[7]]]]
const arr21=arr2.flat(10)
// console.log(arr2);
// console.log(arr21);
const a=123

console.log(Array.of(a));
