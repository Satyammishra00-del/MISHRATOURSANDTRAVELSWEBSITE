/**
 * MISHRA TOURS AND TRAVELS - INQUIRY ENGINE & MODAL SYSTEM
 * Handles:
 * - Real-time client-side form validation (Full Name, Phone, Email, Destination, Date, Travelers, Budget, Message)
 * - LocalStorage persistence for all inquiries
 * - WhatsApp booking generator with customized deep-links
 * - Destination & Package deep-dive detail modals
 * - Lightbox for photo/video gallery
 * - Customer review submission engine
 */

// ================= LOCAL STORAGE KEY =================
const INQUIRY_STORAGE_KEY = 'mishra_tours_inquiries_db';
const REVIEWS_STORAGE_KEY = 'mishra_tours_custom_reviews_db';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderFloatingWhatsApp();
  initDateConstraints();
  injectGlobalModals();
});

// ================= INJECT GLOBAL MODALS & DRAWERS =================
function injectGlobalModals() {
  if (document.getElementById('global-dest-modal')) return;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'mtt-modals-root';
  modalContainer.innerHTML = `
    <!-- DESTINATION DETAILS DEEP-DIVE MODAL -->
    <div id="global-dest-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-deepNavy/80 backdrop-blur-md overflow-y-auto">
      <div class="relative w-full max-w-4xl bg-navyDark border border-gold-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 transform transition-all text-slate-100">
        
        <!-- Header Banner -->
        <div class="relative h-64 sm:h-80 w-full overflow-hidden">
          <img id="gdm-image" src="" alt="Destination" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-navyDark via-navyDark/40 to-transparent"></div>
          
          <button onclick="closeDestinationModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-navyDark/80 hover:bg-gold-500 hover:text-navyDark border border-white/20 text-white flex items-center justify-center transition-all z-20" aria-label="Close modal">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>

          <div class="absolute bottom-6 left-6 right-6">
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span id="gdm-category" class="px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-navyDark"></span>
              <span id="gdm-duration" class="px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md text-white border border-white/20"></span>
              <span id="gdm-rating" class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <i class="fa-solid fa-star text-amber-400"></i> <span id="gdm-rating-val"></span>
              </span>
            </div>
            <h2 id="gdm-title" class="font-display text-2xl sm:text-4xl font-extrabold text-white"></h2>
            <p id="gdm-tagline" class="text-gold-300 text-sm sm:text-base font-medium mt-1"></p>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <!-- Key Meta Badges -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-calendar-check text-gold-400 text-xl"></i>
              <div>
                <span class="text-slate-400 block text-[11px] uppercase font-bold">Best Time</span>
                <span id="gdm-best-time" class="text-white font-semibold"></span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-cloud-sun text-gold-400 text-xl"></i>
              <div>
                <span class="text-slate-400 block text-[11px] uppercase font-bold">Weather</span>
                <span id="gdm-weather" class="text-white font-semibold"></span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-tag text-gold-400 text-xl"></i>
              <div>
                <span class="text-slate-400 block text-[11px] uppercase font-bold">Starting Price</span>
                <span id="gdm-price" class="text-gold-400 font-extrabold text-base"></span>
              </div>
            </div>
          </div>

          <!-- Overview -->
          <div>
            <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <i class="fa-solid fa-circle-info text-gold-400 text-sm"></i> Destination Overview
            </h3>
            <p id="gdm-overview" class="text-slate-300 text-sm sm:text-base leading-relaxed"></p>
          </div>

          <!-- Highlights -->
          <div>
            <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <i class="fa-solid fa-sparkles text-gold-400 text-sm"></i> Key Attractions & Highlights
            </h3>
            <ul id="gdm-highlights" class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-200"></ul>
          </div>

          <!-- Itinerary -->
          <div>
            <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <i class="fa-solid fa-route text-gold-400 text-sm"></i> Recommended Day-by-Day Itinerary
            </h3>
            <div id="gdm-itinerary" class="space-y-3"></div>
          </div>

          <!-- Inclusions & Exclusions -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <h4 class="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fa-solid fa-circle-check"></i> What's Included
              </h4>
              <ul id="gdm-inclusions" class="space-y-1.5 text-xs text-slate-300"></ul>
            </div>
            <div class="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20">
              <h4 class="text-rose-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fa-solid fa-circle-xmark"></i> What's Excluded
              </h4>
              <ul id="gdm-exclusions" class="space-y-1.5 text-xs text-slate-300"></ul>
            </div>
          </div>

        </div>

        <!-- Footer Actions -->
        <div class="p-6 bg-navyMedium/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-slate-400">
            Need customized dates or hotel upgrades? <span class="text-white font-medium">Talk directly to Shivam & Satyam Mishra</span>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="closeDestinationModal()" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition">
              Close
            </button>
            <button id="gdm-whatsapp-btn" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg transition">
              <i class="fa-brands fa-whatsapp text-lg"></i> Book on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- PACKAGE DETAILS MODAL -->
    <div id="global-package-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-deepNavy/80 backdrop-blur-md overflow-y-auto">
      <div class="relative w-full max-w-3xl bg-navyDark border border-gold-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 transform transition-all text-slate-100">
        
        <div class="relative h-56 sm:h-72 w-full overflow-hidden">
          <img id="gpm-image" src="" alt="Package" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-navyDark via-navyDark/40 to-transparent"></div>
          
          <button onclick="closePackageModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-navyDark/80 hover:bg-gold-500 hover:text-navyDark border border-white/20 text-white flex items-center justify-center transition-all z-20">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>

          <div class="absolute bottom-6 left-6 right-6">
            <span id="gpm-badge" class="px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-navyDark mb-2 inline-block"></span>
            <h2 id="gpm-title" class="font-display text-2xl sm:text-3xl font-extrabold text-white"></h2>
            <div class="flex items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1">
              <span id="gpm-destination" class="flex items-center gap-1.5"><i class="fa-solid fa-map-pin text-gold-400"></i> <span></span></span>
              <span>•</span>
              <span id="gpm-duration" class="flex items-center gap-1.5"><i class="fa-solid fa-clock text-gold-400"></i> <span></span></span>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <!-- Pricing -->
          <div class="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <span class="text-xs text-slate-400 block uppercase font-bold">Package Price Per Person</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span id="gpm-price" class="text-2xl font-black text-gold-400"></span>
                <span id="gpm-original-price" class="text-sm text-slate-500 line-through"></span>
                <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">All Taxes Included</span>
              </div>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-400 block">Trip Rating</span>
              <span class="text-amber-400 font-bold text-sm flex items-center gap-1 justify-end">
                <i class="fa-solid fa-star"></i> <span id="gpm-rating">5.0</span>
              </span>
            </div>
          </div>

          <!-- Description -->
          <p id="gpm-desc" class="text-slate-300 text-sm leading-relaxed"></p>

          <!-- Highlights -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-gold-400 mb-2">Package Highlights</h4>
            <ul id="gpm-highlights" class="space-y-1.5 text-sm text-slate-200"></ul>
          </div>

          <!-- Inclusions & Exclusions -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <h5 class="text-emerald-400 font-bold mb-2"><i class="fa-solid fa-check mr-1"></i> Inclusions</h5>
              <ul id="gpm-inclusions" class="space-y-1 text-slate-300"></ul>
            </div>
            <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
              <h5 class="text-rose-400 font-bold mb-2"><i class="fa-solid fa-xmark mr-1"></i> Exclusions</h5>
              <ul id="gpm-exclusions" class="space-y-1 text-slate-300"></ul>
            </div>
          </div>
        </div>

        <div class="p-6 bg-navyMedium/60 border-t border-white/10 flex items-center justify-between gap-4">
          <button onclick="closePackageModal()" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition">
            Close
          </button>
          <button id="gpm-whatsapp-btn" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg transition">
            <i class="fa-brands fa-whatsapp text-lg"></i> Book On WhatsApp
          </button>
        </div>

      </div>
    </div>

    <!-- INQUIRY SUCCESS CONFIRMATION MODAL -->
    <div id="inquiry-success-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-deepNavy/85 backdrop-blur-md">
      <div class="relative w-full max-w-md bg-navyDark border border-gold-500/40 rounded-3xl p-6 sm:p-8 text-center text-slate-100 shadow-2xl">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center text-3xl mb-4 animate-bounce">
          <i class="fa-solid fa-check"></i>
        </div>
        <h3 class="font-display text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
        <p class="text-slate-300 text-sm mb-4">
          Thank you for trusting <span class="text-gold-400 font-semibold">Mishra Tours And Travels</span>. Your inquiry reference ID is:
        </p>
        <div class="p-3 bg-white/5 rounded-xl border border-gold-500/30 font-mono text-gold-400 font-bold text-lg mb-6 tracking-wider" id="ism-ref-id">
          MTT-2026-0000
        </div>
        <p class="text-xs text-slate-400 mb-6">
          Shivam Mishra (+91 8767213391) or Satyam Mishra (+91 9922355049) will reach out to you within 30 minutes with customized itinerary options and best rates.
        </p>
        <div class="flex flex-col gap-3">
          <button id="ism-whatsapp-btn" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition">
            <i class="fa-brands fa-whatsapp text-lg"></i> Connect on WhatsApp Instantly
          </button>
          <button onclick="closeInquirySuccessModal()" class="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-semibold text-sm transition">
            Close & Continue Browsing
          </button>
        </div>
      </div>
    </div>

    <!-- SAVED INQUIRIES MANAGEMENT DRAWER (OWNER & USER VIEW) -->
    <div id="inquiries-manager-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-deepNavy/85 backdrop-blur-md">
      <div class="relative w-full max-w-2xl bg-navyDark border border-gold-500/30 rounded-3xl p-6 shadow-2xl text-slate-100 max-h-[85vh] flex flex-col">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <i class="fa-solid fa-list-check"></i>
            </div>
            <div>
              <h3 class="font-bold text-lg text-white">Stored Inquiries & Leads</h3>
              <p class="text-xs text-slate-400">Locally saved travel requests on this device</p>
            </div>
          </div>
          <button onclick="closeInquiriesManager()" class="text-slate-400 hover:text-white p-2">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div id="inquiries-list-container" class="py-4 space-y-3 overflow-y-auto flex-1 text-xs">
          <!-- Injected dynamically -->
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
          <button onclick="clearAllInquiries()" class="text-rose-400 hover:text-rose-300 py-1.5 px-3 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 transition">
            <i class="fa-solid fa-trash-can mr-1"></i> Clear Local History
          </button>
          <button onclick="closeInquiriesManager()" class="py-2 px-5 rounded-xl bg-gold-500 text-navyDark font-bold hover:bg-gold-400 transition">
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- LIGHTBOX MODAL FOR GALLERY -->
    <div id="global-lightbox-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
      <button onclick="closeLightbox()" class="absolute top-5 right-5 text-white/70 hover:text-white text-3xl p-2 z-50 transition">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
        <img id="lightbox-img" src="" alt="Preview" class="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10">
        <div class="text-center mt-4 text-white">
          <h4 id="lightbox-title" class="font-bold text-lg text-gold-400"></h4>
          <p id="lightbox-caption" class="text-sm text-slate-300 mt-1 max-w-xl"></p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);
}

// ================= FLOATING WHATSAPP BUTTON =================
function renderFloatingWhatsApp() {
  if (document.getElementById('floating-whatsapp-btn')) return;

  const floatBtn = document.createElement('a');
  floatBtn.id = 'floating-whatsapp-btn';
  const defaultPhone = (window.MTT_CONFIG && window.MTT_CONFIG.defaultWhatsAppPhone) || '8767213391';
  const defaultMsg = encodeURIComponent("Hello, I would like to know more about your travel packages.");
  floatBtn.href = `https://wa.me/91${defaultPhone}?text=${defaultMsg}`;
  floatBtn.target = "_blank";
  floatBtn.rel = "noopener noreferrer";
  floatBtn.className = "fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all duration-300 pulse-gold group border-2 border-white/30";
  floatBtn.setAttribute('aria-label', 'Chat with Mishra Tours on WhatsApp');
  floatBtn.innerHTML = `
    <i class="fa-brands fa-whatsapp group-hover:rotate-12 transition-transform"></i>
    <span class="absolute right-full mr-3 px-3 py-1.5 bg-navyDark/95 text-white text-xs font-semibold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gold-500/30 shadow-xl">
      Chat on WhatsApp
    </span>
  `;

  document.body.appendChild(floatBtn);
}

