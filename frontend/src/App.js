import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [news, setNews] = useState([]);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  // Translations
  const t = {
    fr: {
      title: "Cosmetech Innovations",
      subtitle: "Votre partenaire éco-responsable en République Centrafricaine",
      home: "Accueil",
      products: "Produits",
      services: "Services",
      news: "Actualités",
      contact: "Contact",
      education: "Éducation",
      cart: "Panier",
      cosmetics: "Cosmétiques",
      recycled: "Objets Recyclés",
      addToCart: "Ajouter au Panier",
      viewCart: "Voir le Panier",
      checkout: "Commander",
      total: "Total",
      orderNow: "Commander Maintenant",
      name: "Nom",
      phone: "Téléphone",
      email: "Email",
      paymentMethod: "Méthode de Paiement",
      orangeMoney: "Orange Money",
      airtelMoney: "Airtel Money",
      cleaningService: "Service de Nettoyage",
      recyclingService: "Service de Recyclage",
      webCreation: "Création Web",
      ecoTips: "Conseils Écologiques",
      aboutEcology: "L'importance du recyclage pour notre environnement",
      contactUs: "Contactez-nous",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      ourPhone: "Notre téléphone",
      ourEmail: "Notre email"
    },
    sg: {
      title: "Cosmetech Innovations",
      subtitle: "Camarade ti mbeni na République Centrafricaine",
      home: "Dakotere",
      products: "Ba Products",
      services: "Ba Services",
      news: "Ba Nouvelles",
      contact: "Contact",
      education: "Ba Leçons",
      cart: "Panier",
      cosmetics: "Ba Cosmétiques",
      recycled: "Ba Objets Recyclés",
      addToCart: "Fa na Panier",
      viewCart: "Yeke na Panier",
      checkout: "Commander",
      total: "Total",
      orderNow: "Commander Oko",
      name: "Name",
      phone: "Téléphone",
      email: "Email",
      paymentMethod: "Méthode ti Payment",
      orangeMoney: "Orange Money",
      airtelMoney: "Airtel Money",
      cleaningService: "Service ti Nettoyage",
      recyclingService: "Service ti Recyclage",
      webCreation: "Création Web",
      ecoTips: "Ba Conseils Écologiques",
      aboutEcology: "Importance ti recyclage na environnement ti e",
      contactUs: "Contact e",
      subject: "Sujet",
      message: "Message",
      send: "Goya",
      ourPhone: "Téléphone ti e",
      ourEmail: "Email ti e"
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchNews();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/products`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/news`);
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: quantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const submitOrder = async (orderData) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      if (response.ok) {
        alert(currentLang === 'fr' ? 'Commande envoyée avec succès!' : 'Order ti goya na success!');
        setCart([]);
        setShowCart(false);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Error na envoi');
    }
  };

  const submitMessage = async (messageData) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });
      
      if (response.ok) {
        alert(currentLang === 'fr' ? 'Message envoyé avec succès!' : 'Message ti goya na success!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Error na envoi');
    }
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t[currentLang].title}</h1>
          <p className="hero-subtitle">{t[currentLang].subtitle}</p>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('products')}
          >
            {t[currentLang].products}
          </button>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>{t[currentLang].cosmetics}</h3>
          <p>Produits naturels au karité et coco</p>
        </div>
        <div className="feature-card">
          <h3>{t[currentLang].recycled}</h3>
          <p>Objets créatifs et durables</p>
        </div>
        <div className="feature-card">
          <h3>{t[currentLang].services}</h3>
          <p>Nettoyage, recyclage, web</p>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => {
    const cosmeticProducts = products.filter(p => p.category === 'cosmetics');
    const recycledProducts = products.filter(p => p.category === 'recycled');

    return (
      <div className="products-page">
        <h2>{t[currentLang].cosmetics}</h2>
        <div className="product-grid">
          {cosmeticProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <h2>{t[currentLang].recycled}</h2>
        <div className="product-grid">
          {recycledProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{currentLang === 'fr' ? product.name : product.name_sango}</h3>
        <p>{currentLang === 'fr' ? product.description : product.description_sango}</p>
        <p className="eco-info">{currentLang === 'fr' ? product.eco_info : product.eco_info_sango}</p>
        <div className="product-footer">
          <span className="price">{product.price} FCFA</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            {t[currentLang].addToCart}
          </button>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="services-page">
      <div className="service-card">
        <h3>{t[currentLang].cleaningService}</h3>
        <p>Services de nettoyage écologique pour entreprises et particuliers</p>
        <button className="contact-btn" onClick={() => setCurrentPage('contact')}>
          {t[currentLang].contactUs}
        </button>
      </div>
      <div className="service-card">
        <h3>{t[currentLang].recyclingService}</h3>
        <p>Collecte et transformation de déchets en objets utiles</p>
        <button className="contact-btn" onClick={() => setCurrentPage('contact')}>
          {t[currentLang].contactUs}
        </button>
      </div>
      <div className="service-card">
        <h3>{t[currentLang].webCreation}</h3>
        <p>Création de sites web éco-responsables pour votre entreprise</p>
        <button className="contact-btn" onClick={() => setCurrentPage('contact')}>
          {t[currentLang].contactUs}
        </button>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="news-page">
      {news.map(article => (
        <div key={article.id} className="news-card">
          <img src={article.image_url} alt={article.title} className="news-image" />
          <div className="news-content">
            <h3>{currentLang === 'fr' ? article.title : article.title_sango}</h3>
            <p>{currentLang === 'fr' ? article.content : article.content_sango}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      customer_name: '',
      customer_email: '',
      customer_phone: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      submitMessage(formData);
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        subject: '',
        message: ''
      });
    };

    return (
      <div className="contact-page">
        <div className="contact-info">
          <h3>{t[currentLang].contactUs}</h3>
          <p>{t[currentLang].ourPhone}: 0023672946137</p>
          <p>{t[currentLang].ourEmail}: cosmetechinnov@gmail.com</p>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder={t[currentLang].name}
            value={formData.customer_name}
            onChange={(e) => setFormData({...formData, customer_name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder={t[currentLang].email}
            value={formData.customer_email}
            onChange={(e) => setFormData({...formData, customer_email: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder={t[currentLang].phone}
            value={formData.customer_phone}
            onChange={(e) => setFormData({...formData, customer_phone: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder={t[currentLang].subject}
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            required
          />
          <textarea
            placeholder={t[currentLang].message}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          <button type="submit" className="submit-btn">{t[currentLang].send}</button>
        </form>
      </div>
    );
  };

  const EducationPage = () => (
    <div className="education-page">
      <h2>{t[currentLang].ecoTips}</h2>
      <div className="edu-card">
        <h3>{t[currentLang].aboutEcology}</h3>
        <p>Le recyclage permet de réduire les déchets et protéger notre environnement centrafricain.</p>
        <img 
          src="https://images.unsplash.com/photo-1691430597165-4ac5e9d375e0" 
          alt="Recyclage" 
          className="edu-image"
        />
      </div>
    </div>
  );

  const CartModal = () => {
    const [orderForm, setOrderForm] = useState({
      customer_name: '',
      customer_phone: '',
      customer_email: '',
      payment_method: 'orange_money'
    });
    const [paymentStep, setPaymentStep] = useState('form'); // 'form', 'processing', 'confirmation'
    const [paymentRef, setPaymentRef] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleOrder = async (e) => {
      e.preventDefault();
      setPaymentStep('processing');
      
      try {
        // Initiate mobile payment
        const paymentData = {
          amount: getTotalPrice(),
          phone: orderForm.customer_phone,
          provider: orderForm.payment_method,
          customer_name: orderForm.customer_name,
          customer_email: orderForm.customer_email,
          order_items: cart.map(item => ({
            product_id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))
        };

        const response = await fetch(`${BACKEND_URL}/api/payment/initiate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        });

        if (response.ok) {
          const result = await response.json();
          setPaymentRef(result.payment_ref);
          setPaymentStep('confirmation');
        } else {
          throw new Error('Payment initiation failed');
        }
      } catch (error) {
        console.error('Payment error:', error);
        alert(currentLang === 'fr' ? 'Erreur lors du paiement' : 'Error na payment');
        setPaymentStep('form');
      }
    };

    const confirmPayment = async () => {
      try {
        const confirmationData = {
          payment_ref: paymentRef,
          amount: getTotalPrice(),
          phone: orderForm.customer_phone,
          provider: orderForm.payment_method,
          customer_name: orderForm.customer_name,
          customer_email: orderForm.customer_email,
          order_items: cart.map(item => ({
            product_id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))
        };

        const response = await fetch(`${BACKEND_URL}/api/payment/confirm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(confirmationData),
        });

        const result = await response.json();
        
        if (result.success) {
          setPaymentStatus('success');
          alert(currentLang === 'fr' ? 'Paiement confirmé avec succès!' : 'Payment ti confirm na success!');
          setCart([]);
          setShowCart(false);
          setPaymentStep('form');
          setOrderForm({
            customer_name: '',
            customer_phone: '',
            customer_email: '',
            payment_method: 'orange_money'
          });
        } else {
          setPaymentStatus('failed');
          alert(result.message || (currentLang === 'fr' ? 'Échec du paiement' : 'Payment ti fail'));
          setPaymentStep('form');
        }
      } catch (error) {
        console.error('Payment confirmation error:', error);
        alert(currentLang === 'fr' ? 'Erreur lors de la confirmation' : 'Error na confirmation');
        setPaymentStep('form');
      }
    };

    if (!showCart) return null;

    return (
      <div className="cart-modal">
        <div className="cart-content">
          <div className="cart-header">
            <h2>{t[currentLang].cart}</h2>
            <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
          </div>
          
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image_url} alt={item.name} />
                <div className="item-details">
                  <h4>{currentLang === 'fr' ? item.name : item.name_sango}</h4>
                  <p>{item.price} FCFA × {item.quantity}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <h3>{t[currentLang].total}: {getTotalPrice()} FCFA</h3>
          </div>
          
          <form onSubmit={handleOrder} className="order-form">
            <input
              type="text"
              placeholder={t[currentLang].name}
              value={orderForm.customer_name}
              onChange={(e) => setOrderForm({...orderForm, customer_name: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder={t[currentLang].phone}
              value={orderForm.customer_phone}
              onChange={(e) => setOrderForm({...orderForm, customer_phone: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder={t[currentLang].email}
              value={orderForm.customer_email}
              onChange={(e) => setOrderForm({...orderForm, customer_email: e.target.value})}
              required
            />
            <select
              value={orderForm.payment_method}
              onChange={(e) => setOrderForm({...orderForm, payment_method: e.target.value})}
            >
              <option value="orange_money">{t[currentLang].orangeMoney}</option>
              <option value="airtel_money">{t[currentLang].airtelMoney}</option>
            </select>
            <button type="submit" className="order-btn">{t[currentLang].orderNow}</button>
          </form>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>{t[currentLang].title}</h1>
          </div>
          
          <nav className="nav">
            <button 
              className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('home')}
            >
              {t[currentLang].home}
            </button>
            <button 
              className={currentPage === 'products' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('products')}
            >
              {t[currentLang].products}
            </button>
            <button 
              className={currentPage === 'services' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('services')}
            >
              {t[currentLang].services}
            </button>
            <button 
              className={currentPage === 'news' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('news')}
            >
              {t[currentLang].news}
            </button>
            <button 
              className={currentPage === 'contact' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('contact')}
            >
              {t[currentLang].contact}
            </button>
            <button 
              className={currentPage === 'education' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('education')}
            >
              {t[currentLang].education}
            </button>
          </nav>
          
          <div className="header-actions">
            <button 
              className="cart-btn"
              onClick={() => setShowCart(true)}
            >
              {t[currentLang].cart} ({cart.length})
            </button>
            <button 
              className="lang-btn"
              onClick={() => setCurrentLang(currentLang === 'fr' ? 'sg' : 'fr')}
            >
              {currentLang === 'fr' ? 'Sango' : 'Français'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'education' && <EducationPage />}
      </main>

      {/* Cart Modal */}
      <CartModal />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Cosmetech Innovations - République Centrafricaine</p>
        <p>{t[currentLang].ourPhone}: 0023672946137 | Email: cosmetechinnov@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;