# The Sandwich Project - Frontend

This is the frontend application for The Sandwich Project, built with React, TypeScript, and Vite for deployment on Vercel.

## 🚀 Deployment Status

This project has been migrated from Replit to Vercel for better performance and scalability.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sandwich-project-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   VITE_DATABASE_URL=postgresql://postgres:sandwichproject1328@db.mifquzfaqtcyboqntfyn.supabase.co:5432/postgres
   VITE_API_BASE_URL=http://localhost:3001
   VITE_SUPABASE_URL=https://mifquzfaqtcyboqntfyn.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🌐 Vercel Deployment

### Automatic Deployment (Recommended)

1. **Connect to Vercel**
   - Fork this repository to your GitHub account
   - Go to [Vercel](https://vercel.com)
   - Click "New Project" and import your forked repository
   - Vercel will automatically detect it as a Vite project

2. **Configure Environment Variables**
   In your Vercel project dashboard, add these environment variables:
   ```
   VITE_DATABASE_URL=postgresql://postgres:sandwichproject1328@db.mifquzfaqtcyboqntfyn.supabase.co:5432/postgres
   VITE_API_BASE_URL=https://your-api-domain.vercel.app
   VITE_SUPABASE_URL=https://mifquzfaqtcyboqntfyn.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_APP_NAME=The Sandwich Project
   VITE_APP_VERSION=1.0.0
   VITE_NODE_ENV=production
   ```

3. **Deploy**
   Vercel will automatically build and deploy your application.

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 🏗️ Build Process

The build process is optimized for production:

- **Bundling**: Vite with Rollup
- **Code Splitting**: Automatic vendor and UI component chunking
- **Asset Optimization**: Images and static files are optimized
- **TypeScript**: Full type checking during build

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utilities and API client
├── shared/            # Shared types and utilities
└── utils/             # Helper functions

public/
├── assets/            # Static assets (images, logos)
└── documents/         # PDF and document files
```

## 🔧 Migration Notes

### Changes from Replit

1. **Package Management**: Cleaned up dependencies, removed Replit-specific packages
2. **Build Configuration**: Optimized Vite config for Vercel
3. **Asset Handling**: Moved assets to public directory
4. **API Layer**: Added mock API for development, production-ready client
5. **Environment Variables**: Standardized env var naming with VITE_ prefix

### Breaking Changes

- Assets now served from `/public/assets/` instead of `@assets/`
- API calls now use the centralized API client
- Authentication system updated for production deployment

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Built-in theme switching
- **Real-time Updates**: React Query for data synchronization
- **Role-based Access**: Comprehensive permission system
- **Modern UI**: Radix UI components with custom styling

## 🔒 Security

- Environment variables are properly configured
- API endpoints are secured with authentication
- CORS is configured for production
- Session management is handled securely

## 📝 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions, please contact the development team or create an issue in the repository.

## 🎯 Next Steps

1. Set up the backend API (if not already deployed)
2. Configure the production database
3. Set up monitoring and analytics
4. Configure custom domain
5. Set up CI/CD pipeline

---

**Note**: This frontend is designed to work with The Sandwich Project backend API. Make sure your backend is deployed and accessible before deploying the frontend to production.
