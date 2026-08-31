/**
 * ANIMATION SYSTEM — VINAYAK SAJEENDRAN PORTFOLIO
 * Handles scroll reveals, number counters, telemetry animations, and motion preferences.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initStatsCounter();
  initHeroTelemetry();
  initArchitecturePulse();
});

/**
 * Initializes IntersectionObserver for reveal-on-scroll elements.
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Animated number counter for the Quick Stats section.
 */
function initStatsCounter() {
  const statsElements = document.querySelectorAll('[data-stat-value]');
  if (!statsElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute('data-stat-value'));
        const suffix = el.getAttribute('data-stat-suffix') || '';
        const isDecimal = el.getAttribute('data-stat-decimal') === 'true';

        if (prefersReducedMotion) {
          el.textContent = isDecimal ? targetVal.toFixed(1) + suffix : targetVal + suffix;
          observer.unobserve(el);
          return;
        }

        animateNumber(el, 0, targetVal, isDecimal, suffix, 1800);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statsElements.forEach(el => statsObserver.observe(el));
}

/**
 * Smooth cubic-ease number animator.
 */
function animateNumber(element, start, end, isDecimal, suffix, duration) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    
    // Ease Out Quad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const current = start + (end - start) * easeProgress;

    element.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = (isDecimal ? end.toFixed(1) : end) + suffix;
    }
  }

  window.requestAnimationFrame(step);
}

/**
 * Simulates a subtle live developer terminal telemetry stream in the hero visual.
 */
function initHeroTelemetry() {
  const terminalLog = document.getElementById('hero-terminal-stream');
  if (!terminalLog) return;

  const logs = [
    "[SYSTEM_INIT] Kernel & IoT telemetry initialized.",
    "[STATUS] Microcontroller nodes: ONLINE (5/5).",
    "[SECURITY] TLS 1.3 | AES-256 handshake OK.",
    "[DATA_FLOW] Sensor streams validated.",
    "[IDLE] Ready for instructions."
  ];

  let logIndex = 0;
  function addNextLog() {
    if (logIndex < logs.length) {
      const line = document.createElement('div');
      line.className = 'text-xs font-mono text-slate-400 leading-relaxed';
      line.innerHTML = `<span class="text-cyan-400">➜</span> ${logs[logIndex]}`;
      terminalLog.appendChild(line);
      logIndex++;
      setTimeout(addNextLog, 900);
    }
  }

  setTimeout(addNextLog, 1200);
}

/**
 * Interactive pulses across the IoT architecture diagram.
 */
function initArchitecturePulse() {
  const nodes = document.querySelectorAll('.arch-node');
  if (!nodes.length) return;

  nodes.forEach((node, idx) => {
    node.addEventListener('mouseenter', () => {
      node.classList.add('ring-2', 'ring-cyan-400', 'shadow-cyan-500/30');
    });
    node.addEventListener('mouseleave', () => {
      node.classList.remove('ring-2', 'ring-cyan-400', 'shadow-cyan-500/30');
    });
  });
}
