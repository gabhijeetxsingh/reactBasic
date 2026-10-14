import React from 'react';
import ProductCard from './ProductCard';

function Featured({ products, onOpen, onAdd, onShop }) {
  return (
    <section className="section featured">
      <div className="section__header">
        <h2>Featured for the season</h2>
        <p>Three pieces that carry the collection—durable, light, and ready daily.</p>
      </div>
      <div className="product-grid product-grid--featured">
        {products.map(function (product) {
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
      <div className="section__footer">
        <button type="button" className="btn btn--primary" onClick={onShop}>
          View all products
        </button>
      </div>
    </section>
  );
}

export default Featured;
