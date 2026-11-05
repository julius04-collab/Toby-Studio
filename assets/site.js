/* ============================================================
   CONTENT — edit these to update the site.
   ============================================================ */

// AI-built websites. One entry per site, e.g.
// { title:"Studio Nova", url:"https://...", tags:"AI website · Agency", image:"/assets/img/ai/nova.webp", video:"/assets/video/nova.mp4" }
const aiProjects = [
  { title:"Form & Field", url:"https://form-and-field-slmw.vercel.app/", tags:"Furniture e-commerce · AI website", desc:"Furniture for rooms that get lived in — linen sofas, oak tables and lounge chairs with every measurement listed.", image:"/assets/img/ai/form-and-field.webp", video:"/assets/video/form-and-field.mp4" },
  { title:"CourtSync", url:"https://courtsync-gamma.vercel.app/", tags:"Padel club software · AI website", desc:"The operating system for padel clubs: bookings, payments, live scores and leagues on every court.", image:"/assets/img/ai/courtsync.webp", video:"/assets/video/courtsync.mp4" },
  { title:"Lumé", url:"https://lume-lemon-gamma.vercel.app/", tags:"Botanical skincare · AI website", desc:"Fragrance-free botanical skincare built on clinically studied actives — clarity drawn from nature, proven by science.", image:"/assets/img/ai/lume.webp", video:"/assets/video/lume.mp4" },
  { title:"Lumber & Lime", url:"https://lumber-lime.vercel.app/", tags:"Interior design studio · AI website", desc:"An interior architecture studio shaping homes, short-lets and boutique stays around timber, limewash and light.", image:"/assets/img/ai/lumber.webp", video:"/assets/video/lumber.mp4" }
];

// Playground — images, or Motionframe clips as { video:"/assets/video/clip.mp4", poster:"/assets/img/...webp" }
const playground = [
  { img:"/assets/img/playground/chess-win-800.webp", full:"/assets/img/playground/chess-win.webp", alt:"Chess.com win by dont-be-lazy, the designer's chess account" },
  { img:"/assets/img/playground/billboard-colgate-800.webp", full:"/assets/img/playground/billboard-colgate.webp", alt:"Colgate digital billboard against a cloudy sky in Nigeria" },
  { img:"/assets/img/playground/royalty-builders-800.webp", full:"/assets/img/playground/royalty-builders.webp", alt:"Royalty Builders CRM sign-in screen design in Figma" },
  { img:"/assets/img/playground/music-collage-800.webp", full:"/assets/img/playground/music-collage.webp", alt:"Music player UI exploration featuring BNXN tracks" },
  { img:"/assets/img/playground/zesta-app-800.webp", full:"/assets/img/playground/zesta-app.webp", alt:"Zesta citrus drinks app onboarding screens in Figma" },
  { img:"/assets/img/playground/dashboard-prototype-800.webp", full:"/assets/img/playground/dashboard-prototype.webp", alt:"Prototype wiring for a CRM dashboard navigation in Figma" },
  { img:"/assets/img/playground/fitness-app-800.webp", full:"/assets/img/playground/fitness-app.webp", alt:"Dark fitness tracking app home screen design" },
  { img:"/assets/img/playground/portrait-800.webp", full:"/assets/img/playground/portrait.webp", alt:"Black and white self-portrait of Tobiloba Julius" },
  { img:"/assets/img/playground/chess-review-800.webp", full:"/assets/img/playground/chess-review.webp", alt:"Chess.com game review screen" },
  { img:"/assets/img/playground/billboard-infinix-800.webp", full:"/assets/img/playground/billboard-infinix.webp", alt:"Infinix Note 60 billboard spotted in Nigeria" },
  { cta:true }
];

const steps = [
  { t:"Discover", d:"We get clear on your goals, your customers and what success looks like.", get:["Discovery call","Goals & audience","Success metrics"] },
  { t:"Research", d:"I study your market and competitors to find where you can stand out.", get:["Competitor audit","User insights","Moodboard"] },
  { t:"Structure", d:"Wireframes and flows that guide people to the action you want.", get:["User flows","Wireframes","Site map"] },
  { t:"Design", d:"A visual identity and UI that makes your brand look as good as it is.", get:["Visual direction","UI kit","Design system"] },
  { t:"Prototype", d:"Click through the real experience before a line of code is written.", get:["Hi-fi screens","Interactive prototype","Motion specs"] },
  { t:"Launch", d:"Final polish, clean handoff and support as your product goes live.", get:["Design QA","Dev handoff","Launch support"] }
];

