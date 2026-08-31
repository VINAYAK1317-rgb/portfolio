/**
 * MODAL SYSTEM — VINAYAK SAJEENDRAN PORTFOLIO
 * Accessible Case Study Modal with focus trapping, ESC key listener, and scroll lock.
 */

let lastFocusedElement = null;

function openCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  lastFocusedElement = document.activeElement;
  
  // Populate modal data dynamically if not already populated
  populateModalData();

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the close button or modal container for accessibility
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 100);
  }

  // Bind keyboard trap
  document.addEventListener('keydown', handleModalKeyDown);
}

function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  document.removeEventListener('keydown', handleModalKeyDown);

  // Return focus to triggering element
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function handleModalKeyDown(e) {
  const modal = document.getElementById('case-study-modal');
  if (!modal || !modal.classList.contains('active')) return;

  // ESC Key to Close
  if (e.key === 'Escape' || e.keyCode === 27) {
    e.preventDefault();
    closeCaseStudyModal();
    return;
  }

  // Focus Trapping for Tab / Shift+Tab
  if (e.key === 'Tab' || e.keyCode === 9) {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = modal.querySelectorAll(focusableSelectors);
    if (!focusableElements.length) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      if (document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
}

function populateModalData() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  const project = PORTFOLIO_DATA.featuredProject;
  if (!project || !project.modalDetails) return;

  const details = project.modalDetails;

  // Overview
  const overviewEl = document.getElementById('modal-overview-text');
  if (overviewEl) overviewEl.textContent = details.overview;

  // Problem
  const problemEl = document.getElementById('modal-problem-text');
  if (problemEl) problemEl.textContent = details.problemDeepDive;

  // Solution
  const solutionEl = document.getElementById('modal-solution-text');
  if (solutionEl) solutionEl.textContent = details.solutionArchitecture;

  // Contribution
  const contributionEl = document.getElementById('modal-contribution-text');
  if (contributionEl) contributionEl.textContent = details.myContribution;

  // Challenges
  const challengesContainer = document.getElementById('modal-challenges-container');
  if (challengesContainer && details.challenges) {
    challengesContainer.innerHTML = details.challenges.map(item => `
      <div class="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
        <h5 class="text-sm font-semibold text-cyan-300 mb-1 font-mono">⚡ ${escapeHTML(item.challenge)}</h5>
        <p class="text-xs text-slate-300 leading-relaxed">${escapeHTML(item.solution)}</p>
      </div>
    `).join('');
  }

  // Future Improvements
  const improvementsContainer = document.getElementById('modal-future-improvements');
  if (improvementsContainer && details.futureImprovements) {
    improvementsContainer.innerHTML = details.futureImprovements.map(item => `
      <li class="flex items-start gap-2 text-xs text-slate-300">
        <span class="text-cyan-400 mt-0.5">🔹</span>
        <span>${escapeHTML(item)}</span>
      </li>
    `).join('');
  }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Global modal setup on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  // Close on clicking backdrop outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCaseStudyModal();
    }
  });

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudyModal);
  }
});
