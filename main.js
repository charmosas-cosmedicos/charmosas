/* ============================
   Charmosas Cosméticos - main.js (rebuild)
   ============================ */

/** ===========================
 *  0) Base de Produtos (bruta)
 *  - Mantive exatamente como você enviou.
 *  - A normalização (IDs, categorias, originalPrice, etc.) é feita em seguida.
 *  ============================ */
const rawProducts = [
  // Paletas (5 produtos)
  {
    id: 1,
    name: "Paleta Pôr do Sol",
    category: "paletas",
    price: 49.90,
    originalPrice: 119.90,
    image: "imagens/paletasol.webp",
    colors: ["#f8f2f4ff", "#ff8a80", "#d13c0eff", "#ffcc02", "#ff5722"],
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
    colors: ["#eae8eeff", "#73757eff", "#3c4247ff", "#888688ff", "#1a1a1a"],
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
    colors: ["#e094b7ff", "#c589a7ff", "#a75384ff", "#c24d7eff", "#ff07c1ff"],
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
    image: "imagens/paleta.webp",
    colors: ["#ffd700", "#ffb347", "#daa520", "#b8860b", "#8b7355"],
    description: "Tons dourados e bronze para ocasiões especiais",
    rating: 4.9,
    reviews: 267,
    inStock: true
  },
  {
    id: 4,
    name: "Paleta purple eudora",
    category: "paletas",
    price: 79.90,
    image: "imagens/paleta5.webp",
    colors: ["#c530e2ff", "#562d85ff", "#b44ed3ff", "#b57accff", "#8a4892ff"],
    description: "Tons dourados e bronze para ocasiões especiais",
    rating: 4.9,
    reviews: 267,
    inStock: true
  },
  {
    id: 5,
    name: "iluminador compacto Mari Maria",
    category: "iluminador",
    price: 90.00,
    originalPrice: 115.90,
    image: "imagens/iluminador.webp",
    colors: ["#d46600ff", "#a7006fff", "#640026ff", "#f74fc5ff", "#fac181ff"],
    description: "Inspirada nas cores do mar e céu",
    rating: 4.6,
    reviews: 134,
    inStock: true,
    isOffer: true
  },

  // Rímel (5 produtos)
  {
    id: 6,
    name: "rimel volume máximo",
    category: "rimel",
    price: 45.90,
    originalprice: 59.90,
    image: "imagens/rimel.webp",
    description: "Máximo volume e definição para seus cílios",
    rating: 4.6,
    reviews: 312,
    inStock: true,
    isOffer: true
  },
  {
    id: 7,
    name: "rimel volume máximo",
    category: "rimel",
    price: 25.90,
    originalprice: 45.90,
    image: "imagens/rimel2.webp",
    description: "Máximo volume e definição para seus cílios",
    rating: 4.6,
    reviews: 312,
    inStock: true,
    isOffer: true
  },
  {
    id: 4,
    name: "rimel mari maria",
    category: "rimel",
    price: 54.46,
    originalprice: 100.00,
    image: "imagens/rimelmari.webp",
    description: "volume máximo",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 22,
    name: "rimel boca rosa",
    category: "rimel",
    price: 34.90,
    originalPrice: 100.00,
    image: "imagens/bocarosa.jpeg",
    description: "Cobertura total para imperfeições",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 22,
    name: "rimel mari maria",
    category: "rimel",
    price: 49.90,
    originalPrice: 100.00,
    image: "imagens/rimelmari2.webp",
    description: "volume máximo",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 8,
    name: "pó compacto",
    category: "pó",
    price: 48.90,
    image: "imagens/po compacto.webp",
    description: "diversons tons",
    rating: 4.5,
    reviews: 145,
    inStock: true
  },
  {
    id: 9,
    name: "infinity wepink",
    category: "perfume",
    price: 329.90,
    image: "imagens/perfume1.png",
    description: "um manisfesto de paixão, doçura e empoderamento",
    rating: 4.4,
    reviews: 98,
    inStock: true
  },
  {
    id: 10,
    name: "one touch warm wepink",
    category: "perfume",
    price: 84.90,
    image: "imagens/perfume2.webp",
    description: "exale confiança sedução e paixão em todos os momentos",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },

  // (Skincare / Perfume / Hidratante mistos como no original)
  {
    id: 11,
    name: "VF bloom wepink",
    category: "perfume",
    price: 84.90,
    image: "imagens/perfume3.jpeg",
    description: "a beleza no sutil florecer do aroma",
    rating: 4.7,
    reviews: 234,
    inStock: true
  },
  {
    id: 12,
    name: "obsessed deluxe wepink",
    category: "perfume",
    price: 84.00,
    originalPrice: 329.90,
    image: "imagens/perfume4.png",
    description: "Demaquilante suave e eficaz",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    isOffer: true
  },
  {
    id: 13,
    name: "obsessed esfoliante wepink",
    category: "hidratante",
    price: 56.90,
    image: "imagens/esfoliante.webp",
    description: "Promove renovação celular",
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 13,
    name: "love lili",
    category: "hidratante",
    price: 139.90,
    image: "imagens/lovelili.jpg",
    description: "hiratante corporal",
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 13,
    name: "hidratante lili",
    category: "hidratante",
    price: 139.90,
    image: "imagens/lili.webp",
    description: "hidratante corporal",
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 14,
    name: "myskin essencial espuma wepink",
    category: "skincare",
    price: 47.90,
    image: "imagens/espuma.png",
    description: "espuma de esfoliação com efeito peeling para uma pelo bem cuidada",
    rating: 4.9,
    reviews: 298,
    inStock: true
  },
  {
    id: 14,
    name: "kit creamy skincare",
    category: "skincare",
    price: 299.99,
    image: "imagens/kit.webp",
    description: "espuma de esfoliação com efeito peeling para uma pelo bem cuidada",
    rating: 4.9,
    reviews: 298,
    inStock: true
  },
  {
    id: 14,
    name: "gel limpeza facial",
    category: "skincare",
    price: 59.90,
    image: "imagens/gel.webp",
    description: "espuma de esfoliação com efeito peeling para uma pelo bem cuidada",
    rating: 4.9,
    reviews: 298,
    inStock: true
  },
  {
    id: 15,
    name: "Hydracare essencial wepink",
    category: "hidratante",
    price: 55.90,
    image: "imagens/hydracare.webp",
    description: "o toque hifratante que faltava na sua skincare!",
    rating: 4.7,
    reviews: 345,
    inStock: true
  },

  // Batons / Gloss / Kits
  {
    id: 16,
    name: "kit body splash e hidratante corporal",
    category: "perfume",
    price: 129.90,
    image: "imagens/kitv.jpeg",
    description: "KIT BODY SPLASH 250ML + HIDRATANTE CORPORAL 236ML PURE SEDUCTION VICTORIA'S SECRET | Exala Perfumaria",
    rating: 4.8,
    reviews: 423,
    inStock: true
  },
  {
    id: 17,
    name: "gloss Nude Rosé",
    category: "gloss",
    price: 129.00,
    originalPrice: 79.90,
    image: "imagens/nudes.jpg",
    description: "Tom nude perfeito para o dia a dia",
    rating: 4.6,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 18,
    name: "love kit",
    category: "batons",
    price: 129.90,
    image: "imagens/love kit.webp",
    description: "Brilho natural para os lábios",
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    id: 19,
    name: "Batom Líquido Mari Maria",
    category: "batons",
    price: 39.90,
    image: "imagens/batom.webp",
    description: "tons de cores vibrantes",
    rating: 4.7,
    reviews: 198,
    inStock: true
  },
  {
    id: 20,
    name: "kit gloss franciny enlke",
    category: "batons",
    price: 99.90,
    image: "imagens/gloss.jpg",
    description: "trio de gloss labial",
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: 22,
    name: "lip honey",
    category: "batons",
    price: 57.90,
    originalPrice: 100.00,
    image: "imagens/lip.webp",
    description: "diversos trons",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },

  // Bases e afins
  {
    id: 21,
    name: "corretivo franciny",
    category: "bases",
    price: 59.90,
    image: "imagens/corretivo.webp",
    description: "Cobertura natural com acabamento HD",
    rating: 4.8,
    reviews: 389,
    inStock: true
  },
  {
    id: 22,
    name: "Base wepink",
    category: "bases",
    price: 49.90,
    originalPrice: 100.00,
    image: "imagens/base.png",
    description: "Cobertura total para imperfeições",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 22,
    name: "Base franciny",
    category: "bases",
    price: 57.90,
    originalPrice: 100.00,
    image: "imagens/fran.png",
    description: "diversos trons",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 22,
    name: "Base boca rosa",
    category: "bases",
    price: 30.90,
    originalPrice: 69.90,
    image: "imagens/baserosa.jpeg",
    description: "diversos trons",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 22,
    name: "Base mari maria",
    category: "bases",
    price: 58.90,
    originalPrice: 100.00,
    image: "imagens/mari.webp",
    description: "diversos trons",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    isOffer: true
  },
  {
    id: 23,
    name: "Primer Matificante",
    category: "skincare",
    price: 200.90,
    image: "imagens/serom.webp",
    description: "Prepara a pele e controla oleosidade",
    rating: 4.6,
    reviews: 198,
    inStock: true
  },
  {
    id: 24,
    name: "fixador",
    category: "skincare",
    price: 59.90,
    image: "imagens/bruma.webp",
    description: "Fixa a maquiagem sem alterar a cor",
    rating: 4.8,
    reviews: 312,
    inStock: true
  },
  {
    id: 25,
    name: "body cream VF hidratante wepink",
    category: "hidratante",
    price: 52.90,
    image: "imagens/loção corporal-1.png",
    description: "Hidrata, protege e uniformiza",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 25,
    name: "kit 3 esponjas de maquiaguem",
    category: "acessórios",
    price: 90.90,
    image: "imagens/3.webp",
    description: "suave e prática",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 25,
    name: "pincel para base",
    category: "acessórios",
    price: 77.00,
    image: "imagens/pincelmari.webp",
    description: "pincel triangular para base",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 25,
    name: "pincel para iluminador",
    category: "acessórios",
    price: 69.90,
    image: "imagens/pincel3.webp",
    description: "pincel para iluminador",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 25,
    name: "pincel corretivo e acabamento",
    category: "acessórios",
    price: 70.90,
    image: "imagens/acabamento.webp",
    description: "pincel para acabamento e corretivo",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 25,
    name: "puffer",
    category: "acessórios",
    price: 69.90,
    image: "imagens/esponjapó.png",
    description: "puffer para pó",
    rating: 4.7,
    reviews: 245,
    inStock: true
  }
];

