/**
 * MAIN CONTROLLER — VINAYAK SAJEENDRAN PORTFOLIO
 * Coordinates navigation, mobile menu, contact form, copy-to-clipboard, and interactive UI states.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initActiveNavHighlight();
  initSkillTabs();
  initClipboardButtons();
  initContactForm();
  initScrollToTop();
});

/**
 * Sticky Navbar Dynamic Styling on Scroll
 */
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-slate-950/85', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg', 'shadow-black/40');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.remove('bg-slate-950/85', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg', 'shadow-black/40');
      navbar.classList.add('bg-transparent', 'border-transparent');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside menu content
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });
}

/**
 * Active Navigation Link Highlight via IntersectionObserver
 */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');
  if (!sections.length || !navLinks.length) return;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('text-cyan-400', 'border-b-2', 'border-cyan-400');
            link.classList.remove('text-slate-300');
          } else {
            link.classList.remove('text-cyan-400', 'border-b-2', 'border-cyan-400');
            link.classList.add('text-slate-300');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => sectionObserver.observe(sec));
}

/**
 * Skill Category Filter Tabs
 */
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-category-tab');
  const categoryPanels = document.querySelectorAll('.skill-category-panel');

  if (!tabs.length || !categoryPanels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCategory = tab.getAttribute('data-category');

      // Update active tab button style
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50');
        t.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/50');
      tab.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      tab.setAttribute('aria-selected', 'true');

      // Show/Hide category panels
      categoryPanels.forEach(panel => {
        if (targetCategory === 'all' || panel.getAttribute('data-category') === targetCategory) {
          panel.classList.remove('hidden');
          panel.classList.add('grid');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('grid');
        }
      });
    });
  });
}

/**
 * One-Click Copy-to-Clipboard with Floating Toast
 */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');
  const toast = document.getElementById('clipboard-toast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-message') || toast;
    msgEl.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3200);
  }
}

/**
 * Contact Form Controller
 * Implements validation, loading state, success state, error state, and clear reset.
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = document.getElementById('contact-btn-text');
  const btnSpinner = document.getElementById('contact-btn-spinner');
  const formSuccessBanner = document.getElementById('contact-success-banner');
  const formErrorBanner = document.getElementById('contact-error-banner');
  const resetBtn = document.getElementById('contact-reset-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide existing banners
    if (formSuccessBanner) formSuccessBanner.classList.add('hidden');
    if (formErrorBanner) formErrorBanner.classList.add('hidden');

    // Get input elements
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'Please enter your name (at least 2 characters).');
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      setFieldError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldError(messageInput, 'Please write a message with at least 10 characters.');
      isValid = false;
    } else {
      clearFieldError(messageInput);
    }

    if (!isValid) return;

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending Message...';
    if (btnSpinner) btnSpinner.classList.remove('hidden');

    // Configurable endpoint or simulated client dispatch
    try {
      // If a backend endpoint is configured via form action, send fetch request:
      const formAction = form.getAttribute('action');
      if (formAction && formAction.startsWith('http')) {
        const response = await fetch(formAction, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput ? subjectInput.value.trim() : 'Portfolio Contact',
            message: messageInput.value.trim()
          })
        });

        if (!response.ok) throw new Error('Failed to send message.');
      } else {
        // Simulated network delay for client demo
        await new Promise(resolve => setTimeout(resolve, 1200));
      }

      // Show Success
      form.classList.add('hidden');
      if (formSuccessBanner) formSuccessBanner.classList.remove('hidden');
      form.reset();

    } catch (err) {
      if (formErrorBanner) {
        formErrorBanner.textContent = 'An error occurred while transmitting your message. Please reach out directly to vinayaksajeendran@gmail.com.';
        formErrorBanner.classList.remove('hidden');
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
      if (btnSpinner) btnSpinner.classList.add('hidden');
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (formSuccessBanner) formSuccessBanner.classList.add('hidden');
      form.classList.remove('hidden');
      form.reset();
    });
  }

  function setFieldError(input, errorMsg) {
    input.classList.add('border-rose-500', 'focus:ring-rose-500');
    input.classList.remove('border-slate-700', 'focus:ring-cyan-400');
    const parent = input.closest('.form-group');
    if (parent) {
      let errEl = parent.querySelector('.field-error-msg');
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'field-error-msg text-xs text-rose-400 mt-1 font-mono';
        parent.appendChild(errEl);
      }
      errEl.textContent = errorMsg;
    }
  }

  function clearFieldError(input) {
    input.classList.remove('border-rose-500', 'focus:ring-rose-500');
    input.classList.add('border-slate-700', 'focus:ring-cyan-400');
    const parent = input.closest('.form-group');
    if (parent) {
      const errEl = parent.querySelector('.field-error-msg');
      if (errEl) errEl.remove();
    }
  }
}

/**
 * Scroll to Top Progress Button
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-to-top-btn');
  const progressCircle = document.getElementById('scroll-progress-circle');
  if (!scrollTopBtn) return;

  const totalLength = 113; // 2 * PI * r (r = 18)

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${totalLength} ${totalLength}`;
    progressCircle.style.strokeDashoffset = `${totalLength}`;
  }

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollHeight > 0 && progressCircle) {
      const progress = scrollTop / scrollHeight;
      const offset = totalLength - (progress * totalLength);
      progressCircle.style.strokeDashoffset = `${offset}`;
    }

    if (scrollTop > 350) {
      scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      scrollTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
