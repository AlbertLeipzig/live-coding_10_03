const text = document.createElement("p");

text.innerText = "Hallo";
const body = document.querySelector("body");

const newForm = document.createElement("form");
const newLabel = document.createElement("label");
const newInput = document.createElement("input");

const btn = document.createElement("button");
btn.innerText = "Add More!";
body.appendChild(text);
newForm.appendChild(btn);
body.prepend(newForm);
newForm.appendChild(newLabel);
newForm.appendChild(newInput);

newLabel.textContent = "New Item:";

newInput.addEventListener('change', (e) => console.log(e.target.value))

// ======================================================== \\

const productData = [
  {
    name: "Product 1",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 9.99,
  },
  {
    name: "Product 2",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 8.1,
  },
  {
    name: "Product 3",
    image:
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 5.21,
  },
  {
    name: "Product 4",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 5.874,
  },
  {
    name: "Product 5",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 4.65,
  },
  {
    name: "Product 6",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 8.45,
  },
  {
    name: "Product 7",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 5.71,
  },
  {
    name: "Product 8",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 9.54,
  },
  {
    name: "Product 9",
    image:
      "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 6.51,
  },
  {
    name: "Product 10",
    image:
      "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 0.24,
  },
];

const addNewCard = (data) => {
  const newCard = document.createElement("div");
  body.appendChild(newCard);

  const image = document.createElement("img");
  const productName = document.createElement("h4");
  const price = document.createElement("span");

  productName.textContent = data.name;
  image.setAttribute("src", data.image);
  price.textContent = data.price;

  newCard.appendChild(image);
  newCard.appendChild(productName);
  newCard.appendChild(price);
};

let localData = productData;
const addNewProduct = () => {
  const newProduct = { name: "Product 11", image: "", price: 11.11 };
  localData.push(newProduct);
  multiplyCard();
};

btn.addEventListener("click", addNewProduct);

const multiplyCard = () => {
  localData.forEach((product) => {
    addNewCard(product);
  });
};

multiplyCard();
