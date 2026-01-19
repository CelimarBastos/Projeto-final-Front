# Project Summary - Components & Pages Created

## Shared Components

### 1. Section Component
- **Location**: `src/components/Section/`
- **Files**: `Section.jsx`, `Section.css`
- **Props**:
  - `title` (required) - Section title
  - `titleAlign` - "left" | "center" (default: "left")
  - `link` - Object with `text` and `href`
  - `children` - Content to display

### 2. ProductCard Component
- **Location**: `src/components/ProductCard/`
- **Files**: `ProductCard.jsx`, `ProductCard.css`
- **Props**:
  - `image` - Product image URL
  - `name` - Product name
  - `price` - Product price
  - `priceDiscount` - Optional discounted price

### 3. ProductListing Component
- **Location**: `src/components/ProductListing/`
- **Files**: `ProductListing.jsx`, `ProductListing.css`
- **Props**:
  - `products` - Array of product objects

### 4. Gallery Component
- **Location**: `src/components/Gallery/`
- **Files**: `Gallery.jsx`, `Gallery.css`
- **Props**:
  - `images` - Array of image objects
  - `width` - Gallery width (pixels or auto)
  - `height` - Gallery height (pixels or auto)
  - `radius` - Border radius for images
  - `showThumbs` - Boolean flag to show thumbnails
  - `className` - Custom CSS class

### 5. FilterGroup Component
- **Location**: `src/components/FilterGroup/`
- **Files**: `FilterGroup.jsx`, `FilterGroup.css`
- **Props**:
  - `title` - Filter group title
  - `inputType` - "checkbox" | "radio"
  - `options` - Array of option objects

### 6. ProductOptions Component
- **Location**: `src/components/ProductOptions/`
- **Files**: `ProductOptions.jsx`, `ProductOptions.css`
- **Props**:
  - `options` - Array of option values
  - `shape` - "square" | "circle"
  - `type` - "text" | "color"
  - `radius` - Border radius (for square shape)

### 7. BuyBox Component
- **Location**: `src/components/BuyBox/`
- **Files**: `BuyBox.jsx`, `BuyBox.css`
- **Props**:
  - `name` - Product name
  - `reference` - Product reference code
  - `stars` - Star rating
  - `rating` - Number of reviews
  - `price` - Original price
  - `priceDiscount` - Discounted price
  - `description` - Product description
  - `children` - Additional content (options, etc.)

## Pages

### 1. HomePage
- **Location**: `src/pages/HomePage/`
- **Files**: `HomePage.jsx`, `HomePage.css`
- **Features**:
  - Gallery carousel with multiple slides
  - Collections showcase section
  - Products listing section
  - Uses Layout component for header/footer

### 2. ProductListingPage
- **Location**: `src/pages/ProductListingPage/`
- **Files**: `ProductListingPage.jsx`, `ProductListingPage.css`
- **Features**:
  - Sort dropdown (by price)
  - Filter sidebar (category, price, brand)
  - Product listing with filters
  - Uses Layout component for header/footer

### 3. ProductViewPage
- **Location**: `src/pages/ProductViewPage/`
- **Files**: `ProductViewPage.jsx`, `ProductViewPage.css`
- **Features**:
  - Product gallery with thumbnails
  - Buy box with product details
  - Product options (size and color)
  - Related products section
  - Uses Layout component for header/footer

## Layout Component
- **Location**: `src/pages/`
- **Files**: `Layout.jsx`
- **Features**:
  - Wraps all pages with Header and Footer
  - Provides consistent layout structure
  - Renders children between header and footer

## Color Palette
- **Location**: `src/constants/` and `src/styles/`
- **Files**: `colors.js`, `colors.css`
- **Colors**:
  - Primary: #C92071
  - Secondary: #B5B6F2
  - Tertiary: #991956
  - Error: #EE4266
  - Success: #52CA76
  - Warning: #F6AA1C
  - Grayscale colors

## Notes
- All components are fully responsive
- Components follow React best practices
- CSS is modular and uses CSS variables for colors
- All components integrate with the color palette system
