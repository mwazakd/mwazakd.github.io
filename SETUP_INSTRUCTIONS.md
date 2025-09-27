# Jekyll + Tailwind Personal Website Setup

## What has been created:

This repository now contains a complete Jekyll + Tailwind CSS personal website with the following structure:

### Core Files:
- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `package.json` - Node.js dependencies
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.gitignore` - Git ignore rules

### Layouts and Includes:
- `_layouts/default.html` - Main layout template
- `_layouts/post.html` - Blog post layout
- `_includes/header.html` - Site header
- `_includes/footer.html` - Site footer

### Pages:
- `index.html` - Homepage
- `research.html` - Research page
- `teaching.html` - Teaching page
- `blog.html` - Blog listing page
- `hobbies.html` - Hobbies page
- `certifications.html` - Certifications page
- `links.html` - Links page

### Assets:
- `assets/css/main.css` - Tailwind CSS source
- `assets/images/profile.jpg` - Profile image placeholder
- `assets/uploads/` - Directory for blog post media

### Blog Posts:
- `_posts/2025-01-27-welcome.md` - Sample blog post

### GitHub Actions:
- `.github/workflows/deploy.yml` - Automatic deployment workflow

## Setup Instructions:

### Prerequisites:
1. Install Node.js (LTS version)
2. Install Ruby (3.1 or later)
3. Install Git

### Local Development:
1. Run `setup.bat` to install dependencies and build CSS
2. Run `bundle exec jekyll serve --livereload`
3. Open http://127.0.0.1:4000 in your browser

### Deployment:
1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. The site will automatically deploy on every push to main branch

## Customization:

### Personal Information:
- Edit `_config.yml` to update site title, email, etc.
- Replace `assets/images/profile.jpg` with your photo
- Update content in HTML pages with your information

### Adding Blog Posts:
- Create new files in `_posts/` with format: `YYYY-MM-DD-title.md`
- Use Markdown syntax for content
- Add images to `assets/uploads/` and reference them

### Styling:
- Edit `assets/css/main.css` for custom CSS
- Modify `tailwind.config.js` for theme customization

## File Structure:
```
/ (repo root)
+-- README.md
+-- Gemfile
+-- package.json
+-- tailwind.config.js
+-- postcss.config.js
+-- .github/workflows/deploy.yml
+-- _config.yml
+-- _layouts/
¦   +-- default.html
¦   +-- post.html
+-- _includes/
¦   +-- header.html
¦   +-- footer.html
+-- _posts/
¦   +-- 2025-01-27-welcome.md
+-- index.html
+-- research.html
+-- teaching.html
+-- blog.html
+-- hobbies.html
+-- certifications.html
+-- links.html
+-- assets/
¦   +-- css/
¦   ¦   +-- main.css
¦   +-- images/
¦   ¦   +-- profile.jpg
¦   +-- uploads/
+-- .gitignore
```

## Next Steps:
1. Customize the content with your personal information
2. Add your profile photo
3. Create your first blog post
4. Deploy to GitHub Pages
5. Share your new website!
