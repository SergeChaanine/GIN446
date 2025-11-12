// State management
let currentCategory = 'all';
let searchQuery = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCategoryCounts();
  renderEvents(eventsData);
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function(e) {
    searchQuery = e.target.value.toLowerCase();
    filterAndRenderEvents();
  });

  // Category buttons
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-category');
      
      // Update active state
      categoryButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      filterAndRenderEvents();
    });
  });
}

// Update category counts
function updateCategoryCounts() {
  const counts = {};
  
  eventsData.forEach(event => {
    counts[event.category] = (counts[event.category] || 0) + 1;
  });
  
  // Update count badges
  document.getElementById('countAll').textContent = eventsData.length;
  
  Object.keys(counts).forEach(category => {
    const countId = 'count' + category.replace(/\s+/g, '').replace('&', '');
    const countElement = document.getElementById(countId);
    if (countElement) {
      countElement.textContent = counts[category];
    }
  });
}

// Filter and render events
function filterAndRenderEvents() {
  let filteredEvents = eventsData;
  
  // Filter by category
  if (currentCategory !== 'all') {
    filteredEvents = filteredEvents.filter(event => event.category === currentCategory);
  }
  
  // Filter by search query
  if (searchQuery) {
    filteredEvents = filteredEvents.filter(event => {
      return event.name.toLowerCase().includes(searchQuery) ||
             event.description.toLowerCase().includes(searchQuery) ||
             event.category.toLowerCase().includes(searchQuery);
    });
  }
  
  renderEvents(filteredEvents);
  updateResultsInfo(filteredEvents.length);
}

// Render events to the grid
function renderEvents(events) {
  const grid = document.getElementById('eventsGrid');
  const noResults = document.getElementById('noResults');
  
  if (events.length === 0) {
    grid.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
  }
  
  grid.classList.remove('hidden');
  noResults.classList.add('hidden');
  
  grid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// Create event card HTML
function createEventCard(event) {
  const categoryClass = 'category-' + event.category.replace(/\s+/g, '').replace('&', '');
  
  return `
    <div class="event-card">
      <div class="event-header">
        <h3 class="event-name">${event.name}</h3>
        <span class="event-category ${categoryClass}">${event.category}</span>
      </div>
      <p class="event-description">${event.description}</p>
      <div class="event-tags">
        <span class="event-tags-label">Supported Tags:</span>
        <div class="tags-list">
          ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <a href="${event.link}" target="_blank" rel="noopener noreferrer" class="event-link">
        View on W3Schools →
      </a>
    </div>
  `;
}

// Update results info text
function updateResultsInfo(count) {
  const resultsCount = document.getElementById('resultsCount');
  
  if (currentCategory === 'all' && !searchQuery) {
    resultsCount.textContent = `Showing all ${count} events`;
  } else if (currentCategory !== 'all' && !searchQuery) {
    resultsCount.textContent = `Showing ${count} ${currentCategory} events`;
  } else if (searchQuery && currentCategory === 'all') {
    resultsCount.textContent = `Found ${count} events matching "${searchQuery}"`;
  } else {
    resultsCount.textContent = `Found ${count} ${currentCategory} events matching "${searchQuery}"`;
  }
}

// Reset all filters
function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  
  document.getElementById('searchInput').value = '';
  
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === 'all') {
      btn.classList.add('active');
    }
  });
  
  filterAndRenderEvents();
}