/** ===========================
 *  1) Normalização dos Produtos
 *  - IDs únicos
 *  - `originalprice` → `originalPrice`
 *  - categorias normalizadas
 *  - evita valores NaN em preços
 *  ============================ */
const CATEGORY_MAP = {
  'acessórios': 'acessorios',
  'acessorios': 'acessorios',
  'pó': 'po',
  'po': 'po',
  'hidratante': 'hidratante',
  'skincare': 'skincare',
  'paletas': 'paletas',
  'rimel': 'rimel',
  'batons': 'batons',
  'bases': 'bases',
  'gloss': 'gloss',
  'perfume': 'perfume',
  'iluminador': 'iluminador'
};

const products = (() => {
  const seen = new Set();
  let counter = 1000;
  return rawProducts.map((p) => {
    const clone = { ...p };

    // ID único
    if (!Number.isInteger(clone.id) || seen.has(clone.id)) {
      clone.id = counter++;
    }
    seen.add(clone.id);

    // Normaliza categoria
    if (clone.category && CATEGORY_MAP[clone.category]) {
      clone.category = CATEGORY_MAP[clone.category];
    }

    // Campo originalPrice
    if (clone.originalprice && !clone.originalPrice) {
      clone.originalPrice = clone.originalprice;
    }

    // Valores numéricos defensivos
    clone.price = Number(clone.price) || 0;
    if (clone.originalPrice != null) clone.originalPrice = Number(clone.originalPrice) || null;

    // Rating/reviews defaults
    clone.rating = Number(clone.rating) || 0;
    clone.reviews = Number(clone.reviews) || 0;

    // Estoque default
    clone.inStock = clone.inStock !== false;

    // Boolean oferta
    clone.isOffer = !!clone.isOffer;

    return clone;
  });
})();

