# Contributing

- [How to Contribute](#how-to-contribute)
  - [Getting Code](#getting-code)
  - [Coding Style](#code-style)
  - [Commit Messages](#commit-messages)
  - [Share your adventure](#share-your-adventure)

## How to Contribute

### Getting Code

Make sure you're running Node.js 14+ and PNPM 6+

1. Clone this repository

```bash
git clone https://github.com/test2user-aqil/serguzeshti-bekar
cd serguzeshti-bekar
```

2. Install dependencies

```bash
pnpm i
```

3. Run it locally

```bash
pnpm run dev
```

### Code Style

- Coding style is defined in [.prettierrc](https://github.com/test2user-aqil/serguzeshti-bekar/blob/master/.prettierrc)

To run code formatter, use:

```bash
pnpm run format
```

### Commit Messages

Commit messages should follow the Semantic Commit Messages format:

```
label(namespace): title

description

footer
```

1. _label_ is one of the following:

   - `fix` - bug fixes.
   - `feat` - features.
   - `perf` - performace improvements.
   - `docs` - changes to docs, e.g. `docs(readme.md): ..` to change documentation.
   - `chore` - everything that doesn't fall under previous categories

2. _namespace_ is **optional**, put in parenthesis after label and is optional. Must be lowercase.
3. _title_ is a brief summary of changes.
4. _description_ is **optional**, new-line separated from title and is in present tense.
5. _footer_ is **optional**, new-line separated from _description_ and contains "fixes" / "references" attribution to github issues.

Example:

```
chore(bendler): add new bend

Add Subhan's adventures
```

### Share your adventure

1. Fork this repository.
2. Create a new markdown file in `src/routes/bendler/`, e.g. `src/routes/bendler/my-title.md`.
3. Commit your changes by following [these rules](#commit-messages).
4. Open pull request. If your changes are good enough, i'll merge it.
