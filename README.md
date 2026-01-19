//ATENÇÃO PRAR VISUALIZAR A PAGINA   http://localhost:5175/

# Drip Store - E-commerce Frontend

Uma aplicação de e-commerce moderna desenvolvida com **React 18** e **Vite**, oferecendo uma experiência de compra fluida com interface responsiva e componentes reutilizáveis.

## 🎯 Visão Geral

Drip Store é um frontend de e-commerce completo com:
- 📱 Design responsivo e moderno
- 🎨 Sistema de cores customizável com CSS variables
- 🛍️ Catálogo de produtos com filtros e ordenação
- 🖼️ Galeria de imagens com navegação
- 🏠 Homepage com seções dinâmicas
- 🔀 Roteamento com React Router
- ⚡ Desenvolvimento rápido com Vite HMR

---

## 📦 Tecnologias Utilizadas

- **React** 18.2.0 - Biblioteca UI
- **React Router DOM** 6.20.0 - Roteamento de páginas
- **Vite** 5.4.21 - Build tool e dev server
- **CSS3** - Styling com custom properties
- **JavaScript ES6+** - Linguagem base

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BuyBox/                 # Componente de compra com preço e descrição
│   ├── FilterGroup/            # Filtros de categorias, preço, marca
│   ├── Footer/                 # Rodapé com links e redes sociais
│   ├── Gallery/                # Galeria de imagens com navegação
│   ├── Header/                 # Navegação principal com search
│   ├── Logo/                   # Logo com variante para footer
│   ├── ProductCard/            # Card individual de produto
│   ├── ProductListing/         # Grid de produtos
│   ├── ProductOptions/         # Seletor de tamanho/cor
│   └── Section/                # Container reutilizável com título
├── pages/
│   ├── HomePage/               # Página inicial com galeria e produtos
│   ├── ProductListingPage/     # Listagem com filtros e ordenação
│   ├── ProductViewPage/        # Detalhe do produto
│   └── Layout.jsx              # Wrapper com Header/Footer
├── constants/
│   ├── colors.js               # Paleta de cores em JS
│   └── mockData.js             # Dados mockados de produtos
├── styles/
│   ├── colors.css              # CSS variables de cores
│   └── layout.css              # Estilos globais
├── App.jsx                     # Configuração de rotas
├── index.jsx                   # Ponto de entrada
└── index.css                   # Estilos globais
```

---

## 🎨 Componentes Implementados

### Shared Components

| Componente | Descrição | Props |
|-----------|-----------|-------|
| **Section** | Container flexível com título e conteúdo | `title`, `titleAlign`, `link`, `children` |
| **ProductCard** | Card de produto com imagem e preço | `image`, `name`, `price`, `priceDiscount` |
| **ProductListing** | Grid responsivo de cards | `products` |
| **Gallery** | Galeria com setas de navegação | `images`, `width`, `height`, `showThumbs` |
| **FilterGroup** | Filtros checkbox/radio | `title`, `inputType`, `options` |
| **ProductOptions** | Seletor de variações (tamanho/cor) | `options`, `shape`, `type` |
| **BuyBox** | Box de compra com preço e descrição | `name`, `price`, `priceDiscount`, `stars`, `rating` |
| **Header** | Navegação com search e auth | - |
| **Footer** | Rodapé com links e social | - |
| **Logo** | Logo customizável | `white` |

---

## 📄 Páginas Implementadas

### 1. **HomePage** (`/`)
- Galeria principal (1440x681px) com 8 slides
- Seção de coleções destacadas (3 items)
- Listagem de produtos em alta (8 produtos)

### 2. **ProductListingPage** (`/products`)
- Sidebar com filtros (categoria, preço, marca)
- Opção de ordenação (preço)
- Grid responsivo de produtos
- Suporte a query parameters para filtros

### 3. **ProductViewPage** (`/product/:id`)
- Galeria de detalhes com thumbnails
- Buy Box com rating e descrição
- Seletor de tamanho e cor
- Seção de produtos relacionados

---

## 🎨 Sistema de Cores

Paleta de cores customizável via CSS variables:

```css
--primary-color: #C92071        /* Rosa/Magenta principal */
--secondary-color: #B5B6F2      /* Roxo suave */
--accent-color: #6F44FF         /* Roxo acentuado */
--success-color: #2ECC71        /* Verde */
--warning-color: #F6AA1C        /* Laranja/Ouro */
--error-color: #E74C3C          /* Vermelho */
--light-gray: #F5F5F5           /* Fundo claro */
--dark-gray: #333333            /* Texto escuro */
--border-color: #EEEEEE         /* Bordas */
```

---

## 📦 Dados Mock

O projeto inclui dados mockados com:
- **8 produtos** completos com imagens, preços e descrições
- **3 coleções** destacadas
- **8 slides** para galeria principal
- Suporte a **ratings e reviews**
- **Variações** de tamanho e cor

Dados armazenados em `src/constants/mockData.js`

---

## 🚀 Como Executar

### 1. Instalação
```bash
npm install
```

### 2. Desenvolvimento (com Hot Module Reload)
```bash
npm run dev
```
Acesse: `http://localhost:5175`

### 3. Build para Produção
```bash
npm run build
```

### 4. Preview da Build
```bash
npm run preview
```

---

## ✨ Features

- ✅ Componentes React reutilizáveis
- ✅ Roteamento com React Router v6
- ✅ Sistema de cores com CSS variables
- ✅ Galeria de imagens com navegação
- ✅ Filtros de produtos (categoria, preço, marca)
- ✅ Ordenação de produtos
- ✅ Seletor de variações (tamanho/cor)
- ✅ Layout responsivo
- ✅ Search functionality
- ✅ Navegação com estado ativo (NavLink)
- ✅ Mock data completo

---

## 🔄 Fluxo de Navegação

```
Home (/)
  ├── Gallery com 8 slides
  ├── 3 Coleções destacadas
  └── 8 Produtos em alta

Products (/products)
  ├── Filtros (sidebar)
  ├── Ordenação
  └── Grid de produtos

Product Detail (/product/:id)
  ├── Galeria detalhada
  ├── Buy Box
  ├── Seletor de variações
  └── Produtos relacionados
```

---

## 📱 Responsividade

O projeto é **100% responsivo** com:
- Grid automático que se adapta a diferentes tamanhos
- Componentes flexíveis
- Imagens com aspect ratio mantido
- Navegação adaptativa

---

## 🎯 Próximos Passos (Roadmap)

- [ ] Integração com API Backend
- [ ] Sistema de autenticação
- [ ] Carrinho de compras (Context API/Redux)
- [ ] Checkout e pagamento
- [ ] Sistema de reviews
- [ ] Wishlist/Favoritos
- [ ] Histórico de pedidos
- [ ] Dark mode
- [ ] Otimização de imagens

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview da build de produção |

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob licença MIT.

---

**Desenvolvido com ❤️ usando React + Vite**
