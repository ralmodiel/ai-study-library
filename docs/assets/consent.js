(() => {
  const ID = "G-CSFCML3KMM", PATH = "/ai-study-library/", KEY = "ai-study-library:cookie-consent";
  // this file is assets/consent.js, so the site root is one folder up (pages live at any depth)
  const ROOT = document.currentScript && document.currentScript.src ? new URL("../", document.currentScript.src).href : "";
  const MAX_AGE = 182 * 24 * 3600 * 1000;  // ask again after about six months (CNIL guidance)
  const saved = () => {
    try {
      const c = JSON.parse(localStorage.getItem(KEY) || "null");
      return c && (c.v === "granted" || c.v === "denied") && Date.now() - c.t < MAX_AGE ? c.v : null;
    } catch (e) { return null; }
  };
  const save = v => { try { localStorage.setItem(KEY, JSON.stringify({ v, t: Date.now() })); } catch (e) { /* private mode: ask again next visit */ } };
  let loaded = false, box = null, before = null;
  const load = () => {  // Google's script only ever loads from here, after "Accept"
    if (loaded) return;
    loaded = true;
    window["ga-disable-" + ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    gtag("js", new Date());
    // No ad features. The cookies stay on this site's path and expire 13 months after they are set:
    // cookie_update false means a visit does not extend them (CNIL guidance).
    gtag("config", ID, { allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_expires: 33696000, cookie_update: false, cookie_path: PATH, cookie_domain: location.hostname });
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
  };
  const forget = () => {  // declined after accepting: switch the tag off, delete its cookies, reload without it
    window["ga-disable-" + ID] = true;
    if (window.gtag) gtag("consent", "update", { analytics_storage: "denied" });
    window.gtag = undefined;
    for (const c of document.cookie.split(";")) {
      const name = c.split("=")[0].trim();
      if (!/^_ga/.test(name)) continue;
      for (const p of ["/", PATH])
        for (const d of ["", "; domain=" + location.hostname, "; domain=." + location.hostname])
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + p + d;
    }
    if (loaded) location.reload();
  };
  const pad = on => {  // keep the end of the page, and anything focused, out from under the banner
    const h = on && box ? box.offsetHeight + 32 + "px" : "";
    document.body.style.paddingBottom = h;
    document.documentElement.style.scrollPaddingBottom = h;
  };
  const choose = v => {
    save(v);
    box.hidden = true;
    pad(false);
    if (before && before !== document.body && document.contains(before)) before.focus({ preventScroll: true });
    if (v === "granted") load(); else forget();
  };
  const show = () => {
    before = document.activeElement;
    if (!box) {
      box = document.createElement("div");
      box.id = "consent";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-label", "Cookie consent");
      box.setAttribute("aria-describedby", "consent-text");
      box.tabIndex = -1;
      box.innerHTML = '<p id="consent-text">Can this site use Google Analytics cookies to count visits and see which tabs, '
        + 'searches and links are used? Nothing is tracked unless you accept, and you can change your mind at any time '
        + 'under &ldquo;Cookie settings&rdquo;. <a href="' + ROOT + 'privacy.html">Privacy policy</a></p>'
        + '<div class="consent-actions"><button type="button" data-choice="denied">Decline</button>'
        + '<button type="button" data-choice="granted">Accept</button></div>';
      box.addEventListener("click", e => { const b = e.target.closest("[data-choice]"); if (b) choose(b.dataset.choice); });
      document.body.appendChild(box);
      window.addEventListener("resize", () => { if (!box.hidden) pad(true); });
    }
    box.hidden = false;
    pad(true);
    box.focus({ preventScroll: true });
  };
  window.cookieConsent = { open: show };
  document.addEventListener("click", e => {
    if (e.target.closest("[data-cookie-settings]")) { e.preventDefault(); show(); }
  });
  const choice = saved();
  if (choice === "granted") load();
  else if (!choice) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", show); else show();
  }
})();
