## OROYA Legal Site

Static website project for App Store legal and support pages.

### Structure

- `index.html`: root entry that forwards visitors to the primary legal page
- `privacy-policy/`
- `terms-of-use/`
- `community-guidelines/`
- `data-deletion/`
- `contact/`
- `assets/css/styles.css`: shared design system and layout
- `assets/js/site-data.js`: page content definitions
- `assets/js/site.js`: shared rendering and mobile menu logic

### Deployment

Deploy the full `legal-site` folder to the web server behind `http://oroya.xyz/`.

Expected routes:

- `/privacy-policy`
- `/terms-of-use`
- `/community-guidelines`
- `/data-deletion`
- `/contact`

### Adding a new page

1. Add a new route folder with an `index.html` file matching the existing page shells.
2. Add the new page definition to `assets/js/site-data.js`.
3. Add the route to the navigation array in `assets/js/site.js` if it should appear in the main nav.