const testimonials = [
  { q:"He understood the vision immediately and translated it into a clean, modern interface that perfectly reflects our brand.", n:"Kolawole James", r:"Founder, Echoform Studio" },
  { q:"He transformed vision into a premium fintech experience with clean UI, strong UX thinking, and outstanding attention to detail.", n:"Daniel Adebayo", r:"Founder, Vaultify" },
  { q:"The landing page perfectly captures our aesthetic. Our inquiries doubled within a month of launching!", n:"Marcus Vance", r:"Creative Director, Rooted Studio" },
  { q:"Stunning UI! They beautifully blended cultural heritage with a modern, seamless shopping experience. Our users love it.", n:"Yemi Akindele", r:"Founder, Omooba Trad" },
  { q:"Complex logistics made incredibly simple. The intuitive tracking flow completely transformed customer satisfaction rates.", n:"Oracle", r:"Head of Product, Swiftdrop" },
  { q:"Tobiloba did a great job revamping my website with a clean and premium UI. He's patient and always provides updated revisions based on my feedback.", n:"Jeffrey", r:"Founder, Perfect Moment" }
];

// Projects — order here is the order on the page. category: web | mobile | fintech
// Add  behance:"https://www.behance.net/gallery/..."  to a project to show a "Full case study on Behance" button.
const projectData = {
  echoform:{ title:"ECHOFORM™", label:"Website", tint:"#D9D3FA", category:"web", folder:"echoform",
    statement:"A booking website that takes creators from first visit to a booked studio session in a few clear steps.",
    deliverables:"UI/UX design, Website design, Landing page", role:"UI/UX Designer",
    images:["hero-section","second-section","third-section","fourth-section","fifth-section","sixth-section","seventh-section","footer"] },
  omooba:{ behance:"https://www.behance.net/gallery/246467753/Fashion-E-commerce-Mobile-App-UIUX-Case-Study", title:"Omooba Trad", label:"Mobile app", tint:"#D6E9A8", category:"mobile", folder:"omooba",
    statement:"A culture-first shopping app that makes buying traditional African fashion feel modern, simple and premium.",
    deliverables:"Mobile UI/UX, E-commerce, Cultural branding", role:"Product Designer",
    images:["casestudy-cover","onboarding-screens","home-flows","other-core-screens","footer"] },
  vaultify:{ behance:"https://www.behance.net/gallery/246657129/Vaultify-Fintech-Landing-Page", title:"Vaultify", label:"Fintech", tint:"#D7E7FB", category:"fintech", folder:"vaultify",
    statement:"A fintech landing page built to earn trust in seconds — premium dark UI, clear value and a frictionless path to sign-up.",
    deliverables:"UI/UX design, Landing page, Visual design", role:"UI/UX Designer",
    images:["first","second","third","fourth","fifth","sixth","seventh","footer"] },
  aura:{ title:"AURA Studios", label:"Website", tint:"#E2DDD3", category:"web", folder:"aura-studios",
    prototypeLink:"https://www.figma.com/proto/SWoprlcPS71CmiBflXF5qD/Moodboard?node-id=1012-4654&t=UPXTzKXTqKYGCUO5-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3",
    statement:"A cinematic photo-studio website that sells the feeling first, then guides visitors straight to booking a session.",
    deliverables:"Web design, Art direction, Interactive prototype", role:"UI/UX Designer",
    images:["first","second","third","fourth","fifth","sixth","seventh","eighth","nineth","tenth","footer"] },
  swiftdrop:{ behance:"https://www.behance.net/gallery/244782765/SwiftDrop-Delivery-Tracking-UIUX-Mobile-App", title:"Swiftdrop", label:"Mobile app", tint:"#CFE8C8", category:"mobile", folder:"swiftdrop",
    statement:"A delivery app that makes package tracking effortless, built around speed, trust and total transparency.",
    deliverables:"Product design, Logistics UI, Mobile app", role:"Product Designer",
    images:["logostics-hero-section-1","home-screen-onboarding","mobile-app-presnetation","order-tracking-screen","payment-address-management-screen","settings-screen"] },
  wildora:{ title:"Wildora", label:"Website", tint:"#E6DCC6", category:"web", folder:"wildora",
    statement:"A travel platform that turns browsing into booking, guiding explorers from inspiration to the right adventure plan.",
    deliverables:"UI/UX design, Travel, Landing page", role:"UI/UX Designer",
    images:["cover-1","hero-section-2","choose-next-adventure-3","built-for-explorers-who-want-more-4","your-journey-in-3-simple-steps-5","trending-destinations-6","stories-written-beyond-the-map-7","stats-8","adventure-plans-for-every-explorer-9","compare-adventure-plans-10","enhance-your-adventure-11","faq-section-12","cta-13","footer-14","after-footer-15"] },
  spark:{ behance:"https://www.behance.net/gallery/252389889/Spark-Modern-Fintech-Landing-Page-UIUX-Design", title:"Spark", label:"Fintech", tint:"#D9D9E4", category:"fintech", folder:"spark",
    statement:"A fintech landing page that explains a modern money app in seconds and moves visitors to download.",
    deliverables:"UI/UX design, Fintech, Landing page", role:"UI/UX Designer",
    images:["1","2","3","4","5","6","7","8","10"] },
  rooted:{ title:"Rooted Studio", label:"Website", tint:"#E7E0D2", category:"web", folder:"rooted-studio",
    statement:"A minimalist landing page that captured the studio's aesthetic — the client reports inquiries doubled within a month of launch.",
    deliverables:"Web design, Minimalist UI", role:"UI/UX Designer",
    images:["hero-section","second","third","fourth","fifth","sixth","seventh","eighth","footer"] },
  swiftdrop_desktop:{ title:"Swiftdrop Desktop", label:"Web platform", tint:"#D3E9CC", category:"web", folder:"swiftdrop-desktop-version",
    statement:"A desktop platform that gives Swiftdrop customers tracking, pricing and support in one clear place.",
    deliverables:"Product design, Web platform, Logistics UI", role:"Product Designer",
    images:["herosection","how-it-works-1","features","pricing-page","about-us-page","help-support-page","contact-us-page"] }
};

