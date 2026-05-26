// ---- DATA ----
const menuItems = [
  { id:1, name:'Burrata & Truffle Crostini', price:680, category:'starters', desc:'Creamy buffalo burrata, black truffle shavings, sourdough crisp, micro herbs.', tags:['Vegetarian','Chef Pick'], badge:'Bestseller', emoji:'🥗' },
  { id:2, name:'Seared Scallops', price:1200, category:'starters', desc:'Hand-dived scallops, cauliflower purée, crispy pancetta, pea shoots.', tags:['Seafood','Gluten Free'], emoji:'🐚' },
  { id:3, name:'Beet Tartare', price:750, category:'starters', desc:'Golden & ruby beet, horseradish cream, capers, rye crisp, dill oil.', tags:['Vegan'], emoji:'🥗' },
  { id:4, name:'Tandoor Prawn Bisque', price:820, category:'starters', desc:'Tandoor-smoked prawn shells, bisque, crème fraîche, chive oil.', tags:['Seafood'], emoji:'🦐' },
  { id:5, name:'Wood-Fired Prime Rib', price:3200, category:'mains', desc:'28-day aged prime rib, oak-fired, red wine jus, bone marrow butter, truffle pommes.', tags:['Signature','Chef Pick'], badge:'Signature', emoji:'🥩' },
  { id:6, name:'Lobster Thermidor', price:4500, category:'mains', desc:'Half Maine lobster, cognac cream, gruyère crust, garden salad, sourdough.', tags:['Seafood','Premium'], emoji:'🦞' },
  { id:7, name:'Wild Mushroom Risotto', price:1400, category:'mains', desc:'Carnaroli rice, porcini & morel mushrooms, aged parmesan, black truffle, lemon oil.', tags:['Vegetarian','Gluten Free'], emoji:'🍄' },
  { id:8, name:'Lamb Rack Provençal', price:2800, category:'mains', desc:'Herb-crusted lamb rack, ratatouille, pommes dauphinoise, rosemary jus.', tags:['Chef Pick'], emoji:'🍖' },
  { id:9, name:'Valrhona Lava Cake', price:680, category:'desserts', desc:'Dark chocolate coulant, vanilla gelato, cocoa tuile, gold leaf.', tags:['Must Try'], badge:'Fan Fav', emoji:'🍫' },
  { id:10, name:'Mango Carpaccio', price:560, category:'desserts', desc:'Alphonso mango, coconut sorbet, lime gel, dried hibiscus, sesame tuile.', tags:['Vegan','Seasonal'], emoji:'🥭' },
  { id:11, name:'Crème Brûlée', price:520, category:'desserts', desc:'Madagascan vanilla bean custard, caramelised sugar, fresh berries.', tags:['Classic'], emoji:'🍮' },
  { id:12, name:'Ember Old Fashioned', price:780, category:'drinks', desc:'Smoke-infused bourbon, Demerara sugar, bitters, orange, charcoal ice sphere.', tags:['Signature'], emoji:'🥃' },
  { id:13, name:'Rosewater Spritz', price:480, category:'drinks', desc:'Rose cordial, lychee, elderflower tonic, lime, dried rose petals. Non-alcoholic.', tags:['Non-Alcoholic'], emoji:'🌹' },
  { id:14, name:'Vintage Cellar Red', price:1800, category:'drinks', desc:'Curated bottle from our cellar — ask your sommelier for the day\'s selection.', tags:['Wine'], emoji:'🍷' },
];

const testimonials = [
  { text:'A transcendent evening. The wood-fired prime rib was unlike anything I have tasted — the char, the flavour, the tenderness. We will return.', name:'Neha Gupta', meta:'Food Critic · Delhi', rating:'★★★★★' },
  { text:'Ember & Oak redefined fine dining for me. The service is impeccable, the ambience intoxicating, and the tasting menu a work of art.', name:'Vikram Ahuja', meta:'Regular Guest · Mumbai', rating:'★★★★★' },
  { text:'Celebrated our anniversary here — they went above and beyond, decorating the table and pairing each course with perfect wines. Magical.', name:'Sana & Rohit Jain', meta:'Anniversary Guests', rating:'★★★★★' },
  { text:'The lobster thermidor alone justifies the visit. Paired with their Cellar Red, it was the most indulgent meal of my life.', name:'Arjun Patel', meta:'Business Traveller', rating:'★★★★★' },
  { text:'As a pastry chef myself, I am hard to impress. The lava cake and mango carpaccio left me speechless. Priya Mehta is a genius.', name:'Chef Divya Rao', meta:'Culinary Arts, Bengaluru', rating:'★★★★★' },
  { text:'Best ambience in Delhi, hands down. Every corner is beautifully considered. The cocktails are extraordinary — try the Old Fashioned!', name:'Meera Krishnan', meta:'Interior Designer', rating:'★★★★★' },
];

