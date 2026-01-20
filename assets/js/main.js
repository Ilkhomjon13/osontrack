(function () {
  // Active menu highlighting
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Mobile burger
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
  }

  // Pricing toggle (monthly/yearly)
  const toggleMonthly = document.querySelector("[data-toggle='monthly']");
  const toggleYearly = document.querySelector("[data-toggle='yearly']");
  const priceNodes = document.querySelectorAll("[data-price-monthly]");

  function setBilling(mode){
    if (!toggleMonthly || !toggleYearly) return;
    toggleMonthly.classList.toggle("active", mode === "monthly");
    toggleYearly.classList.toggle("active", mode === "yearly");

    priceNodes.forEach(node => {
      const m = node.getAttribute("data-price-monthly");
      const y = node.getAttribute("data-price-yearly");
      const per = node.querySelector("[data-per]");
      const num = node.querySelector("[data-num]");
      if (!num) return;
      if (mode === "yearly") {
        num.textContent = y;
        if (per) per.textContent = "/ yil";
      } else {
        num.textContent = m;
        if (per) per.textContent = "/ oy";
      }
    });

    localStorage.setItem("osontrack_billing", mode);
  }

  const saved = localStorage.getItem("osontrack_billing") || "monthly";
  setBilling(saved);

  if (toggleMonthly) toggleMonthly.addEventListener("click", () => setBilling("monthly"));
  if (toggleYearly) toggleYearly.addEventListener("click", () => setBilling("yearly"));

  // Contact form: simple client-side (replace with backend endpoint)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("[name='name']").value.trim();
      const phone = form.querySelector("[name='phone']").value.trim();
      const msg = form.querySelector("[name='message']").value.trim();
      if (!name || !phone || !msg) {
        alert("Iltimos, barcha maydonlarni to‘ldiring.");
        return;
      }
      alert("So‘rovingiz qabul qilindi. Tez orada bog‘lanamiz.");
      form.reset();
    });
  }
})();
