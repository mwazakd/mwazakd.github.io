# Publications Section Integration Guide

This document contains the complete code and instructions for integrating a publications section into a Jekyll website with Tailwind CSS.

## 📋 Overview

The publications section includes:
- Navigation bar link
- Homepage publications section with tabbed interface
- Responsive design with hover effects
- Status badges (IN PROGRESS, ACCEPTED, etc.)
- Download links for PDFs
- Clean, professional styling

## 🧭 Navigation Bar Integration

### File: `_includes/header.html`

```html
<header class="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
  <div class="max-w-7xl mx-auto px-8 py-5">
    <div class="flex justify-between items-center">
      <div class="font-display font-bold text-xl">
        <a href="{{ '/' | relative_url }}" class="flex items-center gap-2 text-stone-900">
          <span class="text-red-500">●</span>
          Kudzaishe Mwaza
        </a>
      </div>
      <div class="hidden md:flex items-center space-x-10">
        <a href="{{ '/' | relative_url }}" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">About</a>
        <a href="#research" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Research</a>
        <a href="#publications" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Publications</a>
        <a href="#teaching" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Teaching</a>
        <a href="{{ '/blog' | relative_url }}" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Blog</a>
        <a href="#contact" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Contact</a>
        <button id="theme-toggle" class="ml-4 text-sm border rounded px-2 py-1 border-stone-300 hover:bg-stone-100 transition">🌓</button>
      </div>
    </div>
  </div>
</header>
```

### Key Features:
- **Fixed positioning**: `fixed w-full` keeps nav bar at top
- **Backdrop blur**: `backdrop-blur-md` for modern glass effect
- **Responsive design**: `hidden md:flex` hides on mobile
- **Hover effects**: `hover-underline` for smooth transitions
- **Publications link**: `href="#publications"` scrolls to section

## 🏠 Homepage Publications Section

### File: `index.md` (Publications Section)

```html
<!-- Publications Section -->
<section id="publications" class="py-20 px-8 bg-stone-50">
  <div class="max-w-4xl mx-auto">
    <div class="mb-12 text-center">
      <h2 class="text-4xl font-bold mb-4">Publications</h2>
      <p class="text-stone-600 text-lg">A selection of my research work and academic contributions.</p>
    </div>
    <div class="flex justify-center gap-8 border-b-2 border-stone-200 mb-12">
      <button data-tab="conference" class="tab-button font-display font-medium pb-4 px-2 border-b-4 -mb-0.5 transition-colors border-transparent text-stone-500 hover:text-stone-700 hover:border-red-300 tab-active">Conference Papers</button>
    </div>
    <!-- Conference Papers -->
    <div id="conference" class="tab-content space-y-8">
      <div class="bg-white p-6 sm:p-8 border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all rounded-lg">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div class="flex-1">
            <span class="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-display text-xs font-medium mb-3 rounded-full">IN PROGRESS</span>
            <h3 class="text-xl font-semibold mb-3 text-stone-900 leading-snug">Building Accessible STEM Education Through Robotics</h3>
            <p class="text-stone-600 mb-3 text-base">
              <strong>Kudzaishe Mwaza</strong>, Dr. Sarah Johnson, Prof. Michael Chen
            </p>
            <p class="font-display text-sm text-stone-500">
              <em>International Conference on Educational Technology (ICET)</em>, 2025
            </p>
          </div>
          <div class="flex-shrink-0 flex flex-row gap-2 sm:gap-3">
            <a href="#" class="flex-1 sm:flex-none flex items-center justify-center p-2.5 sm:p-2.5 border border-stone-300 hover:bg-stone-100 transition-colors rounded-md text-stone-600 hover:text-stone-900" title="Download PDF">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4.5 h-4.5">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-6 sm:p-8 border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all rounded-lg">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div class="flex-1">
            <span class="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-display text-xs font-medium mb-3 rounded-full">ACCEPTED</span>
            <h3 class="text-xl font-semibold mb-3 text-stone-900 leading-snug">AI-Powered Learning Systems for Underprivileged Communities</h3>
            <p class="text-stone-600 mb-3 text-base">
              <strong>Kudzaishe Mwaza</strong>, Dr. Emily Rodriguez
            </p>
            <p class="font-display text-sm text-stone-500">
              <em>African Conference on Artificial Intelligence (ACAI)</em>, 2024
            </p>
          </div>
          <div class="flex-shrink-0 flex flex-row gap-2 sm:gap-3">
            <a href="#" class="flex-1 sm:flex-none flex items-center justify-center p-2.5 sm:p-2.5 border border-stone-300 hover:bg-stone-100 transition-colors rounded-md text-stone-600 hover:text-stone-900" title="Download PDF">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4.5 h-4.5">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 🎨 CSS Classes and Styling

### Key Tailwind Classes Used:

#### **Layout & Spacing:**
- `py-20 px-8` - Vertical padding 80px, horizontal 32px
- `max-w-4xl mx-auto` - Centered container with max width
- `mb-12` - Bottom margin 48px
- `space-y-8` - Vertical spacing between items

#### **Cards & Borders:**
- `bg-white` - White background
- `border border-stone-200` - Light border
- `hover:border-stone-400` - Darker border on hover
- `hover:shadow-md` - Shadow on hover
- `rounded-lg` - Rounded corners

#### **Typography:**
- `text-4xl font-bold` - Large bold heading
- `text-xl font-semibold` - Medium bold text
- `font-display` - Custom font family
- `text-stone-600` - Medium gray text

#### **Status Badges:**
- `bg-amber-100 text-amber-800` - Amber badge
- `px-3 py-1` - Padding for badges
- `rounded-full` - Fully rounded badges

#### **Interactive Elements:**
- `hover:bg-stone-100` - Light background on hover
- `transition-all` - Smooth transitions
- `border-b-4` - Bottom border for tabs

## 🔧 JavaScript Functionality (Optional)

### Tab Switching (if multiple tabs):

```javascript
// Add to your main layout or create a separate JS file
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('tab-active', 'border-red-300', 'text-stone-700');
        btn.classList.add('border-transparent', 'text-stone-500');
      });
      
      // Add active class to clicked button
      button.classList.add('tab-active', 'border-red-300', 'text-stone-700');
      button.classList.remove('border-transparent', 'text-stone-500');
      
      // Show/hide tab content
      tabContents.forEach(content => {
        content.style.display = content.id === targetTab ? 'block' : 'none';
      });
    });
  });
});
```

## 📱 Responsive Design Features

### Mobile-First Approach:
- `sm:p-8` - Larger padding on small screens
- `md:flex-row` - Row layout on medium screens
- `md:items-start` - Align items to start on medium screens
- `md:justify-between` - Space between items on medium screens

### Breakpoints:
- **Mobile**: Stacked layout, full-width buttons
- **Tablet**: Mixed layout, responsive spacing
- **Desktop**: Full row layout, optimal spacing

## 🎯 Customization Options

### Color Schemes:
```css
/* Status Badge Colors */
.bg-amber-100.text-amber-800  /* In Progress */
.bg-green-100.text-green-800   /* Published */
.bg-blue-100.text-blue-800      /* Under Review */
.bg-gray-100.text-gray-800     /* Draft */
```

### Layout Variations:
```html
<!-- Grid Layout -->
<div class="grid md:grid-cols-2 gap-8">
  <!-- Publication cards -->
