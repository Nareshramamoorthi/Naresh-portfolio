# 🚀 Quick Deployment Guide - GitHub Pages

## Simple 3-Step Deployment

### Step 1: Update Repository Name (IMPORTANT!)

1. Open `vite.config.js`
2. Find this line:
   ```js
   base: '/Portflio/',
   ```
3. Change `Portflio` to your actual GitHub repository name
   - If your repo is `my-portfolio`, change it to: `base: '/my-portfolio/',`
   - If your repo is `Portflio`, keep it as is

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

**Method A: Automatic (Recommended - Uses GitHub Actions)**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow file (`.github/workflows/deploy.yml`) is already created
5. Every time you push to `main`, it will automatically deploy!

**Method B: Manual Deployment**

1. Run this command:
   ```bash
   npm run deploy
   ```

2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Under **Source**, select **Branch: gh-pages** and folder **/ (root)**
5. Click **Save**

### ✅ Done!

Your portfolio will be live at:
```
https://yourusername.github.io/your-repo-name/
```

## 🔄 Updating Your Site

**If using GitHub Actions (Method A):**
- Just push changes to `main` branch
- GitHub will automatically rebuild and deploy

**If using Manual (Method B):**
- Make your changes
- Run `npm run deploy` again
- Changes will be live in a few minutes

## ⚠️ Common Issues

**Site shows blank page:**
- Check that `base` in `vite.config.js` matches your repo name exactly
- Make sure there are no typos

**Images not loading:**
- All images must be in `public/images/` folder
- Use paths like `/images/filename.jpg`

**Build fails:**
- Run `npm install` first
- Check for any errors in the terminal

## 📝 Need Help?

Check the main `README.md` for more detailed information!

