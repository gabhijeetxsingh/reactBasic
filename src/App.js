import React, { useState, useEffect } from 'react';
import './App.css';
import products from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [selectedId, setSelectedId] = useState(null);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(
    function () {
      if (!toast) {
        return undefined;
      }
      var timer = setTimeout(function () {
        setToast(null);
      }, 2200);
      return function () {
        clearTimeout(timer);
      };
    },
    [toast]
  );

  function navigate(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openProduct(id) {
    setSelectedId(id);
    navigate('product');
  }

  function addToCart(product) {
    setCart(function (prev) {
      var existing = prev.find(function (item) {
        return item.id === product.id;
      });
      if (existing) {
        return prev.map(function (item) {
          if (item.id === product.id) {
            return Object.assign({}, item, { qty: item.qty + 1 });
          }
          return item;
        });
      }
      return prev.concat([Object.assign({}, product, { qty: 1 })]);
    });
    setToast(product.name + ' added to cart');
  }

  function updateQty(id, qty) {
    if (qty < 1) {
      removeFromCart(id);
      return;
    }
    setCart(function (prev) {
      return prev.map(function (item) {
        if (item.id === id) {
          return Object.assign({}, item, { qty: qty });
        }
        return item;
      });
    });
  }

  function removeFromCart(id) {
    setCart(function (prev) {
      return prev.filter(function (item) {
        return item.id !== id;
      });
    });
  }

  var cartCount = cart.reduce(function (sum, item) {
    return sum + item.qty;
  }, 0);

  var selectedProduct = products.find(function (p) {
    return p.id === selectedId;
  });

  var featured = products.filter(function (p) {
    return p.featured;
  });

  return (
    <div className="app">
      <Navbar page={page} cartCount={cartCount} onNavigate={navigate} />

      <main>
        {page === 'home' ? (
          <React.Fragment>
            <Hero onShop={function () { navigate('shop'); }} />
            <Featured
              products={featured}
              onOpen={openProduct}
              onAdd={addToCart}
              onShop={function () { navigate('shop'); }}
            />
          </React.Fragment>
        ) : null}

        {page === 'shop' ? (
          <Shop products={products} onOpen={openProduct} onAdd={addToCart} />
        ) : null}

        {page === 'product' ? (
          <ProductDetail
            product={selectedProduct}
            onAdd={addToCart}
            onBack={function () { navigate('shop'); }}
          />
        ) : null}

        {page === 'cart' ? (
          <Cart
            items={cart}
            onUpdateQty={updateQty}
            onRemove={removeFromCart}
            onShop={function () { navigate('shop'); }}
          />
        ) : null}
      </main>

      <Footer />

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}
    </div>
  );
}

export default App;