/* ============================================================
   BEHAVIOUR
   ============================================================ */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const arrow = '<svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const img = (d, n, suffix='') => `/assets/img/${d.folder}/${n}${suffix}.webp`;

requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('ready')));

// theme
$('#themeBtn').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('toby-theme', next); } catch (e) {}
});

// clock
const fmt = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Africa/Lagos'});
const tick = () => $('#clock').textContent = fmt.format(new Date());
tick(); setInterval(tick, 30000);

// nav: hide on scroll down, show on scroll up
const nav = $('#nav'); let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('hide', y > lastY && y > 400 && !document.body.classList.contains('menu-open'));
  lastY = y;
}, {passive:true});
const menuBtn = $('#menuBtn'), mobileMenu = $('#mobileMenu');
const setMenu = open => {
  document.body.classList.toggle('menu-open', open);
  document.body.classList.toggle('locked', open);
  menuBtn.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
};
menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
$$('a', mobileMenu).forEach(a => a.addEventListener('click', () => setMenu(false)));

// ---------- Work ----------
const keys = Object.keys(projectData);
const casesEl = $('#cases'), moreBtn = $('#moreBtn');
const INITIAL = casesEl && casesEl.dataset.initial ? +casesEl.dataset.initial : Infinity;
let filter = 'all', expanded = false;
if ($('#workCount')) $('#workCount').textContent = `(${String(keys.length).padStart(2,'0')})`;
const shownKeys = casesEl && casesEl.dataset.featured ? casesEl.dataset.featured.split(',') : keys;

if (casesEl) casesEl.innerHTML = shownKeys.map((k, i) => {
  const d = projectData[k];
  return `<article class="case reveal" data-key="${k}" data-cat="${d.category}">
    <div class="case-info">
      <span class="case-label mono"><b>${String(i+1).padStart(2,'0')}</b> ${esc(d.title)} · ${esc(d.label)}</span>
      <h3>${esc(d.statement)}</h3>
      <dl><dt>Deliverables</dt><dd>${esc(d.deliverables)}</dd><dt>Role</dt><dd>${esc(d.role)}</dd><dt>Screens</dt><dd>${d.images.length} sections</dd></dl>
      <div class="case-links"><button type="button" class="case-open" data-open="${k}">View case study ${arrow}</button>${d.behance ? `<a class="case-open case-behance" href="${esc(d.behance)}" target="_blank" rel="noopener noreferrer">Full story on Behance ${arrow}</a>` : ''}</div>
    </div>
    <div class="stage" style="--tint:${d.tint}">
      <button type="button" class="stage-main" data-open="${k}" data-i="0" aria-label="Open ${esc(d.title)} case study">
        <img src="${img(d, d.images[0])}" alt="${esc(d.title)} — ${esc(d.label)}" loading="lazy" decoding="async" />
      </button>
      <div class="strip" role="group" aria-label="${esc(d.title)} screens">
        ${d.images.map((n, j) => `<button type="button" data-i="${j}" class="${j===0?'active':''}" aria-label="Show screen ${j+1}"><img src="${img(d, n, '-t')}" alt="" loading="lazy" decoding="async" /></button>`).join('')}
      </div>
    </div>
  </article>`;
}).join('');

