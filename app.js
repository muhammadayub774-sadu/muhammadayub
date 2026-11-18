// BARCHA MAHSULOTLAR MA'LUMOTLAR BAZASI
const productsData = [
    // Hot Dog
    { id: 1, name: "Klassik Hot Dog", category: "hotdog", price: 18000, rating: 4.5, image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=500&q=80", desc: "Sosiska, maxsus sous, bodring va ketchup." },
    { id: 2, name: "Pishloqli Hot Dog", category: "hotdog", price: 22000, rating: 4.7, image: "https://images.unsplash.com/photo-1627998667554-04d3e510842f?auto=format&fit=crop&w=500&q=80", desc: "Mozzarella pishloqi, sosiska va sarimsoqli sous." },
    { id: 3, name: "Maxsus Hot Dog", category: "hotdog", price: 26000, rating: 4.9, image: "https://images.unsplash.com/photo-1541214113280-1796fff729a6?auto=format&fit=crop&w=500&q=80", desc: "Ikki karrali sosiska, pishloq, kartoshka fri va maxsus sous." },

    // Lavash
    { id: 4, name: "Klassik Lavash", category: "lavash", price: 32000, rating: 4.6, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80", desc: "Mol go'shti, pomidor, maxsus sous va yupqa lavash." },
    { id: 5, name: "Pishloqli Lavash", category: "lavash", price: 37000, rating: 4.8, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80", desc: "Mol go'shti, eritilgan pishloq va sarimsoqli sous." },
    { id: 6, name: "Go'shtli Lavash", category: "lavash", price: 40000, rating: 4.9, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80", desc: "Ko'p miqdordagi mol go'shti va maxsus ziravorlar." },
    { id: 7, name: "Maxsus Lavash", category: "lavash", file: "", price: 44000, rating: 5.0, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80", desc: "Tovuq va mol go'shti aralashmasi, pishloq hamda fri." },

    // Pitsa
    { id: 8, name: "Margarita Pitsa", category: "pitsa", price: 65000, rating: 4.5, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80", desc: "Pomidor sousi, mozzarella va yangi rayhon." },
    { id: 9, name: "Pepperoni Pitsa", category: "pitsa", price: 78000, rating: 4.9, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80", desc: "Achchiq kolbasa (pepperoni) va ko'p miqdorda pishloq." },
    { id: 10, name: "To'rt Pishloqli Pitsa", category: "pitsa", price: 85000, rating: 4.8, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80", desc: "Mozzarella, parmesan, dorblu va cheddar pishloqlari." },

    // Burger
    { id: 11, name: "Klassik Burger", category: "burger", price: 35000, rating: 4.6, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80", desc: "Mol go'shtidan kotlet, bulochka, salat bargi va sous." },
    { id: 12, name: "Chizburger", category: "burger", price: 39000, rating: 4.7, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80", desc: "Kotlet, cheddar pishloqi, tuzlangan bodring." },
    { id: 13, name: "Qo'sh Go'shtli Burger", category: "burger", price: 49000, rating: 4.9, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80", desc: "Ikki qavatli go'sht kotleti va ikki qavat pishloq." },
    { id: 14, name: "Tovuqli Burger", category: "burger", price: 36000, rating: 4.5, image: "https://images.unsplash.com/photo-1615297262007-2d90ef29f792?auto=format&fit=crop&w=500&q=80", desc: "Crispy tovuq filesi, maxsus sous va yangi salat." },

    // Donar
    { id: 15, name: "Mol Go'shtli Donar", category: "donar", price: 38000, rating: 4.7, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=500&q=80", desc: "Nonushta donar go'shti, sabzavotlar va sarimsoqli sous." },
    { id: 16, name: "Tovuqli Donar", category: "donar", price: 34000, rating: 4.6, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80", desc: "Tovuq go'shti, fri kartoshka va maxsus sous." },
    { id: 17, name: "Maxsus Donar", category: "donar", price: 43000, rating: 4.9, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", desc: "Katta hajmda go'sht, pishloq va qo'shimcha ziravorlar." },

    // Gazli ichimliklar
    { id: 18, name: "Coca-Cola (0.5L)", category: "gazli", price: 9000, rating: 4.8, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80", desc: "Muzdek sovutilgan klassik Coca-Cola." },
    { id: 19, name: "Pepsi (0.5L)", category: "gazli", price: 9000, rating: 4.7, image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=500&q=80", desc: "Tetiklashtiruvchi Pepsi ichimligi." },
    { id: 20, name: "Fanta (0.5L)", category: "gazli", price: 9000, rating: 4.6, image: "https://images.unsplash.com/photo-1624552184280-9e9632bbeee9?auto=format&fit=crop&w=500&q=80", desc: "Apelsin ta'mli gazli ichimlik." },
    { id: 21, name: "Sprite (0.5L)", category: "gazli", price: 9000, rating: 4.6, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=500&q=80", desc: "Limon-laym ta'mli tetiklashtiruvchi suv." },

    // Gazsiz ichimliklar
    { id: 22, name: "Oddiy Suv (0.5L)", category: "gazsiz", price: 4000, rating: 4.5, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80", desc: "Toza ichimlik suvi." },
    { id: 23, name: "Mineral Suv (0.5L)", category: "gazsiz", price: 5000, rating: 4.7, image: "https://images.unsplash.com/photo-1560023035-71d3d892305b?auto=format&fit=crop&w=500&q=80", desc: "Shifobaxsh tabiiy mineral suv." },
    { id: 24, name: "Tabiiy Sharbat (1L)", category: "gazsiz", price: 18000, rating: 4.8, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80", desc: "Olma yoki shaftoli tabiiy sharbati." },
    { id: 25, name: "Muzli Choy (0.5L)", category: "gazsiz", price: 10000, rating: 4.6, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80", desc: "Limonli salqin muzli choy." }
];

const categoriesData = [
    { name: "Hot Dog", category: "hotdog", count: "3 ta mahsulot", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=200&q=80" },
    { name: "Lavash", category: "lavash", count: "4 ta mahsulot", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=200&q=80" },
    { name: "Pitsa", category: "pitsa", count: "3 ta mahsulot", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80" },
    { name: "Burger", category: "burger", count: "4 ta mahsulot", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80" },
    { name: "Donar", category: "donar", count: "3 ta mahsulot", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=200&q=80" },
    { name: "Gazli ichimliklar", category: "gazli", count: "4 ta mahsulot", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80" },
    { name: "Gazsiz ichimliklar", category: "gazsiz", count: "4 ta mahsulot", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=200&q=80" }
];

const specialsData = [
    { id: 101, name: "2 ta Burger + Fri + Cola", price: 79000, oldPrice: 95000, discount: "-17%", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80", desc: "Do'stlar bilan birga tanovul qilish uchun ideal to'plam." },
    { id: 102, name: "Oilaviy Pitsa To'plami", price: 120000, oldPrice: 150000, discount: "-20%", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80", desc: "Katta pitsa, 1L Coca-Cola va fri kartoshka." },
    { id: 103, name: "Ikki Lavash + Ichimlik", price: 75000, oldPrice: 90000, discount: "-15%", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80", desc: "Istardigan 2 ta lavash va 2 ta Pepsi sovg'a." }
];

// HOLATLAR (STATE)
let cart = JSON.parse(localStorage.getItem('andijon_fastfood_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('andijon_fastfood_wishlist')) || [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

// DOM ELEMENTLARI
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

const categoriesGrid = document.getElementById('categoriesGrid');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const specialsGrid = document.getElementById('specialsGrid');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// MODALLAR
const authOpenBtn = document.getElementById('authOpenBtn');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const summaryCount = document.getElementById('summaryCount');
const summaryTotal = document.getElementById('summaryTotal');

const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const toastContainer = document.getElementById('toastContainer');

// 1. NAVBAR & SCROLL EFFECT
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        scrollTopBtn.classList.add('show');
    } else {
        header.classList.remove('scrolled');
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobil menyu ochish/yopish
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').linkEvents = (link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
    });
};
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// 2. HERO SLIDER / CAROUSEL
const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const sliderDots = document.getElementById('sliderDots');
let currentSlide = 0;
let slideInterval;

function initSlider() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    startSlideTimer();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) slide.classList.add('active');
    });
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) dot.classList.add('active');
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlideFunc() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

nextSlideBtn.addEventListener('click', nextSlideFunc);
prevSlideBtn.addEventListener('click', prevSlideFunc);

function startSlideTimer() {
    slideInterval = setInterval(nextSlideFunc, 4000);
}

const sliderWrapper = document.querySelector('.hero-slider-wrapper');
sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderWrapper.addEventListener('mouseleave', () => startSlideTimer());

// 3. KATEGORIYALARNI RENDER QILISH
function renderCategories() {
    categoriesGrid.innerHTML = categoriesData.map(cat => `
        <div class="category-card" data-category="${cat.category}">
            <img src="${cat.image}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <span>${cat.count}</span>
        </div>
    `).join('');

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            currentCategory = cat;
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
            });
            renderProducts();
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// 4. MAHSULOTLARNI RENDER QILISH VA FILTRLASH
function renderProducts() {
    let filtered = productsData.filter(item => {
        const matchCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Saralash
    if (currentSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px;">Hech qanday mahsulot topilmadi.</p>`;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        const isWishlisted = wishlist.includes(product.id) ? 'active' : '';
        return `
            <div class="product-card">
                <div class="product-image-box">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="wishlist-btn ${isWishlisted}" onclick="toggleWishlist(${product.id})" title="Sevimlilarga qo'shish">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-header-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
                    </div>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-footer-info">
                        <span class="product-price">${product.price.toLocaleString()} so'm</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-cart-plus"></i> Qo'shish
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filtr tugmalari
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderProducts();
    });
});

// Qidiruv
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderProducts();
});

// Saralash
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
});

// 5. SEVIMLILAR TIZIMI (WISHLIST)
function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Mahsulot sevimlilardan olib tashlandi", "error");
    } else {
        wishlist.push(id);
        showToast("Mahsulot sevimlilarga qo'shildi");
    }
    localStorage.setItem('andijon_fastfood_wishlist', JSON.stringify(wishlist));
    renderProducts();
}

// 6. SAVATCHA TIZIMI (CART)
function addToCart(id) {
    const product = productsData.find(item => item.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showToast(`${product.name} savatchaga qo'shildi!`);
}

function updateCart() {
    localStorage.setItem('andijon_fastfood_cart', JSON.stringify(cart));
    
    // Badge hisobi
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;

    // Savatcha ichidagilarni render qilish
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--color-text-muted); margin-top: 50px;">Savatchangiz bo'sh</p>`;
        cartTotalPrice.textContent = `0 so'm`;
        return;
    }

    let totalSum = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        totalSum += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${item.price.toLocaleString()} so'm</span>
                    <div class="cart-item-controls">
                        <button onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-cart-item" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    }).join('');

    cartTotalPrice.textContent = `${totalSum.toLocaleString()} so'm`;
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
    showToast("Mahsulot savatchadan o'chirildi", "error");
}

clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
    showToast("Savatcha tozalandi", "error");
});

// Savatchani ochish / yopish
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
});

cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    authModal.classList.remove('open');
    checkoutModal.classList.remove('open');
    successModal.classList.remove('open');
});

// 7. AKSIYALAR VA TAYMER
function renderSpecials() {
    specialsGrid.innerHTML = specialsData.map(item => `
        <div class="special-card">
            <span class="discount-badge">${item.discount}</span>
            <div class="product-image-box">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">${item.desc}</p>
                <div class="product-footer-info">
                    <div>
                        <span class="product-price" style="color: var(--color-primary);">${item.price.toLocaleString()} so'm</span>
                        <span style="text-decoration: line-through; font-size: 12px; color: var(--color-text-muted); display: block;">${item.oldPrice.toLocaleString()} so'm</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addSpecialToCart('${item.name}', ${item.price}, '${item.image}')">
                        <i class="fa-solid fa-cart-plus"></i> Olish
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addSpecialToCart(name, price, image) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: Math.random(), name, price, image, quantity: 1 });
    }
    updateCart();
    showToast(`${name} to'plami savatchaga qo'shildi!`);
}

// Teskari sanoq taymeri
function startCountdown() {
    let timeInSeconds = 2 * 24 * 60 * 60 + 14 * 60 * 60 + 35 * 60 + 50;
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    setInterval(() => {
        if (timeInSeconds <= 0) return;
        timeInSeconds--;
        const d = Math.floor(timeInSeconds / (3600 * 24));
        const h = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
        const m = Math.floor((timeInSeconds % 3600) / 60);
        const s = timeInSeconds % 60;

        daysEl.textContent = String(d).padStart(2, '0');
        hoursEl.textContent = String(h).padStart(2, '0');
        minutesEl.textContent = String(m).padStart(2, '0');
        secondsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
}

// 8. BUYURTMA RASMIYLASHTIRISH
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast("Savatchangiz bo'sh! Avval taom qo'shing.", "error");
        return;
    }
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    summaryCount.textContent = totalCount;
    summaryTotal.textContent = `${totalSum.toLocaleString()} so'm`;
    
    checkoutModal.classList.add('open');
});

closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.classList.remove('open');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();

    if (!name || !phone || !address) {
        showToast("Iltimos, barcha majburiy maydonlarni to'ldiring!", "error");
        return;
    }

    checkoutModal.classList.remove('open');
    successModal.classList.add('open');
    
    // Savatchani tozalash
    cart = [];
    updateCart();
    checkoutForm.reset();
});

successCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('open');
    cartOverlay.classList.remove('open');
});

// 9. TIZIMGA KIRISH VA RO'YXATDAN O'TISH MODALI
authOpenBtn.addEventListener('click', () => {
    authModal.classList.add('open');
    cartOverlay.classList.add('open');
});

closeAuthModal.addEventListener('click', () => {
    authModal.classList.remove('open');
    cartOverlay.classList.remove('open');
});

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const targetTab = tab.getAttribute('data-tab');
        
        if (targetTab === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        }
    });
});

// Parolni ko'rsatish / yashirish
togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (input.type === 'password') {
            input.type = 'text';
            btn.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            btn.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authModal.classList.remove('open');
    cartOverlay.classList.remove('open');
    showToast("Tizimga muvaffaqiyatli kirdingiz!");
    loginForm.reset();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('regPassword').value;
    const confirmPass = document.getElementById('regConfirmPassword').value;

    if (pass !== confirmPass) {
        showToast("Parollar mos kelmadi!", "error");
        return;
    }

    authModal.classList.remove('open');
    cartOverlay.classList.remove('open');
    showToast("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    registerForm.reset();
});

// Aloqa formasi
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("Xabaringiz muvaffaqiyatli yuborildi!");
    e.target.reset();
});

// TOAST FUNKSIYASI
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// SAHIFA YUKLANGANDA ISHGA TUSHISHI
window.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderCategories();
    renderProducts();
    renderSpecials();
    updateCart();
    startCountdown();
});