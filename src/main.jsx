import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./react-theme.css";

const asset = (path) => path;

const products = [
  { id: 1, name: "Slim Fit Cotton Shirt", category: "Women", price: 26, oldPrice: 32, rating: 5, image: "/images/fashion-1/product/1.jpg", hover: "/images/fashion-1/product/1-1.jpg", badge: "new" },
  { id: 2, name: "Denim Trucker Jacket", category: "Men", price: 42, oldPrice: 54, rating: 4, image: "/images/fashion-1/product/2.jpg", hover: "/images/fashion-1/product/3.jpg", badge: "sale" },
  { id: 3, name: "Printed Summer Dress", category: "Women", price: 38, oldPrice: 48, rating: 5, image: "/images/fashion-1/product/4.jpg", hover: "/images/fashion-1/product/5.jpg" },
  { id: 4, name: "Casual Knit Hoodie", category: "Men", price: 34, oldPrice: 44, rating: 4, image: "/images/fashion-1/product/6.jpg", hover: "/images/fashion-1/product/7.jpg" },
  { id: 5, name: "Layered Maxi Skirt", category: "Women", price: 30, oldPrice: 39, rating: 5, image: "/images/fashion-1/product/8.jpg", hover: "/images/fashion-1/product/9.jpg", badge: "hot" },
  { id: 6, name: "Classic Linen Blazer", category: "Men", price: 58, oldPrice: 72, rating: 4, image: "/images/fashion-1/product/10.jpg", hover: "/images/fashion-1/product/11.jpg" },
  { id: 7, name: "Relaxed Everyday Tee", category: "Basics", price: 18, oldPrice: 24, rating: 5, image: "/images/fashion-1/product/12.jpg", hover: "/images/fashion-1/product/13.jpg" },
  { id: 8, name: "Soft Rib Co-ord Set", category: "Women", price: 46, oldPrice: 59, rating: 5, image: "/images/fashion-1/product/14.jpg", hover: "/images/fashion-1/product/15.jpg" }
];

const categories = ["All", "Women", "Men", "Basics"];

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash.replace("#", "") || "/");
  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return route;
}

function navigate(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-contact">
                <ul>
                  <li>Welcome to Our store Multikart</li>
                  <li><i className="ri-phone-fill" />Call Us: 123 - 456 - 7890</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <ul className="header-dropdown">
                <li><a href="#/wishlist"><i className="ri-heart-fill" /> Wishlist</a></li>
                <li><i className="ri-user-fill" /> My Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="react-header">
        <div className="container">
          <div className="main-menu">
            <div className="menu-left">
              <button className="icon-button d-lg-none" onClick={() => setOpen(true)} aria-label="Open menu">
                <i className="ri-menu-line" />
              </button>
              <div className="brand-logo">
                <button className="link-button" onClick={() => navigate("/")}>
                  <img src={asset("/images/logo.png")} className="img-fluid" alt="Multikart" />
                </button>
              </div>
            </div>
            <nav className={`react-nav ${open ? "open" : ""}`}>
              <button className="mobile-close d-lg-none" onClick={() => setOpen(false)} aria-label="Close menu">
                <i className="ri-close-line" />
              </button>
              <button onClick={() => navigate("/")}>Home</button>
              <button onClick={() => navigate("/shop")}>Shop</button>
              <button onClick={() => navigate("/product/1")}>Product</button>
              <button onClick={() => navigate("/cart")}>Cart</button>
            </nav>
            <div className="icon-nav">
              <ul>
                <li><button className="icon-button" aria-label="Search"><i className="ri-search-line" /></button></li>
                <li><button className="icon-button" aria-label="Settings"><i className="ri-equalizer-2-line" /></button></li>
                <li>
                  <button className="icon-button cart-icon" onClick={() => navigate("/cart")} aria-label="Cart">
                    <i className="ri-shopping-cart-line" />
                    {cartCount > 0 && <span>{cartCount}</span>}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="react-hero">
      <div className="hero-media">
        <img src={asset("/images/fashion-1/full-banner/1.png")} alt="" />
      </div>
      <div className="container hero-copy">
        <h4>Welcome to fashion</h4>
        <h1>Season essentials</h1>
        <p>Fresh silhouettes, daily staples, and polished layers for the new collection.</p>
        <button className="btn btn-solid" onClick={() => navigate("/shop")}>Shop now</button>
      </div>
    </section>
  );
}

