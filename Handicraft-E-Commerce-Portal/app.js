const artisans = [
    {
        id: 1,
        name: "Meera Devi",
        location: "Jaipur, Rajasthan",
        specialty: "Block-Printed Scarves",
        story: "Meera Devi has been practicing the ancient art of block printing for over 25 years. She learned this craft from her grandmother and uses natural dyes and traditional wooden blocks to create stunning patterns. Each scarf is a unique piece of wearable art that tells a story of Rajasthan's rich textile heritage."
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        location: "Moradabad, Uttar Pradesh",
        specialty: "Brass Lamps",
        story: "Rajesh Kumar is a third-generation brass artisan from Moradabad, India's brass capital. His intricate lamps blend traditional designs with contemporary aesthetics. Using age-old techniques of casting and engraving, he transforms raw brass into magnificent lighting pieces that illuminate homes with warmth and tradition."
    },
    {
        id: 3,
        name: "Anjali Sharma",
        location: "Varanasi, Uttar Pradesh",
        specialty: "Handloom Sarees",
        story: "Anjali Sharma comes from a family of master weavers in Varanasi. For 30 years, she has been weaving exquisite Banarasi sarees using pure silk and gold threads. Each saree takes weeks to complete and represents the timeless elegance of Indian craftsmanship. Her work preserves the heritage of one of India's oldest weaving traditions."
    },
    {
        id: 4,
        name: "Pooja Singh",
        location: "Udaipur, Rajasthan",
        specialty: "Terracotta Pots",
        story: "Pooja Singh is a skilled potter from Udaipur who specializes in terracotta pottery. Using clay from local sources, she hand-molds each piece on a traditional potter's wheel. Her work ranges from decorative pots to functional kitchenware, all featuring intricate hand-painted designs inspired by Rajasthani folk art."
    }
];

const products = [
    {
        id: 1,
        name: "Peacock Block-Print Scarf",
        category: "Handloom Textiles",
        price: 1250,
        image: "https://images.unsplash.com/photo-1601924638867-5a5a6c1b1822?w=500&h=500&fit=crop",
        artisanId: 1,
        artisan: "Meera Devi",
        location: "Jaipur, Rajasthan",
        story: "Hand block-printed with traditional peacock motifs using natural indigo dye"
    },
    {
        id: 2,
        name: "Floral Cotton Scarf",
        category: "Handloom Textiles",
        price: 950,
        image: "https://images.unsplash.com/photo-1520903074185-944e60457f98?w=500&h=500&fit=crop",
        artisanId: 1,
        artisan: "Meera Devi",
        location: "Jaipur, Rajasthan",
        story: "Vibrant floral patterns created using traditional Rajasthani block printing technique"
    },
    {
        id: 3,
        name: "Ornate Brass Table Lamp",
        category: "Metal Art",
        price: 3200,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
        artisanId: 2,
        artisan: "Rajesh Kumar",
        location: "Moradabad, Uttar Pradesh",
        story: "Intricately engraved brass lamp with traditional Mughal-inspired designs"
    },
    {
        id: 4,
        name: "Vintage Brass Diya Set",
        category: "Metal Art",
        price: 1800,
        image: "https://images.unsplash.com/photo-1578932750355-5eb30ece487a?w=500&h=500&fit=crop",
        artisanId: 2,
        artisan: "Rajesh Kumar",
        location: "Moradabad, Uttar Pradesh",
        story: "Set of 5 traditional brass diyas perfect for festivals and daily prayers"
    },
    {
        id: 5,
        name: "Royal Blue Banarasi Saree",
        category: "Handloom Textiles",
        price: 8500,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop",
        artisanId: 3,
        artisan: "Anjali Sharma",
        location: "Varanasi, Uttar Pradesh",
        story: "Pure silk Banarasi saree with gold zari work and traditional brocade patterns"
    },
    {
        id: 6,
        name: "Crimson Wedding Saree",
        category: "Handloom Textiles",
        price: 12500,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=500&h=500&fit=crop",
        artisanId: 3,
        artisan: "Anjali Sharma",
        location: "Varanasi, Uttar Pradesh",
        story: "Luxurious wedding saree with heavy gold thread work and silk borders"
    },
    {
        id: 7,
        name: "Hand-Painted Terracotta Pot",
        category: "Pottery",
        price: 650,
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
        artisanId: 4,
        artisan: "Pooja Singh",
        location: "Udaipur, Rajasthan",
        story: "Decorative terracotta pot with hand-painted Rajasthani folk motifs"
    },
    {
        id: 8,
        name: "Terracotta Planter Set",
        category: "Pottery",
        price: 1100,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
        artisanId: 4,
        artisan: "Pooja Singh",
        location: "Udaipur, Rajasthan",
        story: "Set of 3 handcrafted terracotta planters with drainage holes"
    },
    {
        id: 9,
        name: "Silver Kundan Necklace",
        category: "Traditional Jewelry",
        price: 4500,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        artisanId: 1,
        artisan: "Meera Devi",
        location: "Jaipur, Rajasthan",
        story: "Elegant Kundan necklace with meenakari work and semi-precious stones"
    },
    {
        id: 10,
        name: "Brass Jhumka Earrings",
        category: "Traditional Jewelry",
        price: 850,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        artisanId: 2,
        artisan: "Rajesh Kumar",
        location: "Moradabad, Uttar Pradesh",
        story: "Traditional brass jhumka earrings with intricate bell detailing"
    },
    {
        id: 11,
        name: "Decorative Brass Wall Hanging",
        category: "Metal Art",
        price: 2200,
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&h=500&fit=crop",
        artisanId: 2,
        artisan: "Rajesh Kumar",
        location: "Moradabad, Uttar Pradesh",
        story: "Ornate brass wall art featuring traditional Indian mandala patterns"
    },
    {
        id: 12,
        name: "Clay Dinner Set",
        category: "Pottery",
        price: 1650,
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop",
        artisanId: 4,
        artisan: "Pooja Singh",
        location: "Udaipur, Rajasthan",
        story: "Complete dinner set for 4 people, handcrafted from natural terracotta clay"
    }
];

