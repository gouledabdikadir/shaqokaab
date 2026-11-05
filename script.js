 :root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-soft: #eef5ff;
  --navy-900: #0a1428;
  --navy-700: #1c2d48;
  --navy-500: #4f6485;
  --primary: #1558d6;
  --primary-strong: #0d46b3;
  --primary-soft: rgba(21, 88, 214, 0.12);
  --accent: #f7b955;
  --text: #11213d;
  --muted: #5d6b82;
  --line: #e4eaf5;
  --success: #1bb884;
  --shadow: 0 20px 45px rgba(15, 32, 62, 0.08);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button, input, select {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(244, 247, 251, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(20, 32, 56, 0.06);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--navy-900);
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: white;
  background: linear-gradient(135deg, var(--primary), #3a75ff);
  box-shadow: 0 12px 24px rgba(21, 88, 214, 0.25);
}

.brand-text {
  font-size: 1.2rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--navy-700);
  font-weight: 500;
}

.main-nav a {
  opacity: 0.86;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  opacity: 1;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.link-btn,
.primary-btn,
.search-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.link-btn {
  padding: 0.7rem 1rem;
  color: var(--navy-700);
  border: 1px solid rgba(17, 33, 61, 0.06);
  background: rgba(255, 255, 255, 0.7);
}

.primary-btn,
.search-btn {
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 16px 24px rgba(21, 88, 214, 0.22);
}

.primary-btn {
  padding: 0.8rem 1.2rem;
}

.search-btn {
  min-height: 58px;
  min-width: 160px;
  padding: 0.85rem 1.4rem;
  cursor: pointer;
}

.primary-btn:hover,
.search-btn:hover,
.link-btn:hover {
  transform: translateY(-1px);
}

.hero {
  padding: 72px 0 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(21, 88, 214, 0.08);
  color: var(--primary-strong);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.eyebrow.accent {
  background: rgba(247, 185, 85, 0.18);
  color: #9d6b00;
}

.hero-copy h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.7rem, 4vw, 4.4rem);
  line-height: 1.05;
  color: var(--navy-900);
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 720px;
  color: var(--muted);
  font-size: 1.08rem;
}

.search-panel {
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr auto;
  gap: 14px;
  margin-top: 28px;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 33, 61, 0.06);
  box-shadow: var(--shadow);
}

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--muted);
}

.input-wrap span {
  padding-left: 4px;
  font-weight: 600;
}

.input-wrap input,
.input-wrap select {
  width: 100%;
  min-height: 58px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  padding: 0.85rem 1rem;
  color: var(--text);
}

.input-wrap input:focus,
.input-wrap select:focus {
  outline: 2px solid rgba(21, 88, 214, 0.18);
  border-color: rgba(21, 88, 214, 0.34);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 18px;
  margin-top: 30px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 33, 61, 0.06);
}

.hero-stats strong {
  font-size: 1.8rem;
  color: var(--navy-900);
  letter-spacing: -0.04em;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.84rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 420px);
  background: linear-gradient(180deg, #f7faff 0%, #ffffff 100%);
  border: 1px solid rgba(17, 33, 61, 0.06);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.feature-card {
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(21, 88, 214, 0.12), transparent 70%);
  transform: translate(-20%, -15%);
}

.mini-tag {
  position: relative;
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(21, 88, 214, 0.08);
  color: var(--primary-strong);
  font-weight: 700;
  font-size: 0.72rem;
  margin-bottom: 18px;
}

.company-row {
  position: relative;
  display: flex;
  gap: 14px;
  align-items: center;
}

.company-badge {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--primary), #3a75ff);
  color: white;
  font-weight: 700;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 22px rgba(21, 88, 214, 0.18);
}

.company-row h3 {
  margin: 0;
  font-size: 1.35rem;
}

.company-row p {
  margin: 6px 0 0;
  color: var(--muted);
}

.feature-card ul {
  position: relative;
  padding-left: 18px;
  margin: 20px 0 16px;
  color: var(--navy-700);
}

.feature-card li + li {
  margin-top: 10px;
}

