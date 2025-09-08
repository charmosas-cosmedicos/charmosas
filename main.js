// Enhanced Product Database with 5+ products per category
const products = [
    // Paletas (5 produtos)
    {


        id: 1,
        name: "Paleta Pôr do Sol",
        category: "paletas",
        price: 49.90,
        originalPrice: 119.90,
        image: "imagens/paletasol.webp",
        colors: ["#f8f2f4ff", "#ff8a80", "#ffab91", "#ffcc02", "#ff5722"],
        description: "Paleta com 12 cores vibrantes para looks ousados",
        rating: 4.8,
        reviews: 156,
        inStock: true,
        isOffer: true
    },
    {
        id: 2,
        name: "Paleta Sonhos da Meia-Noite",
        category: "paletas",
        price: 95.90,
        image: "imagens/noite.jpeg",
        colors: ["#673ab7", "#3f51b5", "#2196f3", "#9c27b0", "#1a1a1a"],
        description: "Tons escuros e metálicos para looks noturnos",
        rating: 4.9,
        reviews: 203,
        inStock: true
    },
    {
        id: 3,
        name: "Paleta Brilho Natural",
        category: "paletas",
        price: 79.90,
        image: "imagens/natural.webp",
        colors: ["#8bc34a", "#4caf50", "#009688", "#795548", "#ffc107"],
        description: "Cores naturais para um visual fresh e jovem",
        rating: 4.7,
        reviews: 89,
        inStock: true
    },
    {
        id: 4,
        name: "Paleta Glamour Dourado",
        category: "paletas",
        price: 105.90,
        image: "✨",
        colors: ["#ffd700", "#ffb347", "#daa520", "#b8860b", "#8b7355"],
        description: "Tons dourados e bronze para ocasiões especiais",
        rating: 4.9,
        reviews: 267,
        inStock: true
    },
    {
        id: 5,
        name: "Paleta Cores do Oceano",
        category: "paletas",
        price: 92.90,
        originalPrice: 115.90,
        image: "🌊",
        colors: ["#00bcd4", "#0097a7", "#006064", "#4fc3f7", "#81d4fa"],
        description: "Inspirada nas cores do mar e céu",
        rating: 4.6,
        reviews: 134,
        inStock: true,
        isOffer: true
    },

    // Rímel (5 produtos)
    {
        id: 6,
        name: "Rímel Volume Máximo",
        category: "rimel",
        price: 45.90,
        originalPrice: 59.90,
        image: "🖤",
        description: "Máximo volume e definição para seus cílios",
        rating: 4.6,
        reviews: 312,
        inStock: true,
        isOffer: true
    },
    {
        id: 7,
        name: "Rímel À Prova D'Água",
        category: "rimel",
        price: 52.90,
        image: "💙",
        description: "Resistente à água por até 24 horas",
        rating: 4.8,
        reviews: 278,
        inStock: true
    },
    {
        id: 8,
        name: "Rímel Alongador",
        category: "rimel",
        price: 48.90,
        image: "💜",
        description: "Alonga os cílios naturalmente",
        rating: 4.5,
        reviews: 145,
        inStock: true
    },
    {
        id: 9,
        name: "Rímel Natural",
        category: "rimel",
        price: 39.90,
        image: "🤎",
        description: "Para um look natural e elegante",
        rating: 4.4,
        reviews: 98,
        inStock: true
    },
    {
        id: 10,
        name: "Rímel Curvex Pro",
        category: "rimel",
        price: 58.90,
        image: "💫",
        description: "Curva e define os cílios perfeitamente",
        rating: 4.7,
        reviews: 189,
        inStock: true
    },

    // Skincare (5 produtos)
    {
        id: 11,
        name: "Gel de Limpeza Facial",
        category: "skincare",
        price: 35.90,
        image: "🫧",
        description: "Remove impurezas suavemente",
        rating: 4.7,
        reviews: 234,
        inStock: true
    },
    {
        id: 12,
        name: "Água Micelar",
        category: "skincare",
        price: 28.90,
        originalPrice: 39.90,
        image: "🌸",
        description: "Demaquilante suave e eficaz",
        rating: 4.6,
        reviews: 189,
        inStock: true,
        isOffer: true
    },
    {
        id: 13,
        name: "Esfoliante Renovador",
        category: "skincare",
        price: 42.90,
        image: "🍃",
        description: "Promove renovação celular",
        rating: 4.8,
        reviews: 167,
        inStock: true
    },
    {
        id: 14,
        name: "Creme Noturno",
        category: "skincare",
        price: 65.90,
        image: "🌙",
        description: "Regeneração durante o sono",
        rating: 4.9,
        reviews: 298,
        inStock: true
    },
    {
        id: 15,
        name: "Hidratante Diário",
        category: "skincare",
        price: 55.90,
        image: "☀️",
        description: "Proteção e hidratação diária",
        rating: 4.7,
        reviews: 345,
        inStock: true
    },

    // Batons (5 produtos)
    {
        id: 16,
        name: "Batom Matte Vermelho",
        category: "batons",
        price: 32.90,
        image: "💋",
        description: "Vermelho clássico com acabamento matte",
        rating: 4.8,
        reviews: 423,
        inStock: true
    },
    {
        id: 17,
        name: "Batom Nude Rosé",
        category: "batons",
        price: 29.90,
        originalPrice: 42.90,
        image: "🌹",
        description: "Tom nude perfeito para o dia a dia",
        rating: 4.6,
        reviews: 267,
        inStock: true,
        isOffer: true
    },
    {
        id: 18,
        name: "Gloss Transparente",
        category: "batons",
        price: 24.90,
        image: "✨",
        description: "Brilho natural para os lábios",
        rating: 4.5,
        reviews: 156,
        inStock: true
    },
    {
        id: 19,
        name: "Batom Líquido Rosa",
        category: "batons",
        price: 35.90,
        image: "🌺",
        description: "Rosa vibrante de longa duração",
        rating: 4.7,
        reviews: 198,
        inStock: true
    },
    {
        id: 20,
        name: "Batom Cremoso Coral",
        category: "batons",
        price: 31.90,
        image: "🧡",
        description: "Tom coral perfeito para o verão",
        rating: 4.6,
        reviews: 234,
        inStock: true
    },

    // Bases (5 produtos)
    {
        id: 21,
        name: "Base Líquida HD",
        category: "bases",
        price: 68.90,
        image: "🎭",
        description: "Cobertura natural com acabamento HD",
        rating: 4.8,
        reviews: 389,
        inStock: true
    },
    {
        id: 22,
        name: "Corretivo Full Cover",
        category: "bases",
        price: 42.90,
        originalPrice: 55.90,
        image: "🎨",
        description: "Cobertura total para imperfeições",
        rating: 4.7,
        reviews: 267,
        inStock: true,
        isOffer: true
    },
    {
        id: 23,
        name: "Primer Matificante",
        category: "bases",
        price: 38.90,
        image: "⚪",
        description: "Prepara a pele e controla oleosidade",
        rating: 4.6,
        reviews: 198,
        inStock: true
    },
    {
        id: 24,
        name: "Pó Compacto Translúcido",
        category: "bases",
        price: 45.90,
        image: "🌟",
        description: "Fixa a maquiagem sem alterar a cor",
        rating: 4.8,
        reviews: 312,
        inStock: true
    },
    {
        id: 25,
        name: "BB Cream FPS 30",
        category: "bases",
        price: 52.90,
        image: "☀️",
        description: "Hidrata, protege e uniformiza",
        rating: 4.7,
        reviews: 245,
        inStock: true
    }
];

