const categories = document.querySelectorAll(".item");


const shortContents = () => {
  console.log(`Number of categories: ${categories.length}`);
  categories.forEach(
    (category) => (
      console.log(`Category: ${category.firstElementChild.textContent}`),
      console.log(`Elements: ${category.lastElementChild.children.length}`)
    ),
  );
};

console.log(shortContents());