.text-link {
  position: relative;
  color: var(--primary-strong);
  font-weight: 700;
}

.categories,
.jobs,
.companies,
.process {
  padding: 28px 0 44px;
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 14px 0 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
  color: var(--navy-900);
}

.narrow {
  max-width: 620px;
}

.category-grid,
.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.category-card,
.process-card {
  background: var(--panel);
  border: 1px solid rgba(17, 33, 61, 0.06);
  border-radius: 22px;
  padding: 24px 20px;
  box-shadow: 0 14px 30px rgba(17, 33, 61, 0.04);
}

.category-card .icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: var(--primary-soft);
  font-size: 1.6rem;
  margin-bottom: 16px;
}

.category-card h3,
.process-card h3 {
  margin: 0 0 8px;
  font-size: 1.3rem;
  color: var(--navy-900);
}

.category-card p,
.process-card p,
.site-footer p {
  margin: 0;
  color: var(--muted);
}

.jobs-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.jobs-header h2 {
  margin: 12px 0 0;
  color: var(--navy-900);
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  border: 1px solid rgba(17, 33, 61, 0.08);
  background: #fff;
  color: var(--navy-700);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.chip.active {
  background: var(--primary-soft);
  border-color: rgba(21, 88, 214, 0.18);
  color: var(--primary-strong);
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.job-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--panel);
  border: 1px solid rgba(17, 33, 61, 0.06);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 14px 30px rgba(17, 33, 61, 0.04);
}

.job-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
}

.company-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(135deg, #dfeaff, #edf4ff);
  color: var(--primary-strong);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.job-meta {
  flex: 1;
}

.job-meta h3 {
  margin: 0;
  font-size: 1.3rem;
  color: var(--navy-900);
}

.company-name {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-weight: 600;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: #ebf7f1;
  color: var(--success);
}

.job-card p {
  margin: 0;
  color: var(--muted);
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.job-tags span {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: #f3f6fb;
  color: var(--navy-700);
  font-size: 0.76rem;
  font-weight: 600;
}

.job-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
}

.salary {
  font-weight: 700;
  color: var(--navy-900);
}

.apply-btn {
  border: none;
  background: rgba(21, 88, 214, 0.08);
  color: var(--primary-strong);
  padding: 0.72rem 1rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}

.logo-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  align-items: center;
}

.logo-strip span {
  display: grid;
  place-items: center;
  min-height: 90px;
  border-radius: 18px;
  border: 1px solid rgba(17, 33, 61, 0.08);
  background: rgba(255, 255, 255, 0.7);
  color: var(--navy-700);
  font-weight: 700;
}

.step-number {
  display: inline-flex;
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 0.8rem;
  color: var(--primary-strong);
}

.cta-section {
  padding: 50px 0 80px;
}

.cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 32px;
  border-radius: 30px;
  background: linear-gradient(135deg, #0d1d38, #143a72);
  color: white;
  box-shadow: var(--shadow);
}

.cta-card h2 {
  margin: 10px 0 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
  letter-spacing: -0.05em;
}

.large {
  padding: 1rem 1.5rem;
  font-size: 1rem;
}

.site-footer {
  border-top: 1px solid rgba(17, 33, 61, 0.06);
  background: rgba(255, 255, 255, 0.72);
  padding: 24px 0 38px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-brand {
  margin-bottom: 10px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: var(--navy-700);
  font-weight: 600;
}

@media (max-width: 980px) {
  .hero-grid,
  .category-grid,
  .jobs-grid,
  .process-grid,
  .logo-strip {
    grid-template-columns: 1fr 1fr;
  }

  .search-panel {
    grid-template-columns: 1fr 1fr;
  }

  .jobs-header,
  .footer-wrap,
  .cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .main-nav,
  .nav-actions {
    display: none;
  }

  .hero-grid,
  .category-grid,
  .jobs-grid,
  .process-grid,
  .logo-strip,
  .search-panel,
  .hero-stats {
    grid-template-columns: 1fr;
  }

  .search-panel {
    padding: 14px;
  }

  .job-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-card {
    padding: 24px 20px;
  }
}































































































































































































"},{