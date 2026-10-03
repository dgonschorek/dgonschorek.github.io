# dgonschorek.github.io

Source for my personal website: [dominic-gonschorek.com](https://dominic-gonschorek.com)

Built with Jekyll on GitHub Pages, based on [Academic Pages](https://academicpages.github.io/)
(a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)).

## Where things live

| What | Where |
| --- | --- |
| Site settings, profile/sidebar, social links | `_config.yml` |
| Top navigation | `_data/navigation.yml` |
| Home page | `_pages/about.md` |
| News items (home page + `/news/`) | `_data/news.yml` |
| Research page | `_pages/research.md` |
| Publications (one file per paper) | `_publications/` |
| Talks | `_talks/` |
| Teaching, mentoring, outreach | `_teaching/` |
| HTML CV / PDF CV | `_pages/cv.md` / `files/CV_DG.pdf` |
| Styles (site-specific layer) | `_sass/layout/_site.scss`, colours in `_sass/theme/_default_*.scss` |

### Adding a publication

Copy an existing file in `_publications/` and edit the front matter:

- `category`: `manuscripts` (journal), `conferences` or `preprints`
- `authors`: list of `"Lastname, I."`; mark shared first `*`, shared second `+`, shared senior `§`
- `role`: optional label such as `"First author"` or `"Shared senior author"`
- `themes`: any of `retina`, `neuromodulation`, `colliculus`, `ml`, `data` (shown on the Research page)
- `selected: true` to feature it on the home page
- links: `paperurl`, `doi`, `preprint`, `pdf`, `code`, `data`, `colab`, `project` (leave empty if not available)

### Adding a talk or teaching entry

Copy a file in `_talks/` or `_teaching/`; the fields are documented by example. Talks and teaching
entries have no pages of their own; they are listed on `/talks/` and `/teaching/`.

## Local preview

```bash
bundle install
bundle exec jekyll serve -l
# then open http://localhost:4000
```

Or with Docker: `docker compose up`.

The JavaScript bundle (`assets/js/main.min.js`) is committed. After editing `assets/js/_main.js`
or `assets/js/plugins/`, rebuild it with:

```bash
npm install
npm run build:js
```
