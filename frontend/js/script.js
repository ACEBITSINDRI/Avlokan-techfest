/* ═══════════════════════════════════════════════════════
   AVLOKAN 2026 — Main JavaScript
   ACE • B.I.T. Sindri
   ═══════════════════════════════════════════════════════ */

// ─── Configuration ─────────────────────────────────────
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000/api'
    : 'https://avlokan-backend.onrender.com/api';
const EVENT_DATE = new Date('2026-05-09T09:00:00+05:30');

// ─── Hero Typing Effect ───────────────────────────────
(function heroTyping() {
    const title = document.getElementById('heroTitle');
    if (!title) return;
    const textSpan = title.querySelector('.gold');
    const cursor = title.querySelector('.typing-cursor');
    const text = 'AVLOKAN';
    let i = 0;
    function type() {
        if (i < text.length) {
            textSpan.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            // Remove cursor after 2 seconds
            setTimeout(() => {
                if (cursor) cursor.style.display = 'none';
            }, 2000);
        }
    }
    // Start typing after a short delay
    setTimeout(type, 500);
})();

// ─── Problem Statements Data ──────────────────────────
const PROBLEMS = {
    'TRK-A': [
        { code: 'P1', title: 'Innovative Cooling Solution for Parked Vehicles', type: 'Hardware / Software', desc: 'Design a sustainable, green-energy-based solution to maintain parked vehicle interior at 25°C.' },
        { code: 'P2', title: 'Passenger Comfort Modeling in Suspension System', type: 'Simulation / Software', desc: 'Establish a mathematical model for passenger comfort in automotive suspension systems.' },
        { code: 'P5', title: 'EV Battery Swapping Station', type: 'Hardware / Software', desc: 'Design a standardised battery swapping station for all EV types with universal battery concept.' },
        { code: 'P7', title: 'On-Road Dynamic Pantograph Mechanism', type: 'Hardware / Simulation', desc: 'Framework for powering EVs from overhead power lines using adapted pantograph technology.' },
        { code: 'P8', title: 'Car-to-Car Communication System', type: 'Hardware / Software', desc: 'Real-time localised vehicle communication system inspired by aviation frequencies.' },
        { code: 'P9', title: 'CAE Analysis with ECU Integration', type: 'Simulation / Software', desc: 'Integrate CAD models with ECU software for dynamic CAE/CFD analysis of automotive systems.' },
        { code: 'P31', title: 'AI/ML Stiffness Prediction for Stamped Panels', type: 'Software / Simulation', desc: 'Scalable AI/ML solution to predict stiffness and deformation in stamped components.' },
        { code: 'P39', title: 'AI-Driven Urban Mobility Optimisation', type: 'Software / Platform', desc: 'Intelligent real-time urban mobility management leveraging AI, ML, and IoT.' }
    ],
    'TRK-B': [
        { code: 'P4', title: 'Enhancing EV Battery Energy Density', type: 'Hardware / Research', desc: 'Innovative approaches to increase EV battery energy density and extend driving range.' },
        { code: 'P6', title: 'EV Battery Fire Suppression Device', type: 'Hardware Prototype', desc: 'Compact device to detect abnormal battery temperature and auto-release CO₂ for fire suppression.' },
        { code: 'P12', title: 'Sustainability Rating Framework', type: 'Software / Framework', desc: 'Structured process for sustainability ratings of construction products using lifecycle assessment.' },
        { code: 'P14', title: 'AI Alarm Tracking for Wind Turbines', type: 'Software / AI Tool', desc: 'AI-based tool to automate tracking and resolution of wind turbine alarms.' },
        { code: 'P15', title: 'GenAI Fault Detection in Solar Farms', type: 'Software / AI Tool', desc: 'GenAI-powered fault detection using real-time monitoring and image analysis for solar panels.' },
        { code: 'P38', title: 'Super-Capacitor for Lighting Systems', type: 'Hardware / Prototype', desc: 'Hybrid energy storage using supercapacitors for efficient lighting applications.' },
        { code: 'P40', title: 'Isolated Vibrating Systems Design', type: 'Simulation / Software', desc: 'Multibody dynamic simulation for two isolated vibrating systems within a shared enclosure.' },
        { code: 'P44', title: 'AI Mobile Blade Balancing for Wind Turbines', type: 'Hardware / AI', desc: 'AI-based, cost-effective, mobile blade balancing for large wind turbines (10 MW+).' }
    ],
    'TRK-C': [
        { code: 'P3', title: 'AI Non-Destructive Composite Inspection', type: 'Hardware / Software', desc: 'AI-enabled NDT using ultrasound, X-ray, and thermography for composite material micro-damage detection.' },
        { code: 'P10', title: 'Edge AI Drone for Construction Sites', type: 'Hardware / Software', desc: 'Autonomous drone with Edge AI for real-time surveillance and threat detection on construction sites.' },
        { code: 'P11', title: 'AI for Construction Equipment Safety', type: 'Software / App', desc: 'AI-powered app for operator health monitoring and predictive maintenance of construction equipment.' },
        { code: 'P21', title: 'CAD Drawing Search Bot', type: 'Software / AI Tool', desc: 'Intelligent search bot for retrieving CAD drawings and models from large engineering databases.' },
        { code: 'P24', title: 'AI Vision for NDT Materials', type: 'Software / AI Model', desc: 'Computer vision AI to detect and annotate defects in NDT images across various testing methods.' },
        { code: 'P32', title: 'Automated Flow Instrument Validation', type: 'Software / Simulation', desc: 'Automated validation of flow instrument installations in 3D piping models.' },
        { code: 'P36', title: 'Flexible Robotic Arm', type: 'Hardware / Robotics', desc: 'Flexible robotic arm with adaptive gripping, reserve power, and automatic homing for manufacturing.' },
        { code: 'P37', title: 'Self-Driving Pathological Lab', type: 'Hardware / Robotics', desc: 'Mobile robotic automation for pathology labs with Cobot, AMR, and LIMS integration.' }
    ],
    'TRK-D': [
        { code: 'P19', title: 'Walkthrough Health Diagnostic Chamber', type: 'Hardware / Software', desc: 'Non-invasive walkthrough chamber for complete health screening monitoring multiple physiological systems.' },
        { code: 'P20', title: 'Smart Toilet Health Analysis', type: 'Hardware / Software', desc: 'Smart toilet with integrated sensors for automated urine analysis and health monitoring.' },
        { code: 'P25', title: '5G Network Digital Twins', type: 'Software / Simulation', desc: 'Digital twin-based autonomous 5G network management aligned with xNF deployment standards.' },
        { code: 'P26', title: 'Workforce Digital Twin for Manufacturing', type: 'Software / Platform', desc: 'Digital Twin platform modelling workforce using IoT wearables and HR system data.' },
        { code: 'P27', title: 'AI Drawing & Datasheet Conversion', type: 'Software / AI Tool', desc: 'AI/GenAI solution to convert engineering drawings from any format including scanned handwritten docs.' },
        { code: 'P28', title: 'AI-Driven BOM Converter', type: 'Software / AI Tool', desc: 'AI-powered tool to automate transformation of engineering BOM to manufacturing BOM.' },
        { code: 'P34', title: 'Wi-Fi Sensing Home Monitoring', type: 'Hardware / Software', desc: 'Wi-Fi sensing-based surveillance using signal disruptions for movement and activity detection.' },
        { code: 'P35', title: 'Live Event AI Captioning', type: 'Software / Embedded', desc: 'Real-time speech-to-text captioning for live events using cloud and Edge AI approaches.' },
        { code: 'P29', title: 'AI Video Localisation', type: 'Software / AI Tool', desc: 'AI-driven video localisation across multiple languages with automated dubbing and sync.' },
        { code: 'P43', title: 'Real-Time Healthcare AI', type: 'Hardware / Software', desc: 'AI-powered real-time patient monitoring with wearable devices for rural healthcare deployment.' }
    ],
    'TRK-E': [
        { code: 'P13', title: 'AI Evaluator for Flowcharts & Code', type: 'Software / AI Tool', desc: 'Intelligent evaluation system for flowcharts, algorithms, and pseudocode against predefined rubrics.' },
        { code: 'P16', title: 'GenAI Wiring Diagram Generator', type: 'Software / AI Tool', desc: 'GenAI-powered automatic generation of electrical wiring diagrams from panel drawings.' },
        { code: 'P17', title: 'GenAI Material Selection Assistant', type: 'Software / AI Tool', desc: 'GenAI assistant for automated material selection analysing application requirements and global standards.' },
        { code: 'P18', title: 'GenAI COTS Part Sizing', type: 'Software / AI Tool', desc: 'Automated sizing and selection of commercial off-the-shelf parts using GenAI.' },
        { code: 'P22', title: 'AI Testing for OTT Platforms', type: 'Software / AI Tool', desc: 'AI-powered automated testing framework with self-healing scripts for OTT and Digital TV.' },
        { code: 'P23', title: 'Non-Agentic to Agentic AI Middleware', type: 'Software / AI Tool', desc: 'Reasoning-driven middleware to recommend agentic AI enhancements for existing solutions.' },
        { code: 'P30', title: 'Agentless Endpoint Protection', type: 'Software / Cybersecurity', desc: 'Strategic agentless endpoint security with enhanced visibility and threat response capabilities.' },
        { code: 'P33', title: 'AI Automated Threat Modelling', type: 'Software / Cybersecurity', desc: 'AI-powered agentic threat modelling framework for engineering sector cybersecurity.' },
        { code: 'P41', title: 'AI Cybersecurity Resilience', type: 'Software / Cybersecurity', desc: 'AI/ML framework to detect, neutralise threats in real-time and reduce detection by 50%+.' },
        { code: 'P42', title: 'SmartOps AI Incident Resolution', type: 'Software / AI Tool', desc: 'Autonomous incident detection and resolution engine for hybrid multi-cloud DevOps environments.' }
    ]
};

