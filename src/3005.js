// Biến
// function
// tên biến ->
// - danh từ, isStatus

// tên hàm nó phải hành động
// - sum, showProducts, removeProduct

// 1
// const a = 10;
// const b = 20;

// // 3
// function sum(a, b) {
//     // kiểm tra
//     if (typeof a !== "number" || typeof b !== "number") return -1;
//     // xử lý
//     const result = a + b;
//     // kết quả
//     return result;
// }

// // 2
// console.log(sum(a, b));
const a = 10;
const b = 20;

function sum(a, b) {
    // check
    if (typeof a !== "number" || typeof b !== "number") return -1;
    // processing
    const total = a + b;
    // return
    return total;
}
sum(a, b);

const products = [
    { id: 1, name: "Product A" }, // 1 -> index: 0 -
    { id: 2, name: "Product B" }, // 2 -> index: 1
];
function listProduct(products) {
    // check
    if (!Array.isArray(products) || products.length == 0) return false;
    // processing

    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `<h2>${products[i].name}</h2>`;
    }
    // return
    return result;
}
const app = document.getElementById("app");
if (app) {
    app.innerHTML = listProduct(products);
}

// loop
// for, for...in, for...of, forEarch, map