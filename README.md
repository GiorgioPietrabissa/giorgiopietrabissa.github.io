# Giorgio Pietrabissa – website

Built with Jekyll. GitHub turns these files into the website automatically
every time changes are pushed (it takes about a minute).

## Where to edit what

| To change…                                   | Edit this file             |
|----------------------------------------------|----------------------------|
| Bio paragraphs                               | `index.md`                 |
| Position, institution, email, photo          | `_config.yml`              |
| Papers (titles, coauthors, abstracts, links) | `_data/papers.yml`         |
| Teaching and PhD students                    | `_includes/teaching.md`    |
| Links under your name                        | `_data/navigation.yml`     |
| Fonts, colors, spacing, buttons              | `assets/site.css`          |
| CV                                           | replace `files/CV.pdf`, keeping the same name |

Put PDFs in `files/` and link them as `/files/name.pdf`
(in `papers.yml` and in `teaching.md` alike).

## Moving a section to its own page later (example: teaching)

1. Create `teaching.md` in the main folder, and move the content of
   `_includes/teaching.md` into it, below this header:

   ```
   ---
   layout: default
   title: Teaching
   permalink: /teaching/
   ---

   ## Teaching
   ```

2. In `_data/navigation.yml`, change the teaching link to `url: /teaching/`.
3. Delete `redirects/teaching.md`, and delete the teaching section
   (the four lines starting with `<section class="teaching"`) in `_layouts/home.html`.

## Moving from the test repository to the real site

In `_config.yml`, change `baseurl: "/Web_Gio"` to `baseurl: ""`.

## Credits

Font: Libertinus Serif (SIL Open Font License, `assets/fonts/OFL.txt`).
Icon: hop from Lucide, lucide.dev (ISC License, `assets/LICENSE-lucide.txt`).
