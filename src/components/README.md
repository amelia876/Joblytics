# Components Folder

## What Goes Here?

This folder contains **reusable components** that can be used across multiple pages in your application.

### Custom Components
Create your own reusable components here:
- Buttons
- Cards
- Forms
- Navigation elements
- Modal dialogs
- Data display components

### Library Component Wrappers
When you install UI libraries, create wrapper components here to customize them:
- Styled Material-UI components
- Customized Ant Design elements
- Enhanced React Bootstrap components
- Themed Chakra UI components

## File Naming Convention

- Use **PascalCase** for component files: `Button.jsx`, `UserCard.jsx`
- Use **camelCase** for utility files: `buttonUtils.js`, `helpers.js`

## Example Structure

```
src/components/
├── ui/                    # Basic UI components
│   ├── Button.jsx        # Custom button component
│   ├── Card.jsx          # Reusable card component
│   └── Modal.jsx         # Modal dialog component
├── forms/                # Form-related components
│   ├── LoginForm.jsx     # Login form
│   └── ContactForm.jsx   # Contact form
├── layout/               # Layout components
│   ├── Header.jsx        # Site header
│   ├── Footer.jsx        # Site footer
│   └── Sidebar.jsx       # Navigation sidebar
└── README.md             # This file
```

## Creating a Component

### Basic Component Template
```jsx
// src/components/ui/Button.jsx
function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
```

### Using the Component
```jsx
// In any page or other component
import Button from '../components/ui/Button'

function SomePage() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  )
}
```

## Best Practices

1. **Keep components small and focused** - Each component should do one thing well
2. **Use props for customization** - Make components flexible with props
3. **Add default props** - Provide sensible defaults for optional props
4. **Document your components** - Add comments explaining what props do
5. **Test your components** - Create simple test cases for reusable components

## Library Integration Examples

### Material-UI Wrapper
```jsx
// src/components/ui/MuiButton.jsx
import { Button as MuiButton } from '@mui/material'

function Button({ variant = 'contained', color = 'primary', ...props }) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      {...props}
    />
  )
}

export default Button
```

### Styled Components Example
```jsx
// src/components/ui/StyledCard.jsx
import styled from 'styled-components'

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`

export default StyledCard
```

Remember: If you're copy-pasting the same JSX in multiple places, it probably belongs in a component!