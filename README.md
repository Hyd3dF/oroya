## OROYA Legal Site

Static website project for App Store legal and support pages.

### Structure

All deployable files are placed directly in the `legal-site` root folder.

- `index.html`: root entry that forwards visitors to the primary legal page
- `privacy-policy.html`
- `terms-of-use.html`
- `community-guidelines.html`
- `data-deletion.html`
- `contact.html`
- `styles.css`: shared design system and layout
- `site-data.js`: page content definitions
- `site.js`: shared rendering and mobile menu logic
- `serve-local.js`: local static preview server

### Deployment

Deploy the full `legal-site` folder to the web server behind `http://oroya.xyz/`.

Expected files:

- `/privacy-policy.html`
- `/terms-of-use.html`
- `/community-guidelines.html`
- `/data-deletion.html`
- `/contact.html`

### Adding a new page

1. Add a new root `.html` file matching the existing page shells.
2. Add the new page definition to `site-data.js`.
3. Add the file path to the navigation array in `site.js` if it should appear in the main nav.
