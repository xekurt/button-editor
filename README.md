# Ayoub Rezaei Interview Task

This project is an Angular application designed as part of an interview task. It demonstrates modular architecture, reusable components, and best practices in Angular development.

## Features
- Modular structure with clear separation of concerns
- Reusable UI components (buttons, dropdowns, color input, radio group, etc.)
- Theming support with a theme toggle service
- Example playground and documentation modules
- Custom layout with header and sidebar
- Fully responsive design for all devices
- Fully accessible (ARIA, keyboard navigation, screen reader support)
- Deployed to GitHub Pages: [https://xekurt.github.io/button-editor](https://xekurt.github.io/button-editor)

## Project Structure
```
├── angular.json
├── dockerfile
├── nginx.conf
├── package.json
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── modules/
│   │   └── services/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
└── ...
```
- **components/**: Shared UI components (button, dropdown, color input, etc.)
  - `components/custom-button/`: Custom button component and its types
- **layout/**: Application layout components (header, sidebar, theme toggle)
- **modules/**: Feature modules (documentation, playground)
- **services/**: Application-wide services (e.g., theme management)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

### Installation
```bash
npm install
```

### Running the Application
```bash
npm start
```
The app will be available at `http://localhost:4200/` by default.

### Running Tests
```bash
npm test
```

## Usage
- Explore the UI components in the playground module.
- View documentation and usage examples in the documentation module.
- Use the theme toggle button to switch between light and dark modes.

