# EAC Website V2

Production static site for Elwell Automation Consulting LLC.

## Deploy
Replace the matching files in the existing EAC-Website repo, then:

```powershell
eacwebpush
```

Suggested commit message: `EAC website V2 visual redesign`

## Included
- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `assets/eac-logo.png`

## Photography
The current V2 uses one remotely hosted Unsplash industrial-control-panel image by Raymond Sime as a launch-safe visual reference. For the strongest long-term brand, replace it with EAC-owned/project photography when available and permitted.

## V2.1
- Corrected logo sizing/containment across header, hero, contact panel, and footer.
- Removed the conflicting global logo override that caused the source PNG to render at intrinsic size.
- Added explicit component-level image sizing safeguards.