/** ===========================
 *  2) Estado (LocalStorage)
 *  ============================ */
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/** ===========================
 *  3) Elementos do DOM (defensivo)
 *  ============================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const productsGrid     = $('#productsGrid');
const cartModal        = $('#cartModal');
const checkoutModal    = $('#checkoutModal');
const accountModal     = $('#accountModal');
const notificationEl   = $('#notification');
const notificationText = $('#notification-text');
const searchInput      = $('#searchInput');
const searchResults    = $('#searchResults');

/** ===========================
 *  4) Init
 *  ============================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateCartCount();
  updateFavCount();
  updateUserInterface();
  setupEventListeners();
});

/** ===========================
 *  5) Listeners
 *  ============================ */
function setupEventListeners() {
  // Conta
  $('#accountBtn')?.addEventListener('click', openAccountModal);
  $('#closeAccountModal')?.addEventListener('click', closeAccountModal);
  $('#showRegisterBtn')?.addEventListener('click', showRegisterForm);
  $('#showLoginBtn')?.addEventListener('click', showLoginForm);
  $('#loginBtn')?.addEventListener('click', handleLogin);
  $('#registerBtn')?.addEventListener('click', handleRegister);
  $('#logoutBtn')?.addEventListener('click', handleLogout);

  // Filtros
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      $$('.filter-btn').forEach(b => b.classList.remove('filter-active'));
      this.classList.add('filter-active');

      const filter = this.dataset.filter;
      let filtered = products;

      if (filter && filter !== 'all') {
        if (filter === 'ofertas') {
          filtered = products.filter(p => p.isOffer);
        } else {
          filtered = products.filter(p => p.category === filter);
        }
      }
      renderProducts(filtered);
      productsGrid?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Busca
  searchInput?.addEventListener('input', function () {
    const q = (this.value || '').toLowerCase().trim();
    if (q.length > 2) {
      const res = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q)
      );
      showSearchResults(res);
    } else {
      hideSearchResults();
    }
  });

  // Carrinho
  $('#cartBtn')?.addEventListener('click', openCartModal);
  $('#closeCartModal')?.addEventListener('click', closeCartModal);
  $('#clearCartBtn')?.addEventListener('click', clearCart);
  $('#checkoutBtn')?.addEventListener('click', openCheckoutModal);

  // Checkout
  $('#closeCheckoutModal')?.addEventListener('click', closeCheckoutModal);
  $('#confirmOrderBtn')?.addEventListener('click', confirmOrder);

  // Fechar modais clicando fora
  [cartModal, checkoutModal, accountModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('show');
    });
  });

  // Botão "Carregar mais"
  $('#loadMoreBtn')?.addEventListener('click', function () {
    this.innerHTML = '<div class="loading"></div> Carregando...';
    setTimeout(() => {
      showNotification('Todos os produtos já foram carregados!');
      this.innerHTML = 'Carregar Mais Produtos';
    }, 1200);
  });

  // Toggle do menu mobile do header (se existir)
  $('#menuToggleBtn')?.addEventListener('click', () => {
    const m = $('#mobileNav');
    m?.classList.toggle('hidden');
  });
}

