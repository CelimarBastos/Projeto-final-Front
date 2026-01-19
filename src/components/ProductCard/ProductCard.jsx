import './ProductCard.css';

export function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} width="292" height="321" />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-price">
          {priceDiscount ? (
            <>
              <span className="price-original">R$ {price.toFixed(2)}</span>
              <span className="price-discount">R$ {priceDiscount.toFixed(2)}</span>
            </>
          ) : (
            <span className="price">R$ {price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
