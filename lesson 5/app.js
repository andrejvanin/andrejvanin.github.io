// let java = {
//     rar: "xnjnj",
// }
// console.log(java.rar);
// let java = [1, 2];
// alert(java[0]);

 

// if (n < 1000) {
//     if(n%3 == 0 || n%5 == 0){
//         x+n;
//     }
//     n++
// }
let x = 0;


for (let n = 0; n < 1000; n++) {
    if (n % 3 == 0 || n % 5 == 0) {
        x = x + n;
    }
}
console.log(x);

let k = 0;
let r = 1;
let o = 2;
let y = r + o;
function plus() {
    r++;
    o++;
}

for (let i = r; i < 4000; plus()) {
    o
    if (y % 2 == 0) {
        k = k + y;
    }
}
console.log(k);