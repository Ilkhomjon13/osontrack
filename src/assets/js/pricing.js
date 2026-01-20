const toggleButtons = document.querySelectorAll('[data-pricing-toggle]');
const priceElements = document.querySelectorAll('[data-price]');

const updatePrices = (billing) => {
  priceElements.forEach((element) => {
    const value = element.getAttribute(`data-${billing}`);
    if (value) {
      element.textContent = value;
    }
  });
};

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    updatePrices(button.dataset.pricingToggle);
  });
});
