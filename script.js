const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealNodes = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealNodes.forEach((node) => observer.observe(node));
}

// Keep Studio Savior release labels synchronized with the production release API.
// The download links already use the stable production redirect endpoint, so a
// new release only requires updating the production release metadata.
const studioSaviorVersionNodes = document.querySelectorAll('[data-studio-savior-version]');

if (studioSaviorVersionNodes.length) {
  fetch('https://api.studio.elwellautomation.com/v1/releases/windows/latest', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-store',
    headers: { 'Accept': 'application/json' },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Release API returned ${response.status}`);
      return response.json();
    })
    .then((release) => {
      const version = String(release.version || '').trim().replace(/^v/i, '');
      if (!version) throw new Error('Release API did not return a version.');
      studioSaviorVersionNodes.forEach((node) => {
        node.textContent = `v${version}`;
      });
    })
    .catch(() => {
      // Never leave a stale hard-coded release number on the public site.
      // "Latest version" remains useful if the API is temporarily unavailable.
      studioSaviorVersionNodes.forEach((node) => {
        node.textContent = 'Latest version';
      });
    });
}
