# Joblytics - React + Vite Application

A modern React application built with Vite, featuring routing, reusable components, and beginner-friendly code structure.

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
joblytics/
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Main app with routing setup
│   ├── App.css               # Global app styles
│   ├── index.css             # Base CSS styles
│   ├── pages/                # Route components (different pages)
│   │   ├── Route1.jsx        # Page components with routing
│   │   ├── Route2.jsx
│   │   ├── Route3.jsx
│   │   └── Route4.jsx
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # Basic UI components (buttons, cards, etc.)
│   │   ├── forms/            # Form components
│   │   ├── layout/           # Layout components (header, footer, etc.)
│   │   └── README.md         # Component guidelines
│   ├── context/              # React Context for state management
│   │   └── README.md         # Context usage guide
│   └── assets/               # Static files (images, icons, etc.)
├── public/                   # Public static files
├── docs/                     # Project documentation
├── ROUTING-DOCUMENTATION.md  # Complete routing guide
├── CLAUDE.md                 # Developer guidance file
└── README.md                 # This file
```

## Key Folders Explained

### 📁 `src/pages/`
Contains individual page components that correspond to different routes in your application. Each file represents a different "page" that users can navigate to.

**When to add here:**
- New pages/screens in your app
- Different sections users can visit
- Components that represent full page views

### 📁 `src/components/`
Contains reusable UI components that can be used across multiple pages. This includes both custom components you create and wrapped components from UI libraries.

**What goes here:**
- **Custom Components**: Buttons, cards, forms, modals you create
- **Library Wrappers**: Customized Material-UI, Ant Design, or other library components
- **Layout Components**: Headers, footers, sidebars that appear on multiple pages
- **UI Components**: Reusable interface elements

**Subfolders:**
- `ui/` - Basic interface components
- `forms/` - Form-related components
- `layout/` - Page layout components

### 📁 `src/context/`
For React Context files when you need to share data between multiple components/pages. Includes comprehensive beginner guides for implementation.

### 📁 `src/assets/`
Static files like images, icons, fonts, and other media files.

## Technology Stack

- **React 19** - UI library with modern hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing for navigation
- **Lucide React** - Modern icon library
- **ESLint** - Code linting and formatting

## Development Guidelines

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import it in `App.jsx`
3. Add a new `<Route>` in the Routes section
4. Add a navigation link in the nav section

### Creating Reusable Components
1. Create component in appropriate `src/components/` subfolder
2. Follow naming convention (PascalCase for components)
3. Export as default
4. Import and use in pages or other components

### Working with UI Libraries
When installing UI component libraries (Material-UI, Ant Design, Chakra UI, etc.):
1. Install the library: `npm install @mui/material` (example)
2. Create wrapper components in `src/components/ui/`
3. Customize the library components to match your design
4. Use your wrapper components throughout the app

## Documentation

- **Routing Guide**: See `ROUTING-DOCUMENTATION.md` for complete routing explanations
- **Component Guide**: Check `src/components/README.md` for component best practices
- **Context Guide**: Read `src/context/README.md` for state management guidance
- **Developer Notes**: Review `CLAUDE.md` for technical implementation details

## Beginner-Friendly Features

- ✅ Comprehensive code comments explaining React concepts
- ✅ Step-by-step guides for common tasks
- ✅ Clear folder structure with purpose explanations
- ✅ Context setup instructions with examples
- ✅ Component creation templates and best practices
- ✅ Real-world examples and analogies

This project is designed to be educational and easy to understand for developers new to React and modern web development.
