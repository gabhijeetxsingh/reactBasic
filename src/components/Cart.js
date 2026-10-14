import React from 'react';

function Cart({ items, onUpdateQty, onRemove, onShop }) {
  const total = items.reduce(function (sum, item) {
    return sum + item.price * item.qty;
  }, 0);

  if (items.length === 0) {
    return (
      <section className="section cart cart--empty">
        <p className="eyebrow">Cart</p>
        <h2>Your cart is empty</h2>
        <p>Browse the collection and add pieces you want to keep close.</p>
        <button type="button" className="btn btn--primary" onClick={onShop}>
          Continue shopping
        </button>
      </section>
    );
  }

  return (
    <section className="section cart">
      <div className="section__header">
        <p className="eyebrow">Cart</p>
        <h2>Ready when you are</h2>
        <p>Review quantities, then check out when it feels right.</p>
      </div>

      <ul className="cart__list">
        {items.map(function (item) {
          return (
            <li key={item.id} className="cart__row">
              <img src={item.image} alt="" className="cart__thumb" />
              <div className="cart__info">
                <h3>{item.name}</h3>
                <p className="cart__cat">{item.category}</p>
                <p className="cart__unit">${item.price}</p>
              </div>
              <div className="cart__qty">
                <button
                  type="button"
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => onUpdateQty(item.id, item.qty - 1)}
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.name}`}
                  onClick={() => onUpdateQty(item.id, item.qty + 1)}
                >
                  +
                </button>
              </div>
              <p className="cart__line">${item.price * item.qty}</p>
              <button
                type="button"
                className="cart__remove"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>

      <div className="cart__summary">
        <div>
          <p className="cart__summary-label">Subtotal</p>
          <p className="cart__summary-total">${total}</p>
        </div>
        <button type="button" className="btn btn--primary" disabled>
          Checkout coming soon
        </button>
      </div>
    </section>
  );
}

export default Cart;