// ================= DATE CONSTRAINTS =================
function initDateConstraints() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(inp => {
    inp.setAttribute('min', today);
  });
}

// ================= INQUIRY SUBMISSION WITH ZOD-STYLE STRICT VALIDATION =================
function handleComprehensiveInquirySubmit(event) {
  event.preventDefault();
  const form = event.target;

  // Retrieve fields safely
  const fullName = (form.querySelector('[name="fullName"]') || form.querySelector('#inq-name') || {}).value || '';
  const mobileNumber = (form.querySelector('[name="mobileNumber"]') || form.querySelector('#inq-phone') || {}).value || '';
  const email = (form.querySelector('[name="email"]') || form.querySelector('#inq-email') || {}).value || '';
  const destination = (form.querySelector('[name="destination"]') || form.querySelector('#inq-destination') || {}).value || '';
  const travelDate = (form.querySelector('[name="travelDate"]') || form.querySelector('#inq-date') || {}).value || '';
  const travelers = (form.querySelector('[name="travelers"]') || form.querySelector('#inq-travelers') || {}).value || '1';
  const budget = (form.querySelector('[name="budget"]') || form.querySelector('#inq-budget') || {}).value || 'Flexible';
  const message = (form.querySelector('[name="message"]') || form.querySelector('#inq-message') || {}).value || '';

  // Selected owner recipient if present
  let ownerPhone = '8767213391';
  let ownerName = 'Shivam Mishra';
  const ownerRadios = form.querySelectorAll('[name="ownerTarget"]');
  ownerRadios.forEach(r => {
    if (r.checked) {
      ownerPhone = r.value;
      ownerName = r.value === '9922355049' ? 'Satyam Mishra' : 'Shivam Mishra';
    }
  });

  // Strict Validation Rules
  const errors = [];
  if (!fullName.trim() || fullName.trim().length < 3) {
    errors.push("Please enter your full name (minimum 3 characters).");
  }
  
  const cleanPhone = mobileNumber.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.push("Please provide a valid 10-digit mobile number for booking updates.");
  }

  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.push("Please provide a valid email address format.");
  }

  if (!destination.trim()) {
    errors.push("Please choose or specify your travel destination.");
  }

  if (errors.length > 0) {
    alert("Please check your inquiry details:\n• " + errors.join("\n• "));
    return false;
  }

  // Generate Unique Reference ID
  const refId = 'MTT-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

  const inquiryRecord = {
    refId,
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    fullName: fullName.trim(),
    mobileNumber: cleanPhone,
    email: email.trim() || 'Not specified',
    destination: destination.trim(),
    travelDate: travelDate || 'Flexible / To be confirmed',
    travelers: travelers || '1',
    budget: budget || 'Flexible',
    message: message.trim() || 'No special requirements noted',
    assignedOwner: ownerName,
    assignedPhone: ownerPhone,
    status: 'New'
  };

  // Persist to LocalStorage
  saveInquiryToLocalStorage(inquiryRecord);

  // Prepare pre-formatted WhatsApp message
  const waText = `*New Travel Inquiry - Mishra Tours & Travels*%0A` +
    `🔖 *Ref ID:* ${refId}%0A%0A` +
    `👤 *Guest Name:* ${encodeURIComponent(inquiryRecord.fullName)}%0A` +
    `📞 *Mobile:* ${encodeURIComponent(inquiryRecord.mobileNumber)}%0A` +
    `📧 *Email:* ${encodeURIComponent(inquiryRecord.email)}%0A` +
    `📍 *Destination:* ${encodeURIComponent(inquiryRecord.destination)}%0A` +
    `📅 *Travel Date:* ${encodeURIComponent(inquiryRecord.travelDate)}%0A` +
    `👥 *Travelers:* ${encodeURIComponent(inquiryRecord.travelers)}%0A` +
    `💰 *Budget Range:* ${encodeURIComponent(inquiryRecord.budget)}%0A` +
    `📝 *Notes:* ${encodeURIComponent(inquiryRecord.message)}%0A%0A` +
    `Hello ${encodeURIComponent(ownerName)}, I have submitted an inquiry on your website. Kindly share the best quote.`;

  // Open Success Modal
  openInquirySuccessModal(refId, ownerPhone, waText);

  // Reset form
  form.reset();
  initDateConstraints();
  return true;
}