const orderData = [
  { id:'#EMB-2401', customer:'Aarav S.', items:'Prime Rib, Old Fashioned', amount:'₹3,980', status:'confirmed' },
  { id:'#EMB-2402', customer:'Priya N.', items:'Lobster, Crème Brûlée', amount:'₹5,020', status:'pending' },
  { id:'#EMB-2403', customer:'Kabir M.', items:'Mushroom Risotto ×2', amount:'₹2,800', status:'confirmed' },
  { id:'#EMB-2404', customer:'Riya S.', items:'Scallops, Lamb Rack', amount:'₹4,000', status:'cancelled' },
  { id:'#EMB-2405', customer:'Ananya K.', items:'Lava Cake ×3', amount:'₹2,040', status:'confirmed' },
];

const reservationData = [
  { name:'Sunita Malik', date:'2026-05-26', time:'7:30 PM', guests:'4', status:'confirmed' },
  { name:'Aditya Kapoor', date:'2026-05-26', time:'8:00 PM', guests:'2', status:'pending' },
  { name:'Rhea & Veer', date:'2026-05-27', time:'7:00 PM', guests:'6', status:'confirmed' },
  { name:'Dr. Patel Family', date:'2026-05-28', time:'12:30 PM', guests:'5', status:'pending' },
];

// ---- CART STATE ----
let cart = [];
let activeMenuFilter = 'all';
let activeOrderFilter = 'all';

// ---- INIT ----
window.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderOrderGrid();
  renderTestimonials();
  renderAdminData();
  buildChart();
  initReveal();
  startTimer();
  setMinDate();
});

function setMinDate() {
  const d = document.getElementById('res-date');
  if (d) d.min = new Date().toISOString().split('T')[0];
}

