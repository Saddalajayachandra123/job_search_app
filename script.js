const jobsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco",
        type: "Full-time",
        category: "Technology",
        salary: "$120k - $150k",
        description: "We are looking for an experienced Frontend Developer to join our dynamic team.",
        requirements: ["5+ years React experience", "Strong JavaScript/TypeScript skills", "Experience with modern CSS frameworks", "Team collaboration skills"],
        responsibilities: ["Build responsive web applications", "Collaborate with design team", "Code review and mentoring", "Optimize application performance"]
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "Creative Studios",
        location: "New York",
        type: "Full-time",
        category: "Design",
        salary: "$90k - $110k",
        description: "Join our creative team to design beautiful and intuitive user experiences.",
        requirements: ["3+ years UI/UX design experience", "Proficiency in Figma and Adobe XD", "Strong portfolio", "Understanding of user-centered design"],
        responsibilities: ["Create wireframes and prototypes", "Conduct user research", "Design user interfaces", "Collaborate with developers"]
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        company: "MarketPro Agency",
        location: "Remote",
        type: "Remote",
        category: "Marketing",
        salary: "$70k - $90k",
        description: "Drive digital marketing campaigns and grow our online presence.",
        requirements: ["2+ years digital marketing experience", "SEO/SEM expertise", "Social media management", "Analytics skills"],
        responsibilities: ["Manage social media campaigns", "SEO optimization", "Content strategy", "Performance tracking"]
    },
    {
        id: 4,
        title: "Data Scientist",
        company: "DataViz Solutions",
        location: "London",
        type: "Full-time",
        category: "Technology",
        salary: "£80k - £100k",
        description: "Analyze complex data sets and build predictive models.",
        requirements: ["PhD or Masters in related field", "Python and R proficiency", "Machine learning expertise", "Statistical analysis skills"],
        responsibilities: ["Build ML models", "Data analysis and visualization", "Present insights to stakeholders", "Research new methodologies"]
    },
    {
        id: 5,
        title: "Backend Developer Intern",
        company: "StartupHub",
        location: "Berlin",
        type: "Internship",
        category: "Technology",
        salary: "€1500/month",
        description: "Learn and grow with our engineering team building scalable systems.",
        requirements: ["Computer Science student", "Basic knowledge of Node.js or Python", "Database fundamentals", "Eager to learn"],
        responsibilities: ["Assist in API development", "Write unit tests", "Bug fixing", "Documentation"]
    },
    {
        id: 6,
        title: "Financial Analyst",
        company: "Global Finance Corp",
        location: "New York",
        type: "Full-time",
        category: "Finance",
        salary: "$85k - $105k",
        description: "Analyze financial data and provide strategic recommendations.",
        requirements: ["Bachelor's in Finance or Economics", "3+ years experience", "Excel and financial modeling", "CFA preferred"],
        responsibilities: ["Financial reporting", "Budget analysis", "Investment recommendations", "Risk assessment"]
    },
    {
        id: 7,
        title: "Product Manager",
        company: "InnovateTech",
        location: "San Francisco",
        type: "Full-time",
        category: "Technology",
        salary: "$130k - $160k",
        description: "Lead product strategy and development for our flagship products.",
        requirements: ["5+ years product management", "Technical background", "Agile methodology", "Strong communication skills"],
        responsibilities: ["Define product roadmap", "Stakeholder management", "Feature prioritization", "Market analysis"]
    },
    {
        id: 8,
        title: "Content Writer",
        company: "MediaWorks",
        location: "Remote",
        type: "Part-time",
        category: "Marketing",
        salary: "$30/hour",
        description: "Create engaging content for various digital platforms.",
        requirements: ["2+ years writing experience", "SEO knowledge", "Research skills", "Portfolio required"],
        responsibilities: ["Write blog posts and articles", "Content strategy", "Edit and proofread", "Social media content"]
    },
    {
        id: 9,
        title: "DevOps Engineer",
        company: "CloudSystems",
        location: "Toronto",
        type: "Full-time",
        category: "Technology",
        salary: "$110k - $140k",
        description: "Manage cloud infrastructure and deployment pipelines.",
        requirements: ["AWS/Azure certification", "Docker and Kubernetes", "CI/CD experience", "Scripting skills"],
        responsibilities: ["Maintain cloud infrastructure", "Automate deployments", "Monitor system performance", "Security implementation"]
    },
    {
        id: 10,
        title: "Registered Nurse",
        company: "City Hospital",
        location: "New York",
        type: "Full-time",
        category: "Healthcare",
        salary: "$75k - $95k",
        description: "Provide quality patient care in a fast-paced environment.",
        requirements: ["RN license", "2+ years experience", "BLS certification", "Strong interpersonal skills"],
        responsibilities: ["Patient care and assessment", "Medication administration", "Documentation", "Team collaboration"]
    },
    {
        id: 11,
        title: "Graphic Designer",
        company: "DesignHub",
        location: "Remote",
        type: "Remote",
        category: "Design",
        salary: "$65k - $85k",
        description: "Create stunning visual designs for digital and print media.",
        requirements: ["3+ years design experience", "Adobe Creative Suite mastery", "Strong portfolio", "Brand identity experience"],
        responsibilities: ["Design marketing materials", "Brand development", "Client presentations", "Project management"]
    },
    {
        id: 12,
        title: "Full Stack Developer",
        company: "WebSolutions Pro",
        location: "San Francisco",
        type: "Full-time",
        category: "Technology",
        salary: "$115k - $145k",
        description: "Build end-to-end web applications using modern technologies.",
        requirements: ["4+ years full stack experience", "React and Node.js", "Database design", "RESTful API development"],
        responsibilities: ["Develop web applications", "Database optimization", "Code reviews", "Technical documentation"]
    }
];

