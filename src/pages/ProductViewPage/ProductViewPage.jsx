import Layout from '../Layout';
import { Gallery } from '../../components/Gallery/Gallery';
import { BuyBox } from '../../components/BuyBox/BuyBox';
import { ProductOptions } from '../../components/ProductOptions/ProductOptions';
import { Section } from '../../components/Section/Section';
import { ProductListing } from '../../components/ProductListing/ProductListing';
import './ProductViewPage.css';

export function ProductViewPage() {
  const productImages = [
    { src: '/product-image-1.jpeg' },
    { src: '/product-image-2.jpeg' },
    { src: '/product-image-3.jpeg' },
    { src: '/product-image-4.jpeg' },
    { src: '/product-image-5.jpeg' },
  ];

  const relatedProducts = [
    { name: 'Produto Relacionado 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Produto Relacionado 2', image: '/product-thumb-2.jpeg', price: 49.9 },
    { name: 'Produto Relacionado 3', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: 99.9 },
    { name: 'Produto Relacionado 4', image: '/product-thumb-4.jpeg', price: 200 },
  ];

  return (
    <Layout>
      <div className="product-view-page">
        <div className="product-details">
          <Gallery
            images={productImages}
            width={700}
            height={570}
            radius="4px"
            showThumbs
          />

          <BuyBox
            name="Produto Premium"
            reference="PROD-12345"
            stars="4.5"
            rating="128"
            price={299.90}
            priceDiscount={199.90}
            description="Este é um produto de alta qualidade com características premium. Perfeito para quem busca o melhor custo-benefíficio. Verifique os tamanhos e cores disponíveis."
          >
            <div>
              <p className="product-option-label">Tamanho</p>
              <ProductOptions
                options={['P', 'M', 'G', 'GG']}
                shape="square"
                type="text"
                radius="4px"
              />
            </div>
            <div>
              <p className="product-option-label">Cor</p>
              <ProductOptions
                options={['#000000', '#FFFFFF', '#FF0000', '#0000FF']}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={relatedProducts} />
        </Section>
      </div>
    </Layout>
  );
}
