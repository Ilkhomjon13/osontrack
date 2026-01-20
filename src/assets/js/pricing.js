(() => {
  const toggleButtons = document.querySelectorAll('[data-pricing-toggle]');
  const priceElements = document.querySelectorAll('[data-price]');
  if (!toggleButtons.length || !priceElements.length) return;

  const VALID = ['monthly', 'yearly'];

  const getInitialBilling = () => {
    const url = new URL(window.location.href);
    const fromUrl = url.searchParams.get('billing');
    if (VALID.includes(fromUrl)) return fromUrl;

    const activeBtn = Array.from(toggleButtons).find(b => b.classList.contains('active'));
    if (activeBtn && VALID.includes(activeBtn.dataset.pricingToggle)) {
      return activeBtn.dataset.pricingToggle;
    }
    return 'monthly';
  };

  const setButtonsState = (billing) => {
    toggleButtons.forEach(btn => {
      const isActive = btn.dataset.pricingToggle === billing;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  const animatePriceChange = (el, value) => {
    el.animate(
      [
        { opacity: 0, transform: 'translateY(4px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 180, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
    el.textContent = value;
  };

  const updatePrices = (billing, pushUrl = true) => {
    priceElements.forEach(el => {
      const value = el.getAttribute(`data-${billing}`);
      if (value) animatePriceChange(el, value);
    });

    if (pushUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('billing', billing);
      window.history.replaceState({}, '', url);
    }
  };

  const init = () => {
    const billing = getInitialBilling();
    setButtonsState(billing);
    updatePrices(billing, false);
  };

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const billing = btn.dataset.pricingToggle;
      if (!VALID.includes(billing)) return;
      setButtonsState(billing);
      updatePrices(billing, true);
    });
  });

  init();
})();
