# 🚀 Complete Deployment Guide

## ✅ What's Been Created

Your Jekyll + Tailwind + Decap CMS website is now fully set up with:

### 📁 Project Structure
```
PersonalWebpage/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
├── tailwind.config.js       # Tailwind configuration
├── _layouts/
│   └── default.html         # Main layout with dark mode
├── _includes/
│   ├── header.html          # Navigation with theme toggle
│   └── footer.html          # Site footer
├── index.md                 # Homepage
├── research.md              # Research page
├── teaching.md              # Teaching page
├── blog.md                  # Blog page
├── hobbies.md               # Hobbies page
├── links.md                 # Links page
├── _posts/
│   └── 2025-09-27-welcome.md # Sample blog post
├── admin/
│   ├── index.html           # CMS dashboard
│   └── config.yml           # CMS configuration
├── assets/
│   ├── css/
│   │   ├── main.css         # Tailwind source
│   │   └── output.css       # Compiled CSS
│   └── images/
│       └── profile.jpg      # Profile image
└── .github/workflows/
    └── deploy.yml           # GitHub Actions
```

## 🚀 Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (for user pages) or any name (for project pages)
3. Make it public

### 2. Push Your Code

```bash
git init
git add .
git commit -m "Initial Jekyll + Tailwind + Decap CMS setup"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy via the workflow

### 4. Configure Decap CMS

1. **Update `admin/config.yml`:**
   - Replace `USERNAME/REPO-NAME` with your actual GitHub username/repo
   - Replace `USERNAME.github.io` with your actual GitHub Pages URL

2. **Set up GitHub OAuth App:**
   - Go to GitHub → Settings → Developer settings → OAuth Apps
   - Click **New OAuth App**
   - **Application name:** Your Site Name
   - **Homepage URL:** `https://yourusername.github.io`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   - Click **Register application**

3. **Access CMS:**
   - Visit `https://yourusername.github.io/admin`
   - Login with GitHub
   - Start editing content!

## 🎨 Features Included

### ✅ Jekyll + Tailwind
- Modern, responsive design
- Dark/light mode toggle
- Mobile-friendly navigation
- SEO optimized

### ✅ Decap CMS
- Visual content editor
- Image uploads
- Blog post management
- Page editing
- Gallery management

### ✅ GitHub Integration
- Automatic deployment
- Version control
- Secure authentication
- Free hosting

## 🛠️ Local Development

### Prerequisites
- Node.js (LTS version)
- Ruby (3.1+)
- Git

### Setup
```bash
# Install dependencies
npm install
bundle install

# Build CSS
npm run build:css

# Start development server
bundle exec jekyll serve --livereload
```

Visit `http://127.0.0.1:4000` to preview locally.

## 📝 Content Management

### Adding Blog Posts
1. Go to `/admin`
2. Click **Blog Posts** → **New Blog Post**
3. Add title, date, image, and content
4. Click **Publish**

### Editing Pages
1. Go to `/admin`
2. Click **Pages**
3. Select the page to edit
4. Make changes and save

### Adding Images
1. Upload images through the CMS
2. Images are stored in `assets/uploads/`
3. Reference them in posts: `![alt text](/assets/uploads/filename.jpg)`

## 🎯 Next Steps

1. **Customize Content:**
   - Update `_config.yml` with your information
   - Replace profile image
   - Add your content to pages

2. **Configure CMS:**
   - Update GitHub repo details in `admin/config.yml`
   - Set up OAuth app for authentication

3. **Deploy:**
   - Push to GitHub
   - Enable GitHub Pages
   - Access your live site!

## 🔧 Troubleshooting

### Common Issues

**Jekyll won't start:**
- Make sure Ruby and Bundler are installed
- Run `bundle install` to install gems

**CSS not loading:**
- Run `npm run build:css` to compile Tailwind

**CMS not working:**
- Check GitHub OAuth app configuration
- Verify repo name in `admin/config.yml`

**Deployment fails:**
- Check GitHub Actions logs
- Ensure all files are committed

## 📞 Support

Your website is now ready for deployment! The structure supports:
- ✅ Professional academic website
- ✅ Blog with image uploads
- ✅ Content management via browser
- ✅ Dark/light mode
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Free GitHub Pages hosting

Happy coding! 🎉