/** ===========================
 *  6) Renderização de Produtos
 *  ============================ */
function renderProducts(list) {
  if (!productsGrid) return;
  productsGrid.innerHTML = (list || []).map(product => {
    const stars = '⭐'.repeat(Math.max(0, Math.min(5, Math.floor(product.rating))));
    const parcela = product.price ? (product.price / 12) : 0;
    const favOn = favorites.includes(product.id);

    return `
      <div class="relative card-hover bg-white rounded-2xl shadow-lg overflow-hidden product-card" data-category="${product.category}">
        ${product.isOffer ? '<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">OFERTA</div>' : ''}

        <div class="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
          <button class="absolute top-4 right-4 text-2xl hover:scale-110 transition-transform ${favOn ? 'text-red-500' : 'text-gray-400'}"
                  onclick="toggleFavorite(${product.id})" aria-label="Favoritar">
            ${favOn ? '❤️' : '🤍'}
          </button>
          <div class="text-center">
            <img src="${encodeURI(product.image)}" alt="${escapeHtml(product.name)}" class="h-40 w-40 object-contain mx-auto mb-2" onerror="this.style.display='none'">
            <h3 class="text-lg font-bold text-gray-800 px-2">${escapeHtml(product.name)}</h3>
          </div>
        </div>

        <div class="p-6">
          ${product.colors ? `
            <div class="mb-4">
              ${product.colors.map(color => `<span class="palette-color" title="${color}" style="background:${color};"></span>`).join('')}
            </div>` : ''}

          <p class="text-gray-600 mb-4 text-sm">${escapeHtml(product.description || '')}</p>

          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-2" aria-label="Avaliação">${stars}</div>
            <span class="text-sm text-gray-500">${product.rating.toFixed(1)} (${product.reviews} avaliações)</span>
          </div>

          <div class="flex justify-between items-center mb-4">
            <div>
              ${product.originalPrice ? `
                <span class="text-sm text-gray-400 line-through">R$ ${toBRL(product.originalPrice)}</span><br>` : ''}
              <span class="text-2xl font-bold text-pink-600">R$ ${toBRL(product.price)}</span>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-500">ou 12x de</div>
              <div class="text-sm font-semibold">R$ ${toBRL(parcela)}</div>
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
    `;
  }).join('');
}

