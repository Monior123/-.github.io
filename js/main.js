
// Добавление товара в корзину
function addToCart(product, price) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ product, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Товар "${product}" за ${price} р. добавлен в корзину.`);
}

// Добавление товара в избранное
function addToFavorites(product) {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favorites.includes(product)) {
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`Товар "${product}" добавлен в избранное.`);
  } else {
    alert(`Товар "${product}" уже в избранном.`);
  }
}

// Отображение избранных товаров
function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const container = document.getElementById('favorites-list');
  if (container) {
    container.innerHTML = favorites.length
      ? '<ul>' + favorites.map(item => `<li>${item}</li>`).join('') + '</ul>'
      : '<p>Нет избранных товаров.</p>';
  }
}

// Фильтрация по цене (для будущей реализации)
document.addEventListener("DOMContentLoaded", () => {
  const priceRange = document.getElementById("priceRange");
  if (priceRange) {
    priceRange.addEventListener("input", () => {
      const selectedPrice = priceRange.value;
      console.log("Фильтр по цене:", selectedPrice);
      // Здесь можно фильтровать карточки по цене
    });
  }

  // Если на странице избранного — отобразить список
  displayFavorites();
});

function addToCart(productName) {
  const notification = document.getElementById('cartNotification');
  notification.textContent = `${productName} добавлен в корзину!`;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}