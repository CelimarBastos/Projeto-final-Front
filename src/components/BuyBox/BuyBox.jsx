import './BuyBox.css';

export function BuyBox({ 
  name, 
  reference, 
  stars, 
  rating, 
  price, 
  priceDiscount, 
  description, 
  children 
}) {
  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{name}</h1>
      <p className="buy-box-reference">Ref: {reference}</p>

      <div className="buy-box-rating">
        <div className="rating-stars">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1.5L10.4 6.2H15.5L11.5 9.8L13 14.5L8 11L3 14.5L4.5 9.8L0.5 6.2H5.6L8 1.5Z" />
          </svg>
          <span className="rating-number">{stars}</span>
        </div>
        <p className="rating-text">{rating} avaliações</p>
      </div>

      <div className="buy-box-price">
        {priceDiscount ? (
          <>
            <span className="price-original">R$ {price.toFixed(2)}</span>
            <span className="price-discount">R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className="price-main">R$ {price.toFixed(2)}</span>
        )}
      </div>

      <p className="buy-box-description">{description}</p>

      {children && <div className="buy-box-options">{children}</div>}

      <button className="buy-box-button">COMPRAR</button>
    </div>
  );
}
