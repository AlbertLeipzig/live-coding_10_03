const productData = [
  {
    name: 'Product 1',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 9.99,
  },
  {
    name: 'Product 2',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 8.1,
  },
  {
    name: 'Product 3',
    image:
      'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 5.21,
  },
  {
    name: 'Product 4',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 5.874,
  },
  {
    name: 'Product 5',
    image:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 4.65,
  },
  {
    name: 'Product 6',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 8.45,
  },
  {
    name: 'Product 7',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 5.71,
  },
  {
    name: 'Product 8',
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 9.54,
  },
  {
    name: 'Product 9',
    image:
      'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 6.51,
  },
  {
    name: 'Product 10',
    image:
      'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 0.24,
  },
];

/* format productData to a local format */

let localData = productData;

let newProductInputValue = {}

/* FEATURES */

const addSingleCard = (data) => {
  
  const newCard = document.createElement('div');
  cardContainer.appendChild(newCard);
  newCard.classList.add("card")
  body.appendChild(cardContainer)


  if (data.brand){
    const brand = document.createElement("p")
    brand.textContent = data.brand
    newCard.appendChild(brand)
  }


  const image = document.createElement('img');
  const productName = document.createElement('h4');
  const price = document.createElement('span');

  productName.textContent = data.name;
  image.setAttribute('src', data.image);
  price.textContent = `${data.price} E`;

  newCard.appendChild(image);
  newCard.appendChild(productName);
  newCard.appendChild(price);
};


const adMultipleCards = () => {
  localData.forEach((product) => {
    addSingleCard(product);
  });
};


const addNewProduct = (e) => {
  e.preventDefault()
  /* console.log({nameInputValue, priceInputValue, imageInputValue}) */
  const newProduct = { name: newProductInputValue.name, image: newProductInputValue.image, price: newProductInputValue.price, brand : newProductInputValue.brand };
  localData.push(newProduct);
  adMultipleCards();
};

const formHandleSubmit = (e) => {
  e.preventDefault()
}

const inputHandleChange = (key, e) => {
  newProductInputValue[key] = e.target.value
}

/* define UI elements */

const body = document.querySelector('body');
const cardContainer = document.createElement("div")
  cardContainer.classList.add("card__container")
/* FORM */

const newForm = document.createElement('form');
newForm.addEventListener("change", (e) => formHandleSubmit(e))

const formFields = ["name", "image", "price", "brand"]


const capitalizeString = (word) => {
  const firstLetter = word.slice(0, 1)
  const capitalize = firstLetter.toUpperCase()
  const capitalizedWord = capitalize + word.slice(1)
  return capitalizedWord
}

formFields.forEach(field => {
  const formLabel = document.createElement('label');
  formLabel.textContent = capitalizeString(field);
  newForm.appendChild(formLabel);
  
  const formInput = document.createElement('input');
  newForm.appendChild(formInput);
  formInput.addEventListener('change', (e) => inputHandleChange(field, e));  
})

const btn = document.createElement('button');
btn.innerText = 'Add More!';
newForm.appendChild(btn);
btn.addEventListener('click', addNewProduct);

body.prepend(newForm);

// ======================================================== \\

/* LADENZEIT FUNCTIONS */

adMultipleCards();
