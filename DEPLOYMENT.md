# Vercel Deployment Checklist

## ✅ Pre-Deployment

- [x] Clean up package.json (remove Replit dependencies)
- [x] Update Vite configuration for production
- [x] Create shared utilities and types
- [x] Set up proper asset handling
- [x] Configure environment variables
- [x] Update TypeScript configuration
- [x] Create mock API for development
- [x] Update authentication hooks

## 🔄 During Deployment

### 1. Environment Variables in Vercel
Set these in your Vercel project settings:

```env
VITE_DATABASE_URL=postgresql://postgres:sandwichproject1328@db.mifquzfaqtcyboqntfyn.supabase.co:5432/postgres
VITE_SUPABASE_URL=https://mifquzfaqtcyboqntfyn.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZnF1emZhcXRjeWJvcW50ZnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjg5MDYsImV4cCI6MjA2NzY0NDkwNn0.-XI67cD19CP2KJ0FOGPLBpv2oXcC0iuY1wefJNb2CuA
SESSION_SECRET=generate-a-32-character-secret-key
VITE_APP_NAME=The Sandwich Project
VITE_APP_VERSION=1.0.0
VITE_NODE_ENV=production
```

**Generate SESSION_SECRET:**
```bash
openssl rand -hex 32
```

### 2. Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

### 3. Domain Configuration
- [ ] Set up custom domain (if needed)
- [ ] Configure SSL certificate
- [ ] Set up redirects

## 🚀 Post-Deployment

### 1. Functionality Testing
- [ ] Test login/authentication
- [ ] Test navigation between pages
- [ ] Test responsive design
- [ ] Test asset loading (images, PDFs)

### 2. Performance Optimization
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Test loading speeds
- [ ] Enable compression

### 3. Monitoring Setup
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Configure analytics
- [ ] Set up uptime monitoring

## 🔧 Backend Integration

### When Backend is Ready:
1. Update `VITE_API_BASE_URL` to point to your backend
2. Remove mock API calls
3. Update authentication to use real endpoints
4. Test all API integrations

## 🐛 Common Issues & Solutions

### Build Errors
- **Module not found**: Check import paths and aliases
- **Environment variables**: Ensure all VITE_ prefixed vars are set
- **TypeScript errors**: Run `npm run check` locally first

### Runtime Issues
- **Assets not loading**: Check public folder structure
- **API calls failing**: Verify environment variables and endpoints
- **Authentication issues**: Check cookie settings and CORS

## 📊 Performance Targets
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Time to Interactive: < 4s
- Cumulative Layout Shift: < 0.1

## 🎯 Next Steps After Deployment
1. Set up continuous deployment
2. Configure staging environment
3. Set up database migrations
4. Implement proper error handling
5. Add comprehensive logging
