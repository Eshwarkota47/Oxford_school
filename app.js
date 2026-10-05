// Oxford English Medium School, Bukkapatna - Interactive JavaScript Engine

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileBtn.innerHTML = '☰';
      });
    });
  }

  // Smooth Active Nav on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });

    // Back to Top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  // Back to Top Click
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Academic Curriculum Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.academic-tab-pane');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(target);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Notice Board Filter
  const noticeChips = document.querySelectorAll('.notice-filter-group .filter-chip');
  const noticeItems = document.querySelectorAll('.notice-item');

  noticeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      noticeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      const category = chip.getAttribute('data-category');
      noticeItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(f => f.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Fee Calculator Engine
  const calcGrade = document.getElementById('calcGrade');
  const calcTransport = document.getElementById('calcTransport');
  const feeTuition = document.getElementById('feeTuition');
  const feeActivity = document.getElementById('feeActivity');
  const feeTransport = document.getElementById('feeTransport');
  const feeTotal = document.getElementById('feeTotal');

  const baseTuition = {
    'nursery': 18000,
    'lkg_ukg': 22000,
    'primary': 28000,
    'middle': 32000,
    'high_9': 38000,
    'high_10': 42000
  };

  const transportRates = {
    'none': 0,
    'bukkapatna_town': 4500,
    'tavarekere': 7500,
    'sira': 9000,
    'chelur': 8000,
    'borasandra': 7000,
    'other_villages': 8500
  };

  function updateFeeCalculation() {
    if (!calcGrade || !calcTransport) return;

    const gradeVal = calcGrade.value;
    const transportVal = calcTransport.value;

    const tuition = baseTuition[gradeVal] || 25000;
    const activity = 4500; // Sports, Smart Class, Computer Lab, Annual Day & Library
    const transport = transportRates[transportVal] || 0;
    const total = tuition + activity + transport;

    if (feeTuition) feeTuition.textContent = `₹ ${tuition.toLocaleString('en-IN')}`;
    if (feeActivity) feeActivity.textContent = `₹ ${activity.toLocaleString('en-IN')}`;
    if (feeTransport) feeTransport.textContent = `₹ ${transport.toLocaleString('en-IN')}`;
    if (feeTotal) feeTotal.textContent = `₹ ${total.toLocaleString('en-IN')}`;
  }

  if (calcGrade && calcTransport) {
    calcGrade.addEventListener('change', updateFeeCalculation);
    calcTransport.addEventListener('change', updateFeeCalculation);
    updateFeeCalculation(); // initial calculation
  }

  // Admission Modal Logic
  const openAdmissionBtns = document.querySelectorAll('.open-admission-modal');
  const admissionModal = document.getElementById('admissionModal');
  const closeAdmissionBtn = document.getElementById('closeAdmissionBtn');
  const admissionForm = document.getElementById('admissionForm');
  const admissionSuccessBox = document.getElementById('admissionSuccessBox');

  openAdmissionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (admissionModal) {
        admissionModal.classList.add('active');
        if (admissionForm) admissionForm.style.display = 'block';
        if (admissionSuccessBox) admissionSuccessBox.style.display = 'none';
      }
    });
  });

  if (closeAdmissionBtn && admissionModal) {
    closeAdmissionBtn.addEventListener('click', () => {
      admissionModal.classList.remove('active');
    });

    admissionModal.addEventListener('click', (e) => {
      if (e.target === admissionModal) {
        admissionModal.classList.remove('active');
      }
    });
  }

  // Admission Form Submit Simulation
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('admStudentName').value;
      const grade = document.getElementById('admGrade').value;
      const parentName = document.getElementById('admParentName').value;
      const phone = document.getElementById('admPhone').value;
      const village = document.getElementById('admVillage').value;

      // Generate a dynamic application token
      const token = 'OEMS-' + Math.floor(100000 + Math.random() * 900000);
      const dateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
      });

      // Show receipt view
      admissionForm.style.display = 'none';
      if (admissionSuccessBox) {
        admissionSuccessBox.innerHTML = `
          <div style="text-align: center; padding: 20px 10px;">
            <div style="width: 64px; height: 64px; background: #d1fae5; color: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 2rem;">✓</div>
            <h3 style="color: #0b1f44; font-size: 1.4rem; margin-bottom: 8px;">Application Registered Successfully!</h3>
            <p style="color: #475569; font-size: 0.95rem; margin-bottom: 24px;">Thank you for registering with Oxford English Medium School, Bukkapatna. Our admission officer will contact you shortly.</p>
            
            <div style="background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 12px; padding: 20px; text-align: left; margin-bottom: 24px; font-size: 0.9rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
                <span style="color: #64748b;">Registration Token:</span>
                <strong style="color: #1a448c; font-size: 1.1rem;">${token}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #64748b;">Student Name:</span>
                <strong>${studentName}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #64748b;">Grade Applied:</span>
                <strong>${grade}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #64748b;">Parent/Guardian:</span>
                <strong>${parentName}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #64748b;">Contact Mobile:</span>
                <strong>+91 ${phone}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #64748b;">Location / Village:</span>
                <strong>${village || 'Bukkapatna'}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.8rem; color: #94a3b8;">
                <span>Registration Date:</span>
                <span>${dateStr}</span>
              </div>
            </div>

            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <button onclick="window.print()" class="btn btn-primary" style="padding: 10px 20px;">🖨️ Print Application Slip</button>
              <button onclick="document.getElementById('admissionModal').classList.remove('active')" class="btn btn-outline-navy" style="padding: 10px 20px;">Close Window</button>
            </div>
          </div>
        `;
        admissionSuccessBox.style.display = 'block';
      }

      showToast(`Registration Token #${token} generated successfully!`);
    });
  }

  // Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.getElementById('closeLightbox');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || 'Campus Life';
      const tag = item.querySelector('.gallery-tag')?.textContent || 'Oxford School';
      
      if (lightboxModal && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> — <span style="color: var(--gold-accent);">${tag}</span>`;
        }
        lightboxModal.classList.add('active');
      }
    });
  });

  if (closeLightbox && lightboxModal) {
    closeLightbox.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to Oxford School Administration.');
      contactForm.reset();
    });
  }

  // Language Switcher (EN / ಕನ್ನಡ toggle demo)
  const langEn = document.getElementById('langEn');
  const langKn = document.getElementById('langKn');
  const kannadaElements = document.querySelectorAll('[data-kn]');

  function setLanguage(lang) {
    if (lang === 'kn') {
      if (langKn) langKn.classList.add('active');
      if (langEn) langEn.classList.remove('active');
      kannadaElements.forEach(el => {
        const knText = el.getAttribute('data-kn');
        if (knText) {
          el.setAttribute('data-en', el.innerHTML);
          el.innerHTML = knText;
        }
      });
      showToast('ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ (Language switched to Kannada)');
    } else {
      if (langEn) langEn.classList.add('active');
      if (langKn) langKn.classList.remove('active');
      kannadaElements.forEach(el => {
        const enText = el.getAttribute('data-en');
        if (enText) {
          el.innerHTML = enText;
        }
      });
      showToast('Language switched to English');
    }
  }

  if (langEn && langKn) {
    langEn.addEventListener('click', () => setLanguage('en'));
    langKn.addEventListener('click', () => setLanguage('kn'));
  }

  // Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastMsg';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span> ${message}`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Global Toast function for inline handlers
  window.showToast = showToast;
});
