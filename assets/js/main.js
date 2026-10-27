/**
 * DISOM — Jharkhand Tribal Digital Museum
 * Global Main JavaScript (ES6+)
 * Safe execution across all pages with defensive element checking
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. STICKY HEADER & SCROLL BEHAVIOR
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (mobileNavOverlay && hamburgerBtn) {
      mobileNavOverlay.classList.add('open');
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNavOverlay && hamburgerBtn) {
      mobileNavOverlay.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavOverlay && mobileNavOverlay.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        closeMobileNav();
      }
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ==========================================================================
     3. GLOBAL TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  window.showToast = function (message, duration = 3200) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89045" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${escapeHTML(message)}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  };

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     4. GLOBAL SHOPPING CART LOGIC (localStorage)
     ========================================================================== */
  const CART_KEY = 'disom_cart_items';

  function getCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error reading cart:', e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      updateGlobalCartUI();
    } catch (e) {
      console.warn('LocalStorage error saving cart:', e);
    }
  }

  window.addToCart = function (item) {
    const cart = getCart();
    const existingIndex = cart.findIndex((i) => i.id === item.id);
    if (existingIndex > -1) {
      cart[existingIndex].qty += item.qty || 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        image: item.image || 'assets/products/prod-silver-hansuli-set.jpg',
        community: item.community || 'Jharkhand Craft',
        qty: item.qty || 1
      });
    }
    saveCart(cart);
    window.showToast(`"${item.name}" added to basket`);
  };

  window.removeFromCart = function (id) {
    let cart = getCart();
    cart = cart.filter((i) => i.id !== id);
    saveCart(cart);
  };

  window.updateCartQty = function (id, delta) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        window.removeFromCart(id);
        return;
      }
      saveCart(cart);
    }
  };

  window.clearCart = function () {
    saveCart([]);
    window.showToast('Basket cleared');
  };

  function updateGlobalCartUI() {
    const cart = getCart();
    const totalCount = cart.reduce((acc, curr) => acc + curr.qty, 0);

    // Update all badge elements across current page
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach((b) => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    renderCartDrawer(cart, totalCount);
  }

  function renderCartDrawer(cart, totalCount) {
    const cartBody = document.querySelector('#cartDrawerBody');
    const cartSubtotalEl = document.querySelector('#cartSubtotal');
    const cartCountHeader = document.querySelector('#cartCountHeader');

    if (cartCountHeader) {
      cartCountHeader.textContent = `(${totalCount})`;
    }

    if (!cartBody) return;

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h4>Your basket is empty</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Explore curated indigenous handicrafts from Jharkhand artisans.</p>
          <a href="marketplace.html" class="btn btn-forest btn-sm" style="margin-top: 1.25rem;">Browse Marketplace</a>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
      return;
    }

    let subtotal = 0;
    cartBody.innerHTML = cart
      .map((item) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `
        <div class="cart-item" data-id="${escapeHTML(item.id)}">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" class="cart-item-img" onerror="handleImageError(this, '${escapeHTML(item.name)}')">
          <div class="cart-item-info">
            <h4>${escapeHTML(item.name)}</h4>
            <div class="cart-item-meta">${escapeHTML(item.community)}</div>
            <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
            <div class="cart-qty-ctrl">
              <button type="button" class="cart-qty-btn" onclick="window.updateCartQty('${escapeHTML(item.id)}', -1)" aria-label="Decrease quantity">-</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button type="button" class="cart-qty-btn" onclick="window.updateCartQty('${escapeHTML(item.id)}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-item-del" onclick="window.removeFromCart('${escapeHTML(item.id)}')" aria-label="Remove item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
      })
      .join('');

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }
  }

  // Cart Drawer Open / Close
  const cartTriggers = document.querySelectorAll('.cart-trigger-btn');
  const cartDrawerOverlay = document.querySelector('.cart-drawer-overlay');
  const cartCloseBtn = document.querySelector('.cart-close-btn');

  function openCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateGlobalCartUI();
    }
  }

  function closeCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  cartTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
  }

  // Initialize Cart UI across the page
  updateGlobalCartUI();

  /* ==========================================================================
     5. REUSABLE IMAGE ERROR FALLBACK HANDLER
     ========================================================================== */
  window.handleImageError = function (imgEl, title = 'DISOM Heritage') {
    if (!imgEl || imgEl.dataset.fallbackApplied) return;
    imgEl.dataset.fallbackApplied = 'true';

    // Replace broken image with high-aesthetic inline SVG pattern
    const svgFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%23173B2A"/><circle cx="200" cy="120" r="45" fill="none" stroke="%23B89045" stroke-width="2.5"/><path d="M185 120 L215 120 M200 105 L200 135" stroke="%23B89045" stroke-width="2"/><text x="200" y="200" font-family="serif" font-size="18" fill="%23F5F0E6" text-anchor="middle" font-weight="bold">${encodeURIComponent(title)}</text><text x="200" y="225" font-family="sans-serif" font-size="12" fill="%23B89045" text-anchor="middle" letter-spacing="2">JHARKHAND ARCHIVE</text></svg>`;

    imgEl.src = svgFallback;
  };

  // Attach error listeners defensively to any pre-existing img
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      const altText = this.getAttribute('alt') || 'DISOM Cultural Exhibit';
      window.handleImageError(this, altText);
    });
  });

  /* ==========================================================================
     6. EXPLORE PAGE MUSEUM FILTERING & SEARCH
     ========================================================================== */
  const museumSearchInput = document.querySelector('#museumSearchInput');
  const museumFilterBtns = document.querySelectorAll('.museum-filter-btn');
  const museumCards = document.querySelectorAll('.museum-card-item');

  function applyMuseumFilters() {
    if (!museumCards.length) return;

    const searchTerm = museumSearchInput ? museumSearchInput.value.toLowerCase().trim() : '';
    const activeFilterBtn = document.querySelector('.museum-filter-btn.active');
    const selectedCategory = activeFilterBtn ? activeFilterBtn.dataset.category : 'all';

    let visibleCount = 0;

    museumCards.forEach((card) => {
      const title = (card.querySelector('.museum-item-title') || card.querySelector('h3'))?.textContent.toLowerCase() || '';
      const desc = (card.querySelector('.museum-item-desc') || card.querySelector('p'))?.textContent.toLowerCase() || '';
      const category = card.dataset.category || '';
      const tags = card.dataset.tags ? card.dataset.tags.toLowerCase() : '';

      const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm) || tags.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || category.toLowerCase() === selectedCategory.toLowerCase();

      if (matchesSearch && matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const emptyNotice = document.querySelector('#museumEmptyState');
    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    const countDisplay = document.querySelector('#museumResultCount');
    if (countDisplay) {
      countDisplay.textContent = `${visibleCount} exhibit${visibleCount === 1 ? '' : 's'} found`;
    }
  }

  if (museumFilterBtns.length) {
    museumFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        museumFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        applyMuseumFilters();
      });
    });
  }

  if (museumSearchInput) {
    museumSearchInput.addEventListener('input', applyMuseumFilters);
  }

  /* ==========================================================================
     7. CONTACT FORM CLIENT-SIDE VALIDATION & LOCAL SUBMISSION
     ========================================================================== */
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.querySelector('#contactName');
      const emailInput = document.querySelector('#contactEmail');
      const purposeInput = document.querySelector('#contactPurpose');
      const messageInput = document.querySelector('#contactMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Purpose
      if (!purposeInput.value) {
        showError(purposeInput, 'Please select an enquiry purpose');
        isValid = false;
      } else {
        clearError(purposeInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please enter a message (at least 10 characters)');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const statusBox = document.querySelector('#contactFormStatus');
        const submitBtn = document.querySelector('#contactSubmitBtn');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span class="btn-text">Submit Message</span>';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <span style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin-icon">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10"></path>
              </svg>
              <span>Sending to Curator Desk...</span>
            </span>
          `;
        }

        const payload = {
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          purpose: purposeInput.value,
          message: messageInput.value.trim(),
          _subject: `DISOM Museum: [${purposeInput.value}] from ${nameInput.value.trim()}`,
          _captcha: 'false',
          _template: 'table'
        };

        // Dispatch live submission to arnishkumar490@gmail.com via FormSubmit AJAX API
        fetch('https://formsubmit.co/ajax/arnishkumar490@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const isActivationNotice = data && data.message && data.message.toLowerCase().includes('activation');
          
          if (statusBox) {
            if (isActivationNotice) {
              statusBox.innerHTML = `
                <div style="background: rgba(216, 159, 58, 0.12); border: 2px solid var(--gold); color: var(--forest-dark); padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1.5rem; line-height: 1.6;">
                  <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: var(--gold); color: #fff; font-size: 0.9rem; font-weight: bold;">!</span>
                    <h4 style="color: var(--forest-dark); margin: 0; font-size: 1.15rem;">One-Time Activation Email Sent!</h4>
                  </div>
                  <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
                    FormSubmit has sent a one-time verification email to <strong style="color: var(--forest);">arnishkumar490@gmail.com</strong>.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--muted); margin: 0;">
                    Please check your Gmail inbox and click the <strong>"Activate Form"</strong> button. Once activated, all future inquiries will arrive directly in your inbox.
                  </p>
                </div>
              `;
            } else {
              statusBox.innerHTML = `
                <div style="background: rgba(166, 58, 42, 0.08); border: 2px solid var(--forest); color: var(--forest-dark); padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1.5rem; line-height: 1.6;">
                  <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: var(--forest); color: #fff; font-size: 0.9rem; font-weight: bold;">✓</span>
                    <h4 style="color: var(--forest-dark); margin: 0; font-size: 1.15rem;">Inquiry Successfully Sent!</h4>
                  </div>
                  <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
                    Thank you, <strong>${escapeHTML(payload.name)}</strong>. Your message has been dispatched directly to our curator desk at <strong style="color: var(--forest);">arnishkumar490@gmail.com</strong>.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--muted); margin: 0;">
                    A response will be sent to <strong>${escapeHTML(payload.email)}</strong> shortly.
                  </p>
                </div>
              `;
            }
            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          contactForm.reset();
          window.showToast('Message processed for arnishkumar490@gmail.com');
        })
        .catch(err => {
          console.warn('FormSubmit AJAX notification:', err);
          const mailtoUrl = `mailto:arnishkumar490@gmail.com?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
            `Name: ${payload.name}\nEmail: ${payload.email}\nPurpose: ${payload.purpose}\n\nMessage:\n${payload.message}`
          )}`;

          if (statusBox) {
            statusBox.innerHTML = `
              <div style="background: rgba(216, 159, 58, 0.12); border: 1px solid var(--gold); color: var(--forest-dark); padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1.5rem; line-height: 1.6;">
                <h4 style="color: var(--forest); margin-bottom: 0.5rem;">Message Prepared for Delivery</h4>
                <p style="font-size: 0.92rem; margin-bottom: 0.75rem;">
                  Your message has been captured for <strong style="color: var(--forest);">arnishkumar490@gmail.com</strong>. If an ad-blocker or network filter prevented direct background dispatch, click below to send immediately via your email client or submit directly:
                </p>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
                  <a href="${mailtoUrl}" class="btn btn-forest btn-sm" target="_blank">Open in Email App &rarr;</a>
                  <button type="button" class="btn btn-outline btn-sm" id="fallbackDirectSubmit">Submit Form Directly</button>
                </div>
              </div>
            `;
            const directBtn = document.querySelector('#fallbackDirectSubmit');
            if (directBtn) {
              directBtn.addEventListener('click', () => contactForm.submit());
            }
            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          window.showToast('Message ready for arnishkumar490@gmail.com');
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }
        });
      }
    });

    function showError(input, msg) {
      input.style.borderColor = '#B22222';
      const feedback = input.parentElement.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = msg;
        feedback.classList.add('visible');
      }
    }

    function clearError(input) {
      input.style.borderColor = '';
      const feedback = input.parentElement.querySelector('.form-feedback');
      if (feedback) {
        feedback.classList.remove('visible');
      }
    }
  }

  /* ==========================================================================
     8. ARTISAN ONBOARDING FORM CLIENT-SIDE DEMO
     ========================================================================== */
  const artisanForm = document.querySelector('#artisanForm');
  if (artisanForm) {
    artisanForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.querySelector('#artisanFormStatus');
      if (statusBox) {
        statusBox.innerHTML = `
          <div style="background: rgba(184, 144, 69, 0.12); border: 1px solid var(--gold); color: var(--forest-dark); padding: 1.25rem; border-radius: var(--radius-sm); margin-top: 1.5rem; line-height: 1.6;">
            <h4 style="margin-bottom: 0.25rem; color: var(--forest-dark);">Application Received (Local Prototype)</h4>
            <p style="font-size: 0.92rem; margin: 0;">Verification is required before public listing. In production, this initiates curator review and artisan community onboarding.</p>
          </div>
        `;
      }
      artisanForm.reset();
      window.showToast('Artisan registration submitted locally');
    });
  }

  /* ==========================================================================
     9. KEYBOARD ACCESSIBILITY (ESC key to close modals & drawers)
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      closeCartDrawer();
      const productModal = document.querySelector('#productDetailsModal');
      if (productModal && productModal.classList.contains('open')) {
        productModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
});
