const jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Atlas Digital",
    location: "Mogadishu",
    type: "Full-time",
    salary: "$1,200 - $1,800",
    category: "Design",
    description: "Design intuitive digital experiences for customers and internal teams.",
    featured: true,
    posted: "2 days ago",
    summary: "We are looking for a Senior Product Designer to shape user experiences across web and mobile products.",
    requirements: [
      "5+ years of product design experience in digital products.",
      "Strong UX research and system design skills.",
      "Proficiency in Figma, prototyping, and design systems.",
      "Ability to work closely with product and engineering teams."
    ],
    responsibilities: [
      "Lead end-to-end design for key product features.",
      "Translate user needs into elegant design decisions.",
      "Create and maintain scalable design systems.",
      "Partner with engineers, researchers, and product managers."
    ]
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "NovaLabs",
    location: "Remote",
    type: "Remote",
    salary: "$1,500 - $2,200",
    category: "Technology",
    description: "Build polished web interfaces and improve user experience performance.",
    featured: true,
    posted: "1 day ago",
    summary: "Join our product engineering team to build clean, scalable, and accessible front-end experiences.",
    requirements: [
      "Strong JavaScript and TypeScript skills.",
      "Experience with React, Next.js, and design systems.",
      "Comfort with performance optimization and testing.",
      "Excellent communication and collaboration habits."
    ],
    responsibilities: [
      "Deliver responsive user interfaces for customer-facing products.",
      "Work closely with designers to implement polished experiences.",
      "Improve product performance and accessibility.",
      "Mentor junior engineers and contribute to code quality."
    ]
  },
  {
    id: 3,
    title: "Operations Manager",
    company: "CityLoop",
    location: "Hargeisa",
    type: "Full-time",
    salary: "$1,000 - $1,500",
    category: "Operations",
    description: "Lead day-to-day logistics, service quality, and stakeholder coordination.",
    featured: false,
    posted: "4 days ago",
    summary: "CityLoop is looking for an operations leader to improve delivery, service quality, and internal process efficiency.",
    requirements: [
      "3+ years experience in operations or business administration.",
      "Strong planning and stakeholder management skills.",
      "Experience working in fast-moving service environments.",
      "Ability to manage KPIs and process improvements."
    ],
    responsibilities: [
      "Own day-to-day operational execution across teams.",
      "Improve service quality and optimize workflows.",
      "Coordinate cross-functional priorities and reporting.",
      "Support growth planning and operational planning."
    ]
  },
  {
    id: 4,
    title: "Business Development Executive",
    company: "SomNet",
    location: "Nairobi",
    type: "Contract",
    salary: "$900 - $1,300",
    category: "Business",
    description: "Drive partnerships, revenue growth, and new client acquisition.",
    featured: true,
    posted: "3 days ago",
    summary: "We are hiring a business development specialist to help expand strategic partnerships and revenue opportunities.",
    requirements: [
      "Experience in sales, partnerships, or business development.",
      "Strong prospecting and negotiation capabilities.",
      "Comfortable with outbound outreach and presentations.",
      "Track record of meeting or exceeding revenue goals."
    ],
    responsibilities: [
      "Identify and pursue partnership and sales opportunities.",
      "Manage lead generation and pipeline development.",
      "Present solutions to potential customers and partners.",
      "Collaborate with leadership on market expansion efforts."
    ]
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "GreenBox",
    location: "Remote",
    type: "Full-time",
    salary: "$1,100 - $1,600",
    category: "Technology",
    description: "Turn complex customer and operational data into actionable insights.",
    featured: false,
    posted: "6 days ago",
    summary: "As a Data Analyst, you will work across product, finance, and operations to uncover insights and improve decision-making.",
    requirements: [
      "Experience with SQL and spreadsheet analysis.",
      "Comfort with data visualization and dashboarding.",
      "Strong analytical and storytelling skills.",
      "Ability to translate metrics into business action."
    ],
    responsibilities: [
      "Create dashboards and recurring performance reports.",
      "Analyze customer and operational trends.",
      "Collaborate with cross-functional stakeholders.",
      "Recommend improvements based on KPI analysis."
    ]
  },
  {
    id: 6,
    title: "Marketing Strategist",
    company: "HarborOne",
    location: "Mogadishu",
    type: "Full-time",
    salary: "$950 - $1,400",
    category: "Marketing",
    description: "Craft growth campaigns across digital channels and local outreach.",
    featured: false,
    posted: "1 week ago",
    summary: "HarborOne is hiring a strategic marketer to lead campaigns and brand growth in key local markets.",
    requirements: [
      "Experience in digital marketing or brand strategy.",
      "Strong knowledge of campaign planning and analytics.",
      "Excellent writing and content strategy capabilities.",
      "Ability to work across social, search, and CRM campaigns."
    ],
    responsibilities: [
      "Manage growth marketing campaigns across channels.",
      "Create messaging for product, brand, and acquisition.",
      "Analyze campaign performance and optimize spend.",
      "Coordinate local market and digital marketing initiatives."
    ]
  },
  {
    id: 7,
    title: "Customer Success Lead",
    company: "HorizonPay",
    location: "Remote",
    type: "Full-time",
    salary: "$1,050 - $1,550",
    category: "Customer Success",
    description: "Guide clients through onboarding, adoption, and retention workstreams.",
    featured: true,
    posted: "5 days ago",
    summary: "We are looking for a customer success leader to help clients get more value from our platform and improve retention.",
    requirements: [
      "Prior customer-facing experience in SaaS or fintech.",
      "Strong communication and problem-solving mindset.",
      "Experience handling renewals and customer escalations.",
      "Ability to build trusted relationships with stakeholders."
    ],
    responsibilities: [
      "Lead onboarding and account health reviews.",
      "Coordinate cross-functional support for key accounts.",
      "Improve retention and client adoption metrics.",
      "Identify upsell and expansion opportunities."
    ]
  },
  {
    id: 8,
    title: "Project Coordinator",
    company: "GreenBox",
    location: "Mogadishu",
    type: "Contract",
    salary: "$800 - $1,100",
    category: "Operations",
    description: "Coordinate project deliverables, meetings, timelines, and stakeholder communication.",
    featured: false,
    posted: "2 days ago",
    summary: "The Project Coordinator role supports cross-functional teams to keep projects on schedule and stakeholders informed.",
    requirements: [
      "Strong organization and communication skills.",
      "Experience managing timelines and action items.",
      "Comfort with project documentation and reporting.",
      "Ability to coordinate across multiple stakeholders."
    ],
    responsibilities: [
      "Track deliverables and project schedules.",
      "Organize meetings and maintain project documentation.",
      "Support reporting and stakeholder communication.",
      "Help remove operational blockers for project teams."
    ]
  }
];

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderHomeJobs() {
  const container = document.getElementById("jobList");
  if (!container) return;

  const featuredJobs = jobs.filter((job) => job.featured).slice(0, 3);
  container.innerHTML = featuredJobs
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
            <a href="job.html?id=${job.id}" class="apply-btn">View role</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderBoardJobs() {
  const container = document.getElementById("jobResults");
  const resultCount = document.getElementById("resultCount");
  const keywordInput = document.getElementById("keywordInput");
  const locationFilter = document.getElementById("locationFilter");
  const typeFilter = document.getElementById("typeFilter");
  const filterChips = document.querySelectorAll(".chip");

  if (!container) return;

  let activeChip = "all";

  function getFilteredJobs() {
    const keyword = (keywordInput?.value || "").trim().toLowerCase();
    const location = locationFilter?.value || "all";
    const type = typeFilter?.value || "all";

    return jobs.filter((job) => {
      const matchesKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.category.toLowerCase().includes(keyword);

      const matchesLocation = location === "all" || job.location === location;
      const matchesType = type === "all" || job.type === type;

      const matchesChip =
        activeChip === "all" ||
        (activeChip === "remote" && job.location === "Remote") ||
        (activeChip === "full-time" && job.type === "Full-time") ||
        (activeChip === "contract" && job.type === "Contract");

      return matchesKeyword && matchesLocation && matchesType && matchesChip;
    });
  }

  function renderJobs() {
    const filteredJobs = getFilteredJobs();
    resultCount.textContent = `${filteredJobs.length} role${filteredJobs.length === 1 ? "" : "s"}`;

    if (!filteredJobs.length) {
      container.innerHTML = `
        <div class="job-card" style="grid-column: 1 / -1;">
          <h3>No jobs match your search.</h3>
          <p>Try broadening your keyword or choosing another location.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filteredJobs
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
              <a href="job.html?id=${job.id}" class="apply-btn">View details</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  if (keywordInput) {
    keywordInput.addEventListener("input", renderJobs);
  }

  if (locationFilter) {
    locationFilter.addEventListener("change", renderJobs);
  }

  if (typeFilter) {
    typeFilter.addEventListener("change", renderJobs);
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      activeChip = chip.dataset.filter;
      renderJobs();
    });
  });

  renderJobs();
}

function renderJobDetail() {
  const detail = document.getElementById("jobDetail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const jobId = Number(params.get("id"));
  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    detail.innerHTML = `
      <div class="empty-state">
        <h2>Job not found</h2>
        <p>The role you requested could not be found.</p>
        <a href="jobs.html" class="primary-btn">Back to jobs</a>
      </div>
    `;
    return;
  }

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-company">
        <div class="company-pill">${getInitials(job.company)}</div>
        <div>
          <p class="detail-company-name">${job.company}</p>
          <h1>${job.title}</h1>
        </div>
      </div>
      <a href="jobs.html" class="secondary-btn">Back to all jobs</a>
    </div>

    <div class="meta-grid">
      <div class="meta-box">
        <span>Location</span>
        <strong>${job.location}</strong>
      </div>
      <div class="meta-box">
        <span>Type</span>
        <strong>${job.type}</strong>
      </div>
      <div class="meta-box">
        <span>Salary</span>
        <strong>${job.salary}</strong>
      </div>
      <div class="meta-box">
        <span>Posted</span>
        <strong>${job.posted}</strong>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-copy">
        <h3>About this role</h3>
        <p>${job.summary}</p>

        <h3>Responsibilities</h3>
        <ul>
          ${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Requirements</h3>
        <ul>
          ${job.requirements.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <aside class="detail-side">
        <div class="side-card">
          <h3>Compensation</h3>
          <span class="salary">${job.salary}</span>
          <button class="apply-btn" type="button">Apply now</button>
          <button class="secondary-btn" type="button">Save job</button>
        </div>
      </aside>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "home") {
    renderHomeJobs();

    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        window.location.href = "jobs.html";
      });
    }
  }

  if (page === "jobs") {
    renderBoardJobs();
  }

  if (page === "job-detail") {
    renderJobDetail();
  }
});


















































































































































































































"  , 