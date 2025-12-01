let cvData = {};

// Form submission handler
document.getElementById('cvForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (validateForm()) {
    captureFormData();
    renderCV();
    showPreview();
  }
});

// Validate form
function validateForm() {
  const form = document.getElementById('cvForm');
  const inputs = form.querySelectorAll('[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#dc3545';
      isValid = false;
    } else {
      input.style.borderColor = '#e0e0e0';
    }
  });
  
  // Email validation
  const email = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailPattern.test(email.value)) {
    email.style.borderColor = '#dc3545';
    alert('Please enter a valid email address');
    isValid = false;
  }
  
  if (!isValid) {
    alert('Please fill in all required fields');
  }
  
  return isValid;
}

// Capture form data
function captureFormData() {
  cvData = {
    personal: {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      location: document.getElementById('location').value,
      title: document.getElementById('title').value
    },
    education: [],
    experience: [],
    projects: [],
    certifications: document.getElementById('certifications').value,
    languages: document.getElementById('languages').value
  };
  
  // Capture education entries
  const educationItems = document.querySelectorAll('#educationContainer .repeatable-item');
  educationItems.forEach(item => {
    const degree = item.querySelector('[name="degree"]').value;
    const institution = item.querySelector('[name="institution"]').value;
    const period = item.querySelector('[name="period"]').value;
    const gpa = item.querySelector('[name="gpa"]').value;
    const details = item.querySelector('[name="details"]').value;
    
    if (degree && institution && period) {
      cvData.education.push({
        degree,
        institution,
        period,
        gpa,
        details: details ? details.split('\n').filter(d => d.trim()) : [] //split the text area into array + filter empty lines
      });
    }
  });
  
  // Capture experience entries
  const experienceItems = document.querySelectorAll('#experienceContainer .repeatable-item');
  experienceItems.forEach(item => {
    const jobTitle = item.querySelector('[name="jobTitle"]').value;
    const company = item.querySelector('[name="company"]').value;
    const period = item.querySelector('[name="period"]').value;
    const responsibilities = item.querySelector('[name="responsibilities"]').value;
    
    if (jobTitle && period && responsibilities) {
      cvData.experience.push({
        jobTitle,
        company,
        period,
        responsibilities: responsibilities.split('\n').filter(r => r.trim())
      });
    }
  });
  
  // Capture project entries
  const projectItems = document.querySelectorAll('#projectsContainer .repeatable-item');
  projectItems.forEach(item => {
    const projectName = item.querySelector('[name="projectName"]').value;
    const year = item.querySelector('[name="year"]').value;
    const description = item.querySelector('[name="description"]').value;
    
    if (projectName || year || description) {
      cvData.projects.push({
        projectName,
        year,
        description: description ? description.split('\n').filter(d => d.trim()) : []
      });
    }
  });
}

