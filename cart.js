const cartContainer = document.querySelector('.cart-container');
let cartItems = [];

// Function to update the cart display
function updateCart() {
  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'Your cart is empty.';
    cartContainer.appendChild(emptyCartMessage);
  } else {
    const table = document.createElement('table');
    table.classList.add('cart-table');

    const tableHeader = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.textContent = 'Product Name';
    const headerPrice = document.createElement('th');
    headerPrice.textContent = 'Price';
    const headerAction = document.createElement('th');
    headerAction.textContent = 'Action';

    tableHeader.appendChild(headerName);
    tableHeader.appendChild(headerPrice);
    tableHeader.appendChild(headerAction);
    table.appendChild(tableHeader);

    cartItems.forEach((product, index) => {
      const tableRow = document.createElement('tr');

      const productName = document.createElement('td');
      productName.textContent = product.name;

      const productPrice = document.createElement('td');
      productPrice.textContent = product.price;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-from-cart');
      removeButton.addEventListener('click', () => {
        removeFromCart(index);
      });

      const actionCell = document.createElement('td');
      actionCell.appendChild(removeButton);

      tableRow.appendChild(productName);
      tableRow.appendChild(productPrice);
      tableRow.appendChild(actionCell);

      table.appendChild(tableRow);
    });

    cartContainer.appendChild(table);
  }
}

// Function to load the cart from local storage
function loadCartFromLocalStorage() {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    cartItems = JSON.parse(savedCartItems);
    updateCart();
  }
}

// Load the cart from local storage when the page loads
loadCartFromLocalStorage();