function PromoBanners() {
  return (
    <section className="collection-banner section-b-space">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <button className="collection-banner react-banner" onClick={() => navigate("/shop")}>
              <img src={asset("/images/fashion-1/banner/1.png")} className="img-fluid" alt="Women's collection" />
              <div className="contain-banner banner-3">
                <div>
                  <h4>save 30%</h4>
                  <h2>women</h2>
                  <h6>new arrival</h6>
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-6">
            <button className="collection-banner react-banner" onClick={() => navigate("/shop")}>
              <img src={asset("/images/fashion-1/banner/2.png")} className="img-fluid" alt="Men's collection" />
              <div className="contain-banner banner-3">
                <div>
                  <h4>save 60%</h4>
                  <h2>men</h2>
                  <h6>new arrival</h6>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rating({ value }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <i key={index} className={index < value ? "ri-star-fill" : "ri-star-line"} />
      ))}
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="basic-product theme-product-1">
      <div className="overflow-hidden">
        <div className="img-wrapper">
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <button className="product-image-button" onClick={() => navigate(`/product/${product.id}`)}>
            <img src={asset(product.image)} className="img-fluid" alt={product.name} />
            <img src={asset(product.hover)} className="img-fluid hover-img" alt="" />
          </button>
          <div className="cart-info">
            <button onClick={() => addToCart(product)} aria-label="Add to cart"><i className="ri-shopping-cart-line" /></button>
            <button aria-label="Add to wishlist"><i className="ri-heart-line" /></button>
            <button onClick={() => navigate(`/product/${product.id}`)} aria-label="View product"><i className="ri-eye-line" /></button>
          </div>
        </div>
        <div className="product-detail">
          <div>
            <div className="brand-w-color">
              <span>{product.category}</span>
            </div>
            <button className="product-title" onClick={() => navigate(`/product/${product.id}`)}>{product.name}</button>
            <Rating value={product.rating} />
            <h4>
              ${product.price}.00 <del>${product.oldPrice}.00</del>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ addToCart, initialCategory = "All" }) {
  const [category, setCategory] = useState(initialCategory);
  const visibleProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  return (
    <section className="section-b-space">
      <div className="container">
        <div className="title1">
          <h4>special offer</h4>
          <h2 className="title-inner1">top collection</h2>
        </div>
        <div className="product-para">
          <p>Browse a React-rendered product collection using the original Multikart assets and styling.</p>
        </div>
        <div className="react-filter">
          {categories.map((item) => (
            <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {visibleProducts.map((product) => (
            <div className="col-xl-3 col-md-4 col-6" key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceStrip() {
  const services = [
    ["ri-truck-line", "free shipping", "free shipping world wide"],
    ["ri-customer-service-2-line", "24 X 7 service", "online service for customer"],
    ["ri-exchange-dollar-line", "festival offer", "new online special festival offer"]
  ];

  return (
    <section className="service border-section small-section">
      <div className="container">
        <div className="row">
          {services.map(([icon, title, text]) => (
            <div className="col-md-4 service-block" key={title}>
              <div className="media">
                <i className={`${icon} react-service-icon`} />
                <div className="media-body">
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="instagram ratio_square">
      <div className="container-fluid">
        <div className="row">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="col px-0" key={index}>
              <a className="instagram-box" href="https://instagram.com/" target="_blank" rel="noreferrer">
                <img src={asset(`/images/fashion-1/instagram/${index + 1}.png`)} className="bg-img" alt="" />
                <div className="overlay"><i className="ri-instagram-fill" /></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-style-1">
      <section className="section-b-space dark-layout">
        <div className="container">
          <div className="row footer-theme g-md-5 g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <img src={asset("/images/logo-white.png")} className="img-fluid" alt="Multikart" />
              </div>
              <p>Multikart React keeps the theme assets while moving the storefront into component-driven UI.</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4>Categories</h4>
              <ul>
                <li><button onClick={() => navigate("/shop")}>Women</button></li>
                <li><button onClick={() => navigate("/shop")}>Men</button></li>
                <li><button onClick={() => navigate("/shop")}>Basics</button></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4>Store</h4>
              <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                <li><button onClick={() => navigate("/cart")}>Cart</button></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li><i className="ri-map-pin-line" /> Multikart Store, New York</li>
                <li><i className="ri-phone-line" /> 123 - 456 - 7890</li>
                <li><i className="ri-mail-line" /> support@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="sub-footer dark-subfooter">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="footer-end"><p>2026 Multikart React</p></div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 text-end">
              <img src={asset("/images/payment.png")} className="img-fluid" alt="Payment methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ addToCart }) {
  return (
    <>
      <Hero />
      <PromoBanners />
      <ProductGrid addToCart={addToCart} />
      <ServiceStrip />
      <InstagramStrip />
    </>
  );
}

function ShopPage({ addToCart }) {
  return (
    <>
      <PageHeader title="Shop" subtitle="React category view" />
      <ProductGrid addToCart={addToCart} />
    </>
  );
}

function ProductPage({ route, addToCart }) {
  const id = Number(route.split("/").pop()) || 1;
  const product = products.find((item) => item.id === id) || products[0];
  return (
    <>
      <PageHeader title={product.name} subtitle={product.category} />
      <section className="section-b-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="react-product-media">
                <img src={asset(product.image)} className="img-fluid" alt={product.name} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-right">
                <h2>{product.name}</h2>
                <Rating value={product.rating} />
                <h3>${product.price}.00 <del>${product.oldPrice}.00</del></h3>
                <p>
                  A converted React product view using the original theme typography, product imagery, and button classes.
                  This component is ready to connect to real catalog data.
                </p>
                <div className="product-buttons">
                  <button className="btn btn-solid" onClick={() => addToCart(product)}>Add to cart</button>
                  <button className="btn btn-outline" onClick={() => navigate("/shop")}>Continue shopping</button>
                </div>
                <div className="border-product">
                  <h6 className="product-title">Product details</h6>
                  <p>Category: {product.category}</p>
                  <p>Availability: In stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CartPage({ cart, updateQty, removeItem }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <>
      <PageHeader title="Cart" subtitle={`${cart.length} item${cart.length === 1 ? "" : "s"}`} />
      <section className="cart-section section-b-space">
        <div className="container">
          {cart.length === 0 ? (
            <div className="react-empty">
              <i className="ri-shopping-cart-line" />
              <h3>Your cart is empty</h3>
              <button className="btn btn-solid" onClick={() => navigate("/shop")}>Shop collection</button>
            </div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table cart-table">
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td><img src={asset(item.image)} className="img-fluid" alt={item.name} /></td>
                        <td>{item.name}</td>
                        <td>${item.price}.00</td>
                        <td>
                          <div className="qty-box">
                            <div className="input-group">
                              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                              <input className="form-control" value={item.qty} readOnly />
                              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                            </div>
                          </div>
                        </td>
                        <td>${item.price * item.qty}.00</td>
                        <td><button className="icon-button" onClick={() => removeItem(item.id)}><i className="ri-delete-bin-line" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="react-cart-total">
                <h3>Subtotal: ${subtotal}.00</h3>
                <button className="btn btn-solid">Checkout</button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="page-title"><h2>{title}</h2></div>
          </div>
          <div className="col-sm-6">
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><button onClick={() => navigate("/")}>Home</button></li>
                <li className="breadcrumb-item active">{subtitle}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const route = useHashRoute();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((items) => {
      const current = items.find((item) => item.id === product.id);
      if (current) {
        return items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...items, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) {
      setCart((items) => items.filter((item) => item.id !== id));
      return;
    }
    setCart((items) => items.map((item) => item.id === id ? { ...item, qty } : item));
  };

  const removeItem = (id) => setCart((items) => items.filter((item) => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  let page = <HomePage addToCart={addToCart} />;
  if (route === "/shop") page = <ShopPage addToCart={addToCart} />;
  if (route.startsWith("/product")) page = <ProductPage route={route} addToCart={addToCart} />;
  if (route === "/cart") page = <CartPage cart={cart} updateQty={updateQty} removeItem={removeItem} />;

  return (
    <>
      <Header cartCount={cartCount} />
      {page}
      <Footer />
      <button className="tap-top react-tap-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <i className="ri-arrow-up-double-line" />
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
