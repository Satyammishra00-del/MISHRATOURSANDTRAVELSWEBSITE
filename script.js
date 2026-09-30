/**
 * MISHRA TOURS AND TRAVELS - INTERACTIVE ENGINE
 * Features:
 * - Hero cinematic background slideshow
 * - Destination category filtering
 * - Animated number counters on scroll
 * - Instant WhatsApp quote & booking generator (Shivam Mishra: 8767213391 / Satyam Mishra: 9922355049)
 * - Modal management
 * - Responsive mobile navigation & scroll spy
 * - Toast notification feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initAnimatedCounters();
  initDefaultDatePickers();
  initTestimonialSlider();
  initScrollFrameAnimation();
});

// ================= NAVBAR & SCROLL SPY =================
function initNavbarScroll() {
  const nav = document.getElementById('main-nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Add enhanced shadow on scroll
    if (window.scrollY > 40) {
      nav.classList.add('shadow-xl', 'bg-navyDark/95');
      nav.classList.remove('bg-navyDark/85');
    } else {
      nav.classList.remove('shadow-xl', 'bg-navyDark/95');
      nav.classList.add('bg-navyDark/85');
    }

    // Scroll spy for active link
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-gold-400', 'active');
            link.classList.remove('text-slate-200');
          } else {
            link.classList.remove('text-gold-400', 'active');
            link.classList.add('text-slate-200');
          }
        });
      }
    });
  });
}

// ================= MOBILE DRAWER MENU =================
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (btn && menu) {
    btn.addEventListener('click', toggleMobileMenu);
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ================= ANIMATED COUNTERS =================
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.innerText = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const whyUsSection = document.getElementById('why-us');
  if (whyUsSection) {
    observer.observe(whyUsSection);
  }
}

// ================= DESTINATION CATEGORY FILTER =================
function filterDestinations(category) {
  const buttons = document.querySelectorAll('.dest-filter-btn');
  const cards = document.querySelectorAll('.dest-card');

  // Update active button state
  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('bg-gold-500', 'text-navyDark', 'shadow-gold-sm');
      btn.classList.remove('bg-white/5', 'text-slate-300');
    } else {
      btn.classList.remove('bg-gold-500', 'text-navyDark', 'shadow-gold-sm');
      btn.classList.add('bg-white/5', 'text-slate-300');
    }
  });

  // Filter cards with smooth fade/scale
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

// ================= MODAL CONTROLS =================
function openBookingModal(preselectedDestination = '') {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  if (preselectedDestination) {
    const destSelect = document.getElementById('modal-destination');
    if (destSelect) {
      // Check if value exists in dropdown or select closest
      let found = false;
      for (let option of destSelect.options) {
        if (option.value.toLowerCase() === preselectedDestination.toLowerCase()) {
          option.selected = true;
          found = true;
          break;
        }
      }
      if (!found) {
        destSelect.value = "Custom Destination";
      }
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  modal.classList.remove('show');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal when clicking outside box
window.addEventListener('click', (e) => {
  const modal = document.getElementById('booking-modal');
  if (modal && e.target === modal) {
    closeBookingModal();
  }
});

// Quick inquire from service cards
function quickInquireService(serviceName) {
  openBookingModal();
  const serviceSelect = document.getElementById('modal-service');
  if (serviceSelect) {
    for (let opt of serviceSelect.options) {
      if (opt.text.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(opt.value.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }
}

// ================= HERO QUICK SEARCH TO WHATSAPP =================
function handleHeroQuickSearch(event) {
  event.preventDefault();

  const origin = document.getElementById('hero-origin').value || 'Boisar';
  const destination = document.getElementById('hero-destination').value;
  const tripType = document.getElementById('hero-trip-type').value;
  const date = document.getElementById('hero-date').value || 'Flexible / Upcoming';

  const defaultOwnerPhone = '8767213391'; // Shivam Mishra default, can also choose Satyam

  const message = `*Trip Inquiry - Mishra Tours & Travels*%0A%0A` +
    `📍 *Pickup:* ${encodeURIComponent(origin)}%0A` +
    `🎯 *Destination:* ${encodeURIComponent(destination)}%0A` +
    `🧳 *Category:* ${encodeURIComponent(tripType)}%0A` +
    `📅 *Preferred Date:* ${encodeURIComponent(date)}%0A%0A` +
    `Please share the package itinerary, vehicle options, and best price quotation. Thank you!`;

  showToast(`Preparing WhatsApp inquiry for ${destination}...`);

  setTimeout(() => {
    window.open(`https://wa.me/91${defaultOwnerPhone}?text=${message}`, '_blank');
  }, 600);
}

// ================= MODAL BOOKING SUBMISSION TO WHATSAPP =================
function handleModalBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('modal-name').value.trim();
  const phone = document.getElementById('modal-phone').value.trim();
  const pickup = document.getElementById('modal-pickup').value.trim() || 'Boisar / Mumbai';
  const destination = document.getElementById('modal-destination').value;
  const service = document.getElementById('modal-service').value;
  const date = document.getElementById('modal-date').value || 'Flexible';
  const passengers = document.getElementById('modal-passengers').value || 'To be decided';

  // Selected owner
  const ownerRadios = document.getElementsByName('modal-owner-target');
  let selectedPhone = '8767213391';
  let ownerName = 'Shivam Mishra';

  for (let r of ownerRadios) {
    if (r.checked) {
      selectedPhone = r.value;
      ownerName = r.value === '8767213391' ? 'Shivam Mishra' : 'Satyam Mishra';
      break;
    }
  }

  const message = `*New Booking Inquiry - Mishra Tours & Travels*%0A%0A` +
    `👤 *Guest Name:* ${encodeURIComponent(name)}%0A` +
    `📞 *Guest Phone:* ${encodeURIComponent(phone)}%0A` +
    `📍 *Pickup Location:* ${encodeURIComponent(pickup)}%0A` +
    `🎯 *Destination:* ${encodeURIComponent(destination)}%0A` +
    `✨ *Service Required:* ${encodeURIComponent(service)}%0A` +
    `📅 *Travel Date:* ${encodeURIComponent(date)}%0A` +
    `👥 *Number of Travelers:* ${encodeURIComponent(passengers)}%0A%0A` +
    `Hello ${encodeURIComponent(ownerName)}, kindly provide booking availability and best quote for this trip.`;

  showToast(`Booking details prepared! Connecting to ${ownerName} on WhatsApp...`);

  setTimeout(() => {
    closeBookingModal();
    window.open(`https://wa.me/91${selectedPhone}?text=${message}`, '_blank');
  }, 800);
}

// ================= MAIN CONTACT FORM SUBMISSION =================
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const email = document.getElementById('contact-email').value.trim() || 'Not specified';
  const service = document.getElementById('contact-service').value;
  const date = document.getElementById('contact-date').value || 'Flexible';
  const passengers = document.getElementById('contact-passengers').value || '1';
  const notes = document.getElementById('contact-message').value.trim() || 'None';

  // Selected owner radio
  const ownerRadios = document.getElementsByName('owner-recipient');
  let selectedPhone = '8767213391';
  let ownerName = 'Shivam Mishra';

  for (let r of ownerRadios) {
    if (r.checked) {
      selectedPhone = r.value;
      ownerName = r.value === '8767213391' ? 'Shivam Mishra' : 'Satyam Mishra';
      break;
    }
  }

  const message = `*Website Contact Inquiry - Mishra Tours & Travels*%0A%0A` +
    `👤 *Name:* ${encodeURIComponent(name)}%0A` +
    `📞 *Contact Number:* ${encodeURIComponent(phone)}%0A` +
    `📧 *Email:* ${encodeURIComponent(email)}%0A` +
    `✨ *Interested In:* ${encodeURIComponent(service)}%0A` +
    `📅 *Travel Date:* ${encodeURIComponent(date)}%0A` +
    `👥 *Travelers:* ${encodeURIComponent(passengers)}%0A` +
    `📝 *Trip Details:* ${encodeURIComponent(notes)}%0A%0A` +
    `Attn: ${encodeURIComponent(ownerName)} - Please get back with best package rate.`;

  showToast(`Thank you ${name}! Opening WhatsApp to connect with ${ownerName}...`);

  setTimeout(() => {
    window.open(`https://wa.me/91${selectedPhone}?text=${message}`, '_blank');
  }, 800);
}

// ================= HELPER: DEFAULT DATE PICKERS =================
function initDefaultDatePickers() {
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });
}

// ================= TOAST NOTIFICATION UTILITY =================
function showToast(message) {
  // Remove existing toast if any
  const existing = document.querySelector('.toast-notice');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-gold-400 text-lg"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Auto hide after 4s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ================= TESTIMONIALS SLIDER ENGINE =================
let currentTestimonialIndex = 0;
let testimonialAutoPlayInterval = null;

function initTestimonialSlider() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;

  updateTestimonialSlider();

  // Auto slide every 6 seconds
  testimonialAutoPlayInterval = setInterval(() => {
    slideTestimonials('next');
  }, 6000);

  // Pause on hover
  if (track.parentElement) {
    track.parentElement.addEventListener('mouseenter', () => {
      if (testimonialAutoPlayInterval) clearInterval(testimonialAutoPlayInterval);
    });

    track.parentElement.addEventListener('mouseleave', () => {
      if (testimonialAutoPlayInterval) clearInterval(testimonialAutoPlayInterval);
      testimonialAutoPlayInterval = setInterval(() => {
        slideTestimonials('next');
      }, 6000);
    });
  }
}

function getMaxTestimonialIndex() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (cards.length === 0) return 0;
  if (window.innerWidth >= 1024) {
    return Math.max(0, cards.length - 3);
  } else if (window.innerWidth >= 768) {
    return Math.max(0, cards.length - 2);
  } else {
    return Math.max(0, cards.length - 1);
  }
}

function slideTestimonials(direction) {
  const maxIndex = getMaxTestimonialIndex();
  if (direction === 'next') {
    currentTestimonialIndex = currentTestimonialIndex >= maxIndex ? 0 : currentTestimonialIndex + 1;
  } else {
    currentTestimonialIndex = currentTestimonialIndex <= 0 ? maxIndex : currentTestimonialIndex - 1;
  }
  updateTestimonialSlider();
}

function setTestimonialIndex(index) {
  const maxIndex = getMaxTestimonialIndex();
  currentTestimonialIndex = Math.min(index, maxIndex);
  updateTestimonialSlider();
}

function updateTestimonialSlider() {
  const track = document.getElementById('testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 24; // gap-6
  const offset = currentTestimonialIndex * (cardWidth + gap);
  track.style.transform = `translateX(-${offset}px)`;

  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === currentTestimonialIndex) {
      dot.classList.remove('w-2', 'bg-white/30');
      dot.classList.add('w-8', 'bg-gold-400');
    } else {
      dot.classList.remove('w-8', 'bg-gold-400');
      dot.classList.add('w-2', 'bg-white/30');
    }
  });
}

window.addEventListener('resize', () => {
  updateTestimonialSlider();
});

// ================= GLOBAL FULL-PAGE SCROLL FRAME ANIMATION ENGINE =================
const TOTAL_FRAMES = 240;
const framesArray = new Array(TOTAL_FRAMES);
let isFramesLoaded = false;
let loadedFramesCount = 0;
let currentFrameFloat = 0;
let targetFrameFloat = 0;
let animationFrameId = null;

function getFramePath(index) {
  const pad = String(index).padStart(6, '0');
  return `frames/frame_${pad}.jpg`;
}

function initScrollFrameAnimation() {
  const canvas = document.getElementById('global-scroll-canvas') || document.getElementById('hero-frame-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderCurrentFrame();
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Load Frame 0 first for instant initial paint
  const firstFrame = new Image();
  firstFrame.src = getFramePath(0);
  firstFrame.onload = () => {
    framesArray[0] = firstFrame;
    loadedFramesCount++;
    renderCurrentFrame();
    loadAllFramesProgressively();
  };
  firstFrame.onerror = () => {
    loadAllFramesProgressively();
  };

  // Preload and cache all 240 frames in memory
  function loadAllFramesProgressively() {
    // Keyframes first for instant responsiveness across the scroll range
    const priorityIndices = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 6) {
      if (i !== 0) priorityIndices.push(i);
    }
    const remainingIndices = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i !== 0 && i % 6 !== 0) remainingIndices.push(i);
    }

    const loadQueue = [...priorityIndices, ...remainingIndices];
    let completed = 1;

    loadQueue.forEach((idx) => {
      const img = new Image();
      img.src = getFramePath(idx);
      img.onload = () => {
        framesArray[idx] = img;
        completed++;
        loadedFramesCount = completed;

        if (completed === TOTAL_FRAMES) {
          isFramesLoaded = true;
        }
      };
      img.onerror = () => {
        completed++;
      };
    });
  }

  // Initial scroll position calculation
  onGlobalScroll();
  window.addEventListener('scroll', onGlobalScroll, { passive: true });

  // Main 60fps / 120fps Smooth Animation Loop
  function renderLoop() {
    onGlobalScroll();
    
    // Smooth responsive interpolation toward target frame on scroll
    currentFrameFloat += (targetFrameFloat - currentFrameFloat) * 0.25;

    if (Math.abs(currentFrameFloat - targetFrameFloat) < 0.002) {
      currentFrameFloat = targetFrameFloat;
    }

    renderCurrentFrame();
    animationFrameId = requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

// Computes exact frame index from the user's entire document scroll progress
function onGlobalScroll() {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableDistance <= 0) {
    targetFrameFloat = 0;
    return;
  }

  const scrollProgress = Math.max(0, Math.min(1, window.scrollY / scrollableDistance));
  
  // frameIndex = scrollProgress * (totalFrames - 1)
  // At top (0% scroll) -> frame 0
  // At bottom (100% scroll) -> frame 239
  // Scrolling up reverses the animation
  targetFrameFloat = scrollProgress * (TOTAL_FRAMES - 1);
}

// High performance canvas render using aspect-ratio cover math
function renderCurrentFrame() {
  const canvas = document.getElementById('global-scroll-canvas') || document.getElementById('hero-frame-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let frameIdx = Math.round(currentFrameFloat);
  frameIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIdx));

  let img = framesArray[frameIdx];

  // If exact frame is still buffering, locate the closest available cached frame in memory
  if (!img || !img.complete || !img.naturalWidth) {
    let closestDist = Infinity;
    let fallbackImg = null;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (framesArray[i] && framesArray[i].complete && framesArray[i].naturalWidth) {
        const dist = Math.abs(i - frameIdx);
        if (dist < closestDist) {
          closestDist = dist;
          fallbackImg = framesArray[i];
          if (dist === 0) break;
        }
      }
    }
    img = fallbackImg;
  }

  if (!img || !img.complete || !img.naturalWidth) return;

  // Render with high-fidelity Cover Aspect Ratio Math
  const imgRatio = img.width / img.height;
  const canvasRatio = canvas.width / canvas.height;
  let drawW, drawH, drawX, drawY;

  if (canvasRatio > imgRatio) {
    drawW = canvas.width;
    drawH = canvas.width / imgRatio;
    drawX = 0;
    drawY = (canvas.height - drawH) / 2;
  } else {
    drawH = canvas.height;
    drawW = canvas.height * imgRatio;
    drawX = (canvas.width - drawW) / 2;
    drawY = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, drawX, drawY, drawW, drawH);
}


