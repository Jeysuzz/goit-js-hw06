// const categoryElements = document.querySelectorAll(".item");
// console.log("Number of Categories:", categoryElements.length);

// categoryElements.forEach((el) => {
//     const categoryName = el.firstElementChild.textContent;
//     console.log("Category:", categoryName);

// const categoryNameList = el.lastElementChild;
// console.log("Elements:", categoryNameList.children.length);

// });


const categoriesElements = document.querySelectorAll(`.item`);
console.log ("Number of Categories: ", categoriesElements.length);

categoriesElements.forEach ((el) => {
    const categoryName = el.firstElementChild.textContent;
    console.log("Category: ", categoryName);

    const categoryList = el.lastElementChild;
    console.log("Elements: ", categoryList.children.length);
})