import Layout from '../Layout';
import { Gallery } from '../../components/Gallery/Gallery';
import { Section } from '../../components/Section/Section';
import { ProductListing } from '../../components/ProductListing/ProductListing';
import './HomePage.css';

export function HomePage() {
  const galleryImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
    { src: '/home-slide-5.jpeg' },
    { src: '/home-slide-6.jpeg' },
    { src: '/home-slide-7.jpeg' },
    { src: '/home-slide-8.jpeg' },
  ];

  const collectionImages = [
    { src: '/collection-1.png', alt: 'Collection 1' },
    { src: '/collection-2.png', alt: 'Collection 2' },
    { src: '/collection-3.png', alt: 'Collection 3' },
  ];

  const products = [
    { name: 'Produto 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Produto 2', image: '/product-thumb-2.jpeg', price: 49.9 },
    { name: 'Produto 3', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: 99.9 },
    { name: 'Produto 4', image: '/product-thumb-4.jpeg', price: 200 },
    { name: 'Produto 5', image: '/product-thumb-5.jpeg', price: 75, priceDiscount: 59.9 },
    { name: 'Produto 6', image: '/product-thumb-1.jpeg', price: 120 },
    { name: 'Produto 7', image: '/product-thumb-2.jpeg', price: 180, priceDiscount: 139.9 },
    { name: 'Produto 8', image: '/product-thumb-3.jpeg', price: 99.9 },
  ];

  return (
    <Layout>
      <div className="home-page">
        {/* Gallery Section */}
        <section className="home-gallery-section">
          <Gallery
            images={galleryImages}
            width={1440}
            height={681}
          />
        </section>

        {/* Collections Section */}
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections-grid">
            {collectionImages.map((collection, index) => (
              <div key={index} className="collection-item">
                <img src={collection.src} alt={collection.alt} />
              </div>
            ))}
          </div>
        </Section>

        {/* Products Section */}
        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}