function renderCV() {
  // Render personal info
  document.getElementById('previewName').textContent = cvData.personal.fullName.toUpperCase();
  document.getElementById('previewContact').innerHTML = 
    `${cvData.personal.title} • ${cvData.personal.phone} • ${cvData.personal.email} • ${cvData.personal.location}`;
  
  // Render experience
  const experienceHTML = cvData.experience.map(exp => `
    <div class="entry">
      <div class="entry-header">
        <strong>${exp.jobTitle}</strong>
        <span class="date">(${exp.period})</span>
      </div>
      ${exp.company ? `<p class="institution">${exp.company}</p>` : ''}
      <ul>
        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('previewExperience').innerHTML = experienceHTML;
  
  // Render education
  const educationHTML = cvData.education.map(edu => `
    <div class="entry">
      <div class="entry-header">
        <strong>${edu.degree}</strong>
        ${edu.gpa ? `<span class="date">GPA: ${edu.gpa}</span>` : ''}
      </div>
      <p class="institution">${edu.institution} (${edu.period})</p>
      ${edu.details.length > 0 ? `
        <ul>
          ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
  document.getElementById('previewEducation').innerHTML = educationHTML;
  
  // Render projects (if any)
  const projectsSection = document.getElementById('projectsSection');
  if (cvData.projects.length > 0 && cvData.projects.some(p => p.projectName)) {
    const projectsHTML = cvData.projects
      .filter(proj => proj.projectName)
      .map(proj => `
        <div class="entry">
          <div class="entry-header">
            <strong>${proj.projectName}</strong>
            ${proj.year ? `<span class="date">(${proj.year})</span>` : ''}
          </div>
          ${proj.description.length > 0 ? `
            <ul>
              ${proj.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('');
    document.getElementById('previewProjects').innerHTML = projectsHTML;
    projectsSection.classList.remove('hidden');
  } else {
    projectsSection.classList.add('hidden');
  }
  
  // Render certifications (if any)
  const certificationsSection = document.getElementById('certificationsSection');
  if (cvData.certifications.trim()) {
    const certifications = cvData.certifications.split('\n').filter(c => c.trim());
    const certificationsHTML = certifications.map(cert => `<li>${cert}</li>`).join('');
    document.getElementById('previewCertifications').innerHTML = certificationsHTML;
    certificationsSection.classList.remove('hidden');
  } else {
    certificationsSection.classList.add('hidden');
  }
  
  // Render languages
  document.getElementById('previewLanguages').textContent = cvData.languages;
}

// Show preview and hide form
function showPreview() {
  document.getElementById('formSection').classList.add('hidden');
  document.getElementById('previewSection').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Edit CV - show form and hide preview
function editCV() {
  document.getElementById('previewSection').classList.add('hidden');
  document.getElementById('formSection').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Reset form
function resetForm() {
  if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
    document.getElementById('cvForm').reset();
    cvData = {};
    
    // Reset to single items for repeatable sections
    resetRepeatableSection('educationContainer', addEducation);
    resetRepeatableSection('experienceContainer', addExperience);
    resetRepeatableSection('projectsContainer', addProject);
  }
}

function resetRepeatableSection(containerId, addFunction) {
  const container = document.getElementById(containerId);
  const items = container.querySelectorAll('.repeatable-item');
  
  // Remove all but first item
  for (let i = items.length - 1; i > 0; i--) {
    items[i].remove();
  }
  
  // Clear first item
  const firstItem = items[0];
  firstItem.querySelectorAll('input, textarea').forEach(input => {
    input.value = '';
    input.style.borderColor = '#e0e0e0';
  });
}

// Add education entry
function addEducation() {
  const container = document.getElementById('educationContainer');
  const newItem = document.createElement('div');
  newItem.className = 'repeatable-item';
  newItem.setAttribute('data-type', 'education');
  newItem.innerHTML = `
    <div class="form-grid">
      <div class="form-group full-width">
        <label>Degree *</label>
        <input type="text" name="degree" required placeholder="e.g., Master of Science in Computer Science" />
      </div>
      <div class="form-group">
        <label>Institution *</label>
        <input type="text" name="institution" required placeholder="Stanford University" />
      </div>
      <div class="form-group">
        <label>Period *</label>
        <input type="text" name="period" required placeholder="09/2016 – 06/2018" />
      </div>
      <div class="form-group">
        <label>GPA (optional)</label>
        <input type="text" name="gpa" placeholder="3.85/4.0" />
      </div>
      <div class="form-group full-width">
        <label>Details (one per line, optional)</label>
        <textarea name="details" rows="3" placeholder="Specialization: Web Technologies&#10;Thesis: Optimizing Performance in Progressive Web Applications"></textarea>
      </div>
    </div>
    <button type="button" class="remove-btn" onclick="removeItem(this)">Remove</button>
  `;
  container.appendChild(newItem);
}

// Add experience entry
function addExperience() {
  const container = document.getElementById('experienceContainer');
  const newItem = document.createElement('div');
  newItem.className = 'repeatable-item';
  newItem.setAttribute('data-type', 'experience');
  newItem.innerHTML = `
    <div class="form-grid">
      <div class="form-group full-width">
        <label>Job Title *</label>
        <input type="text" name="jobTitle" required placeholder="Senior Full Stack Developer" />
      </div>
      <div class="form-group">
        <label>Company (optional)</label>
        <input type="text" name="company" placeholder="Tech Corp Inc." />
      </div>
      <div class="form-group">
        <label>Period *</label>
        <input type="text" name="period" required placeholder="01/2021 - Present" />
      </div>
      <div class="form-group full-width">
        <label>Responsibilities (one per line) *</label>
        <textarea name="responsibilities" rows="4" required placeholder="Lead development of company's main SaaS platform&#10;Architected and implemented RESTful APIs&#10;Reduced application load time by 40%"></textarea>
      </div>
    </div>
    <button type="button" class="remove-btn" onclick="removeItem(this)">Remove</button>
  `;
  container.appendChild(newItem);
}

// Add project entry
function addProject() {
  const container = document.getElementById('projectsContainer');
  const newItem = document.createElement('div');
  newItem.className = 'repeatable-item';
  newItem.setAttribute('data-type', 'project');
  newItem.innerHTML = `
    <div class="form-grid">
      <div class="form-group">
        <label>Project Name</label>
        <input type="text" name="projectName" placeholder="E-Commerce Platform" />
      </div>
      <div class="form-group">
        <label>Year</label>
        <input type="text" name="year" placeholder="2023" />
      </div>
      <div class="form-group full-width">
        <label>Description (one per line)</label>
        <textarea name="description" rows="3" placeholder="Built full-featured platform with product catalog&#10;Implemented payment processing using Stripe API&#10;Technologies: React, Node.js, MongoDB"></textarea>
      </div>
    </div>
    <button type="button" class="remove-btn" onclick="removeItem(this)">Remove</button>
  `;
  container.appendChild(newItem);
}

// Remove item
function removeItem(button) {
  const item = button.closest('.repeatable-item');
  const container = item.parentElement;
  // Don't remove if last
  if (container.querySelectorAll('.repeatable-item').length > 1) {
    item.remove();
  } else {
    alert('You must have at least one entry. Clear the fields instead of removing.');
  }
}