// User Management
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Cart and Favorites Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const accountModal = document.getElementById('accountModal');
const notification = document.getElementById('notification');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderProducts(products);
    updateCartCount();
    updateFavCount();
    updateUserInterface();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Account management
    document.getElementById('accountBtn').addEventListener('click', openAccountModal);
    document.getElementById('closeAccountModal').addEventListener('click', closeAccountModal);
    document.getElementById('showRegisterBtn').addEventListener('click', showRegisterForm);
    document.getElementById('showLoginBtn').addEventListener('click', showLoginForm);
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    document.getElementById('registerBtn').addEventListener('click', handleRegister);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
            this.classList.add('filter-active');

            const filter = this.dataset.filter;
            let filteredProducts = products;

            if (filter !== 'all') {
                if (filter === 'ofertas') {
                    filteredProducts = products.filter(p => p.isOffer);
                } else {
                    filteredProducts = products.filter(p => p.category === filter);
                }
            }

            renderProducts(filteredProducts);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        if (query.length > 2) {
            const results = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
            showSearchResults(results);
        } else {
            hideSearchResults();
        }
    });

    // Cart modal
    document.getElementById('cartBtn').addEventListener('click', openCartModal);
    document.getElementById('closeCartModal').addEventListener('click', closeCartModal);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);

    // Checkout modal
    document.getElementById('closeCheckoutModal').addEventListener('click', closeCheckoutModal);
    document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);

    // Close modals on outside click
    [cartModal, checkoutModal, accountModal].forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
}

