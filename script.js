// displaying products 
const products = [
  {
    name: 'Ring Heart',
    price: '$2,555',
    image: 'picture/jewelries-1.jpg',
    categories: ['Beaded'],
    type:'458',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',discount:'',
  },
  {
    name: 'Hip Hop',
    price: '$95',
    image: 'picture/jewelries-2.jpg',
    categories: ['Beaded'],
    type:'45854',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',discount:'',
  },
  {
    name: 'Fashion Jewelry Luxury Pearl Pendientes Alloy Huggie Hoop Drop Earrings',
    price: '$1.20',
    image: 'picture/earring-1.jpg',
    categories: ['Earring'], type:'Eardrop, Clip Earrings, Ear Stud, Circle-Shaped',
    Material:'925 Sterling Silver',
    shape:'Round, Flower, Bead, Heart, Square, Butterfly',
    gender:'Female',
    style:'Star Fashion, Natural, Simple, Antique, Korean',
    color:'Multicolors',
    costomization:'Available',discount:'',
  },
  {
    name: 'Ring Gold',
    price: '$30',
    image: 'picture/jewelries-3.jpg',
    categories: ['Ring'], type:'89674',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',
    discount:'',
  },
  {
    name: 'Ring Heart',
    price: '$2,555',
    image: 'picture/jewelries-4.png',discount:'',
    categories: ['Ring'], type:'159',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',
  },
  {
    name: 'Ring Blue Diamond',
    price: '$4,889',
    image: 'picture/ring-blue-diamong.jpg',discount:'',
    categories: ['Chain'], type:'852',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',
  },
  {
    name: 'ETHIOPIAN OPAL RING',
    price: '$41,269',
    image: 'picture/ETHIOPIAN OPAL RING.jpg',discount:'',
    categories: ['Chain'], type:'abd',Material:'',shape:'',gender:'',style:'',color:'',costomization:'',
  },
];

const galleryContainer = document.querySelector('.gallery');
products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('image-item');
  productElement.dataset.categories = 'Beaded';
  productElement.dataset.price = product.price.replace(/[^0-9.]/g, ''); // clean number for filtering

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = 'Product Image';
  productImage.addEventListener('click', () => {
    window.location.href = `details.html?image=${encodeURIComponent(product.image)}
    &name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}
    &type=${encodeURIComponent(product.type)}&Material=${encodeURIComponent(product.Material)}
    &shape=${encodeURIComponent(product.shape)}&gender=${encodeURIComponent(product.gender)}
    &style=${encodeURIComponent(product.style)}&color=${encodeURIComponent(product.color)}
    &costomization=${encodeURIComponent(product.costomization)}`;
  });

  productElement.appendChild(productImage);

  const imageDetails = document.createElement('div');
  imageDetails.classList.add('image-details');

  const productName = document.createElement('p');
  productName.textContent = product.name;

  const productPrice = document.createElement('span');
  productPrice.classList.add('price');
  productPrice.textContent = product.price;

  productName.appendChild(productPrice);
  imageDetails.appendChild(productName);
  productElement.appendChild(imageDetails);

  galleryContainer.appendChild(productElement);
});

// toggele the menu humburger when it is in responsive 
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// when scroll down nav bar bgcolor changes 
window.onscroll = function() {scrollFunction()};
var navLinks = document.getElementById("navLinks").getElementsByTagName("a");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "silver";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

// viewing the image and details on click 
function displayImageDetails(imageSrc, details) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  var imageDetails = document.getElementById('imageDetails');
  modal.style.display = "block";
  modalImg.src = imageSrc;
  imageDetails.innerHTML = details;
}

function closeModal() {
  var modal = document.getElementById('imageModal');
  modal.style.display = "none";
}

// view ad 
function viewad(imagead) {
  var vad = document.getElementById('thead');
  var modalImgad = document.getElementById('adimage');
  vad.style.display = "block";
  modalImgad.src = imagead;
}

function closeAd() {
  var vad = document.getElementById('thead');
  vad.style.display = "none";
}

// filter by categories 
function filterImages() {
  const checkboxes = document.querySelectorAll('input[name="category"]:checked');
  const galleryItems = document.querySelectorAll('.image-item');
  galleryItems.forEach((item) => {
    const categories = item.getAttribute('data-categories').split(' ');
    const shouldDisplay = Array.from(checkboxes).every((checkbox) => categories.includes(checkbox.value));
    if (shouldDisplay) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// filter by price range
function filterImagesByPrice() {
  const fromValue = parseInt(document.getElementById('from').value);
  const toValue = parseInt(document.getElementById('to').value);
  const galleryItems = document.querySelectorAll('.image-item');
  galleryItems.forEach((item) => {
    const price = parseInt(item.getAttribute('data-price'));
    if (!isNaN(price) && price >= fromValue && price <= toValue) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Search filter
const gc = document.querySelector('.gallery');
const searchFilter = document.getElementById('search-filter');

function filterProducts() {
  const searchTerm = searchFilter.value.toLowerCase();
  const productElements = gc.querySelectorAll('.image-item');
  productElements.forEach(productElement => {
    const productName = productElement.querySelector('.image-details p').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      productElement.style.display = 'block';
    } else {
      productElement.style.display = 'none';
    }
  });
}

searchFilter.addEventListener('input', filterProducts);

// Toggle filters visibility
const toggleBtn = document.getElementById('toggleBtn');
const nav2 = document.querySelector('.nav2');

toggleBtn.addEventListener('click', () => {
  nav2.classList.toggle('show');
  toggleBtn.classList.toggle('rotate');
});

// Reset filters
const resetBtn = document.getElementById('resetBtn');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectElements = document.querySelectorAll('select');

resetBtn.addEventListener('click', () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  selectElements.forEach((select) => {
    select.selectedIndex = 0;
  });
  filterImages(); 
});

// View more button
const viewMoreButton = document.querySelector('.view-more');
const gallery = document.querySelector('.gallery');

viewMoreButton.addEventListener('click', function() {
  gallery.classList.toggle('expanded');
  viewMoreButton.classList.toggle('rotate');
});