(function () {
  const APPLICATIONS_KEY = "shaqokaab.applications.v1";
  const DIALOG_ID = "applicationDialog";

  function readApplications() {
    try {
      const value = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function getCurrentJob() {
    if (typeof getAllJobs !== "function") return null;
    const id = new URLSearchParams(location.search).get("id");
    return getAllJobs().find((job) => String(job.id) === id) || null;
  }

  function openApplicationDialog(job) {
    let dialog = document.getElementById(DIALOG_ID);
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.id = DIALOG_ID;
      dialog.className = "application-dialog";
      document.body.append(dialog);
    }

    dialog.innerHTML = `
      <form method="dialog" class="application-dialog-card" id="applicationForm">
        <button class="dialog-close" type="button" aria-label="Close dialog">×</button>
        <span class="eyebrow accent">Application preview</span>
        <h2>Apply for ${escapeHTML(job.title)}</h2>
        <p class="application-disclaimer">Prototype only: this demo records an application on this device. It does not send your details to the employer.</p>
        <label class="input-wrap"><span>Your name</span><input name="name" autocomplete="name" required maxlength="100" /></label>
        <label class="input-wrap"><span>Email address</span><input name="email" type="email" autocomplete="email" required maxlength="160" /></label>
        <label class="input-wrap"><span>Short note (optional)</span><textarea name="note" rows="4" maxlength="1000" placeholder="Briefly introduce yourself"></textarea></label>
        <button class="primary-btn form-submit" type="submit">Save demo application</button>
        <p class="application-feedback" role="status" aria-live="polite"></p>
      </form>`;

    const profile = (() => {
      try { return JSON.parse(localStorage.getItem("shaqokaab.candidateProfile.v1") || "{}"); } catch { return {}; }
    })();
    const form = dialog.querySelector("#applicationForm");
    form.elements.name.value = profile.name || "";
    form.elements.email.value = profile.email || "";

    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    }, { once: true });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const applications = readApplications();
      const existing = applications.find((application) => String(application.jobId) === String(job.id));
      if (!existing) {
        applications.unshift({
          jobId: job.id,
          title: job.title,
          company: job.company,
          appliedAt: new Date().toISOString(),
          status: "saved-locally"
        });
        try {
          localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
        } catch {
          form.querySelector(".application-feedback").textContent = "Could not save this demo record. Browser storage may be unavailable.";
          return;
        }
      }

      form.querySelector(".application-feedback").textContent = existing
        ? "You already have a demo application record for this role."
        : "Demo application saved on this device. No information was sent to the employer.";
      form.querySelector(".form-submit").textContent = "Saved locally";
      form.querySelector(".form-submit").disabled = true;
    });

    if (!dialog.open) dialog.showModal();
  }

  document.addEventListener("click", (event) => {
    const applyButton = event.target.closest("#jobDetail .apply-link");
    if (!applyButton) return;
    event.preventDefault();
    event.stopPropagation();
    const job = getCurrentJob();
    if (job) openApplicationDialog(job);
  }, true);
})();
