module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.md',
    './_posts/**/*.md',
    './_site/**/*.html',
    './index.md',
    './admin/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}