// ─── Countdown Timer ──────────────────────────────────
function updateCountdown() {
    const daysEl = document.getElementById('cd-days');
    if (!daysEl) return;

    const now = new Date();
    const diff = EVENT_DATE - now;
    if (diff <= 0) {
        daysEl.textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent = '00';
        document.getElementById('cd-secs').textContent = '00';
        return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    daysEl.textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ─── Navbar Scroll Effect ─────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Mobile Menu ──────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// ─── Smooth Scrolling (Hashless) & Close Menu ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault(); // Prevents the # hash from appearing in URL
            
            // Scroll smoothly to the target, accounting for navbar height
            const navbarHeight = navbar ? navbar.offsetHeight : 72;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // If it's a mobile menu link, close the menu
            if (navToggle && navLinks && navLinks.contains(this)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// ─── Scroll Reveal ────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Render Problem Statements ────────────────────────
function renderProblems(track) {
    const grid = document.getElementById('problemsGrid');
    const problems = PROBLEMS[track] || [];
    grid.innerHTML = problems.map(p => `
    <div class="problem-card">
      <div class="problem-code">${p.code} — ${track}</div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <span class="problem-type">${p.type}</span>
    </div>
  `).join('');
}

// Track tabs
document.querySelectorAll('.track-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderProblems(tab.dataset.track);
    });
});
renderProblems('TRK-A');