let cart = [];
let filteredProducts = [...products];

function formatPrice(price) {
    return Math.round(price).toLocaleString('en-IN');
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-artisan">By ${product.artisan}</p>
                <p class="product-location">${product.location}</p>
                <div class="product-price">₹${formatPrice(product.price)}</div>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartBadge();
    alert('Added to cart!');
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('priceSort').value;
    
    filteredProducts = [...products];
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    if (sortBy === 'low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    renderProducts();
}

function renderArtisans() {
    const grid = document.getElementById('artisansGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    artisans.forEach(artisan => {
        const card = document.createElement('div');
        card.className = 'artisan-card';
        card.onclick = () => showArtisanDetails(artisan.id);
        card.innerHTML = `
            <h3 class="artisan-name">${artisan.name}</h3>
            <div class="artisan-location">${artisan.location}</div>
            <p class="artisan-story">${artisan.story.substring(0, 150)}...</p>
        `;
        grid.appendChild(card);
    });
}

function showArtisanDetails(artisanId) {
    const artisan = artisans.find(a => a.id === artisanId);
    const artisanProducts = products.filter(p => p.artisanId === artisanId);
    
    const modal = document.getElementById('artisanModal');
    const details = document.getElementById('artisanDetails');
    
    if (!modal || !details || !artisan) return;
    
    details.innerHTML = `
        <h2 class="artisan-name">${artisan.name}</h2>
        <div class="artisan-location" style="font-size: 18px; margin-bottom: 20px;">${artisan.location}</div>
        <p style="font-size: 16px; line-height: 1.8; margin-bottom: 30px;">${artisan.story}</p>
        
        <h3 style="color: #1e3a8a; margin-bottom: 20px;">Products by ${artisan.name}</h3>
        <div class="products-grid">
            ${artisanProducts.map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">₹${formatPrice(product.price)}</div>
                        <button class="btn-primary" onclick="addToCart(${product.id}); closeArtisanModal();">Add to Cart</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('show');
}

function closeArtisanModal() {
    document.getElementById('artisanModal').classList.remove('show');
}

function renderCart() {
    const container = document.getElementById('cartContainer');
    
    if (!container) return;
    
    if (!cart || cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <h3>Your cart is empty</h3>
                <p>Start shopping to add items to your cart</p>
            </div>
        `;
        return;
    }
    
    try {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const gst = subtotal * 0.18;
        const total = subtotal + gst;
        
        const cartItemsHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-artisan">By ${item.artisan}</p>
                    <div class="cart-item-price">₹${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = `
            <div class="cart-items">
                ${cartItemsHTML}
            </div>
            
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₹${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span>GST (18%):</span>
                    <span>₹${formatPrice(gst)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>₹${formatPrice(total)}</span>
                </div>
                <button class="btn-order" onclick="placeOrder()">Place Order</button>
            </div>
        `;
    } catch (error) {
        console.error('Error rendering cart:', error);
        container.innerHTML = `
            <div class="cart-empty">
                <h3>Error loading cart</h3>
                <p>Please try refreshing the page</p>
            </div>
        `;
    }
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartBadge();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCart();
}

function placeOrder() {
    const modal = document.getElementById('orderModal');
    modal.classList.add('show');
    cart = [];
    updateCartBadge();
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
    showPage('home');
    renderCart();
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(`${pageName}Page`).classList.add('active');
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    
    if (pageName === 'artisans') {
        renderArtisans();
    } else if (pageName === 'cart') {
        renderCart();
    }
}

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceSort').addEventListener('change', filterProducts);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        showPage(page);
    });
});

document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('show');
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
};

renderProducts();
updateCartBadge();
