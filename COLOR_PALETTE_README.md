# Color Palette Documentation

This document explains how to use the custom color palette in your project with Tailwind CSS.

## Color Palette Overview

The project now includes a comprehensive color palette with the following main colors:

- **Crimson** (`#d7263d`) - A vibrant red color
- **Oxford Blue** (`#02182b`) - A deep, professional blue
- **Dodger Blue** (`#0197f6`) - A bright, modern blue
- **Blue Munsell** (`#448fa3`) - A sophisticated teal-blue
- **Sky Blue** (`#68c5db`) - A light, airy blue

## How to Use

### 1. Tailwind CSS Classes

You can now use these colors directly in your Tailwind classes:

```tsx
// Background colors
<div className="bg-crimson">Crimson background</div>
<div className="bg-oxford-blue">Oxford Blue background</div>
<div className="bg-dodger-blue">Dodger Blue background</div>
<div className="bg-blue-munsell">Blue Munsell background</div>
<div className="bg-sky-blue">Sky Blue background</div>

// Text colors
<h1 className="text-crimson">Crimson text</h1>
<p className="text-oxford-blue">Oxford Blue text</p>

// Border colors
<div className="border border-dodger-blue">Dodger Blue border</div>
```

### 2. Color Scales

Each color comes with a full scale from 50 to 950:

```tsx
// Light shades
<div className="bg-crimson-50">Very light crimson</div>
<div className="bg-crimson-100">Light crimson</div>

// Medium shades
<div className="bg-crimson-500">Main crimson color</div>

// Dark shades
<div className="bg-crimson-900">Dark crimson</div>
<div className="bg-crimson-950">Very dark crimson</div>
```

### 3. JavaScript/TypeScript Usage

Import and use colors in your components:

```tsx
import { 
  crimson, 
  oxfordBlue, 
  dodgerBlue, 
  blueMunsell, 
  skyBlue 
} from '../config/colorUtils';

// Use in inline styles
<div style={{ backgroundColor: crimson, color: 'white' }}>
  Crimson background with white text
</div>

// Use in CSS custom properties
<div style={{ '--custom-color': dodgerBlue }}>
  Custom styled element
</div>
```

### 4. Predefined Color Combinations

Use predefined color combinations for consistent design:

```tsx
import { colorCombinations } from '../config/colorUtils';

const { primary, secondary, accent, neutral } = colorCombinations;

// Primary combination
<div style={{ 
  backgroundColor: primary.background,
  color: primary.text 
}}>
  Primary styled content
</div>
```

### 5. Utility Functions

#### With Opacity
Add transparency to any color:

```tsx
import { withOpacity } from '../config/colorUtils';

<div style={{ 
  backgroundColor: withOpacity(crimson, 0.5) 
}}>
  50% transparent crimson
</div>
```

#### Contrast Colors
Automatically get the best text color for any background:

```tsx
import { getContrastColor } from '../config/colorUtils';

<div style={{ 
  backgroundColor: oxfordBlue,
  color: getContrastColor(oxfordBlue) // Returns white
}}>
  Automatically contrasted text
</div>
```

## File Structure

```
src/
├── config/
│   ├── colors.ts          # Main color definitions
│   ├── colorUtils.ts      # Utility functions and exports
│   └── index.ts           # Main config exports
├── components/
│   └── ColorPalette.tsx   # Example component showcasing colors
└── app/
    └── globals.css        # Tailwind theme configuration
```

## CSS Custom Properties

The colors are also available as CSS custom properties:

```css
:root {
  --crimson: #d7263d;
  --oxford-blue: #02182b;
  --dodger-blue: #0197f6;
  --blue-munsell: #448fa3;
  --sky-blue: #68c5db;
}
```

## Tailwind Configuration

The colors are configured in `globals.css` using Tailwind v4's `@theme inline` syntax:

```css
@theme inline {
  --color-crimson: var(--crimson);
  --color-oxford-blue: var(--oxford-blue);
  --color-dodger-blue: var(--dodger-blue);
  --color-blue-munsell: var(--blue-munsell);
  --color-sky-blue: var(--sky-blue);
  
  /* Full color scales */
  --color-crimson-50: #fdf2f3;
  --color-crimson-100: #fce7ea;
  /* ... and so on */
}
```

## Examples

### Button Component
```tsx
const Button: React.FC<{ variant: 'primary' | 'secondary' | 'accent' }> = ({ 
  variant, 
  children 
}) => {
  const variants = {
    primary: 'bg-crimson text-white hover:bg-crimson-600',
    secondary: 'bg-oxford-blue text-white hover:bg-oxford-blue-800',
    accent: 'bg-dodger-blue text-white hover:bg-dodger-blue-600'
  };

  return (
    <button className={`px-4 py-2 rounded-lg transition-colors ${variants[variant]}`}>
      {children}
    </button>
  );
};
```

### Card Component
```tsx
const Card: React.FC = ({ children }) => (
  <div className="bg-white border border-sky-blue-200 rounded-lg p-6 shadow-lg">
    <div className="text-oxford-blue">
      {children}
    </div>
  </div>
);
```

## Best Practices

1. **Use semantic naming**: Use colors based on their purpose, not just their appearance
2. **Maintain contrast**: Always ensure sufficient contrast between text and background
3. **Be consistent**: Use the same color combinations throughout your application
4. **Accessibility**: Test your color combinations for accessibility compliance
5. **Dark mode**: Consider how colors will look in both light and dark themes

## Testing the Palette

To see all colors in action, you can import and use the `ColorPalette` component:

```tsx
import ColorPalette from '../components/ColorPalette';

// In your page or component
<ColorPalette />
```

This will display a comprehensive showcase of all colors, scales, and utility functions.

## Adding New Colors

To add new colors to the palette:

1. Add the color to `src/config/colors.ts`
2. Add the color to `src/config/colorUtils.ts`
3. Add the color to `src/app/globals.css` in the `@theme inline` section
4. Update this documentation

## Support

If you have questions about using the color palette or need help implementing it in your components, refer to the example components or create an issue in the project repository.
