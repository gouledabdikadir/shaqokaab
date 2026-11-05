(function () {
  const PROFILE_KEY = "shaqokaab.candidateProfile.v1";
  const SAVED_KEY = "shaqokaab.savedJobs.v1";
  const APPLICATIONS_KEY = "shaqokaab.applications.v1";

  function readJSON(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value == null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function getJobs() {
    return typeof getAllJobs === "function" ? getAllJobs() : [];
  }

  function renderCandidateDashboard() {
    const form = document.getElementById("candidateProfileForm");
    if (!form) return;

    const profile = readJSON(PROFILE_KEY, {});
    if (profile.name) form.elements.name.value = profile.name;
    if (profile.email) form.elements.email.value = profile.email;

    const savedIds = readJSON(SAVED_KEY, []).map(String);
    const savedJobs = getJobs().filter((job) => savedIds.includes(String(job.id)));
    const applications = readJSON(APPLICATIONS_KEY, []).filter((item) => item && typeof item === "object");
    const savedContainer = document.getElementById("savedJobs");
    const applicationsContainer = document.getElementById("candidateApplications");
    const savedCount = document.getElementById("savedCount");
    const applicationCount = document.getElementById("applicationCount");

    savedCount.textContent = `${savedJobs.length} job${savedJobs.length === 1 ? "" : "s"}`;
    savedContainer.innerHTML = savedJobs.length ? savedJobs.map((job) => `<article class="candidate-item"><div><h3>${esc(job.title)}</h3><p>${esc(job.company)} · ${esc(job.location)} · ${esc(job.type)}</p></div><div class="candidate-item-actions"><a class="secondary-btn" href="job.html?id=${encodeURIComponent(job.id)}">View job</a><button type="button" class="candidate-remove" data-remove-saved="${esc(job.id)}">Remove</button></div></article>`).join("") : '<div class="candidate-empty">No saved jobs yet. Browse jobs and use “Save job” on a listing you like.</div>';

    applicationCount.textContent = `${applications.length} application${applications.length === 1 ? "" : "s"}`;
    applicationsContainer.innerHTML = applications.length ? applications.map((application) => {
      const job = getJobs().find((item) => String(item.id) === String(application.jobId));
      const title = job?.title || application.title || "Job listing";
      const company = job?.company || application.company || "Employer";
      const when = application.appliedAt ? new Date(application.appliedAt).toLocaleDateString() : "Recently";
      return `<article class="candidate-item"><div><h3>${esc(title)}</h3><p>${esc(company)} · Saved ${esc(when)}</p></div><div class="candidate-item-actions"><span class="candidate-status">Demo only · not sent</span>${job ? `<a class="secondary-btn" href="job.html?id=${encodeURIComponent(job.id)}">View job</a>` : ""}</div></article>`;
    }).join("") : '<div class="candidate-empty">Your demo application records will appear here. They are stored only in this browser and are not sent to employers.</div>';

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nextProfile = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim() };
      const message = document.getElementById("candidateMessage");
      message.textContent = writeJSON(PROFILE_KEY, nextProfile) ? "Profile saved in this browser." : "Could not save your profile. Check browser storage settings.";
    });

    savedContainer.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-saved]");
      if (!button) return;
      const id = button.dataset.removeSaved;
      writeJSON(SAVED_KEY, readJSON(SAVED_KEY, []).map(String).filter((savedId) => savedId !== id));
      renderCandidateDashboard();
    }, { once: true });
  }

  function trackEmailApplication() {
    const detail = document.getElementById("jobDetail");
    if (!detail) return;
    detail.addEventListener("click", (event) => {
      const link = event.target.closest(".apply-link");
      if (!link) return;
      const id = new URLSearchParams(location.search).get("id");
      const job = getJobs().find((item) => String(item.id) === id);
      if (!job) return;
      const applications = readJSON(APPLICATIONS_KEY, []);
      if (!applications.some((application) => String(application.jobId) === String(job.id))) {
        applications.unshift({ jobId: job.id, title: job.title, company: job.company, appliedAt: new Date().toISOString(), status: "saved-locally" });
        writeJSON(APPLICATIONS_KEY, applications);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCandidateDashboard();
    trackEmailApplication();
  });
})();