if (casesEl) casesEl.addEventListener('click', e => {
  // thumbnail strip swaps the preview
  const t = e.target.closest('.strip button');
  if (t) {
    const c = t.closest('.case'), d = projectData[c.dataset.key], stage = $('.stage-main', c), main = $('img', stage), i = +t.dataset.i;
    $$('.strip button', c).forEach(b => b.classList.toggle('active', b === t));
    stage.dataset.i = i;
    main.classList.add('swap');
    const pre = new Image(); pre.src = img(d, d.images[i]);
    pre.onload = pre.onerror = () => { main.src = pre.src; main.classList.remove('swap'); };
    return;
  }
  // open the case study (at the screen currently previewed)
  const o = e.target.closest('[data-open]');
  if (o) { cursor.classList.remove('on'); openCaseStudy(o.dataset.open, +(o.dataset.i || 0)); }
});

// tabs + show more
const cats = [['all','All'],['web','Websites'],['mobile','Mobile'],['fintech','Fintech']];
const tabsEl = $('#workTabs');
if (tabsEl) tabsEl.innerHTML = cats.map(([c, l]) => {
  const n = c === 'all' ? keys.length : keys.filter(k => projectData[k].category === c).length;
  return `<button role="tab" data-cat="${c}" class="${c==='all'?'active':''}" aria-selected="${c==='all'}">${l} <small>${n}</small></button>`;
}).join('');
function applyFilter(reveal) {
  if (!casesEl) return;
  const all = $$('.case', casesEl);
  const list = all.filter(el => filter === 'all' || el.dataset.cat === filter);
  all.forEach(el => el.hidden = true);
  list.forEach((el, i) => { el.hidden = !expanded && i >= INITIAL; if (reveal && !el.hidden) el.classList.add('in'); });
  const hiddenCount = expanded ? 0 : Math.max(0, list.length - INITIAL);
  if (moreBtn) { moreBtn.hidden = hiddenCount === 0; moreBtn.textContent = `Show ${hiddenCount} more`; }
}
if (tabsEl) tabsEl.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  filter = b.dataset.cat; expanded = false;
  $$('#workTabs button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
  applyFilter(true);
});
if (moreBtn) moreBtn.addEventListener('click', () => { expanded = true; applyFilter(true); });
applyFilter(false);

