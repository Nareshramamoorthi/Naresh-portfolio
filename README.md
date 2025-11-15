# Nash - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark mode, smooth animations, and a fully interactive timeline.

## ✨ Features

- 🎨 Modern, clean design with blue accent theme
- 🌙 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive across all devices
- ✨ Smooth animations using Framer Motion
- 📊 Interactive timeline of journey
- 📧 Contact form with Formspree integration
- 📄 Downloadable resume PDF
- 🎯 SEO-friendly structure
- 🎮 Custom 404 page with easter egg

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

### Step 1: Update Repository Name

1. Open `vite.config.js`
2. Change the `base` path to match your GitHub repository name:
   ```js
   base: '/your-repo-name/', // Replace 'your-repo-name' with your actual repo name
   ```

### Step 2: Install GitHub Pages Package (Already Done)

The `gh-pages` package is already installed. If you need to reinstall:

```bash
npm install --save-dev gh-pages
```

### Step 3: Deploy to GitHub Pages

**Option A: Automatic Deployment (Recommended)**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Go to your GitHub repository
3. Click on **Settings** → **Pages**
4. Under **Source**, select **GitHub Actions**
5. Create a new file `.github/workflows/deploy.yml` (see below)

**Option B: Manual Deployment**

Run this command:

```bash
npm run deploy
```

This will:
- Build your project
- Deploy it to the `gh-pages` branch
- Make it available at `https://yourusername.github.io/Portflio/`

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Branch: gh-pages** and folder **/ (root)**
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/Portflio/`

## 🔧 GitHub Actions Workflow (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📁 Project Structure

```
Portflio/
├── public/
│   ├── images/          # Image assets
│   └── Naresh_Ramamoorthi_Resume.pdf  # Resume PDF
├── src/
│   ├── components/      # React components
│   ├── contexts/        # Theme context
│   ├── pages/          # Page components (404)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── package.json         # Dependencies
```

## ⚙️ Configuration

### Formspree Setup

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Your form ID is already configured: `meopyjrn`
4. Update if needed in `src/components/Contact.jsx`

### Update Repository Name in Vite Config

**IMPORTANT:** Before deploying, update the base path in `vite.config.js`:

```js
base: '/your-actual-repo-name/', // Must match your GitHub repo name
```

If your repo is named `Portflio`, keep it as is. If different, change it!

## 🎨 Customization

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Adjust animations in component files
- Update social links in Hero and Footer components
- Change "Nash" branding in Navbar component

## 📝 Important Notes

1. **Repository Name**: Make sure the `base` in `vite.config.js` matches your GitHub repository name
2. **Images**: All images should be in `public/images/` folder
3. **Resume**: The resume PDF is in `public/` folder
4. **Dark Mode**: Theme preference is saved in localStorage
5. **Formspree**: Contact form is already configured

## 🐛 Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for any linting errors: `npm run build`

### GitHub Pages Not Loading
- Verify the `base` path in `vite.config.js` matches your repo name
- Check that GitHub Pages is enabled in repository settings
- Ensure the `gh-pages` branch exists after deployment

### Images Not Showing
- Make sure images are in `public/images/` folder
- Use paths like `/images/filename.jpg` (not `./images/`)

## 📄 License

MIT

## 👤 Author

**Naresh Ramamoorthy (Nash)**
- Email: rn86615@gmail.com
- LinkedIn: [linkedin.com/in/naresh-ramamoorthi](https://www.linkedin.com/in/naresh-ramamoorthi/)
- GitHub: [github.com/Nareshramamoorthi](https://github.com/Nareshramamoorthi)

---

**Ready to deploy?** Follow the GitHub Pages Deployment section above! 🚀