</div>

<!-- List Layout -->
<div class="space-y-4">
  <!-- Compact publication items -->
</div>
```

## 🚀 Integration Steps

### 1. Add Navigation Link:
```html
<a href="#publications" class="hover-underline font-display text-sm font-medium text-stone-700 hover:text-stone-900">Publications</a>
```

### 2. Add Publications Section:
- Copy the HTML structure above
- Customize the content for your publications
- Update the styling to match your theme

### 3. Add JavaScript (Optional):
- Include tab switching functionality
- Add smooth scrolling for navigation links

### 4. Test Responsiveness:
- Check mobile, tablet, and desktop views
- Ensure all interactive elements work
- Verify hover effects and transitions

## 📝 Content Management

### Adding New Publications:
1. Copy the publication card structure
2. Update title, authors, venue, and status
3. Add appropriate status badge
4. Update download link if available

### Status Badge Options:
- `IN PROGRESS` - Amber badge
- `ACCEPTED` - Green badge  
- `PUBLISHED` - Blue badge
- `UNDER REVIEW` - Purple badge
- `DRAFT` - Gray badge

## 🔍 SEO and Accessibility

### Semantic HTML:
- Use proper heading hierarchy (h2, h3)
- Include alt text for images
- Use descriptive link text

### Accessibility Features:
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 📊 Performance Considerations

### Optimizations:
- Use CSS transitions instead of JavaScript animations
- Optimize images for web
- Minimize custom CSS
- Use Tailwind's utility classes

### Loading:
- Lazy load images if many publications
- Use efficient SVG icons
- Minimize external dependencies

---

## 🎉 Result

This implementation provides:
- ✅ Professional publications display
- ✅ Responsive design for all devices
- ✅ Interactive hover effects
- ✅ Status badges for publication states
- ✅ Download links for PDFs
- ✅ Clean, modern styling
- ✅ Easy content management
- ✅ SEO-friendly structure

The publications section integrates seamlessly with the existing website design and provides a professional way to showcase academic work.
