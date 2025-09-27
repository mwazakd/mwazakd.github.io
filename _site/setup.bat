@echo off
echo Setting up Jekyll + Tailwind + Decap CMS Personal Website...
echo.

echo Installing npm dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error installing npm dependencies
    pause
    exit /b 1
)

echo.
echo Installing Ruby gems...
bundle install
if %errorlevel% neq 0 (
    echo Error installing Ruby gems. Make sure Ruby and Bundler are installed.
    pause
    exit /b 1
)

echo.
echo Building Tailwind CSS...
npm run build:css
if %errorlevel% neq 0 (
    echo Error building CSS
    pause
    exit /b 1
)

echo.
echo Setup complete!
echo.
echo To start the development server, run:
echo bundle exec jekyll serve --livereload
echo.
echo Then open http://127.0.0.1:4000 in your browser.
echo.
echo For deployment instructions, see DEPLOYMENT_GUIDE.md
pause