let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

function renderJobs(jobs, containerId) {
    const container = document.getElementById(containerId);
    
    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-briefcase"></i>
                <p>No jobs found</p>
            </div>
        `;
        return;
    }

    container.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="company">${job.company}</p>
                </div>
                <button class="bookmark-btn ${savedJobs.includes(job.id) ? 'saved' : ''}" onclick="toggleSave(${job.id})">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
            <div class="job-meta">
                <span class="meta-tag"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span class="meta-tag"><i class="fas fa-clock"></i> ${job.type}</span>
                <span class="meta-tag"><i class="fas fa-tag"></i> ${job.category}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-actions">
                <button class="btn btn-primary" onclick="viewDetails(${job.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

function filterJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const location = document.getElementById('locationFilter').value;
    const type = document.getElementById('typeFilter').value;
    const category = document.getElementById('categoryFilter').value;

    const filtered = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.description.toLowerCase().includes(searchTerm);
        const matchesLocation = !location || job.location === location;
        const matchesType = !type || job.type === type;
        const matchesCategory = !category || job.category === category;

        return matchesSearch && matchesLocation && matchesType && matchesCategory;
    });

    renderJobs(filtered, 'jobList');
}

function toggleSave(jobId) {
    const index = savedJobs.indexOf(jobId);
    if (index > -1) {
        savedJobs.splice(index, 1);
    } else {
        savedJobs.push(jobId);
    }
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    updateSavedCount();
    filterJobs();
    renderSavedJobs();
}

function renderSavedJobs() {
    const saved = jobsData.filter(job => savedJobs.includes(job.id));
    renderJobs(saved, 'savedJobList');
}

function updateSavedCount() {
    document.getElementById('savedCount').textContent = savedJobs.length;
}

function viewDetails(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    const modal = document.getElementById('jobModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${job.title}</h2>
            <p class="modal-company">${job.company}</p>
        </div>
        <div class="modal-meta">
            <span class="meta-tag"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            <span class="meta-tag"><i class="fas fa-clock"></i> ${job.type}</span>
            <span class="meta-tag"><i class="fas fa-tag"></i> ${job.category}</span>
            <span class="meta-tag"><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
        </div>
        <div class="modal-section">
            <h3>Job Description</h3>
            <p>${job.description}</p>
        </div>
        <div class="modal-section">
            <h3>Requirements</h3>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h3>Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
        </div>
        <button class="btn btn-primary" style="width: 100%; margin-top: 20px;">Apply Now</button>
    `;

    modal.style.display = 'block';
}

document.getElementById('searchInput').addEventListener('input', filterJobs);
document.getElementById('locationFilter').addEventListener('change', filterJobs);
document.getElementById('typeFilter').addEventListener('change', filterJobs);
document.getElementById('categoryFilter').addEventListener('change', filterJobs);

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(section + 'Section').classList.add('active');
        btn.classList.add('active');
        
        if (section === 'saved') {
            renderSavedJobs();
        }
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('jobModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('jobModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

renderJobs(jobsData, 'jobList');
updateSavedCount();
