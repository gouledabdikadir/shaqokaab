const jobs = [
  {
    title: "Senior Product Designer",
    company: "Atlas Digital",
    location: "Mogadishu",
    type: "Full-time",
    salary: "$1,200 - $1,800",
    category: "Design",
    description: "Design intuitive digital experiences for customers and internal teams.",
    featured: true
  },
  {
    title: "Frontend Engineer",
    company: "NovaLabs",
    location: "Remote",
    type: "Remote",
    salary: "$1,500 - $2,200",
    category: "Technology",
    description: "Build polished web interfaces and improve user experience performance.",
    featured: true
  },
  {
    title: "Operations Manager",
    company: "CityLoop",
    location: "Hargeisa",
    type: "Full-time",
    salary: "$1,000 - $1,500",
    category: "Operations",
    description: "Lead day-to-day logistics, service quality, and stakeholder coordination.",
    featured: false
  },
  {
    title: "Business Development Executive",
    company: "SomNet",
    location: "Nairobi",
    type: "Contract",
    salary: "$900 - $1,300",
    category: "Business",
    description: "Drive partnerships, revenue growth, and new client acquisition.",
    featured: true
  },
  {
    title: "Data Analyst",
    company: "GreenBox",
    location: "Remote",
    type: "Full-time",
    salary: "$1,100 - $1,600",
    category: "Technology",
    description: "Turn complex customer and operational data into actionable insights.",
    featured: false
  },
  {
    title: "Marketing Strategist",
    company: "HarborOne",
    location: "Mogadishu",
    type: "Full-time",
    salary: "$950 - $1,400",
    category: "Marketing",
    description: "Craft growth campaigns across digital channels and local outreach.",
    featured: false
  }
];

const jobList = document.getElementById("jobList");
const searchForm = document.getElementById("searchForm");
const keywordInput = document.getElementById("keywordInput");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const filterChips = document.querySelectorAll(".chip");

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function jobMatches(job, keyword, location, type, chipFilter) {
  const keywordText = keyword.trim().toLowerCase();
  const inKeyword =
    !keywordText ||
    job.title.toLowerCase().includes(keywordText) ||
    job.company.toLowerCase().includes(keywordText) ||
    job.category.toLowerCase().includes(keywordText);

  const inLocation = location === "all" || job.location === location;
  const inType = type === "all" || job.type === type;

  const chipMatch =
    chipFilter === "all" ||
    (chipFilter === "remote" && job.location === "Remote") ||
    (chipFilter === "full-time" && job.type === "Full-time") ||
    (chipFilter === "contract" && job.type === "Contract");

  return inKeyword && inLocation && inType && chipMatch;
}

function renderJobs(filters = { keyword: "", location: "all", type: "all", chip: "all" }) {
  const filtered = jobs.filter((job) =>
    jobMatches(job, filters.keyword, filters.location, filters.type, filters.chip)
  );

  if (!filtered.length) {
    jobList.innerHTML = `
      <div class="job-card" style="grid-column: 1 / -1;">
        <h3>No jobs match your search.</h3>
        <p>Try broadening your keyword or choosing another location.</p>
      </div>
    `;
    return;
  }

  jobList.innerHTML = filtered
    .map(
      (job) => `
        <article class="job-card">
          <div class="job-top">
            <div class="company-pill">${getInitials(job.company)}</div>
            <div class="job-meta">
              <h3>${job.title}</h3>
              <span class="company-name">${job.company}</span>
            </div>
            ${job.featured ? '<span class="badge">Featured</span>' : ""}
          </div>

          <p>${job.description}</p>

          <div class="job-tags">
            <span>${job.location}</span>
            <span>${job.type}</span>
            <span>${job.category}</span>
          </div>

          <div class="job-footer">
            <span class="salary">${job.salary}</span>
            <button class="apply-btn" type="button">Apply now</button>
          </div>
        </article>
      `
    )
    .join("");
}

let activeChip = "all";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderJobs({
    keyword: keywordInput.value,
    location: locationFilter.value,
    type: typeFilter.value,
    chip: activeChip
  });
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeChip = chip.dataset.filter;

    renderJobs({
      keyword: keywordInput.value,
      location: locationFilter.value,
      type: typeFilter.value,
      chip: activeChip
    });
  });
});

renderJobs({
  keyword: "",
  location: "all",
  type: "all",
  chip: "all"
});








































































































































































































"},{