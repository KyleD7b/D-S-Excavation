# D&S Excavation Inc

Website for **D&S Excavation Inc** — a locally owned, licensed, bonded and insured
excavation company serving Sandpoint and North Idaho.

## Structure

```
index.html      Single-page site
styles.css      Styling (red/black brand theme)
script.js       Mobile menu + gallery lightbox
images/         Logo, hero banner, truck photos, and job placeholders
```

## Editing

Open `index.html` in any browser. No build tools required.

### Adding job photos
1. Drop the image into `images/` with a descriptive, lowercase-hyphenated name
   (e.g. `retaining-wall-sagle.jpg`). Good filenames help image search (SEO).
2. In the Gallery section of `index.html`, copy an existing `gallery-item`
   block and update both the `src`/`data-full` path and the `alt`/`data-caption`
   text so it describes what the photo shows.

### Reviews
The Reviews section has a "Leave Us a Review" form. Submissions are emailed to
the owner (once Formspree is set up — see below). To publish a review, paste it
into the commented example block near the top of the Reviews section as a
`review-card` inside a `reviews-grid`.

### Forms (Formspree)
Both the quote form and the review form need a free Formspree endpoint to send email:
1. Create an account at https://formspree.io
2. Create **two** forms — one for quotes, one for reviews.
3. In `index.html`, replace `YOUR_QUOTE_FORM_ID` (quote form) and
   `YOUR_REVIEW_FORM_ID` (review form) with the matching endpoint IDs.

### Social links
In the footer of `index.html`, replace the `href="#"` placeholders with your
Facebook and Instagram URLs when the accounts are ready.

### Logo
`images/logo.png` and `images/hero-banner.png` can be replaced with corrected
artwork using the same filenames.

## SEO

### When you register a domain
Search `YOURDOMAIN.com` across the project and replace it with your real domain
(no trailing slash issues — keep the format shown). It appears in:
- `index.html` — the JSON-LD structured data (`url`, `image`) and the commented
  `og:url` / canonical example (uncomment and set those two tags).
- `sitemap.xml` — the `<loc>` URL.
- `robots.txt` — the `Sitemap:` line.

### Biggest wins (off-site, do these)
1. **Google Business Profile** — set one up first; it drives local map rankings
   more than anything on the website.
2. **Consistent NAP** — use the exact same Name, phone, and area ("D&S Excavation
   Inc", (208) 290-6054, Sandpoint / North Idaho) on Google, Facebook, Yelp, Angi, etc.
3. **Google reviews** — ask happy customers to leave one.

### Job photo alt text
When you have job locations, update the `alt`/`data-caption` text in the Gallery
to include real towns (e.g. "retaining wall in Sagle") for better local search.

## Contact

- (208) 290-6054
- 7bdirt@gmail.com
- Serving Sandpoint & North Idaho
