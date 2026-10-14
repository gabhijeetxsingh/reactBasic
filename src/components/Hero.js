import React from 'react';

function Hero({ onShop }) {
  return (
    <section className="hero" aria-label="Featured collection">
      <div
        className="hero__media"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
        }}
        role="img"
        aria-label="Northline essentials displayed in a sunlit studio"
      />
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__brand">NORTHLINE</p>
        <h1 className="hero__title">Essentials built for the long route</h1>
        <p className="hero__lede">
          Outerwear, bags, and everyday pieces designed to move with you—
          from early trains to open trails.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onShop}>
            Shop the collection
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onShop}
          >
            Explore new arrivals
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