/** ===========================
 *  7) Busca (dropdown no header)
 *  ============================ */
function showSearchResults(results) {
  if (!searchResults) return;
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="p-3 text-gray-500">Nenhum produto encontrado</div>';
    searchResults.classList.remove('hidden');
    return;
  }
  searchResults.innerHTML = results.map(p => `
    <div class="p-3 hover:bg-gray-50 cursor-pointer border-b" onclick="scrollToProduct(${p.id})">
      <div class="flex items-center gap-3">
        <img src="${encodeURI(p.image)}" alt="${escapeHtml(p.name)}" class="w-10 h-10 object-contain">
        <div>
          <div class="font-semibold">${escapeHtml(p.name)}</div>
          <div class="text-sm text-gray-500">R$ ${toBRL(p.price)}</div>
        </div>
      </div>
    </div>
  `).join('');
  searchResults.classList.remove('hidden');
}
function hideSearchResults() {
  searchResults?.classList.add('hidden');
}
function scrollToProduct(/* productId */) {
  hideSearchResults();
  if (searchInput) searchInput.value = '';
  productsGrid?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** ===========================
 *  8) Carrinho
 *  ============================ */
function addToCart(productId) {
  const p = products.find(x => x.id === productId);
  if (!p || !p.inStock) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...p, quantity: 1 });
  }
  persist('cart', cart);
  updateCartCount();
  showNotification(`${p.name} adicionado ao carrinho!`);
}
function buyNow(productId) {
  addToCart(productId);
  openCartModal();
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  persist('cart', cart);
  updateCartCount();
  renderCartItems();
  updateCartTotal();
}
function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    persist('cart', cart);
    renderCartItems();
    updateCartTotal();
  }
}
function clearCart() {
  cart = [];
  persist('cart', cart);
  updateCartCount();
  renderCartItems();
  updateCartTotal();
  showNotification('Carrinho limpo!');
}
function updateCartCount() {
  const count = cart.reduce((t, i) => t + (i.quantity || 0), 0);
  $('#cartCount') && ($('#cartCount').textContent = count);
}
function updateCartTotal() {
  const total = cart.reduce((s, i) => s + (Number(i.price) * (i.quantity || 0)), 0);
  $('#cartTotal') && ($('#cartTotal').textContent = `R$ ${toBRL(total)}`);

  const shipping = total >= 150 ? 0 : 15.90;
  const finalTotal = total + shipping;

  $('#checkoutSubtotal') && ($('#checkoutSubtotal').textContent = `R$ ${toBRL(total)}`);
  $('#checkoutShipping') && ($('#checkoutShipping').textContent = shipping === 0 ? 'GRÁTIS' : `R$ ${toBRL(shipping)}`);
  $('#checkoutTotal') && ($('#checkoutTotal').textContent = `R$ ${toBRL(finalTotal)}`);
}
function renderCartItems() {
  const wrap = $('#cartItems');
  if (!wrap) return;
  if (cart.length === 0) {
    wrap.innerHTML = '<div class="text-center text-gray-500 py-8">Carrinho vazio</div>';
    return;
  }
  wrap.innerHTML = cart.map(item => `
    <div class="flex items-center justify-between p-4 border rounded-lg">
      <div class="flex items-center">
        <img src="${encodeURI(item.image)}" alt="${escapeHtml(item.name)}" class="w-12 h-12 object-contain mr-4">
        <div>
          <h4 class="font-semibold">${escapeHtml(item.name)}</h4>
          <p class="text-gray-600">R$ ${toBRL(item.price)}</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300">-</button>
        <span class="font-semibold">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300">+</button>
        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-4" aria-label="Remover">🗑️</button>
      </div>
    </div>
  `).join('');
}