// ─── Registration Form Logic ──────────────────────────
const eventSelect = document.getElementById('event');
const teamFields = document.getElementById('teamFields');
const hackTrackFields = document.getElementById('hackTrackFields');
const teamSizeSelect = document.getElementById('teamSize');
const teamMembersContainer = document.getElementById('teamMembersContainer');

// Show/hide conditional fields
eventSelect.addEventListener('change', () => {
    const val = eventSelect.value;
    const isTeamEvent = ['hackathon', 'survey-hunt', 'civil-quiz'].includes(val);
    const isHackathon = val === 'hackathon';

    teamFields.style.display = isTeamEvent ? 'block' : 'none';
    hackTrackFields.style.display = isHackathon ? 'block' : 'none';

    // Update team size options based on event
    if (val === 'civil-quiz') {
        teamSizeSelect.innerHTML = '<option value="">Select size</option><option value="2">2 Members</option>';
    } else if (val === 'paper-presentation') {
        teamFields.style.display = 'block';
        teamSizeSelect.innerHTML = '<option value="">Select size</option><option value="1">Individual</option><option value="2">2 Members</option>';
    } else {
        teamSizeSelect.innerHTML = '<option value="">Select size</option><option value="2">2 Members</option><option value="3">3 Members</option><option value="4">4 Members</option>';
    }
    teamMembersContainer.innerHTML = '';
});

