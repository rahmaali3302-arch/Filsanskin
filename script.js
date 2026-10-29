/* ==========================================================================
   SKINORA BEAUTY - JAVASCRIPT SYSTEM (CASRI AH & SI BUUXDA U SHAQAYNAYA)
   Qaybaha:
   1. Xogta Alaabta (Products Data - 9-ka Qaybood ee Skincare-ka)
   2. Maamulka Xogta (Cart, Wishlist, Orders ee localStorage)
   3. Soo Bandhigista Alaabta (Render, Search, Filter & Sort)
   4. Dambiisha Wax Iibsiga (Shopping Cart Drawer & Free Shipping)
   5. Liiska Alaabta La Jecelyahay (Wishlist Drawer)
   6. Skincare Routine Finder (Interactive AI Quiz & Recommendations)
   7. Nidaamka Gaarsiinta & Checkout (Delivery System & Order Placement)
   8. Dabagalka Dalabka (Order Tracking System & 4-Step Stepper)
   9. Faahfaahinta Degdegga ah (Quick View Modal)
   10. Foomamka Xiriirka & Newsletter
   ========================================================================== */

// Hubi in DOM-ku si buuxda u shaqo galo ka hor inta aan la bilaabin
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. XOGTA ALAABTA (PRODUCTS CATALOG DATA - 9 CATEGORIES)
     ========================================================================== */
  const PRODUCTS = [
    // 1. FACIAL CLEANSERS (Waxyaabaha wajiga lagu nadiifiyo)
    {
      id: 'prod-1',
      name: 'Rose Petal Gentle Foam Cleanser',
      somaliCategory: 'Facial Cleansers',
      category: 'cleansers',
      price: 24.00,
      originalPrice: 28.00,
      rating: 4.9,
      reviews: 142,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      description: 'Nadiifiye xumbo jilicsan leh oo ka samaysan biyaha ubaxa Rose-ka iyo Aloe Vera. Wuxuu si qoto dheer u nadiifiyaa daloollada maqaarka isagoon qallajinayn.',
      ingredients: 'Rose Water, Aloe Vera Extract, Glycerin, Provitamin B5',
      howToUse: 'Ku mari wejiga qoyan subaxdii iyo habeenkii, si tartiib ah u duug 60 ilbiriqsi, kadibna biyo qandac ah kaga luqluqo.'
    },
    {
      id: 'prod-2',
      name: 'Clarifying Tea Tree Botanical Gel Cleanser',
      somaliCategory: 'Facial Cleansers',
      category: 'cleansers',
      price: 22.00,
      originalPrice: null,
      rating: 4.8,
      reviews: 98,
      tag: 'Organic',
      image: 'https://images.unsplash.com/photo-1608248597359-5613531b4028?auto=format&fit=crop&w=600&q=80',
      description: 'Nadiifiye gel ah oo si gaar ah loogu talagalay maqaarka saliidda badan iyo finanka leh. Wuxuu xakameeyaa saliidda xad-dhaafka ah wuxuuna ka hortagaa caabuqa.',
      ingredients: 'Tea Tree Leaf Oil, Salicylic Acid (0.5%), Green Tea Extract',
      howToUse: 'Ku mayr wejiga subax iyo fiid si aad u yarayso saliidda iyo soo bixidda finanka cusub.'
    },

    // 2. MOISTURIZERS (Kareemada qoyaanka maqaarka)
    {
      id: 'prod-3',
      name: 'Hydra-Dew Peptide Moisture Cream',
      somaliCategory: 'Moisturizers',
      category: 'moisturizers',
      price: 38.00,
      originalPrice: 45.00,
      rating: 5.0,
      reviews: 215,
      tag: 'Sale',
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem qoyan oo fudud oo siinaya maqaarka qoyaan 24-saac ah. Wuxuu xoojiyaa dahaarka maqaarka (skin barrier) wuxuuna ka dhigaa mid dhalaalaya oo jilicsan.',
      ingredients: 'Multi-Peptides, Ceramides NP, Hyaluronic Acid, Squalane',
      howToUse: 'Ku mari wejiga iyo qoorta nadiifka ah subaxdii iyo habeenkii kadib serum-ka.'
    },
    {
      id: 'prod-4',
      name: 'Rich Velvet Night Recovery Cream',
      somaliCategory: 'Moisturizers',
      category: 'moisturizers',
      price: 42.00,
      originalPrice: null,
      rating: 4.9,
      reviews: 87,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem habeenkii ah oo qani ku ah nafaqooyinka dib u soo celiya unugyada maqaarka inta aad huruddo. Wuxuu baabi\'iyaa daalka iyo calaamadaha gabowga.',
      ingredients: 'Shea Butter, Niacinamide (5%), Bakuchiol, Vitamin E',
      howToUse: 'Marso habeenkii ka hor intaadan seexan si aad ugu toosto maqaar dib u noolaaday.'
    },

    // 3. SERUMS (Dareerayaasha daryeelka maqaarka)
    {
      id: 'prod-5',
      name: 'Glow Radiance 15% Vitamin C + E Serum',
      somaliCategory: 'Serums',
      category: 'serums',
      price: 36.00,
      originalPrice: 45.00,
      rating: 4.9,
      reviews: 320,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      description: 'Serum-ka caanka ah ee Skinora ee iftiimiya maqaarka, baabi\'iya baraha madow iyo midabka aan sinnayn, maqaarkana ka ilaaliya waxyeellada qorraxda.',
      ingredients: '15% L-Ascorbic Acid (Vitamin C), Ferulic Acid, Pure Vitamin E',
      howToUse: 'Ku dhibci 3-4 dhibcood wejiga subax kasta ka hor intaadan marin kareemka qoyaanka iyo sunscreen-ka.'
    },
    {
      id: 'prod-6',
      name: 'Hyaluronic Miracle Plumping Serum',
      somaliCategory: 'Serums',
      category: 'serums',
      price: 32.00,
      originalPrice: null,
      rating: 4.8,
      reviews: 165,
      tag: 'Hydrating',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
      description: 'Dareere maqaarka ka buuxiya qoyaan dabiici ah. Wuxuu si degdeg ah u baabi\'iyaa qallaylka, maqaarkana ka dhigaa mid buuxa oo jilicsan sida carruurta.',
      ingredients: 'Multi-Molecular Hyaluronic Acid, Vitamin B5, Botanical Extracts',
      howToUse: 'Ku mari wejiga yara qoyan si qoyaanku ugu xirmo maqaarka gudihiisa.'
    },

    // 4. SUNSCREENS (Kareemada qorraxda laga isaga ilaaliyo)
    {
      id: 'prod-7',
      name: 'Invisible Silk Sun Shield SPF 50+ PA++++',
      somaliCategory: 'Sunscreens',
      category: 'sunscreens',
      price: 26.00,
      originalPrice: 32.00,
      rating: 5.0,
      reviews: 290,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem qorrax oo aan lahayn wax calaamad caddaan ah (Zero White Cast). Wuxuu ku milmaa maqaarka si sahlan isagoo bixinaya dhalaal dabiici ah iyo badbaado sare.',
      ingredients: 'Broad Spectrum UV Filters, Centella Asiatica, Niacinamide',
      howToUse: 'Marso wejiga iyo qoorta 15 daqiiqo ka hor intaadan bannaanka u bixin. Dib u marso 2-3 saacadood kasta.'
    },
    {
      id: 'prod-8',
      name: 'Mineral Tinted Glow Sunscreen SPF 45',
      somaliCategory: 'Sunscreens',
      category: 'sunscreens',
      price: 29.00,
      originalPrice: null,
      rating: 4.7,
      reviews: 74,
      tag: 'Natural Glow',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem qorrax macdan ah (Zinc Oxide) oo leh midab khafiif ah oo simaya midabka wejiga, una shaqaynaya sidii BB cream dabiici ah.',
      ingredients: 'Zinc Oxide (18%), Iron Oxides, Jojoba Oil, Green Tea',
      howToUse: 'Ku marso wejiga si siman subax kasta si aad u hesho ilaalinta qorraxda iyo midab siman.'
    },

    // 5. TONERS (Waxyaabaha maqaarka loo isticmaalo nadiifinta iyo daryeelka)
    {
      id: 'prod-9',
      name: 'Rosewater & Witch Hazel Calming Mist Toner',
      somaliCategory: 'Toners',
      category: 'toners',
      price: 20.00,
      originalPrice: 24.00,
      rating: 4.8,
      reviews: 130,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
      description: 'Toner lagu buufiyo maqaarka oo dib u celiya dheellitirka pH-ka maqaarka, yareeyana xasaasiyadda iyo casaanka wejiga.',
      ingredients: 'Organic Rose Hydrosol, Alcohol-Free Witch Hazel, Chamomile',
      howToUse: 'Ku buufi wejiga nadiifka ah subaxdii iyo fiidkii, ama buufso maalintii oo dhan si aad maqaarka ugu qaboojiso.'
    },
    {
      id: 'prod-10',
      name: 'AHA/BHA Clarifying Exfoliating Toner',
      somaliCategory: 'Toners',
      category: 'toners',
      price: 25.00,
      originalPrice: null,
      rating: 4.9,
      reviews: 112,
      tag: 'Glow Maker',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      description: 'Toner si tartiib ah u fiiqaya unugyada dhintay ee dusha maqaarka, nadiifinayana daloollada si wejigu u helo dhalaal saafiga ah ee (Glass Skin).',
      ingredients: 'Glycolic Acid (AHA 4%), Salicylic Acid (BHA 1%), Willow Bark',
      howToUse: 'Isticmaal habeenkii 2-3 jeer toddobaadkii adigoo suuf ku marinaya wejiga nadiifka ah.'
    },

    // 6. FACE MASKS (Maaskarooyinka wajiga)
    {
      id: 'prod-11',
      name: 'Pink French Clay Detox & Pore Mask',
      somaliCategory: 'Face Masks',
      category: 'masks',
      price: 28.00,
      originalPrice: 35.00,
      rating: 4.9,
      reviews: 188,
      tag: 'Sale',
      image: 'https://images.unsplash.com/photo-1567928815116-f7619a910121?auto=format&fit=crop&w=600&q=80',
      description: 'Maaskaro dhoobo casaan ah oo dhuuqa suntan iyo wasakhda ku qarsoon daloollada maqaarka, isagoo wejiga ka dhigaya mid nadiif ah oo cidhiidhi ah.',
      ingredients: 'French Pink Kaolin Clay, Rosehip Seed Oil, Calamine Powder',
      howToUse: 'Marso wejiga toddobaadkii hal ama laba jeer, sug 10-15 daqiiqo, kadibna biyo diirran kaga dhaq.'
    },
    {
      id: 'prod-12',
      name: 'Hydrogel Collagen Sleeping Mask',
      somaliCategory: 'Face Masks',
      category: 'masks',
      price: 30.00,
      originalPrice: null,
      rating: 4.8,
      reviews: 95,
      tag: 'Overnight',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      description: 'Maaskaro habeenkii lala seexdo oo maqaarka ku shubta kolajin iyo qoyaan heer sare ah si aad aroortii ugu toosto wejigoo aad u dhalaalaya.',
      ingredients: 'Hydrolyzed Marine Collagen, Hyaluronic Acid, Centella Asiatica',
      howToUse: 'Marso habeenkii tallaabada ugu dambaysa ee routine-kaaga, seexo adigoon dhaqin, subaxdiina biyo ku mayr.'
    },

    // 7. EYE CREAMS (Kareemada agagaarka indhaha)
    {
      id: 'prod-13',
      name: 'Awakening Caffeine & Peptides Eye Brightener',
      somaliCategory: 'Eye Creams',
      category: 'eye-care',
      price: 34.00,
      originalPrice: 40.00,
      rating: 4.9,
      reviews: 156,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem si gaar ah loogu habeeyey agagaarka jilicsan ee indhaha. Wuxuu baabi\'iyaa goobada madow (dark circles), bararka indhaha hoostooda iyo laalaabka yar.',
      ingredients: 'Green Coffee Bean Extract, Caffeine (3%), Matrixyl 3000, Vitamin K',
      howToUse: 'Farta yar ku qaad wax yar oo dhibic le\'eg, si tartiib ah ugu garaac lafta hoose ee isha subax iyo habeen.'
    },

    // 8. LIP CARE (Alaabta daryeelka bushimaha)
    {
      id: 'prod-14',
      name: 'Rose & Berry Butter Glaze Lip Balm',
      somaliCategory: 'Lip Care',
      category: 'lip-care',
      price: 14.00,
      originalPrice: null,
      rating: 5.0,
      reviews: 240,
      tag: 'Must Have',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
      description: 'Kareemka bushimaha oo ka samaysan Shea Butter iyo saliidda berry-ga. Wuxuu si degdeg ah u daweeyaa dillaaca bushimaha isagoo siinaya dhalaal dabiici ah.',
      ingredients: 'Organic Shea Butter, Murumuru Butter, Wild Berry Extract, Vitamin E',
      howToUse: 'Marso bushimaha wakhti kasta oo aad dareento qallayl ama ka hor intaadan seexan.'
    },

    // 9. BODY CARE (Alaabta daryeelka jirka)
    {
      id: 'prod-15',
      name: 'Golden Shimmer Firming Body Oil',
      somaliCategory: 'Body Care',
      category: 'body-care',
      price: 34.00,
      originalPrice: 42.00,
      rating: 4.9,
      reviews: 110,
      tag: 'Luxury',
      image: 'https://images.unsplash.com/photo-1608248597359-5613531b4028?auto=format&fit=crop&w=600&q=80',
      description: 'Saliid jilicsan oo jirka siisa dhalaal dahabi ah oo cajiib ah. Waxay qoyaan qoto dheer siisaa maqaarka iyadoo aan reebayn wax dufan ama dhegdheg ah.',
      ingredients: 'Sweet Almond Oil, Jojoba Seed Oil, Vitamin E, Gold Mica Powder',
      howToUse: 'Ku mari jirka oo dhan qubayska kadib si aad maqaarkaaga uga dhigto mid ifaya oo caraf udgoon leh.'
    },
    {
      id: 'prod-16',
      name: 'Whipped Shea & Jasmine Body Soufflé',
      somaliCategory: 'Body Care',
      category: 'body-care',
      price: 26.00,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      tag: 'Deep Moisture',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      description: 'Kareem jirka ah oo aad u jilicsan sida soufflé-ga oo qoyaan siiya maqaarka aadka u qallalan, una carfaya sida ubaxa Jasmine-ka ee dabiiciga ah.',
      ingredients: 'Whipped Shea Butter, Cocoa Butter, Jasmine Flower Extract, Argan Oil',
      howToUse: 'Marso gacmaha, lugaha iyo meelaha qallaylka leh maalin kasta si aad u hesho maqaar siman.'
    }
  ];

  /* ==========================================================================
     2. MAAMULKA XOGTA GUUD (STATE & LOCALSTORAGE)
     ========================================================================== */
  // Initial demo orders for instant testing of Order Tracking
  const INITIAL_DEMO_ORDERS = [
    {
      orderId: 'SKN-100245',
      customerName: 'Maryan Jaamac Warsame',
      phone: '0615123456',
      email: 'maryan.j@example.com',
      city: 'Muqdisho',
      district: 'Hodan, Taleex',
      address: 'Guri lambar 42, wadada Maka Al-Mukarama',
      deliveryMethod: 'standard',
      deliveryCost: 5.00,
      paymentMethod: 'Cash on Delivery (COD)',
      items: [
        { id: 'prod-5', name: 'Glow Radiance 15% Vitamin C + E Serum', price: 36.00, quantity: 1, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80' },
        { id: 'prod-3', name: 'Hydra-Dew Peptide Moisture Cream', price: 38.00, quantity: 1, image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80' }
      ],
      subtotal: 74.00,
      discount: 0,
      total: 74.00, // free shipping over $50
      status: 'Processing', // Pending, Processing, Shipped, Delivered
      createdAt: '2026-10-28T14:30:00Z'
    },
    {
      orderId: 'SKN-100246',
      customerName: 'Khadra Cabdullaahi Nuur',
      phone: '0634998877',
      email: 'khadra@example.com',
      city: 'Hargeysa',
      district: 'Jigjiga Yar',
      address: 'Agagaarka Masaajidka Xaaji Daahir',
      deliveryMethod: 'express',
      deliveryCost: 8.00,
      paymentMethod: 'Zaad Mobile Money Demo',
      items: [
        { id: 'prod-7', name: 'Invisible Silk Sun Shield SPF 50+', price: 26.00, quantity: 2, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80' }
      ],
      subtotal: 52.00,
      discount: 10.40, // 20% off from GLOW20
      total: 49.60,
      status: 'Shipped',
      createdAt: '2026-10-27T09:15:00Z'
    },
    {
      orderId: 'SKN-100247',
      customerName: 'Amina Xasan Cali',
      phone: '0617001122',
      email: 'amina@example.com',
      city: 'Garoowe',
      district: '1-da Luuliyo',
      address: 'Wadada Guud, Guriga Cali',
      deliveryMethod: 'standard',
      deliveryCost: 5.00,
      paymentMethod: 'Cash on Delivery',
      items: [
        { id: 'prod-1', name: 'Rose Petal Gentle Foam Cleanser', price: 24.00, quantity: 1, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' }
      ],
      subtotal: 24.00,
      discount: 0,
      total: 29.00,
      status: 'Delivered',
      createdAt: '2026-10-25T11:00:00Z'
    }
  ];

  // State objects
  let cart = JSON.parse(localStorage.getItem('skinora_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('skinora_wishlist')) || [];
  let orders = JSON.parse(localStorage.getItem('skinora_orders'));
  if (!orders || orders.length === 0) {
    orders = INITIAL_DEMO_ORDERS;
    localStorage.setItem('skinora_orders', JSON.stringify(orders));
  }

  // Active coupon
  let appliedCoupon = null; // { code: 'GLOW20', percent: 20 } or null

  // Active filter & search state
  let currentFilter = 'all';
  let currentSearch = '';
  let currentSort = 'featured';

  // Free shipping threshold
  const FREE_SHIPPING_THRESHOLD = 50.00;
  const STANDARD_DELIVERY_FEE = 5.00;
  const EXPRESS_DELIVERY_FEE = 8.00;

  /* ==========================================================================
     3. TOAST NOTIFICATIONS (FARRIIMAHA DEGDEGGA AH)
     ========================================================================== */
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     4. SOO BANDHIGISTA ALAABTA (RENDER PRODUCTS GRID)
     ========================================================================== */
  const productsGrid = document.getElementById('productsGrid');
  const emptyProducts = document.getElementById('emptyProducts');
  const productResultsCount = document.getElementById('productResultsCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  function renderProducts() {
    if (!productsGrid) return;

    // 1. Filter by category
    let filtered = PRODUCTS.filter(prod => {
      if (currentFilter === 'all') return true;
      return prod.category === currentFilter;
    });

    // 2. Search query filter
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase().trim();
      filtered = filtered.filter(prod => 
        prod.name.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.somaliCategory.toLowerCase().includes(q) ||
        prod.ingredients.toLowerCase().includes(q)
      );
    }

    // 3. Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Results count display
    if (productResultsCount) {
      productResultsCount.textContent = `Waxaa la helay ${filtered.length} alaab`;
    }

    // Reset button visibility
    if (resetFiltersBtn) {
      if (currentFilter !== 'all' || currentSearch !== '') {
        resetFiltersBtn.style.display = 'inline-flex';
      } else {
        resetFiltersBtn.style.display = 'none';
      }
    }

    // Empty state
    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      if (emptyProducts) emptyProducts.style.display = 'block';
      return;
    } else {
      if (emptyProducts) emptyProducts.style.display = 'none';
    }

    // Generate product cards HTML
    productsGrid.innerHTML = filtered.map(prod => {
      const isWishlisted = wishlist.includes(prod.id);
      const discountPct = prod.originalPrice 
        ? Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)
        : null;

      return `
        <article class="product-card" data-id="${prod.id}">
          <div class="product-thumb-box">
            ${prod.tag ? `<span class="product-badge-tag ${prod.tag.toLowerCase().includes('sale') ? 'sale' : ''}">${prod.tag}</span>` : ''}
            
            <div class="card-actions-hover">
              <button class="icon-action-btn wishlist-btn ${isWishlisted ? 'active-wishlist' : ''}" data-id="${prod.id}" title="${isWishlisted ? 'Ka saar liiska aad jeceshahay' : 'Ku dar liiska aad jeceshahay'}" aria-label="Wishlist">
                <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
              </button>
            </div>

            <img src="${prod.image}" alt="${prod.name}" class="product-thumb-img" loading="lazy">

            <button class="quick-view-overlay-btn" data-id="${prod.id}">
              <i class="fa-regular fa-eye"></i> Eeg Faahfaahinta
            </button>
          </div>

          <div class="product-info-box">
            <span class="product-category-meta">${prod.somaliCategory}</span>
            <h3 class="product-title" data-id="${prod.id}">${prod.name}</h3>
            <p class="product-snippet">${prod.description}</p>

            <div class="product-rating-row">
              <span class="stars">
                ${generateStars(prod.rating)}
              </span>
              <span class="rating-count">(${prod.rating} / ${prod.reviews} aragti)</span>
            </div>

            <div class="product-price-row">
              <div class="price-container">
                <span class="current-price">$${prod.price.toFixed(2)}</span>
                ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
              </div>

              <button class="add-cart-btn" data-id="${prod.id}" title="Ku dar Dambiisha" aria-label="Ku dar Dambiisha">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    attachProductCardEvents();
  }

  function generateStars(rating) {
    let starsHtml = '';
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (half) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const empty = 5 - full - (half ? 1 : 0);
    for (let i = 0; i < empty; i++) {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
    return starsHtml;
  }

  /* ==========================================================================
     5. DHACDOOYINKA PRODUCT CARDS (CLICK HANDLERS)
     ========================================================================== */
  function attachProductCardEvents() {
    // Add to cart buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });

    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        toggleWishlist(id);
      });
    });

    // Quick view buttons & titles
    document.querySelectorAll('.quick-view-overlay-btn, .product-title').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        openQuickView(id);
      });
    });
  }

  /* ==========================================================================
     6. FILTER & SEARCH CONTROLS
     ========================================================================== */
  // Category tabs filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Top category visual cards (scrolls down & filters)
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      currentFilter = cat;
      filterBtns.forEach(b => {
        if (b.getAttribute('data-filter') === cat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      renderProducts();
      const targetSec = document.getElementById('productsSection');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Footer category links
  document.querySelectorAll('[data-footer-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-footer-filter');
      currentFilter = cat;
      filterBtns.forEach(b => {
        if (b.getAttribute('data-filter') === cat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      renderProducts();
    });
  });

  // Product Search input in store
  const productSearchInput = document.getElementById('productSearchInput');
  const clearStoreSearch = document.getElementById('clearStoreSearch');

  if (productSearchInput) {
    productSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }
  if (clearStoreSearch) {
    clearStoreSearch.addEventListener('click', () => {
      if (productSearchInput) productSearchInput.value = '';
      currentSearch = '';
      renderProducts();
    });
  }

  // Header quick search
  const headerSearchInput = document.getElementById('headerSearchInput');
  const clearHeaderSearch = document.getElementById('clearHeaderSearch');
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const searchOverlay = document.getElementById('searchOverlay');

  if (searchTriggerBtn && searchOverlay) {
    searchTriggerBtn.addEventListener('click', () => {
      searchOverlay.classList.toggle('open');
      if (searchOverlay.classList.contains('open')) {
        headerSearchInput.focus();
      }
    });
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (productSearchInput) productSearchInput.value = e.target.value;
      renderProducts();
      // Scroll to products
      const pSec = document.getElementById('productsSection');
      if (pSec) pSec.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (clearHeaderSearch) {
    clearHeaderSearch.addEventListener('click', () => {
      if (headerSearchInput) headerSearchInput.value = '';
      if (productSearchInput) productSearchInput.value = '';
      currentSearch = '';
      renderProducts();
    });
  }

  // Sort dropdown
  const productSortSelect = document.getElementById('productSortSelect');
  if (productSortSelect) {
    productSortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Reset filters button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      resetFilters();
    });
  }
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      resetFilters();
    });
  }

  function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    if (productSearchInput) productSearchInput.value = '';
    if (headerSearchInput) headerSearchInput.value = '';
    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    renderProducts();
  }

  /* ==========================================================================
     7. DAMBIISHA WAX IIBSIGA (SHOPPING CART SYSTEM)
     ========================================================================== */
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartCountEl = document.getElementById('cartCount');
  const cartDrawerCountEl = document.getElementById('cartDrawerCount');

  // Open/Close Cart Drawer
  function openCart() {
    updateCartUI();
    cartDrawer.classList.add('active');
    cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);

  // Add Item to Cart
  function addToCart(productId, quantity = 1) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity: quantity });
    }
    saveCart();
    updateCartUI();

    const prod = PRODUCTS.find(p => p.id === productId);
    const prodName = prod ? prod.name : 'Alaabta';
    showToast(`"${prodName}" waxaa lagu daray dambiisha! 🛍️`, 'success');
  }

  // Update item quantity
  function changeCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart();
    updateCartUI();
  }

  // Remove item from cart
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Alaabta waa laga saaray dambiisha.', 'info');
  }

  // Save cart to localStorage
  function saveCart() {
    localStorage.setItem('skinora_cart', JSON.stringify(cart));
  }

  // Calculate totals
  function calculateCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (prod) {
        subtotal += prod.price * item.quantity;
      }
    });

    let discount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.percent) {
        discount = (subtotal * appliedCoupon.percent) / 100;
      } else if (appliedCoupon.freeShip) {
        // Handled in delivery fee
      }
    }

    // Delivery calculation
    let deliveryFee = STANDARD_DELIVERY_FEE;
    if (subtotal >= FREE_SHIPPING_THRESHOLD || (appliedCoupon && appliedCoupon.freeShip)) {
      deliveryFee = 0;
    } else if (subtotal === 0) {
      deliveryFee = 0;
    }

    const total = Math.max(0, subtotal - discount + deliveryFee);

    return {
      subtotal,
      discount,
      deliveryFee,
      total,
      itemCount: cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }

  // Render Cart Drawer HTML
  function updateCartUI() {
    const totals = calculateCartTotals();

    // Badges update
    if (cartCountEl) cartCountEl.textContent = totals.itemCount;
    if (cartDrawerCountEl) cartDrawerCountEl.textContent = totals.itemCount;

    // Free shipping bar progress
    const freeShippingInfo = document.getElementById('freeShippingInfo');
    const shippingProgressBar = document.getElementById('shippingProgressBar');

    if (freeShippingInfo && shippingProgressBar) {
      if (totals.subtotal >= FREE_SHIPPING_THRESHOLD) {
        freeShippingInfo.innerHTML = `🎉 <strong>Hambalyo!</strong> Waxaad heshay <strong>Delivery Bilaash ah</strong>!`;
        shippingProgressBar.style.width = '100%';
      } else {
        const remaining = (FREE_SHIPPING_THRESHOLD - totals.subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        freeShippingInfo.innerHTML = `Ku dar <strong>$${remaining}</strong> kale si aad u hesho <strong>Delivery Bilaash ah</strong>!`;
        shippingProgressBar.style.width = `${percent}%`;
      }
    }

    // Price breakdowns
    const subtotalEl = document.getElementById('cartSubtotalPrice');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountEl = document.getElementById('cartDiscountPrice');
    const deliveryEl = document.getElementById('cartDeliveryPrice');
    const totalEl = document.getElementById('cartTotalPrice');
    const proceedBtn = document.getElementById('proceedToCheckoutBtn');

    if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal.toFixed(2)}`;
    if (deliveryEl) {
      deliveryEl.textContent = totals.deliveryFee === 0 ? 'Bilaash (Free)' : `$${totals.deliveryFee.toFixed(2)}`;
    }
    if (totalEl) totalEl.textContent = `$${totals.total.toFixed(2)}`;

    if (totals.discount > 0) {
      if (discountRow) discountRow.style.display = 'flex';
      if (discountEl) discountEl.textContent = `-$${totals.discount.toFixed(2)}`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    // Items list in cart
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="drawer-empty-state">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4>Dambiishu waa maran tahay</h4>
          <p>Weli wax alaab ah kuma aadan darin dambiishaada.</p>
          <button class="btn btn-primary btn-sm" id="emptyCartShopBtn">
            <span>Bilow Wax Iibsiga</span>
          </button>
        </div>
      `;
      const btn = document.getElementById('emptyCartShopBtn');
      if (btn) btn.addEventListener('click', () => {
        closeCart();
        const pSec = document.getElementById('productsSection');
        if (pSec) pSec.scrollIntoView({ behavior: 'smooth' });
      });

      if (proceedBtn) {
        proceedBtn.disabled = true;
        proceedBtn.style.opacity = '0.5';
      }
      return;
    }

    if (proceedBtn) {
      proceedBtn.disabled = false;
      proceedBtn.style.opacity = '1';
    }

    cartItemsContainer.innerHTML = cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (!prod) return '';

      return `
        <div class="cart-item-card" data-id="${prod.id}">
          <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
          
          <div class="cart-item-details">
            <div>
              <h4 class="cart-item-title">${prod.name}</h4>
              <span class="cart-item-price">$${prod.price.toFixed(2)}</span>
            </div>

            <div class="cart-qty-row">
              <div class="qty-control-box">
                <button class="qty-btn btn-qty-minus" data-id="${prod.id}" title="Dhimo">-</button>
                <span class="qty-number">${item.quantity}</span>
                <button class="qty-btn btn-qty-plus" data-id="${prod.id}" title="Kordhi">+</button>
              </div>

              <button class="remove-cart-item-btn" data-id="${prod.id}" title="Ka saar dambiisha">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach quantity and remove events
    cartItemsContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        changeCartQuantity(id, -1);
      });
    });

    cartItemsContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        changeCartQuantity(id, 1);
      });
    });

    cartItemsContainer.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        removeFromCart(id);
      });
    });
  }

  // Coupon Application in Cart
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const cartCouponInput = document.getElementById('cartCouponInput');
  const couponFeedbackMsg = document.getElementById('couponFeedbackMsg');

  if (applyCouponBtn && cartCouponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = cartCouponInput.value.trim().toUpperCase();
      if (!code) {
        showCouponMsg('Fadlan geli koodhka qiimo-dhimista.', 'error');
        return;
      }

      if (code === 'GLOW20') {
        appliedCoupon = { code: 'GLOW20', percent: 20 };
        showCouponMsg('Koodhka GLOW20 waa la aqbalay! Waxaad heshay 20% qiimo-dhimis ah. ✨', 'success');
        updateCartUI();
      } else if (code === 'SKINORA10') {
        appliedCoupon = { code: 'SKINORA10', percent: 10 };
        showCouponMsg('Koodhka SKINORA10 waa la aqbalay! Waxaad heshay 10% qiimo-dhimis. ✨', 'success');
        updateCartUI();
      } else if (code === 'FREESHIP') {
        appliedCoupon = { code: 'FREESHIP', percent: 0, freeShip: true };
        showCouponMsg('Koodhka FREESHIP waa la aqbalay! Delivery-gu waa bilaash. 🚚', 'success');
        updateCartUI();
      } else {
        showCouponMsg('Koodhkan ma shaqaynayo ama waa mid dhacay. Isku day: GLOW20', 'error');
      }
    });
  }

  function showCouponMsg(msg, status) {
    if (!couponFeedbackMsg) return;
    couponFeedbackMsg.textContent = msg;
    couponFeedbackMsg.className = `coupon-feedback-msg ${status}`;
  }

  // Bundle Promo Section Add-to-cart
  const addBundleBtn = document.getElementById('addBundleBtn');
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      // Adds the 4 hero products from the bundle
      addToCart('prod-1', 1); // Rose cleanser
      addToCart('prod-5', 1); // Vitamin C serum
      addToCart('prod-3', 1); // Hydra dew cream
      addToCart('prod-7', 1); // Sunscreen SPF 50
      openCart();
      showToast('Xirmada The Ultimate Glow Bundle waxaa lagu daray dambiisha! 🎉', 'success');
    });
  }

  // Clickable coupon copy codes
  const copyCouponBtn = document.getElementById('copyCouponBtn');
  const dealCouponCode = document.getElementById('dealCouponCode');
  const copySuccessText = document.getElementById('copySuccessText');
  const announcementCoupon = document.getElementById('announcementCoupon');

  function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      if (copySuccessText) {
        copySuccessText.style.display = 'inline-block';
        setTimeout(() => copySuccessText.style.display = 'none', 3000);
      }
      showToast(`Koodhka "${code}" waa la koobiyeeyay! Ku tijaabi dambiisha. ✓`, 'success');
      if (cartCouponInput) cartCouponInput.value = code;
    });
  }

  if (copyCouponBtn && dealCouponCode) {
    copyCouponBtn.addEventListener('click', () => copyCode(dealCouponCode.textContent.trim()));
  }
  if (announcementCoupon) {
    announcementCoupon.addEventListener('click', () => copyCode('GLOW20'));
  }

  /* ==========================================================================
     8. LIISKA ALAABTA LA JECEYAHAY (WISHLIST SYSTEM)
     ========================================================================== */
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');
  const wishlistCountEl = document.getElementById('wishlistCount');
  const wishlistDrawerCountEl = document.getElementById('wishlistDrawerCount');
  const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
  const addAllWishlistToCartBtn = document.getElementById('addAllWishlistToCartBtn');

  function openWishlist() {
    updateWishlistUI();
    wishlistDrawer.classList.add('active');
    wishlistBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlist() {
    wishlistDrawer.classList.remove('active');
    wishlistBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', openWishlist);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlist);
  if (wishlistBackdrop) wishlistBackdrop.addEventListener('click', closeWishlist);

  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    const name = prod ? prod.name : 'Alaabta';

    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`"${name}" waa laga saaray liiska aad jeceshahay.`, 'info');
    } else {
      wishlist.push(productId);
      showToast(`"${name}" waxaa lagu daray liiska aad jeceshahay! ❤️`, 'success');
    }
    saveWishlist();
    updateWishlistUI();
    renderProducts();
  }

  function saveWishlist() {
    localStorage.setItem('skinora_wishlist', JSON.stringify(wishlist));
  }

  function updateWishlistUI() {
    if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
    if (wishlistDrawerCountEl) wishlistDrawerCountEl.textContent = wishlist.length;

    if (!wishlistItemsContainer) return;

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = `
        <div class="drawer-empty-state">
          <i class="fa-regular fa-heart"></i>
          <h4>Liiskaagu waa maran yahay</h4>
          <p>Guji calaamadda wadnaha (heart) ee alaab kasta si aad halkan ugu kaydsato.</p>
        </div>
      `;
      if (addAllWishlistToCartBtn) addAllWishlistToCartBtn.style.display = 'none';
      return;
    }

    if (addAllWishlistToCartBtn) addAllWishlistToCartBtn.style.display = 'block';

    wishlistItemsContainer.innerHTML = wishlist.map(id => {
      const prod = PRODUCTS.find(p => p.id === id);
      if (!prod) return '';

      return `
        <div class="cart-item-card">
          <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
          
          <div class="cart-item-details">
            <div>
              <h4 class="cart-item-title">${prod.name}</h4>
              <span class="cart-item-price">$${prod.price.toFixed(2)}</span>
            </div>

            <div class="cart-qty-row">
              <button class="btn btn-outline-rose btn-sm btn-move-to-cart" data-id="${prod.id}">
                <i class="fa-solid fa-cart-plus"></i> Ku dar Cart-ka
              </button>

              <button class="remove-cart-item-btn btn-remove-wishlist" data-id="${prod.id}" title="Ka saar">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    wishlistItemsContainer.querySelectorAll('.btn-move-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCart(id, 1);
        toggleWishlist(id);
      });
    });

    wishlistItemsContainer.querySelectorAll('.btn-remove-wishlist').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleWishlist(id);
      });
    });
  }

  if (addAllWishlistToCartBtn) {
    addAllWishlistToCartBtn.addEventListener('click', () => {
      if (wishlist.length === 0) return;
      wishlist.forEach(id => addToCart(id, 1));
      wishlist = [];
      saveWishlist();
      updateWishlistUI();
      renderProducts();
      closeWishlist();
      openCart();
      showToast('Dhammaan alaabtii aad jeclayd waxaa lagu daray dambiisha! 🎉', 'success');
    });
  }

  /* ==========================================================================
     9. SKINCARE ROUTINE FINDER (INTERACTIVE QUIZ SYSTEM)
     ========================================================================== */
  const quizStep1 = document.getElementById('quizStep1');
  const quizStep2 = document.getElementById('quizStep2');
  const quizStep3 = document.getElementById('quizStep3');
  const quizResultsPane = document.getElementById('quizResultsPane');

  const stepIndicator1 = document.getElementById('stepIndicator1');
  const stepIndicator2 = document.getElementById('stepIndicator2');
  const stepIndicator3 = document.getElementById('stepIndicator3');

  const quizNext1 = document.getElementById('quizNext1');
  const quizNext2 = document.getElementById('quizNext2');
  const quizPrev2 = document.getElementById('quizPrev2');
  const quizPrev3 = document.getElementById('quizPrev3');
  const quizSubmit = document.getElementById('quizSubmit');
  const restartQuizBtn = document.getElementById('restartQuizBtn');

  // Stepper Transitions
  if (quizNext1) {
    quizNext1.addEventListener('click', () => {
      quizStep1.classList.remove('active');
      quizStep2.classList.add('active');
      stepIndicator1.classList.remove('active');
      stepIndicator2.classList.add('active');
    });
  }

  if (quizPrev2) {
    quizPrev2.addEventListener('click', () => {
      quizStep2.classList.remove('active');
      quizStep1.classList.add('active');
      stepIndicator2.classList.remove('active');
      stepIndicator1.classList.add('active');
    });
  }

  if (quizNext2) {
    quizNext2.addEventListener('click', () => {
      quizStep2.classList.remove('active');
      quizStep3.classList.add('active');
      stepIndicator2.classList.remove('active');
      stepIndicator3.classList.add('active');
    });
  }

  if (quizPrev3) {
    quizPrev3.addEventListener('click', () => {
      quizStep3.classList.remove('active');
      quizStep2.classList.add('active');
      stepIndicator3.classList.remove('active');
      stepIndicator2.classList.add('active');
    });
  }

  // Quiz Submission & Recommendation Logic
  if (quizSubmit) {
    quizSubmit.addEventListener('click', () => {
      const skinType = document.querySelector('input[name="skinType"]:checked')?.value || 'normal';
      const concern = document.querySelector('input[name="skinConcern"]:checked')?.value || 'acne';
      const goal = document.querySelector('input[name="skinGoal"]:checked')?.value || 'glow';

      generateRoutineRecommendations(skinType, concern, goal);

      quizStep3.classList.remove('active');
      quizResultsPane.style.display = 'block';
    });
  }

  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      quizResultsPane.style.display = 'none';
      quizStep1.classList.add('active');
      stepIndicator1.classList.add('active');
      stepIndicator2.classList.remove('active');
      stepIndicator3.classList.remove('active');
    });
  }

  function generateRoutineRecommendations(skinType, concern, goal) {
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsSummary = document.getElementById('resultsSummary');
    const morningStepsList = document.getElementById('morningStepsList');
    const nightStepsList = document.getElementById('nightStepsList');
    const recProductsGrid = document.getElementById('recProductsGrid');

    // Friendly Somali translations
    const typeNames = {
      oily: 'Saliid leh (Oily)',
      dry: 'Qallalan (Dry)',
      combination: 'Isku-dhafan (Combination)',
      normal: 'Caadi (Normal)',
      sensitive: 'Xasaasi ah (Sensitive)'
    };

    const concernNames = {
      acne: 'Finanka & Daloollada',
      hyperpigmentation: 'Midabka oo aan sinnayn & Baraha Madow',
      dehydration: 'Qoyaan-la\'aanta',
      aging: 'Calaamadaha Gabowga'
    };

    resultsTitle.textContent = `Routine Gaar ah: Maqaarka ${typeNames[skinType]}`;
    resultsSummary.textContent = `Waxaan kuu habaynay nidaam subax iyo habeen ah oo si gaar ah u beegsanaya xallinta ${concernNames[concern]} iyo gaaridda hadafkaaga ah maqaar caafimaad qaba oo dhalaalaya.`;

    // Dynamic Morning Steps
    let morningSteps = [
      { order: 1, title: 'Nadiifinta Wejiga (Cleanse)', desc: skinType === 'oily' ? 'Ku mayr Clarifying Gel Cleanser si aad u xakamayso saliidda subaxda.' : 'Ku mayr Rose Petal Gentle Foam Cleanser si tartiib ah.' },
      { order: 2, title: 'Isku-dheellitirka (Tone)', desc: 'Ku buufi Rosewater Calming Mist si aad pH-ka maqaarka dib ugu soo celiso.' },
      { order: 3, title: 'Nafaqada Firfircoon (Serum)', desc: concern === 'hyperpigmentation' || goal === 'glow' ? 'Marso Vitamin C + E Serum si aad maqaarka u iftiimiso.' : 'Marso Hyaluronic Miracle Plumping Serum qoyaan qoto dheer.' },
      { order: 4, title: 'Qoyaanka (Moisturize)', desc: 'Marso Hydra-Dew Peptide Moisture Cream si maqaarku u xirto qoyaanka.' },
      { order: 5, title: 'Ilaalinta Qorraxda (Sunscreen - Muhiim!)', desc: 'Marso Invisible Silk Sun Shield SPF 50+ 15 daqiiqo ka hor bixitaanka.' }
    ];

    // Dynamic Night Steps
    let nightSteps = [
      { order: 1, title: 'Nadiifinta Qoto dheer (Night Cleanse)', desc: 'Ka mayr boodhka, wasakhda iyo sunscreen-ka maalintii kugu dhacay.' },
      { order: 2, title: 'Fiiqida Unugyada Dhintay (Exfoliate 2x/week)', desc: 'Isticmaal AHA/BHA Toner si aad daloollada u furto una nadiifiso.' },
      { order: 3, title: 'Kareemka Indhaha (Eye Care)', desc: 'Farta ku mari Awakening Caffeine Eye Cream lafta isha hoosteeda.' },
      { order: 4, title: 'Soo Celinta Habeenkii (Recovery Night Cream)', desc: 'Marso Rich Velvet Recovery Cream unugyada maqaarkaaga dib u cusboonaysiiya.' },
      { order: 5, title: 'Daryeelka Bushimaha (Lip Care)', desc: 'Marso Rose & Berry Butter Glaze si ay bushimuhu u jilicsanaadaan.' }
    ];

    morningStepsList.innerHTML = morningSteps.map(step => `
      <div class="routine-step-item">
        <span class="step-order-badge">${step.order}</span>
        <div class="step-info">
          <strong>${step.title}</strong>
          <p>${step.desc}</p>
        </div>
      </div>
    `).join('');

    nightStepsList.innerHTML = nightSteps.map(step => `
      <div class="routine-step-item">
        <span class="step-order-badge">${step.order}</span>
        <div class="step-info">
          <strong>${step.title}</strong>
          <p>${step.desc}</p>
        </div>
      </div>
    `).join('');

    // Pick 3-4 recommended products based on user choice
    let recProductIds = ['prod-7']; // Sunscreen is always recommended
    if (skinType === 'oily') {
      recProductIds.push('prod-2', 'prod-3');
    } else {
      recProductIds.push('prod-1', 'prod-3');
    }

    if (concern === 'hyperpigmentation' || goal === 'glow') {
      recProductIds.push('prod-5');
    } else if (concern === 'dehydration') {
      recProductIds.push('prod-6');
    } else {
      recProductIds.push('prod-11');
    }

    const recommendedProds = PRODUCTS.filter(p => recProductIds.includes(p.id));

    recProductsGrid.innerHTML = recommendedProds.map(prod => `
      <div class="rec-mini-card">
        <img src="${prod.image}" alt="${prod.name}" class="rec-mini-img">
        <h5 class="rec-mini-title">${prod.name}</h5>
        <span class="rec-mini-price">$${prod.price.toFixed(2)}</span>
        <button class="btn btn-outline-rose btn-sm btn-block add-rec-to-cart" data-id="${prod.id}">
          <i class="fa-solid fa-cart-plus"></i> Ku dar Dambiisha
        </button>
      </div>
    `).join('');

    recProductsGrid.querySelectorAll('.add-rec-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCart(id, 1);
      });
    });
  }

  /* ==========================================================================
     10. NIDAAMKA GAARSIINTA & CHECKOUT (CHECKOUT MODAL)
     ========================================================================== */
  const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutBackdrop = document.getElementById('checkoutBackdrop');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutItemsList = document.getElementById('checkoutItemsList');

  // Checkout delivery method radios
  const deliveryRadios = document.querySelectorAll('input[name="deliveryMethod"]');
  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');

  function openCheckout() {
    if (cart.length === 0) {
      showToast('Dambiishu waa maran tahay! Ku dar ugu yaraan hal alaab.', 'error');
      return;
    }
    closeCart();
    updateCheckoutSummary();
    checkoutModal.classList.add('active');
    checkoutBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    checkoutModal.classList.remove('active');
    checkoutBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (proceedToCheckoutBtn) proceedToCheckoutBtn.addEventListener('click', openCheckout);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
  if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckout);

  // Delivery radio cards style sync & price calculation
  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.delivery-radio-card').forEach(c => c.classList.remove('active'));
      radio.closest('.delivery-radio-card').classList.add('active');
      updateCheckoutSummary();
    });
  });

  // Payment radio cards style sync
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-radio-card').forEach(c => c.classList.remove('active'));
      radio.closest('.payment-radio-card').classList.add('active');
    });
  });

  function updateCheckoutSummary() {
    const selectedMethod = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'standard';
    const totals = calculateCartTotals();

    let deliveryFee = selectedMethod === 'express' ? EXPRESS_DELIVERY_FEE : STANDARD_DELIVERY_FEE;
    if (totals.subtotal >= FREE_SHIPPING_THRESHOLD || (appliedCoupon && appliedCoupon.freeShip)) {
      deliveryFee = 0;
    }

    const grandTotal = Math.max(0, totals.subtotal - totals.discount + deliveryFee);

    // Update badges inside delivery options
    const badgeStandard = document.getElementById('badgeStandardFee');
    const badgeExpress = document.getElementById('badgeExpressFee');

    if (totals.subtotal >= FREE_SHIPPING_THRESHOLD) {
      if (badgeStandard) badgeStandard.textContent = 'Bilaash (Free)';
      if (badgeExpress) badgeExpress.textContent = 'Bilaash (Free)';
    } else {
      if (badgeStandard) badgeStandard.textContent = `$${STANDARD_DELIVERY_FEE.toFixed(2)}`;
      if (badgeExpress) badgeExpress.textContent = `$${EXPRESS_DELIVERY_FEE.toFixed(2)}`;
    }

    // Update Checkout right pane breakdown
    const chkSubtotal = document.getElementById('checkoutSubtotal');
    const chkDiscountRow = document.getElementById('checkoutDiscountRow');
    const chkDiscount = document.getElementById('checkoutDiscount');
    const chkDelivery = document.getElementById('checkoutDelivery');
    const chkTotal = document.getElementById('checkoutTotal');

    if (chkSubtotal) chkSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;
    if (chkDelivery) chkDelivery.textContent = deliveryFee === 0 ? 'Bilaash (Free)' : `$${deliveryFee.toFixed(2)}`;
    if (chkTotal) chkTotal.textContent = `$${grandTotal.toFixed(2)}`;

    if (totals.discount > 0) {
      if (chkDiscountRow) chkDiscountRow.style.display = 'flex';
      if (chkDiscount) chkDiscount.textContent = `-$${totals.discount.toFixed(2)}`;
    } else {
      if (chkDiscountRow) chkDiscountRow.style.display = 'none';
    }

    // Mini items list
    if (checkoutItemsList) {
      checkoutItemsList.innerHTML = cart.map(item => {
        const prod = PRODUCTS.find(p => p.id === item.id);
        if (!prod) return '';
        return `
          <div class="checkout-item-mini">
            <span>${prod.name} <strong>x${item.quantity}</strong></span>
            <span>$${(prod.price * item.quantity).toFixed(2)}</span>
          </div>
        `;
      }).join('');
    }
  }

  // Handle Order Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        showToast('Dambiishu waa maran tahay!', 'error');
        return;
      }

      // Collect form fields
      const fullName = document.getElementById('orderFullName').value.trim();
      const phone = document.getElementById('orderPhone').value.trim();
      const email = document.getElementById('orderEmail').value.trim();
      const city = document.getElementById('orderCity').value;
      const district = document.getElementById('orderDistrict').value.trim();
      const address = document.getElementById('orderFullAddress').value.trim();
      const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'standard';
      const paymentMethodVal = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cod';

      // Validation
      if (!fullName || !phone || !email || !district || !address) {
        showToast('Fadlan buuxi dhammaan meelaha bannaan ee qasabka ah.', 'error');
        return;
      }

      const totals = calculateCartTotals();
      let deliveryFee = deliveryMethod === 'express' ? EXPRESS_DELIVERY_FEE : STANDARD_DELIVERY_FEE;
      if (totals.subtotal >= FREE_SHIPPING_THRESHOLD || (appliedCoupon && appliedCoupon.freeShip)) {
        deliveryFee = 0;
      }
      const finalTotal = Math.max(0, totals.subtotal - totals.discount + deliveryFee);

      // Payment method translation label
      let paymentLabel = 'Cash on Delivery (COD)';
      if (paymentMethodVal === 'mobile-money') paymentLabel = 'Mobile Money (EVC / Zaad Demo)';
      if (paymentMethodVal === 'card-demo') paymentLabel = 'Online Card (Demo)';

      // Generate unique Order ID (e.g., SKN-849204)
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const newOrderId = `SKN-${randomNum}`;

      // Snapshot items
      const orderedItems = cart.map(item => {
        const prod = PRODUCTS.find(p => p.id === item.id);
        return {
          id: item.id,
          name: prod ? prod.name : 'Skincare item',
          price: prod ? prod.price : 0,
          quantity: item.quantity,
          image: prod ? prod.image : ''
        };
      });

      // Construct Order Object
      const newOrder = {
        orderId: newOrderId,
        customerName: fullName,
        phone: phone,
        email: email,
        city: city,
        district: district,
        address: address,
        deliveryMethod: deliveryMethod,
        deliveryCost: deliveryFee,
        paymentMethod: paymentLabel,
        items: orderedItems,
        subtotal: totals.subtotal,
        discount: totals.discount,
        total: finalTotal,
        status: 'Pending', // initial status
        createdAt: new Date().toISOString()
      };

      // Save to localStorage orders list
      orders.unshift(newOrder);
      localStorage.setItem('skinora_orders', JSON.stringify(orders));

      // Reset cart and coupon
      cart = [];
      appliedCoupon = null;
      saveCart();
      updateCartUI();
      checkoutForm.reset();

      // Close checkout modal & open Confirmation modal
      closeCheckout();
      openConfirmationModal(newOrder);
      showToast('Dalabkaaga si guul leh ayaa loo diiwaangeliyey! 🎉', 'success');
    });
  }

  /* ==========================================================================
     11. ORDER CONFIRMATION MODAL
     ========================================================================== */
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmationBackdrop = document.getElementById('confirmationBackdrop');
  const confirmOrderNumber = document.getElementById('confirmOrderNumber');
  const confirmationDetailsBox = document.getElementById('confirmationDetailsBox');
  const copyOrderNumberBtn = document.getElementById('copyOrderNumberBtn');
  const trackThisOrderBtn = document.getElementById('trackThisOrderBtn');
  const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');

  let currentConfirmedOrderId = '';

  function openConfirmationModal(order) {
    currentConfirmedOrderId = order.orderId;
    if (confirmOrderNumber) confirmOrderNumber.textContent = order.orderId;

    if (confirmationDetailsBox) {
      confirmationDetailsBox.innerHTML = `
        <p><strong>Macmiilka:</strong> ${order.customerName}</p>
        <p><strong>Telefoonka:</strong> ${order.phone}</p>
        <p><strong>Cinwaanka:</strong> ${order.city}, ${order.district} - ${order.address}</p>
        <p><strong>Habka Gaarsiinta:</strong> ${order.deliveryMethod === 'express' ? 'Express (24 Saac)' : 'Standard (2-3 Maalmood)'}</p>
        <p><strong>Habka Lacagta:</strong> ${order.paymentMethod}</p>
        <p><strong>Wadarta Guud:</strong> <span style="color: var(--color-rose-gold-dark); font-weight: 800; font-size: 1.1rem;">$${order.total.toFixed(2)}</span></p>
      `;
    }

    confirmationModal.classList.add('active');
    confirmationBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
    confirmationBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeConfirmationBtn) closeConfirmationBtn.addEventListener('click', closeConfirmationModal);
  if (confirmationBackdrop) confirmationBackdrop.addEventListener('click', closeConfirmationModal);

  if (copyOrderNumberBtn) {
    copyOrderNumberBtn.addEventListener('click', () => {
      if (confirmOrderNumber) {
        navigator.clipboard.writeText(confirmOrderNumber.textContent.trim());
        showToast('Order Number-ka waa la koobiyeeyay! ✓', 'success');
      }
    });
  }

  if (trackThisOrderBtn) {
    trackThisOrderBtn.addEventListener('click', () => {
      closeConfirmationModal();
      const trackingSec = document.getElementById('trackingSection');
      const trackingInput = document.getElementById('trackingInput');
      if (trackingInput && currentConfirmedOrderId) {
        trackingInput.value = currentConfirmedOrderId;
        searchOrderTracking(currentConfirmedOrderId);
      }
      if (trackingSec) trackingSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     12. DABAGALKA DALABKA (ORDER TRACKING SYSTEM - 4-STEP PROGRESS)
     ========================================================================== */
  const trackingForm = document.getElementById('trackingForm');
  const trackingInput = document.getElementById('trackingInput');
  const trackingResultBox = document.getElementById('trackingResultBox');
  const trackingErrorBox = document.getElementById('trackingErrorBox');
  const trackingErrorMsg = document.getElementById('trackingErrorMsg');
  const advanceStatusBtn = document.getElementById('advanceStatusBtn');

  // Currently active tracked order
  let activeTrackedOrder = null;

  if (trackingForm && trackingInput) {
    trackingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderId = trackingInput.value.trim().toUpperCase();
      searchOrderTracking(orderId);
    });
  }

  // Demo order quick test buttons
  document.querySelectorAll('.demo-order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-order');
      if (trackingInput) trackingInput.value = orderId;
      searchOrderTracking(orderId);
    });
  });

  function searchOrderTracking(orderId) {
    // Refresh orders from localStorage
    orders = JSON.parse(localStorage.getItem('skinora_orders')) || INITIAL_DEMO_ORDERS;

    const found = orders.find(o => o.orderId.toUpperCase() === orderId.toUpperCase());

    if (!found) {
      if (trackingResultBox) trackingResultBox.style.display = 'none';
      if (trackingErrorBox) trackingErrorBox.style.display = 'flex';
      if (trackingErrorMsg) trackingErrorMsg.textContent = `Lama helin dalab wata lambarka "${orderId}". Fadlan hubi lambarka ama tijaabi mid ka mid ah dalabyada demo-ga ah.`;
      return;
    }

    activeTrackedOrder = found;
    if (trackingErrorBox) trackingErrorBox.style.display = 'none';
    if (trackingResultBox) trackingResultBox.style.display = 'block';

    renderTrackedOrder(found);
  }

  function renderTrackedOrder(order) {
    // Fill text elements
    const resOrderId = document.getElementById('resOrderId');
    const resStatusBadge = document.getElementById('resStatusBadge');
    const resCustomerName = document.getElementById('resCustomerName');
    const resAddress = document.getElementById('resAddress');
    const resPaymentMethod = document.getElementById('resPaymentMethod');
    const resTotalPrice = document.getElementById('resTotalPrice');
    const resItemsList = document.getElementById('resItemsList');

    if (resOrderId) resOrderId.textContent = order.orderId;
    if (resCustomerName) resCustomerName.textContent = order.customerName;
    if (resAddress) resAddress.textContent = `${order.city}, ${order.district} (${order.address})`;
    if (resPaymentMethod) resPaymentMethod.textContent = order.paymentMethod;
    if (resTotalPrice) resTotalPrice.textContent = `$${order.total.toFixed(2)}`;

    // Status badge class & text
    const status = order.status || 'Pending';
    if (resStatusBadge) {
      resStatusBadge.textContent = status;
      resStatusBadge.className = `tracking-status-badge status-${status.toLowerCase()}`;
    }

    // Stepper updates
    updateStepperVisual(status);

    // Items list
    if (resItemsList) {
      resItemsList.innerHTML = order.items.map(item => `
        <div class="preview-item-row">
          <span>${item.name} <strong>x${item.quantity}</strong></span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  function updateStepperVisual(status) {
    const p1 = document.getElementById('stepPoint1');
    const p2 = document.getElementById('stepPoint2');
    const p3 = document.getElementById('stepPoint3');
    const p4 = document.getElementById('stepPoint4');
    const stepperProgress = document.getElementById('stepperProgress');

    // Reset points
    [p1, p2, p3, p4].forEach(p => {
      if (p) {
        p.classList.remove('completed', 'active');
      }
    });

    if (status === 'Pending') {
      if (p1) p1.classList.add('active');
      if (stepperProgress) stepperProgress.style.width = '0%';
    } else if (status === 'Processing') {
      if (p1) p1.classList.add('completed');
      if (p2) p2.classList.add('active');
      if (stepperProgress) stepperProgress.style.width = '33%';
    } else if (status === 'Shipped') {
      if (p1) p1.classList.add('completed');
      if (p2) p2.classList.add('completed');
      if (p3) p3.classList.add('active');
      if (stepperProgress) stepperProgress.style.width = '66%';
    } else if (status === 'Delivered') {
      if (p1) p1.classList.add('completed');
      if (p2) p2.classList.add('completed');
      if (p3) p3.classList.add('completed');
      if (p4) p4.classList.add('completed', 'active');
      if (stepperProgress) stepperProgress.style.width = '100%';
    }
  }

  // Demo advance status button (allows tester to simulate order progression)
  if (advanceStatusBtn) {
    advanceStatusBtn.addEventListener('click', () => {
      if (!activeTrackedOrder) return;

      const orderStates = ['Pending', 'Processing', 'Shipped', 'Delivered'];
      let currentIdx = orderStates.indexOf(activeTrackedOrder.status);
      let nextIdx = (currentIdx + 1) % orderStates.length;
      activeTrackedOrder.status = orderStates[nextIdx];

      // Update in orders array & localStorage
      const oIdx = orders.findIndex(o => o.orderId === activeTrackedOrder.orderId);
      if (oIdx > -1) {
        orders[oIdx].status = activeTrackedOrder.status;
        localStorage.setItem('skinora_orders', JSON.stringify(orders));
      }

      renderTrackedOrder(activeTrackedOrder);
      showToast(`Xaaladda dalabka waxa loo beddelay: "${activeTrackedOrder.status}" 📦`, 'info');
    });
  }

  /* ==========================================================================
     13. QUICK VIEW PRODUCT MODAL
     ========================================================================== */
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewBackdrop = document.getElementById('quickViewBackdrop');
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
  const quickViewBody = document.getElementById('quickViewBody');

  function openQuickView(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod || !quickViewBody) return;

    quickViewBody.innerHTML = `
      <div class="qv-image-box">
        <img src="${prod.image}" alt="${prod.name}">
      </div>

      <div class="qv-content-box">
        <div>
          <span class="qv-category">${prod.somaliCategory}</span>
          <h2 class="qv-title">${prod.name}</h2>
          
          <div class="product-rating-row">
            <span class="stars">${generateStars(prod.rating)}</span>
            <span class="rating-count">(${prod.rating} / ${prod.reviews} aragti)</span>
          </div>

          <div class="qv-price-row">
            <span class="qv-price">$${prod.price.toFixed(2)}</span>
            ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
          </div>

          <p class="qv-desc">${prod.description}</p>

          <div class="qv-details-tab">
            <div>
              <strong>🌿 Waxyaabaha ugu Muhiimsan (Key Ingredients):</strong>
              <p>${prod.ingredients}</p>
            </div>
            <div>
              <strong>💡 Sida Loo Isticmaalo (How to Use):</strong>
              <p>${prod.howToUse}</p>
            </div>
          </div>
        </div>

        <div class="qv-actions-row">
          <button class="btn btn-primary btn-block btn-lg qv-add-cart-btn" data-id="${prod.id}">
            <i class="fa-solid fa-cart-plus"></i>
            <span>Ku dar Dambiisha ($${prod.price.toFixed(2)})</span>
          </button>
        </div>
      </div>
    `;

    const addBtn = quickViewBody.querySelector('.qv-add-cart-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addToCart(prod.id, 1);
        closeQuickView();
        openCart();
      });
    }

    quickViewModal.classList.add('active');
    quickViewBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal.classList.remove('active');
    quickViewBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
  if (quickViewBackdrop) quickViewBackdrop.addEventListener('click', closeQuickView);

  /* ==========================================================================
     14. FAQ ACCORDION INTERACTION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all others
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  /* ==========================================================================
     15. FOOMKA XIRIIRKA & NEWSLETTER (CONTACT & NEWSLETTER)
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !phone || !subject || !message) {
        showToast('Fadlan buuxi dhammaan meelaha bannaan.', 'error');
        return;
      }

      contactForm.reset();
      showToast(`Mahadsanid ${name}! Farriintaada si guul leh ayaa loo diray. Kooxdeena ayaa dhowaan kula soo xiriiri doonta. ✨`, 'success');
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      if (!email) return;

      newsletterForm.reset();
      showToast('Waad ku mahadsan tahay ku biirista qoyska Skinora Beauty! 🎉', 'success');
    });
  }

  /* ==========================================================================
     16. MOBILE DRAWER NAVIGATION & SCROLL TOP BUTTON
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileDrawerBtn = document.getElementById('closeMobileDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    mobileDrawer.classList.add('active');
    mobileDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer.classList.remove('active');
    mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
  if (closeMobileDrawerBtn) closeMobileDrawerBtn.addEventListener('click', closeMobileNav);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Sticky header scroll shadow & scroll-to-top button
  const siteHeader = document.getElementById('siteHeader');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (siteHeader) {
      if (scrollY > 40) siteHeader.classList.add('scrolled');
      else siteHeader.classList.remove('scrolled');
    }

    if (scrollTopBtn) {
      if (scrollY > 500) scrollTopBtn.classList.add('visible');
      else scrollTopBtn.classList.remove('visible');
    }
  });

  // Keyboard accessibility: ESC key closes all active modals/drawers
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeWishlist();
      closeCheckout();
      closeConfirmationModal();
      closeQuickView();
      closeMobileNav();
      if (searchOverlay) searchOverlay.classList.remove('open');
    }
  });

  /* ==========================================================================
     17. BILAABIDDA UGU HOREYSA (INITIALIZATION)
     ========================================================================== */
  renderProducts();
  updateCartUI();
  updateWishlistUI();

  console.log('Skinora Beauty E-commerce System is ready! ✨');
});