// User Management Functions
function openAccountModal() {
    if (currentUser) {
        showUserDashboard();
    } else {
        showLoginForm();
    }
    accountModal.classList.add('show');
}

function closeAccountModal() {
    accountModal.classList.remove('show');
}

function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('userDashboard').classList.add('hidden');
    document.getElementById('accountModalTitle').textContent = 'Entrar na Conta';
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('userDashboard').classList.add('hidden');
    document.getElementById('accountModalTitle').textContent = 'Criar Conta';
}

function showUserDashboard() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('userDashboard').classList.remove('hidden');
    document.getElementById('accountModalTitle').textContent = 'Minha Conta';

    if (currentUser) {
        document.getElementById('userName').textContent = `Olá, ${currentUser.name}!`;
        document.getElementById('userEmail').textContent = currentUser.email;
    }
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showNotification('Preencha todos os campos!', 'error');
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserInterface();
        showUserDashboard();
        showNotification(`Bem-vindo de volta, ${user.name}! 🎉`);

        // Pre-fill checkout form if user is logged in
        document.getElementById('checkoutName').value = user.name;
        document.getElementById('checkoutEmail').value = user.email;
    } else {
        showNotification('E-mail ou senha incorretos!', 'error');
    }
}

function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        showNotification('Preencha todos os campos!', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('As senhas não coincidem!', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('A senha deve ter pelo menos 6 caracteres!', 'error');
        return;
    }

    if (!agreeTerms) {
        showNotification('Aceite os termos de uso para continuar!', 'error');
        return;
    }

    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Este e-mail já está cadastrado!', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    updateUserInterface();
    showUserDashboard();
    showNotification(`Conta criada com sucesso! Bem-vindo, ${name}! 🎉`);

    // Clear form
    document.getElementById('registerForm').reset();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserInterface();
    closeAccountModal();
    showNotification('Logout realizado com sucesso!');
}

function updateUserInterface() {
    const accountBtn = document.getElementById('accountBtn');
    const accountText = document.getElementById('accountText');

    if (currentUser) {
        accountBtn.classList.add('user-logged-in');
        accountText.textContent = currentUser.name.split(' ')[0]; // First name only
    } else {
        accountBtn.classList.remove('user-logged-in');
        accountText.textContent = 'Minha Conta';
    }
}

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map(product => `
                <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden product-card" data-category="${product.category}">
                    ${product.isOffer ? '<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">OFERTA</div>' : ''}
                    
                    <div class="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                        <button class="absolute top-4 right-4 text-2xl hover:scale-110 transition-transform ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'}" onclick="toggleFavorite(${product.id})">
                            ${favorites.includes(product.id) ? '❤️' : '🤍'}
                        </button>
                        <div class="text-center">
                            <img src="${product.image}" alt="${product.name}" class="h-40 w-40 object-contain mx-auto mb-2">
                            <h3 class="text-lg font-bold text-gray-800">${product.name}</h3>
                        </div>
                    </div>
                    
                    <div class="p-6">
                        ${product.colors ? `
                            <div class="mb-4">
                                ${product.colors.map(color => `<span class="palette-color" style="background: ${color};"></span>`).join('')}
                            </div>
                        ` : ''}
                        
                        <p class="text-gray-600 mb-4 text-sm">${product.description}</p>
                        
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400 mr-2">
                                ${'⭐'.repeat(Math.floor(product.rating))}
                            </div>
                            <span class="text-sm text-gray-500">${product.rating} (${product.reviews} avaliações)</span>
                        </div>
                        
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                ${product.originalPrice ? `
                                    <span class="text-sm text-gray-400 line-through">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span><br>
                                ` : ''}
                                <span class="text-2xl font-bold text-pink-600">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-sm text-gray-500">ou 12x de</div>
                                <div class="text-sm font-semibold">R$ ${(product.price / 12).toFixed(2).replace('.', ',')}</div>
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button onclick="addToCart(${product.id})" class="flex-1 bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold">
                                🛒 Adicionar
                            </button>
                            <button onclick="buyNow(${product.id})" class="flex-1 bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition-colors font-semibold">
                                Comprar
                            </button>
                        </div>
                        
                        ${!product.inStock ? '<div class="text-red-500 text-center mt-2 font-semibold">Produto Esgotado</div>' : ''}
                    </div>
                </div>
            `).join('');
}