// ---- MENU ----
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const items = activeMenuFilter === 'all' ? menuItems : menuItems.filter(i => i.category === activeMenuFilter);
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
      <div class="menu-card-header">
        <div class="menu-item-name">${item.emoji} ${item.name}</div>
        <div class="menu-item-price">₹${item.price.toLocaleString('en-IN')}</div>
      </div>
      <p class="menu-item-desc">${item.desc}</p>
      <div class="menu-item-tags">${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <button class="add-btn" onclick="addToCart(${item.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add to Order
      </button>
    </div>
  `).join('');
}

function filterMenu(btn, cat) {
  document.querySelectorAll('.menu-categories .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeMenuFilter = cat;
  renderMenu();
}

// ---- ORDER GRID ----
function renderOrderGrid() {
  const grid = document.getElementById('orderGrid');
  const items = activeOrderFilter === 'all' ? menuItems.filter(i=>i.category!=='drinks') : menuItems.filter(i=>i.category===activeOrderFilter);
  grid.innerHTML = items.map(item => `
    <div class="order-item-card">
      <span class="order-item-emoji">${item.emoji}</span>
      <div class="order-item-name">${item.name}</div>
      <div class="order-item-price">₹${item.price.toLocaleString('en-IN')}</div>
      <div class="order-item-desc">${item.desc.substring(0,70)}…</div>
      <button class="order-add-btn" onclick="addToCart(${item.id})">+ Add to Cart</button>
    </div>
  `).join('');
}

function filterOrder(btn, cat) {
  document.querySelectorAll('#order .menu-categories .cat-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeOrderFilter = cat;
  renderOrderGrid();
}

// ---- CART ----
function addToCart(id) {
  const item = menuItems.find(i=>i.id===id);
  if (!item) return;
  const existing = cart.find(c=>c.id===id);
  if (existing) { existing.qty++; } else { cart.push({...item, qty:1}); }
  renderCart();
  showToast(`✅ ${item.name} added to cart`);
}

function removeFromCart(id) { cart = cart.filter(c=>c.id!==id); renderCart(); }

function changeQty(id, delta) {
  const item = cart.find(c=>c.id===id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id); else renderCart();
}

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const badge = document.getElementById('cartBadge');
  const totalQty = cart.reduce((s,c)=>s+c.qty,0);
  const subtotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + 49 + tax;

  badge.textContent = totalQty;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.<br>Add something delicious!</div>';
  } else {
    cartItemsEl.innerHTML = cart.map(c=>`
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.emoji} ${c.name}</div>
          <div class="cart-item-price">₹${(c.price*c.qty).toLocaleString('en-IN')}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span style="font-size:14px;min-width:16px;text-align:center;">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('cartTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

// ---- TESTIMONIALS ----
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const double = [...testimonials, ...testimonials];
  track.innerHTML = double.map(t=>`
    <div class="testimonial-card">
      <div class="stars">${t.rating}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name.split(' ').map(n=>n[0]).join('').substring(0,2)}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-meta">${t.meta}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- ADMIN DATA ----
function renderAdminData() {
  const ordersBody = document.getElementById('ordersTableBody');
  ordersBody.innerHTML = orderData.map(o=>`
    <tr>
      <td style="color:var(--gold);">${o.id}</td>
      <td>${o.customer}</td>
      <td style="color:var(--muted);font-size:12px;">${o.items}</td>
      <td>${o.amount}</td>
      <td><span class="status-badge status-${o.status}">${o.status}</span></td>
    </tr>
  `).join('');

  const resBody = document.getElementById('reservationsTableBody');
  resBody.innerHTML = reservationData.map(r=>`
    <tr>
      <td>${r.name}</td>
      <td>${r.date}</td>
      <td>${r.time}</td>
      <td>${r.guests}</td>
      <td><span class="status-badge status-${r.status}">${r.status}</span></td>
    </tr>
  `).join('');

  const menuBody = document.getElementById('menuAdminBody');
  menuBody.innerHTML = menuItems.map(m=>`
    <tr>
      <td>${m.emoji} ${m.name}</td>
      <td style="text-transform:capitalize;">${m.category}</td>
      <td style="color:var(--gold);">₹${m.price.toLocaleString('en-IN')}</td>
      <td>
        <button style="background:transparent;border:1px solid var(--border);color:var(--muted);padding:4px 12px;cursor:pointer;font-size:10px;border-radius:2px;font-family:var(--font-body);letter-spacing:1px;margin-right:6px;" onclick="showToast('✏️ Edit mode coming soon')">Edit</button>
        <button style="background:transparent;border:1px solid rgba(200,67,42,0.3);color:#e06045;padding:4px 12px;cursor:pointer;font-size:10px;border-radius:2px;font-family:var(--font-body);letter-spacing:1px;" onclick="showToast('🗑 Item removed')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function buildChart() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const vals = [42, 67, 55, 78, 91, 130, 110];
  const max = Math.max(...vals);
  const chart = document.getElementById('adminChart');
  chart.innerHTML = days.map((d,i)=>`
    <div class="chart-bar-group">
      <div class="chart-bar" style="height:${(vals[i]/max)*100}%;" title="₹${(vals[i]*1000).toLocaleString('en-IN')}"></div>
      <div class="chart-bar-label">${d}</div>
    </div>
  `).join('');
}

// ---- TIMER ----
function startTimer() {
  function tick() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23,59,59,0);
    const diff = Math.max(0, end - now);
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const pad = n => String(n).padStart(2,'0');
    document.getElementById('th').textContent = pad(h);
    document.getElementById('tm').textContent = pad(m);
    document.getElementById('ts').textContent = pad(s);
  }
  tick(); setInterval(tick, 1000);
}

// ---- REVEAL ----
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- NAV SCROLL ----
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ---- MOBILE NAV ----
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ---- AUTH ----
function openAuth() { document.getElementById('authModal').classList.add('open'); }
function closeAuth() { document.getElementById('authModal').classList.remove('open'); }
function switchTab(btn, tab) {
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('signinForm').style.display = tab==='signin' ? 'flex' : 'none';
  document.getElementById('signupForm').style.display = tab==='signup' ? 'flex' : 'none';
}
function simulateLogin() {
  closeAuth();
  showToast('✅ Welcome to Ember & Oak!');
}

