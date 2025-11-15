# 🚀 Push to GitHub - Simple Instructions

## Option 1: Using GitHub CLI (Easiest - Recommended)

If you have GitHub CLI installed:

```bash
gh auth login
```

Then push:
```bash
git push -u origin main
```

## Option 2: Using Personal Access Token (Most Common)

### Step 1: Create Personal Access Token
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Push"
4. Select scopes: Check **repo** (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push
When you run `git push`, it will ask for:
- **Username**: `Nareshramamoorthi`
- **Password**: Paste your personal access token (not your GitHub password)

## Option 3: Use SSH (If you have SSH keys set up)

Change remote to SSH:
```bash
git remote set-url origin git@github.com:Nareshramamoorthi/Naresh-portfolio.git
git push -u origin main
```

## Quick Command to Run:

Just run this command in your terminal:
```bash
git push -u origin main
```

When prompted:
- Username: `Nareshramamoorthi`
- Password: Use a Personal Access Token (see Option 2 above)

---

**After pushing successfully:**
1. Go to your repository: https://github.com/Nareshramamoorthi/Naresh-portfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Your site will be live at: `https://nareshramamoorthi.github.io/Naresh-portfolio/`

