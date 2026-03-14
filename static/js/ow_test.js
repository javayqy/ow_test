/**
 * OW Hero Test Engine
 * Reads data from #ow-data-json (application/json script tag, CSP-safe)
 * All event handlers bound with addEventListener, no inline onclick
 */
(function () {
  // === Load data from embedded JSON tag ===
  const dataEl = document.getElementById('ow-data-json');
  if (!dataEl) return;
  const OW_DATA = JSON.parse(dataEl.textContent);

  // === State ===
  let state = {
    lang: getSiteLang(),
    step: 'welcome',
    stage1Idx: 0,
    stage2Idx: 0,
    roleScores: { tank: 0, dps: 0, support: 0 },
    subScores: {},
    userTraits: [],
    finalMatch: null,
    altMatches: []
  };

  function getSiteLang() {
    const saved = localStorage.getItem('brocnbb_lang');
    if (['zh', 'ja', 'en'].includes(saved)) return saved;

    // Auto-detect based on timezone/region
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone) {
        const zhTimeZones = ['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi', 'Asia/Macau', 'Asia/Hong_Kong', 'Asia/Taipei'];
        if (zhTimeZones.includes(timeZone)) {
          return 'zh';
        }
        if (timeZone === 'Asia/Tokyo') {
          return 'ja';
        }
      }
    } catch (e) {
      // Fallback for older browsers
    }

    // Fallback to browser language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'en';
  }

  function T(key) {
    const ui = OW_DATA.ui_text[state.lang] || OW_DATA.ui_text['zh'];
    return (ui && ui[key] !== undefined) ? ui[key] : key;
  }

  function resetState() {
    state.step = 'welcome';
    state.stage1Idx = 0;
    state.stage2Idx = 0;
    state.roleScores = { tank: 0, dps: 0, support: 0 };
    state.subScores = {};
    state.userTraits = [];
    state.finalMatch = null;
    state.altMatches = [];
  }

  function computeFinalMatch() {
    const heroDb = OW_DATA.hero_db;

    const traitHash = state.userTraits.reduce((acc, t) => acc + t.length, 0)
      + state.userTraits.join('').split('').reduce((a, b) => a + b.charCodeAt(0), 0);

    let roleCandidates = [];
    let maxRoleScore = -1;
    for (const [role, score] of Object.entries(state.roleScores)) {
      if (score > maxRoleScore) { 
        maxRoleScore = score; 
        roleCandidates = [role]; 
      } else if (score === maxRoleScore) {
        roleCandidates.push(role);
      }
    }
    let topRole = roleCandidates[Math.abs(traitHash) % roleCandidates.length] || 'dps';

    const maxHits = {
      "铁壁": 4, "先锋": 3, "斗士": 3,
      "神准": 4, "奇袭": 2, "侦察": 2, "专业": 2,
      "战术": 4, "医疗": 3, "生存": 3
    };

    const validSubs = Object.keys(heroDb[topRole] || {});
    let candidates = [];
    let maxSubScore = -1;

    for (const sub of validSubs) {
      const hits = maxHits[sub] || 1;
      const score = (state.subScores[sub] || 0) / hits;
      if (score > maxSubScore) {
        maxSubScore = score;
        candidates = [sub];
      } else if (score === maxSubScore) {
        candidates.push(sub);
      }
    }

    // Use traitHash to fairly break ties among tied sub-roles
    let topSub = candidates[Math.abs(traitHash) % candidates.length] || validSubs[0] || '';

    let pool = (heroDb[topRole] || {})[topSub] || [];
    if (!pool.length) pool = Object.values(heroDb[topRole] || {}).flat();

    const heroKey = pool[Math.abs(traitHash) % pool.length] || pool[0] || '';
    state.finalMatch = { role: topRole, sub: topSub, key: heroKey };

    // === Compute alternative heroes ===
    // Build full role pool (all heroes in same role), exclude main hero
    const fullRolePool = Object.entries(heroDb[topRole] || {}).flatMap(([sub, heroes]) =>
      heroes.map(h => ({ key: h, sub }))
    ).filter(h => h.key !== heroKey);

    // Match percentages: deterministic but look organic
    const altPcts = [94.2, 87.6, 78.3];
    const alts = [];
    const usedKeys = new Set([heroKey]);
    for (let i = 0; i < 3 && i < fullRolePool.length; i++) {
      // Shift hash by prime offsets so each pick is different
      const offset = [17, 31, 53][i];
      const candidate = fullRolePool[Math.abs(traitHash + offset) % fullRolePool.length];
      // Avoid duplicates: linear probe
      let picked = null;
      for (let j = 0; j < fullRolePool.length; j++) {
        const c = fullRolePool[(Math.abs(traitHash + offset) + j) % fullRolePool.length];
        if (!usedKeys.has(c.key)) { picked = c; break; }
      }
      if (picked) { usedKeys.add(picked.key); alts.push({ ...picked, pct: altPcts[i] }); }
    }
    state.altMatches = alts;
  }

  function s1Q() { return OW_DATA.stage1_questions[state.lang] || OW_DATA.stage1_questions['zh'] || []; }
  function s2Q() { return OW_DATA.stage2_questions[state.lang] || OW_DATA.stage2_questions['zh'] || []; }

  // === DOM container ===
  const container = document.getElementById('ow-screen');

  // === Icons (inline SVG helpers) ===
  function chevronSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  }
  function globeSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  }
  function barSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';
  }
  function retrySVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';
  }
  function userCheckSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke="#000" stroke-width="2"/></svg>';
  }
  function shareSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
  }
  function starSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l-1.5 5H5l4.5 3.3-1.7 5.2L12 13l4.2 3.5-1.7-5.2L19 8h-5.5z"/></svg>';
  }

  // === Lang bar ===
  function langBarHTML() {
    return `<div id="ow-lang-bar" style="display:flex;gap:0.5rem;align-items:center;background:rgba(20,22,30,0.85);padding:0.5rem 1rem;border-radius:99px;border:1px solid rgba(255,255,255,0.1);">
      ${globeSVG()}
      ${['zh', 'ja', 'en'].map(l =>
      `<button data-lang="${l}" style="padding:0.25rem 0.75rem;border-radius:99px;font-weight:900;font-size:0.8rem;border:none;cursor:pointer;transition:all 0.15s;background:${state.lang === l ? '#f97316' : 'transparent'};color:${state.lang === l ? '#000' : '#9ca3af'};">${l.toUpperCase()}</button>`
    ).join('')}
    </div>`;
  }

  // === Render Functions ===
  function render() {
    switch (state.step) {
      case 'welcome': renderWelcome(); break;
      case 'stage1': renderStage1(); break;
      case 'sub_result': renderSubResult(); break;
      case 'stage2': renderStage2(); break;
      case 'calculating': renderCalculating(); break;
      case 'final': renderFinal(); break;
    }
    bindEvents();
  }

  function renderWelcome() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;position:relative;">
      <div style="position:absolute;top:1.5rem;right:1.5rem;">${langBarHTML()}</div>
      <div style="position:relative;margin-bottom:2rem;">
        <div style="position:absolute;inset:-3rem;background:rgba(249,115,22,0.08);filter:blur(60px);border-radius:50%;"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png"
             style="width:7rem;height:7rem;position:relative;z-index:1;filter:drop-shadow(0 0 20px rgba(249,115,22,0.5));" alt="OW" onerror="this.style.display='none'">
      </div>
      <h1 style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-0.02em;color:#fff;margin-bottom:0.75rem;line-height:1.05;">${T('title')}</h1>
      <p style="color:#94a3b8;font-size:1rem;max-width:36rem;line-height:1.7;margin-bottom:3rem;">${T('subtitle')}</p>
      <button id="ow-start-btn" class="ow-btn-primary">${T('start')}</button>
    </div>`;
  }

  function renderStage1() {
    const qs = s1Q();
    if (!qs.length) { state.step = 'welcome'; render(); return; }
    const q = qs[state.stage1Idx];
    const progress = ((state.stage1Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#f97316;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage1')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage1Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#f97316;"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn" data-s1-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderSubResult() {
    if (!state.finalMatch) computeFinalMatch();
    const fm = state.finalMatch;
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = (roleNames && roleNames[fm.role]) || fm.role;
    const subName = (subNames && subNames[fm.sub]) || fm.sub;
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;">
      <div style="background:#f97316;padding:1.5rem;border-radius:1.5rem;margin-bottom:2rem;transform:rotate(-3deg);box-shadow:0 0 40px rgba(249,115,22,0.4);">${barSVG()}</div>
      <p style="color:#64748b;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;font-size:0.75rem;margin-bottom:0.75rem;">${T('subResultTitle')}</p>
      <h2 style="font-size:clamp(2rem,6vw,3.5rem);font-weight:900;font-style:italic;color:#fff;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:1.5rem;">
        ${roleName} <span style="color:#f97316;">— ${subName}</span>
      </h2>
      <p style="color:#94a3b8;max-width:34rem;line-height:1.7;margin-bottom:3rem;">${T('subResultDesc')}</p>
      <button id="ow-go-stage2-btn" class="ow-btn-secondary">${T('subResultBtn')}</button>
    </div>`;
  }

  function renderStage2() {
    const qs = s2Q();
    if (!qs.length) { state.step = 'calculating'; render(); return; }
    const q = qs[state.stage2Idx];
    const progress = ((state.stage2Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#3b82f6;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage2')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage2Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#3b82f6;box-shadow:0 0 10px rgba(59,130,246,0.5);"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn ow-stage2" data-s2-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderCalculating() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <div style="position:relative;margin-bottom:3rem;">
        <div class="ow-spinner"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          ${starSVG().replace('width="14"', 'width="28"').replace('height="14"', 'height="28"').replace('stroke="currentColor"', 'stroke="#f97316"')}
        </div>
      </div>
      <h2 style="font-size:1.5rem;font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:0.15em;color:#fff;">${T('calcTitle')}</h2>
    </div>`;
  }

  function renderFinal() {
    const fm = state.finalMatch;
    if (!fm) { resetState(); render(); return; }

    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);

    container.innerHTML = `
    <div class="ow-anim-fade" style="max-width:56rem;margin:0 auto;padding:2rem 1rem 4rem;">
      <div id="ow-result-card-export" class="ow-result-card">
        <div class="ow-result-header"></div>
        <div class="hidden md:block" style="position:absolute;top:0;right:0;padding:2rem;opacity:0.06;pointer-events:none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
        </div>
        <div class="p-6 md:p-10 relative">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <!-- Left side: Avatar & Name -->
            <div class="flex-none w-full md:w-52 flex flex-col items-center gap-2">
              <div class="ow-avatar-ring" style="width:8rem;height:8rem;">
                <div class="ow-avatar-inner" style="width:6.5rem;height:6.5rem;background-image:url('/static/img/owtestico/${encodeURIComponent(fm.key)}.png'); background-size:cover; background-position:center; background-color:#1e212d; border-radius:50%;"></div>
              </div>
              <!-- Badge in normal flow, no absolute -->
              <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:0.2rem 0.75rem;font-weight:900;font-style:italic;font-size:0.7rem;border-radius:0.5rem;text-transform:uppercase;white-space:nowrap;">MATCH 99.8%</div>
              <div style="text-align:center;width:100%;padding:0 0.25rem;">
                <p style="color:#f97316;font-weight:900;font-style:normal;letter-spacing:0.05em;text-transform:uppercase;font-size:0.55rem;margin-bottom:0.2rem;">${T('destinyHero')}</p>
                <!-- Hero name: clamp size for long names -->
                <div style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.05;letter-spacing:-0.02em;color:#fff;margin-bottom:0.3rem;word-break:break-all;">${heroName}</div>
                <div style="display:inline-block;padding:0.2rem 0.7rem;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:0.6rem;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;">
                  ${roleName} / ${subName}
                </div>
              </div>
            </div>

            <!-- Right side: Traits & Flavor Text -->
            <div class="flex-1 w-full flex flex-col gap-5">
              <div style="background:rgba(25,28,40,0.8);padding:1.5rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.08);">
                <h4 style="display:flex;align-items:center;gap:0.5rem;color:#f97316;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:1rem;">
                  ${starSVG()} ${T('traitEval')}
                </h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;">${uniqueTraits.map(t => {
      const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span class="ow-tag" style="margin:0;">#${label}</span>`;
    }).join('')}</div>
              </div>
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6" style="background:linear-gradient(135deg, #f97316, #ea580c);padding:1.5rem;border-radius:1rem;">
                <div style="flex:1;">
                  <h4 style="color:rgba(0,0,0,0.7);font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:0.5rem;">${T('evalArchive')}</h4>
                  <p style="color:#000;font-weight:700;font-size:0.9rem;line-height:1.6;margin:0;">${flavor}</p>
                </div>
                <!-- Action Button Container inside Flavor box -->
                <div class="sm:ml-4 flex-shrink-0 self-end sm:self-auto">
                  <button id="ow-share-btn" style="background:rgba(0,0,0,0.25);padding:1rem;border-radius:50%;border:none;cursor:pointer;transition:all 0.2s;color:#000;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(0,0,0,0.6)';this.style.color='#f97316'" onmouseout="this.style.background='rgba(0,0,0,0.25)';this.style.color='#000'">
                    ${shareSVG().replace('width="20"', 'width="24"').replace('height="20"', 'height="24"')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Moved Retry Button OUTSIDE of Export Card -->
      <div style="display:flex;justify-content:center;margin-top:2.5rem;">
        <button id="ow-reset-btn" class="ow-retry-btn">
          ${retrySVG()} ${T('retry')}
        </button>
      </div>
      </div>

      ${state.altMatches.length ? `
      <div style="margin-top:2rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
          <span style="color:#64748b;font-size:0.7rem;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;white-space:nowrap;">${T('altHeroes')}</span>
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${state.altMatches.map(alt => {
      const altName = (OW_DATA.hero_names[alt.key] || {})[state.lang] || alt.key;
      const altSubName = (T('subNames') || {})[alt.sub] || alt.sub;
      const pctInt = Math.round(alt.pct);
      return `<div style="background:rgba(15,17,25,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:1.25rem;padding:1.25rem;text-align:center;position:relative;overflow:hidden;transition:border-color 0.2s;" 
              onmouseenter="this.style.borderColor='rgba(249,115,22,0.35)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,rgba(249,115,22,${0.3 + (alt.pct - 78) / 65 * 0.5}),transparent);"></div>
              <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg,rgba(30,33,45,1),rgba(20,23,34,1));border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.9rem;background-image:url('/static/img/owtestico/${encodeURIComponent(alt.key)}.png'); background-size:cover; background-position:center;">
              </div>
              <div style="font-size:1.1rem;font-weight:900;font-style:italic;text-transform:uppercase;color:#fff;letter-spacing:-0.01em;margin-bottom:0.4rem;">${altName}</div>
              <div style="font-size:0.65rem;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.85rem;">${altSubName}</div>
              <div style="background:rgba(255,255,255,0.05);border-radius:99px;height:4px;margin-bottom:0.4rem;overflow:hidden;">
                <div style="height:100%;width:${alt.pct}%;background:linear-gradient(90deg,#c2410c,#f97316);border-radius:99px;transition:width 0.6s ease;"></div>
              </div>
              <div style="font-size:0.7rem;font-weight:900;color:#f97316;font-style:italic;">${alt.pct}%</div>
            </div>`;
    }).join('')}
        </div>
      </div>` : ''}
    </div>`;
  }

  // === Share Modal ===
  function showShareModal() {
    if (!window.html2canvas) {
      alert(state.lang === 'zh' ? '正在加载组件，请稍后再试...' : 'Loading, please wait...');
      return;
    }
    const tModal = {
      zh: { gen: '正在生成专属档案...', dl: '保存图片', sh: '分享至：', err: '生成失败，请重试' },
      ja: { gen: '専用アーカイブを作成中...', dl: '画像を保存', sh: 'シェア：', err: 'エラーが発生しました' },
      en: { gen: 'Generating Archive...', dl: 'Save Image', sh: 'Share via:', err: 'Generation failed' }
    };
    const tm = (k) => (tModal[state.lang] || tModal['en'])[k];

    const overlay = document.createElement('div');
    overlay.id = 'ow-share-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(11,12,16,0.92);backdrop-filter:blur(15px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;opacity:0;transition:opacity 0.3s;';

    overlay.innerHTML = `
      <button id="ow-share-close" style="position:absolute;top:1.5rem;right:1.5rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:50%;color:#94a3b8;cursor:pointer;padding:0.6rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='#fff';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='#94a3b8';">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div id="ow-share-content" style="max-width:40rem;width:100%;display:flex;flex-direction:column;align-items:center;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);transform:scale(0.95);">
        <div id="ow-share-img-coord" style="width:100%;min-height:300px;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;position:relative;">
           <div class="ow-spinner"></div>
           <div style="position:absolute;color:#f97316;font-weight:900;font-style:italic;margin-top:7rem;letter-spacing:0.1em;text-transform:uppercase;">${tm('gen')}</div>
        </div>
        <div id="ow-share-actions" style="opacity:0;pointer-events:none;transition:opacity 0.5s;display:flex;flex-direction:column;align-items:center;gap:2rem;width:100%;">
          <button id="ow-share-dl" class="ow-btn-primary" style="padding:1rem 3rem;font-size:1.1rem;box-shadow:0 10px 30px rgba(249,115,22,0.3);">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform:skewX(10deg);"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             <span style="transform:skewX(10deg);">${tm('dl')}</span>
          </button>
          <div style="text-align:center;">
             <div style="color:#64748b;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;gap:1rem;">
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
                ${tm('sh')}
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
             </div>
             <div style="display:flex;gap:1.25rem;justify-content:center;">
               <button id="ow-share-tw" style="background:#000;border:1px solid rgba(255,255,255,0.1);color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='#000'">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </button>
               <button id="ow-share-fb" style="background:#1877f2;border:none;color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#166fe5'" onmouseout="this.style.background='#1877f2'">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </button>
             </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      document.getElementById('ow-share-content').style.transform = 'scale(1)';
    });

    const closeOverlay = () => {
      overlay.style.opacity = '0';
      document.getElementById('ow-share-content').style.transform = 'scale(0.95)';
      setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    };
    document.getElementById('ow-share-close').addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });

    // Build a dedicated off-screen export card with 100% fixed px sizes
    // (html2canvas does not support rem/vw/clamp, so we must use px only)
    const fm = state.finalMatch;
    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);
    const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
    const tagHTML = uniqueTraits.map(t => {
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span style="display:inline-block;padding:4px 12px;background:#1e212d;border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:#e2e8f0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">#${label}</span>`;
    }).join('');

    const exportCard = document.createElement('div');
    exportCard.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:800px;background:linear-gradient(135deg,#0f1119,#161924);border-radius:20px;overflow:hidden;font-family:Inter,system-ui,sans-serif;';
    exportCard.innerHTML = `
      <div style="height:4px;background:linear-gradient(90deg,#c2410c,#f97316,#c2410c);"></div>
      <div style="display:flex;align-items:stretch;padding:28px 28px 28px 28px;gap:24px;">
        <!-- Left: avatar + info -->
        <div style="width:200px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <div style="width:120px;height:120px;border-radius:50%;border:2px solid rgba(249,115,22,0.35);padding:6px;background:rgba(249,115,22,0.08);">
            <div style="width:108px;height:108px;border-radius:50%;background-image:url('/static/img/owtestico/${encodeURIComponent(fm.key)}.png');background-size:cover;background-position:center;background-color:#1e212d;box-shadow:0 0 30px rgba(249,115,22,0.4);"></div>
          </div>
          <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:3px 12px;font-weight:900;font-style:italic;font-size:12px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">MATCH 99.8%</div>
          <div style="text-align:center;">
            <div style="color:#f97316;font-weight:900;text-transform:uppercase;font-size:9px;letter-spacing:2px;margin-bottom:8px;">${T('destinyHero')}</div>
            <div style="font-size:28px;font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.1;color:#fff;margin-bottom:16px;">${heroName}</div>
            <div style="display:inline-block;padding:4px 12px;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;">${roleName} / ${subName}</div>
          </div>
        </div>
        <!-- Right: traits + flavor -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;min-width:0;">
          <div style="background:rgba(25,28,40,0.9);padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
            <div style="font-size:10px;font-weight:900;color:#f97316;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">★ ${T('traitEval')}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">${tagHTML}</div>
          </div>
          <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:18px;border-radius:12px;flex:1;">
            <div style="font-size:10px;font-weight:900;color:rgba(0,0,0,0.6);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">${T('evalArchive')}</div>
            <div style="font-size:14px;font-weight:700;color:#000;line-height:1.6;">${flavor}</div>
          </div>
        </div>
      </div>
      <div style="padding:8px 28px 16px;text-align:right;font-size:9px;color:rgba(255,255,255,0.2);letter-spacing:1px;text-transform:uppercase;">brocnbb.com · OW Destiny Hero Test</div>
    `;
    document.body.appendChild(exportCard);

    html2canvas(exportCard, {
      backgroundColor: '#0f1119',
      scale: 2,
      useCORS: true,
      logging: false,
      width: 800,
    }).then(canvas => {
      document.body.removeChild(exportCard);

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<img src="${imgData}" style="max-height:55vh;width:auto;max-width:100%;border-radius:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.3);animation:ow-fade-in 0.6s ease forwards;">`;

      const actions = document.getElementById('ow-share-actions');
      actions.style.opacity = '1';
      actions.style.pointerEvents = 'auto';

      document.getElementById('ow-share-dl').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = imgData;
        const heroName = (state.finalMatch || {}).key || 'hero';
        a.download = `ow-destiny-${heroName}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

      const urlToShare = encodeURIComponent(window.location.origin + window.location.pathname);
      const shareTextMap = {
        zh: '我刚测试了我的《守望先锋》本命英雄，快来看看！',
        ja: '私のオーバーウォッチ運命のヒーローを診断しました！',
        en: 'I just found my Destiny Overwatch Hero! Check it out!'
      };
      const textToShare = encodeURIComponent(shareTextMap[state.lang] || shareTextMap['en']);

      document.getElementById('ow-share-tw').addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${textToShare}&url=${urlToShare}`, '_blank', 'width=600,height=400');
      });

      document.getElementById('ow-share-fb').addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, '_blank', 'width=600,height=400');
      });

    }).catch(err => {
      console.error('html2canvas error', err);
      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<div style="color:#ef4444;font-weight:700;">${tm('err')}</div>`;
    });
  }

  // === Bind all events via addEventListener (CSP-safe) ===
  function bindEvents() {
    // Share button
    const shareBtn = document.getElementById('ow-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', showShareModal);
    // Lang buttons
    document.querySelectorAll('#ow-lang-bar [data-lang]').forEach(btn => {
      btn.addEventListener('click', function () {
        state.lang = this.getAttribute('data-lang');
        render();
      });
    });
    // Start button
    const startBtn = document.getElementById('ow-start-btn');
    if (startBtn) startBtn.addEventListener('click', () => { state.step = 'stage1'; render(); });

    // Stage 1 option buttons
    document.querySelectorAll('[data-s1-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s1-idx'));
        const qs = s1Q();
        const opt = qs[state.stage1Idx].opts[idx];
        state.roleScores[opt.r] = (state.roleScores[opt.r] || 0) + 5;
        (opt.s || []).forEach(s => { state.subScores[s] = (state.subScores[s] || 0) + 5; });
        if (state.stage1Idx < qs.length - 1) {
          state.stage1Idx++;
          render();
        } else {
          computeFinalMatch();
          state.step = 'sub_result';
          render();
        }
      });
    });

    // Go to stage2 button
    const goStage2 = document.getElementById('ow-go-stage2-btn');
    if (goStage2) goStage2.addEventListener('click', () => { state.step = 'stage2'; render(); });

    // Stage 2 option buttons
    document.querySelectorAll('[data-s2-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s2-idx'));
        const qs = s2Q();
        const opt = qs[state.stage2Idx].opts[idx];
        state.userTraits.push(...(opt.traits || []));
        if (state.stage2Idx < qs.length - 1) {
          state.stage2Idx++;
          render();
        } else {
          computeFinalMatch();

          // Preload hero avatar images during the 2.5s calculation animation
          // so they are immediately available on the result page.
          const imgKeysToPreload = [state.finalMatch.key, ...state.altMatches.map(a => a.key)];
          imgKeysToPreload.forEach(key => {
            const img = new Image();
            img.src = `/static/img/owtestico/${encodeURIComponent(key)}.png`;
          });

          state.step = 'calculating';
          render();
          setTimeout(() => { state.step = 'final'; render(); }, 2500);
        }
      });
    });

    // Reset button
    const resetBtn = document.getElementById('ow-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => { resetState(); render(); });
  }

  // === Boot ===
  render();
})();
