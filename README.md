# EAC Website V1

Public website for **Elwell Automation Consulting LLC**.

Production domain: `https://elwellautomation.com`

## Stack

- Plain HTML
- Plain CSS
- Minimal vanilla JavaScript
- GitHub Pages
- Porkbun DNS

No build step and no framework are required.

## Local preview

The simplest option is to open `index.html` directly in your browser.

For a local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Repository setup

Recommended repository name: `eac-website`

```bash
git init
git add .
git commit -m "Initial EAC website"
git branch -M main
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/eac-website.git
git push -u origin main
```

HTTPS remote alternative:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/eac-website.git
```

## GitHub Pages

In GitHub:

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Branch: `main`.
5. Folder: `/ (root)`.
6. Save.
7. Under **Custom domain**, enter `elwellautomation.com` and save.
8. After DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS**.

The root `CNAME` file is included for branch-based Pages publishing.

## Porkbun DNS

Use Porkbun's GitHub Pages Quick DNS Config if available. For manual configuration, GitHub's current apex A records are:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

And add:

- CNAME `www` → `YOUR_GITHUB_USERNAME.github.io`

Delete conflicting default A/AAAA/CNAME records for the website hostnames before adding GitHub Pages records. Do not delete email MX/TXT records once email is configured.

## Secondary domain

Use Porkbun URL Forwarding to redirect:

`elwellautomationconsulting.com` → `https://elwellautomation.com`

Use a permanent redirect if Porkbun offers the choice.

## Contact email

The site currently references `brandon@elwellautomation.com`. Set up and test that mailbox before launch, or change the address in `index.html`.

## First edits to make

- Confirm the final email address.
- Add a real logo/brand asset later if desired.
- Review technical capability wording before launch.
- Add a project inquiry form later if you want something more structured than email.