/** ===========================
 *  9) Favoritos
 *  ============================ */
function toggleFavorite(productId) {
  const idx = favorites.indexOf(productId);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showNotification('Removido dos favoritos');
  } else {
    favorites.push(productId);
    showNotification('Adicionado aos favoritos');
  }
  persist('favorites', favorites);
  updateFavCount();
  renderProducts(products); // para atualizar o coração
}
function updateFavCount() {
  $('#favCount') && ($('#favCount').textContent = favorites.length);
}

/** ===========================
 *  10) Modais
 *  ============================ */
function openCartModal() {
  renderCartItems();
  updateCartTotal();
  cartModal?.classList.add('show');
}
function closeCartModal() {
  cartModal?.classList.remove('show');
}
function openCheckoutModal() {
  if (cart.length === 0) {
    showNotification('Carrinho vazio!', 'error');
    return;
  }
  renderCheckoutItems();
  updateCartTotal();
  closeCartModal();
  checkoutModal?.classList.add('show');
}
function closeCheckoutModal() {
  checkoutModal?.classList.remove('show');
}
function renderCheckoutItems() {
  const wrap = $('#checkoutItems');
  if (!wrap) return;
  wrap.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center py-2">
      <div class="flex items-center">
        <img src="${encodeURI(item.image)}" alt="${escapeHtml(item.name)}" class="w-10 h-10 object-contain mr-3">
        <div>
          <div class="font-semibold">${escapeHtml(item.name)}</div>
          <div class="text-sm text-gray-500">Qtd: ${item.quantity}</div>
        </div>
      </div>
      <div class="font-semibold">R$ ${toBRL(item.price * item.quantity)}</div>
    </div>
  `).join('');
}

/** ===========================
 *  11) Conta / Usuários
 *  ============================ */
function openAccountModal() {
  if (currentUser) showUserDashboard(); else showLoginForm();
  accountModal?.classList.add('show');
}
function closeAccountModal() {
  accountModal?.classList.remove('show');
}
function showLoginForm() {
  $('#loginForm')?.classList.remove('hidden');
  $('#registerForm')?.classList.add('hidden');
  $('#userDashboard')?.classList.add('hidden');
  $('#accountModalTitle') && ($('#accountModalTitle').textContent = 'Entrar na Conta');
}
function showRegisterForm() {
  $('#loginForm')?.classList.add('hidden');
  $('#registerForm')?.classList.remove('hidden');
  $('#userDashboard')?.classList.add('hidden');
  $('#accountModalTitle') && ($('#accountModalTitle').textContent = 'Criar Conta');
}
function showUserDashboard() {
  $('#loginForm')?.classList.add('hidden');
  $('#registerForm')?.classList.add('hidden');
  $('#userDashboard')?.classList.remove('hidden');
  $('#accountModalTitle') && ($('#accountModalTitle').textContent = 'Minha Conta');
  if (currentUser) {
    $('#userName') && ($('#userName').textContent = `Olá, ${currentUser.name}!`);
    $('#userEmail') && ($('#userEmail').textContent = currentUser.email);
  }
}
function handleLogin() {
  const email = $('#loginEmail')?.value || '';
  const password = $('#loginPassword')?.value || '';
  if (!email || !password) {
    showNotification('Preencha todos os campos!', 'error');
    return;
  }
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    persist('currentUser', currentUser);
    updateUserInterface();
    showUserDashboard();
    showNotification(`Bem-vindo de volta, ${user.name}! 🎉`);

    // Preenche checkout
    $('#checkoutName') && ($('#checkoutName').value = user.name);
    $('#checkoutEmail') && ($('#checkoutEmail').value = user.email);
  } else {
    showNotification('E-mail ou senha incorretos!', 'error');
  }
}
function handleRegister() {
  const name = $('#registerName')?.value || '';
  const email = $('#registerEmail')?.value || '';
  const phone = $('#registerPhone')?.value || '';
  const password = $('#registerPassword')?.value || '';
  const confirmPassword = $('#registerConfirmPassword')?.value || '';
  const agreeTerms = $('#agreeTerms')?.checked || false;

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
  if (users.find(u => u.email === email)) {
    showNotification('Este e-mail já está cadastrado!', 'error');
    return;
  }

  const newUser = { id: Date.now(), name, email, phone, password, createdAt: new Date().toISOString() };
  users.push(newUser);
  persist('users', users);

  currentUser = newUser;
  persist('currentUser', currentUser);

  updateUserInterface();
  showUserDashboard();
  showNotification(`Conta criada com sucesso! Bem-vindo, ${name}! 🎉`);

  // Limpar campos
  try { $('#registerForm')?.reset?.(); } catch {}
}
function handleLogout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateUserInterface();
  closeAccountModal();
  showNotification('Logout realizado com sucesso!');
}
function updateUserInterface() {
  const accountBtn = $('#accountBtn');
  const accountText = $('#accountText');
  if (currentUser) {
    accountBtn?.classList.add('user-logged-in');
    if (accountText) accountText.textContent = (currentUser.name || 'Minha Conta').split(' ')[0];
  } else {
    accountBtn?.classList.remove('user-logged-in');
    if (accountText) accountText.textContent = 'Minha Conta';
  }
}

/** ===========================
 *  12) Utilitários
 *  ============================ */
function showNotification(message, type = 'success') {
  if (!notificationEl || !notificationText) return;
  notificationText.textContent = message;
  if (type === 'error') {
    notificationEl.className = 'notification bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg';
  } else {
    notificationEl.className = 'notification bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
  }
  notificationEl.classList.add('show');
  setTimeout(() => notificationEl.classList.remove('show'), 3000);
}
function renderCheckoutItems() {
  const wrap = $('#checkoutItems');
  if (!wrap) return;
  wrap.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center py-2">
      <div class="flex items-center">
        <img src="${encodeURI(item.image)}" alt="${escapeHtml(item.name)}" class="w-10 h-10 object-contain mr-3">
        <div>
          <div class="font-semibold">${escapeHtml(item.name)}</div>
          <div class="text-sm text-gray-500">Qtd: ${item.quantity}</div>
        </div>
      </div>
      <div class="font-semibold">R$ ${toBRL(item.price * item.quantity)}</div>
    </div>
  `).join('');
}
function confirmOrder() {
  const btn = $('#confirmOrderBtn');
  if (!btn) return;
  const original = btn.innerHTML;
  btn.innerHTML = '<div class="loading"></div> Processando...';
  btn.disabled = true;

  setTimeout(() => {
    showNotification('Pedido confirmado com sucesso! 🎉');
    cart = [];
    persist('cart', cart);
    updateCartCount();
    closeCheckoutModal();
    btn.innerHTML = original;
    btn.disabled = false;
  }, 2000);
}
function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function toBRL(n) {
  const v = Number(n) || 0;
  return v.toFixed(2).replace('.', ',');
}
function escapeHtml(str) {
  return (str || '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

/* Fim */
