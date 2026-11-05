const STORAGE_KEY = "shaqokaab.employerJobs.v1";
const seedJobs = [
  { id: "seed-1", title: "Senior Product Designer", company: "Atlas Digital", location: "Mogadishu", type: "Full-time", salary: "$1,200 - $1,800", category: "Design", description: "Design intuitive digital experiences for customers and internal teams.", featured: true, email: "careers@atlas.example" },
  { id: "seed-2", title: "Frontend Engineer", company: "NovaLabs", location: "Remote", type: "Remote", salary: "$1,500 - $2,200", category: "Technology", description: "Build polished web interfaces and improve user experience performance.", featured: true, email: "jobs@novalabs.example" },
  { id: "seed-3", title: "Operations Manager", company: "CityLoop", location: "Hargeisa", type: "Full-time", salary: "$1,000 - $1,500", category: "Operations", description: "Lead day-to-day logistics, service quality, and stakeholder coordination.", featured: false, email: "hiring@cityloop.example" },
  { id: "seed-4", title: "Business Development Executive", company: "SomNet", location: "Nairobi", type: "Contract", salary: "$900 - $1,300", category: "Business", description: "Drive partnerships, revenue growth, and new client acquisition.", featured: true, email: "talent@somnet.example" },
  { id: "seed-5", title: "Data Analyst", company: "GreenBox", location: "Remote", type: "Full-time", salary: "$1,100 - $1,600", category: "Technology", description: "Turn complex customer and operational data into actionable insights.", featured: false, email: "jobs@greenbox.example" },
  { id: "seed-6", title: "Marketing Strategist", company: "HarborOne", location: "Mogadishu", type: "Full-time", salary: "$950 - $1,400", category: "Marketing", description: "Craft growth campaigns across digital channels and local outreach.", featured: false, email: "careers@harborone.example" }
];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function getEmployerJobs() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((job) => job && typeof job === "object") : [];
  } catch {
    return [];
  }
}
function getAllJobs() { return [...getEmployerJobs(), ...seedJobs]; }
function initials(name) { return String(name || "?").trim().split(/\s+/).map((part) => part[0] || "").join("").slice(0, 2).toUpperCase(); }
function jobCard(job) {
  return `<article class="job-card"><div class="job-top"><div class="company-pill">${escapeHTML(initials(job.company))}</div><div class="job-meta"><h3>${escapeHTML(job.title)}</h3><span class="company-name">${escapeHTML(job.company)}</span></div>${job.featured ? '<span class="badge">Featured</span>' : ""}</div><p>${escapeHTML(job.description)}</p><div class="job-tags"><span>${escapeHTML(job.location)}</span><span>${escapeHTML(job.type)}</span><span>${escapeHTML(job.category || "General")}</span></div><div class="job-footer"><span class="salary">${escapeHTML(job.salary || "Salary not listed")}</span><a class="apply-btn" href="job.html?id=${encodeURIComponent(job.id)}">View details</a></div></article>`;
}
function renderHomeJobs() {
  const target = document.getElementById("jobList");
  if (target) target.innerHTML = getAllJobs().slice(0, 3).map(jobCard).join("");
}
function renderBoardJobs() {
  const target = document.getElementById("jobResults");
  if (!target) return;
  const keyword = document.getElementById("keywordInput");
  const location = document.getElementById("locationFilter");
  const type = document.getElementById("typeFilter");
  const count = document.getElementById("resultCount");
  let chipFilter = "all";
  const render = () => {
    const needle = (keyword?.value || "").trim().toLowerCase();
    const filtered = getAllJobs().filter((job) => {
      const text = `${job.title} ${job.company} ${job.category || ""} ${job.description}`.toLowerCase();
      const loc = location?.value || "all";
      const selectedType = type?.value || "all";
      return (!needle || text.includes(needle)) && (loc === "all" || job.location.toLowerCase() === loc.toLowerCase()) && (selectedType === "all" || job.type === selectedType) && (chipFilter === "all" || (chipFilter === "remote" && job.location === "Remote") || (chipFilter === "full-time" && job.type === "Full-time") || (chipFilter === "contract" && job.type === "Contract"));
    });
    if (count) count.textContent = `${filtered.length} role${filtered.length === 1 ? "" : "s"}`;
    target.innerHTML = filtered.length ? filtered.map(jobCard).join("") : '<div class="empty-state"><h3>No matching jobs</h3><p>Try changing your keyword or filters.</p></div>';
  };
  [keyword, location, type].forEach((input) => input?.addEventListener(input === keyword ? "input" : "change", render));
  document.querySelectorAll(".chip").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active"); chipFilter = button.dataset.filter || "all"; render();
  }));
  render();
}
function renderJobDetail() {
  const target = document.getElementById("jobDetail");
  if (!target) return;
  const id = new URLSearchParams(location.search).get("id");
  const job = getAllJobs().find((item) => String(item.id) === id);
  if (!job) { target.innerHTML = '<div class="empty-state"><h2>Job not found</h2><p>This listing may have expired or been removed.</p><a class="primary-btn" href="jobs.html">Browse jobs</a></div>'; return; }
  target.innerHTML = `<div class="detail-header"><div class="detail-company"><div class="company-pill">${escapeHTML(initials(job.company))}</div><div><p class="detail-company-name">${escapeHTML(job.company)}</p><h1>${escapeHTML(job.title)}</h1></div></div><a href="jobs.html" class="secondary-btn">← All jobs</a></div><div class="meta-grid"><div class="meta-box"><span>Location</span><strong>${escapeHTML(job.location)}</strong></div><div class="meta-box"><span>Type</span><strong>${escapeHTML(job.type)}</strong></div><div class="meta-box"><span>Salary</span><strong>${escapeHTML(job.salary || "Not listed")}</strong></div><div class="meta-box"><span>Category</span><strong>${escapeHTML(job.category || "General")}</strong></div></div><div class="detail-body"><div class="detail-copy"><h3>About this role</h3><p>${escapeHTML(job.description)}</p><h3>Next steps</h3><p>Contact the employer directly to ask questions and submit your application.</p></div><aside class="detail-side"><div class="side-card"><h3>Interested?</h3><span class="salary">${escapeHTML(job.salary || "Salary not listed")}</span><a class="apply-btn apply-link" href="mailto:${encodeURIComponent(job.email || "")}?subject=${encodeURIComponent(`Application: ${job.title}`)}">Apply by email</a><button class="secondary-btn save-job" type="button" data-id="${escapeHTML(job.id)}">Save job</button></div></aside></div>`;
  target.querySelector(".save-job")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem("shaqokaab.savedJobs.v1") || "[]"); } catch { saved = []; }
    const key = String(job.id);
    if (!saved.includes(key)) saved.push(key);
    localStorage.setItem("shaqokaab.savedJobs.v1", JSON.stringify(saved));
    button.textContent = "Saved"; button.disabled = true;
  });
}
function renderEmployerDashboard() {
  const list = document.getElementById("employerJobs");
  const count = document.getElementById("employerJobCount");
  const form = document.getElementById("jobForm");
  if (!list || !form) return;
  const render = () => {
    const jobs = getEmployerJobs();
    if (count) count.textContent = `${jobs.length} listing${jobs.length === 1 ? "" : "s"}`;
    list.innerHTML = jobs.length ? jobs.map((job) => `<article class="employer-job"><div><h3>${escapeHTML(job.title)}</h3><p>${escapeHTML(job.company)} · ${escapeHTML(job.location)} · ${escapeHTML(job.type)}</p></div><button class="delete-job" type="button" data-id="${escapeHTML(job.id)}" aria-label="Delete ${escapeHTML(job.title)}">Delete</button></article>`).join("") : '<div class="empty-state"><h3>No listings yet</h3><p>Publish your first role using the form.</p></div>';
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const job = {
      id: `employer-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: String(data.get("title") || "").trim(), company: String(data.get("company") || "").trim(),
      location: String(data.get("location") || "").trim(), type: String(data.get("type") || "").trim(),
      salary: String(data.get("salary") || "").trim(), category: String(data.get("category") || "General").trim(),
      email: String(data.get("email") || "").trim(), description: String(data.get("description") || "").trim(), featured: false
    };
    if (!job.title || !job.company || !job.location || !job.type || !job.email || !job.description) return;
    const jobs = getEmployerJobs(); jobs.unshift(job);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
      form.reset();
      const message = document.getElementById("formMessage");
      if (message) message.textContent = "Your job is published on this browser and now appears in the job board.";
      render();
    } catch {
      const message = document.getElementById("formMessage");
      if (message) message.textContent = "Could not save this listing. Your browser storage may be full or disabled.";
    }
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-job");
    if (!button) return;
    const id = button.dataset.id;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getEmployerJobs().filter((job) => String(job.id) !== id)));
    render();
  });
  render();
}
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderHomeJobs();
    document.getElementById("searchForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const params = new URLSearchParams();
      const keyword = document.getElementById("keywordInput")?.value.trim();
      const location = document.getElementById("locationFilter")?.value;
      const type = document.getElementById("typeFilter")?.value;
      if (keyword) params.set("q", keyword);
      if (location && location !== "all") params.set("location", location);
      if (type && type !== "all") params.set("type", type);
      window.location.href = `jobs.html${params.size ? `?${params}` : ""}`;
    });
  }
  if (page === "jobs") {
    const params = new URLSearchParams(location.search);
    if (params.has("q")) document.getElementById("keywordInput").value = params.get("q");
    if (params.has("location")) document.getElementById("locationFilter").value = params.get("location");
    if (params.has("type")) document.getElementById("typeFilter").value = params.get("type");
    renderBoardJobs();
  }
  if (page === "job-detail") renderJobDetail();
  if (page === "employer") renderEmployerDashboard();
});
