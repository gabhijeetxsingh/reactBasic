import React from 'react';

function ProductCard({ product, onOpen, onAdd }) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__media"
        onClick={() => onOpen(product.id)}
        aria-label={`View ${product.name}`}
      >
        <img src={product.image} alt="" loading="lazy" />
        <span className="product-card__category">{product.category}</span>
      </button>
      <div className="product-card__body">
        <div className="product-card__meta">
          <h3>
            <button type="button" onClick={() => onOpen(product.id)}>
              {product.name}
            </button>
          </h3>
          <p className="product-card__price">${product.price}</p>
        </div>
        <button
          type="button"
          className="btn btn--small"
          onClick={() => onAdd(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