// ---- RESERVATION SUBMIT ----
function submitReservation() {
  const n = document.getElementById('res-name').value;
  const e = document.getElementById('res-email').value;
  const p = document.getElementById('res-phone').value;
  const g = document.getElementById('res-guests').value;
  const d = document.getElementById('res-date').value;
  const t = document.getElementById('res-time').value;
  if (!n||!e||!p||!g||!d||!t) { showToast('⚠️ Please fill all required fields'); return; }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(e)) { showToast('⚠️ Please enter a valid email'); return; }
  showToast('🎉 Reservation confirmed! Check your email for details.');
  reservationData.unshift({ name: n, date: d, time: t, guests: g.split(' ')[0], status:'pending' });
  renderAdminData();
  document.getElementById('res-name').value='';
  document.getElementById('res-email').value='';
  document.getElementById('res-phone').value='';
  document.getElementById('res-guests').value='';
  document.getElementById('res-date').value='';
  document.getElementById('res-time').value='';
  document.getElementById('res-special').value='';
}

// ---- CONTACT SUBMIT ----
function submitContact() {
  const n = document.getElementById('ct-name').value;
  const e = document.getElementById('ct-email').value;
  const m = document.getElementById('ct-msg').value;
  if (!n||!e||!m) { showToast('⚠️ Please fill all fields'); return; }
  showToast('📧 Message sent! We\'ll get back to you within 24 hours.');
  document.getElementById('ct-name').value='';
  document.getElementById('ct-email').value='';
  document.getElementById('ct-subject').value='';
  document.getElementById('ct-msg').value='';
}

// ---- CHECKOUT ----
function openCheckout() {
  if (cart.length === 0) { showToast('🛒 Your cart is empty'); return; }
  const addr = document.getElementById('deliveryAddress').value;
  const subtotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const tax = Math.round(subtotal*0.05);
  const total = subtotal + 49 + tax;
  document.getElementById('checkoutSummary').innerHTML = cart.map(c=>`
    <div class="checkout-item">
      <span>${c.emoji} ${c.name} ×${c.qty}</span>
      <span>₹${(c.price*c.qty).toLocaleString('en-IN')}</span>
    </div>
  `).join('') + `
    <div class="checkout-item"><span>Delivery</span><span>₹49</span></div>
    <div class="checkout-item"><span>GST (5%)</span><span>₹${tax.toLocaleString('en-IN')}</span></div>
  `;
  document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  if (addr) document.getElementById('co-addr').value = addr;
  document.getElementById('checkoutView').style.display='block';
  document.getElementById('orderSuccess').style.display='none';
  document.getElementById('checkoutCancelBtn').style.display='block';
  document.getElementById('checkoutModal').classList.add('open');
}

function placeOrder() {
  const name = document.getElementById('co-name').value;
  const addr = document.getElementById('co-addr').value;
  const phone = document.getElementById('co-phone').value;
  if (!name||!addr||!phone) { showToast('⚠️ Please fill all required fields'); return; }
  const orderId = '#EMB-' + Math.floor(2400 + Math.random()*100);
  document.getElementById('orderIdDisplay').textContent = orderId;
  document.getElementById('checkoutView').style.display='none';
  document.getElementById('orderSuccess').style.display='block';
  document.getElementById('checkoutCancelBtn').style.display='none';
  cart = []; renderCart();
  showToast('🔥 Order placed! Get ready to indulge.');
}

function closeCheckout() { document.getElementById('checkoutModal').classList.remove('open'); }

// ---- ADMIN ----
function openAdmin() { document.getElementById('adminOverlay').classList.add('open'); }
function closeAdmin() { document.getElementById('adminOverlay').classList.remove('open'); }
function adminSection(el, id) {
  document.querySelectorAll('.admin-nav-item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.admin-panel-section').forEach(s=>s.classList.remove('active'));
  document.getElementById('section-'+id).classList.add('active');
}

// ---- TOAST ----
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(()=>t.classList.remove('show'), 3500);
}

// Close modals on overlay click
document.getElementById('authModal').addEventListener('click', function(e) { if(e.target===this) closeAuth(); });
document.getElementById('checkoutModal').addEventListener('click', function(e) { if(e.target===this) closeCheckout(); });
document.getElementById('adminOverlay').addEventListener('click', function(e) { if(e.target===this) closeAdmin(); });

function scrollTo(selector) { document.querySelector(selector).scrollIntoView({behavior:'smooth'}); }