// ================= LOCAL STORAGE HELPERS =================
function saveInquiryToLocalStorage(record) {
  try {
    const existing = JSON.parse(localStorage.getItem(INQUIRY_STORAGE_KEY) || '[]');
    existing.unshift(record);
    localStorage.setItem(INQUIRY_STORAGE_KEY, JSON.stringify(existing.slice(0, 100)));
  } catch (e) {
    console.warn("Storage failed:", e);
  }
}

function getStoredInquiries() {
  try {
    return JSON.parse(localStorage.getItem(INQUIRY_STORAGE_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function clearAllInquiries() {
  if (confirm("Are you sure you want to clear your locally saved inquiry history?")) {
    localStorage.removeItem(INQUIRY_STORAGE_KEY);
    renderInquiriesList();
    showToast("Inquiry history cleared.");
  }
}

// ================= SUCCESS MODAL =================
function openInquirySuccessModal(refId, phone, waText) {
  const modal = document.getElementById('inquiry-success-modal');
  const refElem = document.getElementById('ism-ref-id');
  const waBtn = document.getElementById('ism-whatsapp-btn');

  if (refElem) refElem.innerText = refId;
  if (waBtn) {
    waBtn.onclick = () => {
      window.open(`https://wa.me/91${phone}?text=${waText}`, '_blank');
    };
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeInquirySuccessModal() {
  const modal = document.getElementById('inquiry-success-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ================= INQUIRIES VIEWER DRAWER =================
function openInquiriesManager() {
  const modal = document.getElementById('inquiries-manager-modal');
  renderInquiriesList();
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeInquiriesManager() {
  const modal = document.getElementById('inquiries-manager-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderInquiriesList() {
  const container = document.getElementById('inquiries-list-container');
  if (!container) return;

  const list = getStoredInquiries();
  if (list.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400">
        <i class="fa-solid fa-inbox text-3xl mb-2 text-slate-600"></i>
        <p>No inquiries saved on this browser yet.</p>
        <p class="text-[11px] mt-1 text-slate-500">Submit an inquiry on any page to test and verify storage.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition space-y-2">
      <div class="flex items-center justify-between">
        <span class="font-mono text-gold-400 font-bold text-xs">${item.refId}</span>
        <span class="text-[10px] text-slate-400">${item.formattedDate || item.timestamp}</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-slate-200">
        <div><strong>Name:</strong> ${item.fullName}</div>
        <div><strong>Mobile:</strong> ${item.mobileNumber}</div>
        <div><strong>Destination:</strong> ${item.destination}</div>
        <div><strong>Date:</strong> ${item.travelDate}</div>
        <div><strong>Travelers:</strong> ${item.travelers}</div>
        <div><strong>Budget:</strong> ${item.budget}</div>
      </div>
      ${item.message && item.message !== 'No special requirements noted' ? `<div class="text-[11px] text-slate-300 italic bg-black/20 p-2 rounded-lg">"${item.message}"</div>` : ''}
    </div>
  `).join('');
}

// ================= DESTINATION MODAL OPENER =================
function openDestinationModal(destId) {
  const dest = (window.MTT_DESTINATIONS || []).find(d => d.id === destId);
  if (!dest) return;

  injectGlobalModals();

  document.getElementById('gdm-image').src = dest.image;
  document.getElementById('gdm-category').innerText = dest.categoryLabel;
  document.getElementById('gdm-duration').innerText = dest.duration;
  document.getElementById('gdm-rating-val').innerText = `${dest.rating} (${dest.reviewsCount} reviews)`;
  document.getElementById('gdm-title').innerText = dest.name;
  document.getElementById('gdm-tagline').innerText = dest.tagline;

  document.getElementById('gdm-best-time').innerText = dest.bestTimeToVisit;
  document.getElementById('gdm-weather').innerText = dest.weatherSummary;
  document.getElementById('gdm-price').innerText = dest.priceStarting + " onwards";

  document.getElementById('gdm-overview').innerText = dest.fullOverview;

  // Highlights
  const hlList = document.getElementById('gdm-highlights');
  hlList.innerHTML = dest.topHighlights.map(h => `
    <li class="flex items-start gap-2">
      <i class="fa-solid fa-check text-gold-400 mt-1 shrink-0"></i>
      <span>${h}</span>
    </li>
  `).join('');

  // Itinerary
  const itinList = document.getElementById('gdm-itinerary');
  itinList.innerHTML = dest.suggestedItinerary.map(item => `
    <div class="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
      <span class="px-2.5 py-1 rounded-lg bg-gold-500/20 text-gold-400 text-xs font-bold shrink-0">${item.day}</span>
      <div>
        <h5 class="text-white font-bold text-sm">${item.title}</h5>
        <p class="text-slate-300 text-xs mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');

  // Inclusions & Exclusions
  document.getElementById('gdm-inclusions').innerHTML = dest.inclusions.map(inc => `<li>• ${inc}</li>`).join('');
  document.getElementById('gdm-exclusions').innerHTML = dest.exclusions.map(exc => `<li>• ${exc}</li>`).join('');

  // WhatsApp Button
  const waBtn = document.getElementById('gdm-whatsapp-btn');
  const waText = encodeURIComponent(`Hello Mishra Tours & Travels, I am interested in booking the *${dest.name}* tour package (${dest.duration}). Please share complete details and quote.`);
  waBtn.onclick = () => {
    window.open(`https://wa.me/918767213391?text=${waText}`, '_blank');
  };

  const modal = document.getElementById('global-dest-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDestinationModal() {
  const modal = document.getElementById('global-dest-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ================= PACKAGE MODAL OPENER =================
function openPackageModal(pkgId) {
  const pkg = (window.MTT_PACKAGES || []).find(p => p.id === pkgId);
  if (!pkg) return;

  injectGlobalModals();

  document.getElementById('gpm-image').src = pkg.image;
  document.getElementById('gpm-badge').innerText = pkg.badge;
  document.getElementById('gpm-title').innerText = pkg.title;
  document.getElementById('gpm-destination').querySelector('span').innerText = pkg.destination;
  document.getElementById('gpm-duration').querySelector('span').innerText = pkg.duration;
  document.getElementById('gpm-price').innerText = pkg.price;
  document.getElementById('gpm-original-price').innerText = pkg.originalPrice;
  document.getElementById('gpm-rating').innerText = `${pkg.rating} (${pkg.reviews} reviews)`;
  document.getElementById('gpm-desc').innerText = pkg.description;

  document.getElementById('gpm-highlights').innerHTML = pkg.highlights.map(h => `
    <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-gold-400 text-xs"></i> <span>${h}</span></li>
  `).join('');

  document.getElementById('gpm-inclusions').innerHTML = pkg.inclusions.map(i => `<li>• ${i}</li>`).join('');
  document.getElementById('gpm-exclusions').innerHTML = pkg.exclusions.map(e => `<li>• ${e}</li>`).join('');

  const waBtn = document.getElementById('gpm-whatsapp-btn');
  const waText = encodeURIComponent(`Hello Mishra Tours & Travels, I want to book the *${pkg.title}* (${pkg.duration} at ${pkg.price}). Please confirm available dates.`);
  waBtn.onclick = () => {
    window.open(`https://wa.me/918767213391?text=${waText}`, '_blank');
  };

  const modal = document.getElementById('global-package-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePackageModal() {
  const modal = document.getElementById('global-package-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ================= BOOK DIRECT ON WHATSAPP HELPER =================
function bookOnWhatsApp(itemName, category, price) {
  const text = encodeURIComponent(
    `Hello Mishra Tours & Travels,%0A%0A` +
    `I am interested in booking: *${itemName}*%0A` +
    `Category: ${category}%0A` +
    (price ? `Price/Rate: ${price}%0A` : '') +
    `%0APlease let me know the availability, itinerary, and booking procedure. Thank you!`
  );
  window.open(`https://wa.me/918767213391?text=${text}`, '_blank');
}

// ================= LIGHTBOX PREVIEW =================
function openLightbox(imgSrc, title, caption) {
  injectGlobalModals();
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-title').innerText = title || '';
  document.getElementById('lightbox-caption').innerText = caption || '';
  const modal = document.getElementById('global-lightbox-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLightbox() {
  const modal = document.getElementById('global-lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
