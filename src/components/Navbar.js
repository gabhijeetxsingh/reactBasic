import React from 'react';

function Navbar({ page, cartCount, onNavigate }) {
  return (
    <header className="nav">
      <button
        type="button"
        className="nav__brand"
        onClick={() => onNavigate('home')}
        aria-label="Northline home"
      >
        NORTHLINE
      </button>

      <nav className="nav__links" aria-label="Primary">
        <button
          type="button"
          className={page === 'home' ? 'is-active' : ''}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={page === 'shop' || page === 'product' ? 'is-active' : ''}
          onClick={() => onNavigate('shop')}
        >
          Shop
        </button>
        <button
          type="button"
          className={page === 'cart' ? 'is-active' : ''}
          onClick={() => onNavigate('cart')}
        >
          Cart
          {cartCount > 0 ? (
            <span className="nav__badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          ) : null}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
