(function(){
  // Active menu highlight based on current file name
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href.endsWith(path)) a.classList.add("active");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });

  // Pricing toggle: monthly/yearly (optional)
  const toggle = document.querySelector("[data-price-toggle]");
  if(toggle){
    toggle.addEventListener("change", ()=>{
      const yearly = toggle.checked;
      document.querySelectorAll("[data-price]").forEach(el=>{
        const m = el.getAttribute("data-month");
        const y = el.getAttribute("data-year");
        el.textContent = yearly ? y : m;
      });
      document.querySelectorAll("[data-price-suffix]").forEach(el=>{
        el.textContent = yearly ? "/yil" : "/oy";
      });
    });
  }
})();
