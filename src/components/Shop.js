import React, { useState } from 'react';
import ProductCard from './ProductCard';

function Shop({ products, onOpen, onAdd }) {
  const categories = ['All'].concat(
    products
      .map(function (p) {
        return p.category;
      })
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
  );

  const [filter, setFilter] = useState('All');

  const visible =
    filter === 'All'
      ? products
      : products.filter(function (p) {
          return p.category === filter;
        });

  return (
    <section className="section shop">
      <div className="section__header section__header--shop">
        <div>
          <p className="eyebrow">Shop</p>
          <h2>The full collection</h2>
          <p>Filter by category and build your kit.</p>
        </div>
        <div className="filter-bar" role="group" aria-label="Filter by category">
          {categories.map(function (category) {
            return (
              <button
                key={category}
                type="button"
                className={
                  filter === category ? 'filter-bar__chip is-active' : 'filter-bar__chip'
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <div className="product-grid">
        {visible.map(function (product) {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpen}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Shop;