// ---------- AI ----------
if ($('#aiGrid')) $('#aiGrid').innerHTML = aiProjects.length ? aiProjects.map(p => `
  <a class="ai-card" href="${esc(p.url||'#')}" target="_blank" rel="noopener noreferrer">
    <div class="media"><span class="live"><span class="dot"></span>Live site</span>${p.video
      ? `<video src="${esc(p.video)}" ${p.image?`poster="${esc(p.image)}"`:''} muted loop playsinline preload="none" aria-label="${esc(p.title)} website walkthrough"></video>`
      : `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" decoding="async" />`}</div>
    <div class="body"><div><span class="mono">${esc(p.tags||'AI website')}</span><h4>${esc(p.title)}</h4>${p.desc?`<p>${esc(p.desc)}</p>`:''}</div><span class="go">${arrow}</span></div>
  </a>`).join('')
  : `<div class="ai-empty"><p>Live AI-built website samples are landing here soon. Want one built for your brand?</p><a href="#contact" class="btn btn-accent">Build mine ${arrow}</a></div>`;

// ---------- Process cards ----------
const notesEl = $('#notes');
if (notesEl) notesEl.innerHTML = steps.map((s, i) => `
  <button type="button" class="note reveal" aria-pressed="false" aria-label="${esc(s.t)} — tap to flip">
    <div class="note-in">
      <div class="note-face c${i+1}"><span class="n">0${i+1}</span><div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div><span class="flip">tap to flip ↻</span></div>
      <div class="note-face note-back c${i+1}"><span class="n">0${i+1} · what you get</span><ul>${s.get.map(g => `<li>${esc(g)}</li>`).join('')}</ul><span class="flip">tap to flip back ↻</span></div>
    </div>
  </button>`).join('');
if (notesEl) notesEl.addEventListener('click', e => { const n = e.target.closest('.note'); if (!n) return; n.classList.toggle('flipped'); n.setAttribute('aria-pressed', n.classList.contains('flipped')); });
if ($('#flipAll')) $('#flipAll').addEventListener('click', () => {
  const all = $$('.note', notesEl), flip = !all.every(n => n.classList.contains('flipped'));
  all.forEach((n, i) => setTimeout(() => { n.classList.toggle('flipped', flip); n.setAttribute('aria-pressed', flip); }, i * 70));
});

// ---------- Playground ----------
const playGrid = $('#playGrid');
if (playGrid) playGrid.innerHTML = playground.map(p => {
  if (p.cta) return `<a class="play-item play-cta" href="https://x.com/Julious_design" target="_blank" rel="noopener noreferrer"><span class="cta-copy"><span class="mono">Explore more</span><span class="t">See new experiments first on Twitter / X</span></span><span class="cta-arrow">${arrow}</span></a>`;
  if (p.video) return `<div class="play-item"><video src="${esc(p.video)}" ${p.poster?`poster="${esc(p.poster)}"`:''} muted loop playsinline preload="metadata"></video></div>`;
  return `<button type="button" class="play-item" data-full="${esc(p.full||p.img)}"><img src="${esc(p.img)}" alt="${esc(p.alt)}" loading="lazy" decoding="async" /></button>`;
}).join('');

// ---------- Testimonials ----------
const tCard = (t, hidden) => `<figure class="t-card"${hidden?' aria-hidden="true"':''}><q>${esc(t.q)}</q><figcaption class="t-who"><span class="t-av">${esc(t.n[0])}</span><span><b>${esc(t.n)}</b><span>${esc(t.r)}</span></span></figcaption></figure>`;
if ($('#tTrack')) $('#tTrack').innerHTML = testimonials.map(t => tCard(t)).join('') + testimonials.map(t => tCard(t, true)).join('');

// ---------- Scroll animations ----------
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
// split headings into words that slide up one after another
function splitWords(el) {
  let i = 0;
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(t => {
          if (!t) return;
          if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
          const w = document.createElement('span'); w.className = 'wd';
          const inner = document.createElement('span'); inner.textContent = t; inner.style.setProperty('--i', i++);
          w.appendChild(inner); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'SUP') walk(n);
    });
  };
  walk(el);
}
if (!reduceMotion) $$('.s-title, .about-statement, .cta h2').forEach(el => { splitWords(el); el.classList.add('split'); });
// stagger children of grids and lists
$$('.stagger, #playGrid, #notes, .services, .faq-list').forEach(group => {
  [...group.children].forEach((c, i) => {
    if (c.classList.contains('services-title')) return;
    c.classList.add('reveal');
    c.style.setProperty('--d', `${Math.min(i, 8) * 80}ms`);
  });
});

// ---------- Reveal / video ----------
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1, rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach(el => io.observe(el));
const wio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('wd-in'); wio.unobserve(e.target); } }), {threshold:.2});
$$('.split').forEach(el => wio.observe(el));

// scroll-linked effects (at most one update per frame)
if (!reduceMotion) {
  const root = document.documentElement, hero = $('.hero'), marquee = $('.marquee'), photos = $$('.about-photos figure');
  let ticking = false, lastY = scrollY, skew = 0;
  const update = () => {
    const y = scrollY, vh = innerHeight;
    root.style.setProperty('--sp', (y / Math.max(1, root.scrollHeight - vh)).toFixed(4));
    if (hero) hero.style.setProperty('--hp', Math.min(1, Math.max(0, y / (vh * .9))).toFixed(3));
    photos.forEach((f, i) => {
      const r = f.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const t = (r.top + r.height / 2 - vh / 2) / vh;
      f.style.setProperty('--py', `${(t * (i === 0 ? -40 : 60)).toFixed(1)}px`);
    });
    // safety net: anything already scrolled past is always shown, even after a fast jump
    document.querySelectorAll('.reveal:not(.in), .split:not(.wd-in)').forEach(el => {
      if (el.closest('[hidden]')) return;
      if (el.getBoundingClientRect().top < vh) el.classList.add(el.classList.contains('split') ? 'wd-in' : 'in');
    });
    const v = y - lastY; lastY = y;
    skew = Math.max(-10, Math.min(10, v * .35));
    if (marquee) marquee.style.setProperty('--skew', `${(-skew).toFixed(2)}deg`);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener('resize', update);
  // straighten the marquee once scrolling stops
  setInterval(() => { if (marquee && scrollY === lastY && skew) { skew = 0; marquee.style.setProperty('--skew', '0deg'); } }, 150);
  update();
}
const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; e.isIntersecting ? v.play().catch(()=>{}) : v.pause(); }), {threshold:.25});
$$('video').forEach(v => vio.observe(v));

// ---------- Cursor ----------
const cursor = $('#cursor');
if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
  let x=-200,y=-200,cx=x,cy=y;
  addEventListener('mousemove', e => { x=e.clientX; y=e.clientY; }, {passive:true});
  (function loop(){ cx+=(x-cx)*.2; cy+=(y-cy)*.2; cursor.style.transform=`translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
  if (casesEl) {
    casesEl.addEventListener('mouseover', e => cursor.classList.toggle('on', !!e.target.closest('.stage-main')));
    casesEl.addEventListener('mouseleave', () => cursor.classList.remove('on'));
  }
}

