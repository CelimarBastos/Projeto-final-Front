// Dados de exemplo para produtos
export const mockProducts = [
  {
    id: 1,
    name: 'Camisa Premium Branca',
    image: '/product-thumb-1.jpeg',
    price: 200,
    priceDiscount: 149.9,
    reference: 'CAMISETA-001',
    stars: 4.5,
    rating: 128,
    description: 'Camisa de alta qualidade em algodão 100%, confortável e durável. Perfeita para uso diário.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
      { src: '/product-image-3.jpeg' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
  },
  {
    id: 2,
    name: 'Calça Jeans Azul',
    image: '/product-thumb-2.jpeg',
    price: 49.9,
    reference: 'CALCA-002',
    stars: 4,
    rating: 95,
    description: 'Calça jeans clássica com ajuste perfeito. Ideal para combinar com qualquer peça.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#0000FF', '#1a1a1a'],
  },
  {
    id: 3,
    name: 'Jaqueta Preta Premium',
    image: '/product-thumb-3.jpeg',
    price: 150,
    priceDiscount: 99.9,
    reference: 'JAQUETA-003',
    stars: 5,
    rating: 230,
    description: 'Jaqueta sofisticada em tecido impermeável. Perfeita para proteger do frio.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
      { src: '/product-image-3.jpeg' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#000000', '#1a1a1a'],
  },
  {
    id: 4,
    name: 'Vestido Floral',
    image: '/product-thumb-4.jpeg',
    price: 200,
    reference: 'VESTIDO-004',
    stars: 4.5,
    rating: 156,
    description: 'Vestido elegante com padrão floral. Ótimo para ocasiões especiais.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
    ],
    sizes: ['P', 'M', 'G'],
    colors: ['#FF69B4', '#FFB6C1'],
  },
  {
    id: 5,
    name: 'Tênis Esportivo',
    image: '/product-thumb-5.jpeg',
    price: 75,
    priceDiscount: 59.9,
    reference: 'TENIS-005',
    stars: 4.5,
    rating: 189,
    description: 'Tênis confortável para atividades esportivas. Tecnologia de amortecimento avançada.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
      { src: '/product-image-3.jpeg' },
    ],
    sizes: ['35', '36', '37', '38', '39', '40', '41', '42'],
    colors: ['#000000', '#FFFFFF', '#FF0000'],
  },
  {
    id: 6,
    name: 'Bolsa de Couro',
    image: '/product-thumb-1.jpeg',
    price: 120,
    reference: 'BOLSA-006',
    stars: 5,
    rating: 145,
    description: 'Bolsa clássica em couro genuíno. Capacidade grande com múltiplos compartimentos.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
    ],
    colors: ['#8B4513', '#000000'],
  },
  {
    id: 7,
    name: 'Moletom Cinza',
    image: '/product-thumb-2.jpeg',
    price: 180,
    priceDiscount: 139.9,
    reference: 'MOLETOM-007',
    stars: 4,
    rating: 102,
    description: 'Moletom confortável em algodão mescla. Perfeito para dias frios.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#808080', '#A9A9A9'],
  },
  {
    id: 8,
    name: 'Meia Sock',
    image: '/product-thumb-3.jpeg',
    price: 99.9,
    reference: 'MEIA-008',
    stars: 4.5,
    rating: 267,
    description: 'Meia confortável e durável. Ideal para qualquer tipo de calçado.',
    galleryImages: [
      { src: '/product-image-1.jpeg' },
      { src: '/product-image-2.jpeg' },
    ],
    sizes: ['único'],
    colors: ['#000000', '#FFFFFF', '#FF0000'],
  },
];

// Dados de coleções
export const mockCollections = [
  {
    id: 1,
    title: 'Coleção Verão',
    image: '/collection-1.png',
    link: '/products?collection=summer',
  },
  {
    id: 2,
    title: 'Coleção Inverno',
    image: '/collection-2.png',
    link: '/products?collection=winter',
  },
  {
    id: 3,
    title: 'Coleção Premium',
    image: '/collection-3.png',
    link: '/products?collection=premium',
  },
];

// Imagens da galeria principal
export const galleryImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

// Função auxiliar para obter produto por ID
export const getProductById = (id) => {
  return mockProducts.find(product => product.id === parseInt(id));
};

// Função auxiliar para obter produtos relacionados
export const getRelatedProducts = (productId, limit = 4) => {
  return mockProducts
    .filter(product => product.id !== productId)
    .slice(0, limit);
};
