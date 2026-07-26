# Adeelan Yusoh Profile

Static personal developer profile website for GitHub Pages.

Status: Draft version

Live profile: https://adeelanwrk.github.io/adeelan-yusoh-profile/

## Files

- `index.html` - main profile page
- `assets/css/style.css` - responsive styling and first-load animation
- `assets/app/app.loader.js` - ordered script loader for the static app
- `assets/app/app.bootstrap.js` - app startup file
- `assets/app/core/config/` - app configuration and mail templates
- `assets/app/core/i18n/` - English/Thai text dictionary
- `assets/app/core/services/` - reusable i18n and mail services
- `assets/app/features/` - small UI feature components
- `assets/app/shared/` - shared DOM helpers
- `assets/profile.jpg` - profile photo asset, currently not displayed on the page

## Preview locally

Open `index.html` directly in a browser, or run a simple static server from this folder:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository, for example `adeelan-yusoh-profile`.
2. Push these files to the repository's default branch.
3. In GitHub, open `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the default branch and `/ (root)`.
6. Save. GitHub Pages will publish the site after the Pages workflow finishes.

No backend, database, npm install, paid service, or build step is required.