// ---------- Case study overlay ----------
let lastFocus = null;
const openOverlay = el => { lastFocus = document.activeElement; el.classList.add('active'); el.setAttribute('aria-hidden','false'); document.body.classList.add('locked'); $('[data-close]', el).focus({preventScroll:true}); };
const closeOverlay = el => { el.classList.remove('active'); el.setAttribute('aria-hidden','true'); if (!$('.overlay.active')) document.body.classList.remove('locked'); lastFocus && lastFocus.focus && lastFocus.focus({preventScroll:true}); };
$$('[data-close]').forEach(b => b.addEventListener('click', () => closeOverlay(b.closest('.overlay'))));

const csModal = $('#csModal'); let current = null;
function openCaseStudy(key, startAt = 0) {
  const d = projectData[key]; if (!d) return;
  current = key;
  $('#csTag').textContent = `${d.label} · ${d.deliverables}`;
  $('#csTitle').textContent = d.title;
  $('#csDesc').textContent = d.statement;
  const proto = $('#csProto'); proto.hidden = !d.prototypeLink; if (d.prototypeLink) proto.href = d.prototypeLink;
  const be = $('#csBehance'); be.hidden = !d.behance; if (d.behance) be.href = d.behance;
  $('#csImages').innerHTML = d.images.map((n, i) => `<img src="${img(d, n)}" alt="${esc(d.title)} — screen ${i+1}" ${i > startAt + 1 ? 'loading="lazy"' : ''} decoding="async" />`).join('');
  const next = keys[(keys.indexOf(key)+1) % keys.length];
  $('#csNextTitle').textContent = projectData[next].title;
  if (!csModal.classList.contains('active')) openOverlay(csModal);
  const body = $('#csBody'); body.scrollTop = 0;
  if (startAt > 0) {
    const imgs = $$('#csImages img').slice(0, startAt + 1);
    Promise.all(imgs.map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })))
      .then(() => { body.scrollTop = imgs[startAt].offsetTop - 16; });
  }
}
if ($('#csNext')) $('#csNext').addEventListener('click', () => openCaseStudy(keys[(keys.indexOf(current)+1) % keys.length]));

// ---------- Lightbox ----------
const lb = $('#lightbox'), lbImg = $('#lbImg');
const openLb = (src, alt) => { if (!lb) return; lbImg.src = src; lbImg.alt = alt||''; lb.classList.add('active'); lb.setAttribute('aria-hidden','false'); document.body.classList.add('locked'); };
const closeLb = () => { if (!lb) return; lb.classList.remove('active'); lb.setAttribute('aria-hidden','true'); if (!$('.overlay.active')) document.body.classList.remove('locked'); };
if (playGrid) playGrid.addEventListener('click', e => { const b = e.target.closest('[data-full]'); if (b) openLb(b.dataset.full, $('img',b).alt); });
if (lb) lb.addEventListener('click', closeLb);

addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lb && lb.classList.contains('active')) return closeLb();
  const open = $('.overlay.active'); if (open) return closeOverlay(open);
  if (document.body.classList.contains('menu-open')) setMenu(false);
});
