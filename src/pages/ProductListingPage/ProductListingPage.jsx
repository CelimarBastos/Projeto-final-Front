import React, { useState } from 'react';
import Layout from '../Layout';
import { Section } from '../../components/Section/Section';
import { ProductListing } from '../../components/ProductListing/ProductListing';
import { FilterGroup } from '../../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

export function ProductListingPage() {
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({});

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

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Layout>
      <div className="product-listing-page">
        <div className="product-page-container">
          <aside className="product-sidebar">
            {/* Sort Section */}
            <div className="sort-section">
              <label htmlFor="sort-select" className="sort-label">Ordenar por</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="default">Padrão</option>
                <option value="price-low">Menor preço</option>
                <option value="price-high">Maior preço</option>
              </select>
            </div>

            {/* Filter Section */}
            <div className="filter-section">
              <h3 className="filter-title">Filtrar por</h3>
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { text: 'Eletrônicos', value: 'eletronicos' },
                  { text: 'Roupas', value: 'roupas' },
                  { text: 'Calçados', value: 'calcados' },
                ]}
              />
              <FilterGroup
                title="Preço"
                inputType="radio"
                options={[
                  { text: 'Até R$ 50', value: '0-50' },
                  { text: 'R$ 50 - R$ 100', value: '50-100' },
                  { text: 'R$ 100 - R$ 200', value: '100-200' },
                  { text: 'Acima de R$ 200', value: '200-plus' },
                ]}
              />
              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={[
                  { text: 'Marca A', value: 'marca-a' },
                  { text: 'Marca B', value: 'marca-b' },
                  { text: 'Marca C', value: 'marca-c' },
                ]}
              />
            </div>
          </aside>

          <main className="product-main">
            <Section title={`${products.length} Produtos encontrados`} titleAlign="left">
              <ProductListing products={products} />
            </Section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