// Dynamic team member fields
teamSizeSelect.addEventListener('change', () => {
    const count = parseInt(teamSizeSelect.value) || 0;
    teamMembersContainer.innerHTML = '';
    for (let i = 2; i <= count; i++) {
        const row = document.createElement('div');
        row.className = 'team-member-row';
        row.innerHTML = `
      <span class="team-member-label">Team Member ${i}</span>
      <div class="form-group">
        <label for="member${i}Name">Name</label>
        <input type="text" id="member${i}Name" placeholder="Member ${i} name">
      </div>
      <div class="form-group">
        <label for="member${i}Email">Email</label>
        <input type="email" id="member${i}Email" placeholder="Member ${i} email">
      </div>
      <div class="form-group">
        <label for="member${i}Branch">Branch</label>
        <input type="text" id="member${i}Branch" placeholder="Member ${i} branch">
      </div>
    `;
        teamMembersContainer.appendChild(row);
    }
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    // Gather team members
    const teamSize = parseInt(teamSizeSelect.value) || 0;
    const teamMembers = [];
    for (let i = 2; i <= teamSize; i++) {
        const nameEl = document.getElementById(`member${i}Name`);
        const emailEl = document.getElementById(`member${i}Email`);
        const branchEl = document.getElementById(`member${i}Branch`);
        if (nameEl && nameEl.value) {
            teamMembers.push({
                name: nameEl.value,
                email: emailEl ? emailEl.value : '',
                branch: branchEl ? branchEl.value : ''
            });
        }
    }

    // Handle PPT upload for hackathon
    let presentationUrl = '';
    const isHackathon = eventSelect.value === 'hackathon';
    if (isHackathon) {
        const fileInput = document.getElementById('presentationFile');
        const uploadProgress = document.getElementById('uploadProgress');
        if (fileInput && fileInput.files.length > 0) {
            try {
                uploadProgress.textContent = '⏳ Uploading presentation...';
                submitBtn.textContent = 'Uploading PPT...';
                const formData = new FormData();
                formData.append('presentation', fileInput.files[0]);
                const uploadRes = await fetch(`${API_BASE}/upload-presentation`, {
                    method: 'POST',
                    body: formData
                });
                const uploadResult = await uploadRes.json();
                if (uploadResult.success) {
                    presentationUrl = uploadResult.url;
                    uploadProgress.textContent = '✅ Presentation uploaded!';
                    uploadProgress.style.color = '#10b981';
                } else {
                    uploadProgress.textContent = '❌ Upload failed: ' + uploadResult.message;
                    uploadProgress.style.color = '#ef4444';
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Submit Registration';
                    return;
                }
            } catch (err) {
                uploadProgress.textContent = '❌ Upload failed. Please try again.';
                uploadProgress.style.color = '#ef4444';
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Submit Registration';
                return;
            }
        }
    }

    submitBtn.textContent = 'Submitting...';

    const data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        whatsapp: document.getElementById('whatsapp').value,
        college: document.getElementById('college').value,
        branch: document.getElementById('branch').value,
        year: document.getElementById('year').value,
        event: eventSelect.value,
        teamName: document.getElementById('teamName').value,
        teamLeaderName: document.getElementById('teamLeaderName').value,
        teamSize: teamSize,
        teamMembers: teamMembers,
        track: document.getElementById('track').value,
        problemStatement: document.getElementById('problemStatement').value,
        presentationUrl: presentationUrl
    };

    try {
        const res = await fetch(`${API_BASE}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();

        if (result.success) {
            statusEl.textContent = '✅ ' + result.message;
            statusEl.className = 'form-status success';
            e.target.reset();
            teamFields.style.display = 'none';
            hackTrackFields.style.display = 'none';
            teamMembersContainer.innerHTML = '';
            const uploadProgress = document.getElementById('uploadProgress');
            if (uploadProgress) uploadProgress.textContent = '';
        } else {
            statusEl.textContent = '❌ ' + result.message;
            statusEl.className = 'form-status error';
        }
    } catch (err) {
        statusEl.textContent = '❌ Connection error. Please check if the server is running.';
        statusEl.className = 'form-status error';
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Submit Registration';
});