// Search Results
function showSearchResults(results) {
    if (results.length > 0) {
        searchResults.innerHTML = results.map(product => `
                    <div class="p-3 hover:bg-gray-50 cursor-pointer border-b" onclick="scrollToProduct(${product.id})">
                        <div class="flex items-center">
                            <span class="text-2xl mr-3">${product.image}</span>
                            <div>
                                <div class="font-semibold">${product.name}</div>
                                <div class="text-sm text-gray-500">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                            </div>
                        </div>
                    </div>
                `).join('');
        searchResults.classList.remove('hidden');
    } else {
        searchResults.innerHTML = '<div class="p-3 text-gray-500">Nenhum produto encontrado</div>';
        searchResults.classList.remove('hidden');
    }
}

function hideSearchResults() {
    searchResults.classList.add('hidden');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function buyNow(productId) {
    addToCart(productId);
    openCartModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            updateCartTotal();
        }
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartTotal();
    showNotification('Carrinho limpo!');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Update checkout totals
    const shipping = total >= 150 ? 0 : 15.90;
    const finalTotal = total + shipping;

    document.getElementById('checkoutSubtotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('checkoutShipping').textContent = total >= 150 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2).replace('.', ',')}`;
    document.getElementById('checkoutTotal').textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
}

// Favorites
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Removido dos favoritos');
    } else {
        favorites.push(productId);
        showNotification('Adicionado aos favoritos');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    renderProducts(products); // Re-render to update heart icons
}

function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

// Modal Functions
function openCartModal() {
    renderCartItems();
    updateCartTotal();
    cartModal.classList.add('show');
}

function closeCartModal() {
    cartModal.classList.remove('show');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'error');
        return;
    }
    renderCheckoutItems();
    updateCartTotal();
    closeCartModal();
    checkoutModal.classList.add('show');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="text-center text-gray-500 py-8">Carrinho vazio</div>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between p-4 border rounded-lg">
                    <div class="flex items-center">
                        <span class="text-3xl mr-4">${item.image}</span>
                        <div>
                            <h4 class="font-semibold">${item.name}</h4>
                            <p class="text-gray-600">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300">-</button>
                        <span class="font-semibold">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300">+</button>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-4">🗑️</button>
                    </div>
                </div>
            `).join('');
}

function renderCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    checkoutItemsContainer.innerHTML = cart.map(item => `
                <div class="flex justify-between items-center py-2">
                    <div class="flex items-center">
                        <span class="text-2xl mr-3">${item.image}</span>
                        <div>
                            <div class="font-semibold">${item.name}</div>
                            <div class="text-sm text-gray-500">Qtd: ${item.quantity}</div>
                        </div>
                    </div>
                    <div class="font-semibold">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                </div>
            `).join('');
}

function confirmOrder() {
    // Simulate order processing
    const btn = document.getElementById('confirmOrderBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<div class="loading"></div> Processando...';
    btn.disabled = true;

    setTimeout(() => {
        showNotification('Pedido confirmado com sucesso! 🎉');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        closeCheckoutModal();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 3000);
}

// Utility Functions
function showNotification(message, type = 'success') {
    const notificationEl = document.getElementById('notification');
    const textEl = document.getElementById('notification-text');

    textEl.textContent = message;

    // Change color based on type
    if (type === 'error') {
        notificationEl.className = 'notification bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg';
    } else {
        notificationEl.className = 'notification bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    }

    notificationEl.classList.add('show');
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, 3000);
}

function scrollToProduct(productId) {
    hideSearchResults();
    searchInput.value = '';
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

// Load More Products (for demonstration)
document.getElementById('loadMoreBtn').addEventListener('click', function () {
    this.innerHTML = '<div class="loading"></div> Carregando...';
    setTimeout(() => {
        showNotification('Todos os produtos já foram carregados!');
        this.innerHTML = 'Carregar Mais Produtos';
    }, 1500);
});
