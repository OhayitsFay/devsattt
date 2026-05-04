# Devsattt Logistics Website

Static multi-page website for Devsattt Logistics, a clearing, forwarding, freight, warehousing, and logistics services company based in Lagos, Nigeria.

## Pages

- `index.html` - home page with hero, company overview, services preview, weather widget, reasons to choose Devsattt, and client reviews.
- `about.html` - company background, mission and vision tabs, service locations, and executive team.
- `services.html` - detailed customs clearance, tariff consultation, and warehousing service information.
- `contact.html` - contact cards and inquiry form.

## Project Structure

```text
.
├── images/          Site images and icons
├── script/          JavaScript for navigation, tabs, reviews, weather, and dates
├── styles/          Normalize and shared site styles
├── about.html
├── contact.html
├── index.html
├── services.html
└── README.md
```

## Running Locally

This is a static website. You can open `index.html` directly in a browser, or serve the folder with any static server.

Example with Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The review form stores submitted reviews in the browser's `localStorage`.
- The weather widget uses OpenWeatherMap and requires network access.
- The contact form posts to Formspree.
