project: React Admin Dashboard

description: >
  A modern, responsive, and highly customizable Admin Dashboard built with React,
  designed for great user experience.

key_features:
  - Customizable themes (light/dark) with persistence
  - Responsive layout for desktop, tablet, and mobile
  - Interactive charts and analytics with Recharts / Chart.js
  - FullCalendar integration for event management
  - Kanban board with drag-and-drop task management
  - Dynamic tables that are searchable, sortable, and paginated
  - Reusable modular components for maintainable code
  - Collapsible sidebar navigation for smooth UX
  - Seamless routing with React Router DOM

tech_stack:
  frontend: React + Vite
  styling: Tailwind CSS
  routing: React Router DOM
  charts: Recharts / Chart.js
  calendar: FullCalendar React
  kanban: React Beautiful DnD / custom drag-n-drop
  state_management: Context API / Zustand / Redux (optional)
  icons: React Icons / Lucide React

project_structure:
  - src/
    - assets/: images and static files
    - components/: reusable UI components
    - context/: theme and state management
    - data/: sample data for charts, tables, kanban
    - pages/: dashboard pages
    - App.jsx: root component
    - main.jsx: entry point
    - index.css: global styles

getting_started:
  - Clone the repo:
      - git clone https://github.com/your-username/react-admin-dashboard.git
      - cd react-admin-dashboard
  - Install dependencies:
      - npm install
  - Run the app:
      - npm run dev
  - Access URL: http://localhost:5173

theme_customization:
  - Built-in theme switcher in navbar
  - Tailwind utility classes for styling
  - Easily extend colors and layouts via tailwind.config.js

pages_overview:
  - Dashboard: Summary widgets and charts
  - Orders & Customers: Interactive tables
  - Calendar: FullCalendar event management
  - Kanban Board: Drag-and-drop tasks
  - Editor: Rich text editing (optional)
  - Color Picker: Visual customization

future_enhancements:
  - Authentication and authorization
  - Backend integration (Firebase, Node.js, etc.)
  - Notifications and toast alerts
  - Exportable reports and downloads
