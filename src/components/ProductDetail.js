import React from 'react';

function ProductDetail({ product, onAdd, onBack }) {
  if (!product) {
    return (
      <section className="section">
        <p>Product not found.</p>
        <button type="button" className="btn btn--primary" onClick={onBack}>
          Back to shop
        </button>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <button type="button" className="back-link" onClick={onBack}>
        ← Back to shop
      </button>
      <div className="product-detail__layout">
        <div className="product-detail__media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail__info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__price">${product.price}</p>
          <p className="product-detail__desc">{product.description}</p>
          <div className="product-detail__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onAdd(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
