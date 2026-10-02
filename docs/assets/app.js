(() => {
  // assets/data.js sets LIBRARY_DATA; the single-file copy (claude.ai artifact) embeds the JSON instead
  const D = window.LIBRARY_DATA || JSON.parse(document.getElementById("library-data").textContent);
  const KEY = "study-library:v1:";
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(KEY + k); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const R = Object.fromEntries(D.resources.map(r => [r.id, r]));
  const V = Object.fromEntries(D.videos.map(v => [v.id, v]));
  const T = Object.fromEntries(D.topics.map(t => [t.id, t]));
  const topicOrder = D.topics.map(t => t.id).concat(["other"]);
  const done = new Set(store.get("done", []));
  const TABS = [
    ["watch", "Free to watch", () => D.resources.filter(r => r.watch).length],
    ["path", "Learning path", () => null],
    ["plans", "Study plans", () => null],
    ["resources", "All resources", () => D.resources.length],
    ["reels", "Reels & posts", () => D.videos.length],
    ["guides", "Guides", () => Object.keys(D.docs).length + D.resources.filter(r => r.dm).length],
  ];
  const tabIds = TABS.map(t => t[0]);
  const hashTab = location.hash.replace("#", "");
  const state = {
    tab: tabIds.includes(hashTab) ? hashTab : store.get("tab", "watch"),
    q: "", topic: "", who: "", type: "", hideDone: store.get("hideDone", false), plan: store.get("plan", ""),
  };
  if (!tabIds.includes(state.tab)) state.tab = "watch";

  // ---------- helpers
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = u => /^https?:\/\//i.test(u || "") ? u : null;
  const fileUrl = f => f ? f.split("/").map(encodeURIComponent).join("/") : null;
  const dur = s => { s = Math.round(s || 0); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = String(s % 60).padStart(2, "0"); return h ? `${h}:${String(m).padStart(2, "0")}:${x}` : `${m}:${x}`; };
  const fmtDate = d => d ? new Date(d + "T12:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "undated";
  const terms = () => state.q.toLowerCase().split(/\s+/).filter(Boolean);
  const hl = text => {
    const ts = terms();
    if (!ts.length) return esc(text);
    const re = new RegExp("(" + ts.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
    return String(text ?? "").split(re).map((part, i) => i % 2 ? `<mark>${esc(part)}</mark>` : esc(part)).join("");
  };
  const hay = obj => obj._hay || (obj._hay = [obj.name, obj.title, obj.desc, obj.summary, obj.hook, obj.domain,
    (obj.topics || []).map(t => T[t] ? T[t].label : t).join(" "), D.types[obj.type],
    (obj.points || []).join(" "), (obj.tx || []).map(x => x[1]).join(" ")].join(" ").toLowerCase());
  const matches = obj => terms().every(t => hay(obj).includes(t));
  const topicOf = o => (o.topics && o.topics[0]) || "other";
  const topicLabel = id => T[id] ? T[id].label : "Other";
  const inTopic = o => !state.topic || (o.topics || []).includes(state.topic) || (state.topic === "other" && !(o.topics || []).length);
  const byWho = o => !state.who || o.who === state.who || (o.creators || []).includes(state.who);
  const visible = (o, key) => matches(o) && inTopic(o) && byWho(o) && !(state.hideDone && done.has(key));
  const mentions = r => r.videos.length + r.docs.length;
  const countSpan = keys => `<span class="count" data-keys="${esc(keys.join(" "))}">${keys.filter(k => done.has(k)).length} of ${keys.length} done</span>`;
  const setHash = t => { try { history.replaceState(null, "", "#" + t); } catch (e) { /* sandboxed frame */ } };

  const fbLink = (v, label) => safeUrl(v.url) ? `<a class="ext" href="${esc(v.url)}" target="_blank" rel="noopener">${esc(label)}</a>` : esc(label);
  const reelRef = v => `<a href="#reels" data-reel="${esc(v.id)}">${esc(v.title)}</a>${D.creators.length > 1 ? ` <span class="mono">${esc(v.who)}</span>` : ""} <a class="fb" href="${esc(safeUrl(v.url) || "#")}" target="_blank" rel="noopener">${esc(v.plabel)}&nbsp;&#8599;</a>`;

  function freeTag(r) {
    if (r.free === true) return '<span class="tag free">Free</span>';
    if (r.free === false) return '<span class="tag paid">Paid</span>';
    return '<span class="tag check">Check price</span>';
  }

  function resRow(r, note) {
    const key = "r:" + r.id, url = safeUrl(r.url);
    const name = url ? `<a class="ext" href="${esc(url)}" target="_blank" rel="noopener">${hl(r.name)}</a>` : hl(r.name);
    const tags = [`<span class="tag">${esc(D.short[r.type] || "Resource")}</span>`, freeTag(r)];
    if (r.creator) tags.push('<span class="tag own">Creator&rsquo;s own</span>');
    if (r.status === "broken") tags.push('<span class="tag bad">Link broken</span>');
    if ((r.creators || []).length > 1) tags.push('<span class="tag both">Recommended by both</span>');
    if (r.dm) tags.push('<span class="tag dm">DM only</span>');
    else if (!url) tags.push('<span class="tag bad">No public link</span>');
    const refs = r.videos.slice(0, 3).map(id => V[id] ? reelRef(V[id]) : "").filter(Boolean);
    const fromDocs = r.docs.map(k => D.docs[k] ? `<a href="#guides">${esc(D.docs[k].title)}</a>${D.docs[k].videos.filter(id => V[id]).slice(0, 1).map(id => ` (shared in ${fbLink(V[id], "this " + V[id].kind.toLowerCase() + " on " + V[id].plabel)})`).join("")}` : "").filter(Boolean);
    const first = (r.src || []).map(id => V[id]).find(Boolean);
    const where = v => fbLink(v, `the ${v.kind.toLowerCase()} on ${v.plabel}`);
    const dmLine = r.dm ? `<div class="dm-line">Comment <b>${esc(r.dm)}</b> on ${first ? where(first) : "the post"} and the link arrives by DM.</div>` : "";
    const noLink = !url && !r.dm && first ? `<div class="meta">No public link. Check ${where(first)}.</div>` : "";
    const ctx = r.ctx.find(c => c.c);
    const local = D.local && r.file ? ` &middot; <a href="${esc(fileUrl(r.file))}" target="_blank" rel="noopener">open local copy</a>` : "";
    return `<li class="row${done.has(key) ? " is-done" : ""}">
      <input class="check" type="checkbox" id="done-${esc(key.replace(":", "-"))}" data-done="${esc(key)}" ${done.has(key) ? "checked" : ""} aria-label="Mark ${esc(r.name)} as done">
      <div class="main">
        <div class="top"><span class="name">${name}</span>${tags.join(" ")}</div>
        ${note ? `<div class="plan-note"><b>Do:</b> ${esc(note)}</div>` : ""}
        ${r.desc ? `<p class="desc">${hl(r.desc)}</p>` : ""}
        ${dmLine}${noLink}
        ${ctx ? `<div class="meta">Context, paraphrased from ${esc(V[ctx.v] ? V[ctx.v].who : "the post")}: ${esc(ctx.c)}${ctx.t ? ` <span class="mono">(${esc(ctx.t)})</span>` : ""}</div>` : ""}
        <div class="meta">${r.domain ? `<span class="mono">${esc(r.domain)}</span>` : ""}${local}
          ${refs.length ? ` &middot; In ${r.videos.length} reel${r.videos.length > 1 ? "s/posts" : "/post"}: ${refs.join("; ")}${r.videos.length > 3 ? "&hellip;" : ""}` : ""}
          ${fromDocs.length ? ` &middot; Listed in ${fromDocs.join(", ")}` : ""}</div>
      </div></li>`;
  }

  const txHtml = v => v.tx.map(x => `<div><span>${dur(x[0])}</span>${hl(x[1])}</div>`).join("");

  // The panel under each reel/post is drawn the first time it opens (1,000+ rows stay light on phones).
  function moreHtml(v, txTerm) {
    const res = v.res.map(id => R[id]).filter(Boolean);
    const docs = v.docs.map(k => D.docs[k]).filter(Boolean);
    const link = r => safeUrl(r.url) ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>` : esc(r.name);
    return `<div class="more">
            ${v.points.length ? `<div><h3>Key points</h3><ul>${v.points.map(p => `<li>${hl(p)}</li>`).join("")}</ul></div>` : ""}
            ${res.length ? `<div><h3>Resources mentioned</h3><ul>${res.map(r => `<li>${link(r)} <span class="meta">&middot; ${esc(r.desc)}</span></li>`).join("")}</ul></div>` : ""}
            ${docs.map(d => `<div><h3>In the PDF shared here: ${esc(d.title)}</h3><ul>${d.res.map(id => R[id]).filter(Boolean).map(r => `<li>${link(r)} <span class="meta">&middot; ${esc(r.desc)}</span></li>`).join("")}</ul></div>`).join("")}
            ${v.todo.length ? `<div><h3>Try this</h3><ul>${v.todo.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
            ${v.tx && v.tx.length ? `<details class="txd" data-tx="${esc(v.id)}"${txTerm ? " open" : ""}><summary>Transcript</summary><div class="tx">${txTerm ? txHtml(v) : ""}</div></details>` : ""}
          </div>`;
  }

  function reelRow(v, open) {
    const key = "v:" + v.id, url = safeUrl(v.url);
    const res = v.res.map(id => R[id]).filter(Boolean);
    const docs = v.docs.map(k => D.docs[k]).filter(Boolean);
    const docRes = docs.flatMap(d => d.res.map(id => R[id]).filter(Boolean));
    const txTerm = terms().length && (v.tx || []).some(x => terms().every(t => x[1].toLowerCase().includes(t)));
    const show = open || txTerm;
    return `<li class="row reel${done.has(key) ? " is-done" : ""}" id="reel-${esc(v.id)}">
      <input class="check" type="checkbox" id="done-v-${esc(v.id)}" data-done="${esc(key)}" ${done.has(key) ? "checked" : ""} aria-label="Mark ${esc(v.title)} as done">
      <div class="main">
        <div class="when"><span>${esc(v.who)} &middot; ${esc(v.plabel)} ${esc(v.kind.toLowerCase())}</span><span>${esc(fmtDate(v.date))}</span>${v.dur ? `<span>${dur(v.dur)}</span>` : ""}${v.views ? `<span>${Number(v.views).toLocaleString()} views</span>` : ""}${v.level ? `<span>${esc(v.level)}</span>` : ""}</div>
        <h3 class="title name">${url ? `<a class="ext" href="${esc(url)}" target="_blank" rel="noopener">${hl(v.title)}</a>` : hl(v.title)}</h3>
        ${v.summary ? `<p class="desc">${hl(v.summary)}</p>` : `<p class="desc quote">${esc(v.hook)}</p>`}
        <div class="meta">${(v.topics || []).map(t => `<span class="tag">${esc(topicLabel(t))}</span>`).join(" ")}${res.length ? ` &middot; ${res.length} resource${res.length > 1 ? "s" : ""}` : ""}${docRes.length ? ` + ${docRes.length} in the PDF` : ""}${v.page ? ` &middot; <a href="${esc(v.page)}">Full note</a>` : ""}</div>
        <details class="mored" data-more="${esc(v.id)}"${show ? " open" : ""}><summary>Notes, links${v.tx && v.tx.length ? " and transcript" : ""}</summary>${show ? moreHtml(v, txTerm) : ""}</details>
      </div></li>`;
  }

  // ---------- views
  function viewWatch() {
    const items = D.resources.filter(r => r.watch && visible(r, "r:" + r.id));
    let out = `<p class="intro">Everything free they recommend that you can watch: YouTube videos, playlists, channels and free courses, grouped by topic in study order. Most recommended first. Tick items off as you finish them.</p>`;
    for (const t of topicOrder) {
      const group = items.filter(r => topicOf(r) === t).sort((a, b) => mentions(b) - mentions(a) || a.name.localeCompare(b.name));
      if (!group.length) continue;
      const total = D.resources.filter(r => r.watch && topicOf(r) === t);
      out += `<section class="group"><div class="group-h"><h2>${esc(topicLabel(t))}</h2>${countSpan(total.map(r => "r:" + r.id))}</div><ul class="list">${group.map(resRow).join("")}</ul></section>`;
    }
    return items.length ? out : out + empty();
  }

  function viewPath() {
    let out = `<p class="intro">The topics in study order. For each: go through the short reels and posts, then the free resources, then read or try the tools, then build something.</p>`;
    let n = 0;
    for (const t of topicOrder) {
      const reels = D.videos.filter(v => topicOf(v) === t && visible(v, "v:" + v.id));
      const res = D.resources.filter(r => topicOf(r) === t && visible(r, "r:" + r.id));
      if (!reels.length && !res.length) continue;
      n++;
      const all = D.videos.filter(v => topicOf(v) === t).map(v => "v:" + v.id).concat(D.resources.filter(r => topicOf(r) === t).map(r => "r:" + r.id));
      const builds = reels.flatMap(v => v.projects.map(p => [p, v]));
      const watch = res.filter(r => r.watch), other = res.filter(r => !r.watch);
      out += `<section class="group" id="topic-${esc(t)}"><div class="group-h"><h2>${n}. ${esc(topicLabel(t))}</h2>${countSpan(all)}</div>
        ${T[t] ? `<p class="group-desc">${esc(T[t].desc)}</p>` : ""}
        ${reels.length ? `<div class="sub">Reels &amp; posts</div><ul class="list">${reels.map(v => reelRow(v, false)).join("")}</ul>` : ""}
        ${watch.length ? `<div class="sub">Watch (free)</div><ul class="list">${watch.map(resRow).join("")}</ul>` : ""}
        ${other.length ? `<div class="sub">Read and use</div><ul class="list">${other.sort((a, b) => mentions(b) - mentions(a)).map(resRow).join("")}</ul>` : ""}
        ${builds.length ? `<div class="sub">Build</div><ul class="list">${builds.map(([p, v]) => `<li class="row"><span></span><div class="main"><div>${esc(p)}</div><div class="meta">From <a href="#reels" data-reel="${esc(v.id)}">${esc(v.title)}</a></div></div></li>`).join("")}</ul>` : ""}
      </section>`;
    }
    return n ? out : out + empty();
  }

  const hrs = h => h >= 1 ? `about ${Math.round(h * 2) / 2} h` : `about ${Math.round(h * 60)} min`;
  const doLine = (portion, h) => {  // "lessons 1-4 · about 3 h" (unless the portion already gives the time)
    const p = String(portion || "").trim().replace(/[.;]+$/, "");
    if (!h || /\babout\b/i.test(p)) return p;
    return p ? `${p} · ${hrs(h)}` : hrs(h);
  };
  const checkRow = (key, label, body) => `<li class="row${done.has(key) ? " is-done" : ""}"><input class="check" type="checkbox" data-done="${esc(key)}" ${done.has(key) ? "checked" : ""} aria-label="Mark ${esc(label)} as done"><div class="main">${body}</div></li>`;

  function viewPlans() {
    const plans = D.plans || [];
    if (!plans.length) return empty();
    const plan = plans.find(p => p.id === state.plan) || plans[0];
    const chips = plans.map(p => `<button class="chip" data-plan="${esc(p.id)}" aria-pressed="${p.id === plan.id}">${esc(p.name)}<span class="n">${esc(p.tagline)}</span></button>`).join("");
    let out = `<div class="chips" role="group" aria-label="Choose a plan">${chips}</div>
      <p class="intro">${esc(plan.intro)} About ${Number(plan.hours)} hours a week. Items marked <span class="tag gap">Not from the creators</span> fill gaps their posts leave. Your ticks are shared with the other tabs.${plan.page ? ` <a href="${esc(plan.page)}">Open as a page</a>.` : ""}</p>`;
    // a topic (or creator) filter hides most of a plan's items: say so, with a way back to the whole plan
    if (state.topic || state.who) {
      const by = [state.topic ? `the topic &ldquo;${esc(topicLabel(state.topic))}&rdquo;` : "", state.who ? `${esc(state.who)}&rsquo;s posts` : ""].filter(Boolean).join(" and ");
      out += `<div class="filter-note" role="status"><b>Filtered:</b> only items matching ${by} are shown, so most weeks look incomplete. <button type="button" class="linkish" data-clear-filters>Switch back to All topics${state.who ? " and All creators" : ""}</button> to see every item in the plan.</div>`;
    }
    const hidden = key => state.hideDone && done.has(key);
    let shown = 0;
    for (const w of plan.weeks) {
      const core = w.core.filter(c => R[c.id] && visible(R[c.id], "r:" + c.id));
      const reels = w.reels.map(id => V[id]).filter(v => v && visible(v, "v:" + v.id));
      const bKey = `b:${plan.id}:${w.n}`;
      // topic and creator filters also apply to the build and the outside fillers
      const topicOk = !state.topic || w.topics.includes(state.topic);
      const buildWho = w.build.from && V[w.build.from] ? V[w.build.from].who : "";
      const extra = w.extra.map(e => [e, "x:" + e.url]).filter(([e, k]) => topicOk && !state.who && matches({ name: e.name, desc: e.why }) && !hidden(k));
      const optional = w.optional.filter(o => o.kind === "r" ? R[o.id] && visible(R[o.id], "r:" + o.id) : V[o.id] && visible(V[o.id], "v:" + o.id));
      const build = w.build.text && topicOk && (!state.who || buildWho === state.who) && !hidden(bKey) && matches({ desc: w.build.text }) ? w.build : null;
      if (!core.length && !reels.length && !build && !extra.length && !optional.length) continue;
      shown++;
      const keys = [...w.core.map(c => "r:" + c.id), ...w.reels.map(id => "v:" + id), ...(w.build.text ? [bKey] : []), ...w.extra.map(e => "x:" + e.url)];
      const src = build && build.from && V[build.from];
      out += `<section class="group"><div class="group-h"><h2>Week ${Number(w.n)}: ${esc(w.title)}</h2>${countSpan(keys)}</div>
        ${w.goal ? `<p class="group-desc"><b>Goal:</b> ${esc(w.goal)}${w.hours ? ` (${hrs(w.hours)} in total)` : ""}</p>` : ""}
        ${core.length ? `<div class="sub">Core</div><ul class="list">${core.map(c => resRow(R[c.id], doLine(c.portion, c.hours))).join("")}</ul>` : ""}
        ${reels.length ? `<div class="sub">From the creators&rsquo; posts</div><ul class="list">${reels.map(v => reelRow(v, false)).join("")}</ul>` : ""}
        ${build ? `<div class="sub">Build</div><ul class="list">${checkRow(bKey, `week ${w.n} build`, `<div class="name plain">${esc(build.text)}</div>${build.hours || src ? `<div class="meta">${build.hours ? hrs(build.hours) : ""}${build.hours && src ? " &middot; " : ""}${src ? `Idea from <a href="#reels" data-reel="${esc(src.id)}">${esc(src.title)}</a>` : ""}</div>` : ""}`)}</ul>` : ""}
        ${extra.length ? `<div class="sub">Fill the gap</div><ul class="list">${extra.map(([e, k]) => checkRow(k, e.name, `<div class="top"><span class="name">${safeUrl(e.url) ? `<a class="ext" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.name)}</a>` : esc(e.name)}</span> <span class="tag">${esc(e.type || "Resource")}</span> <span class="tag gap">Not from the creators</span></div>${e.why ? `<p class="desc">${esc(e.why)}</p>` : ""}${e.hours ? `<div class="plan-note"><b>Time:</b> ${esc(hrs(e.hours))}</div>` : ""}`)).join("")}</ul>` : ""}
        ${optional.length ? `<div class="sub">Optional</div><ul class="list">${optional.map(o => o.kind === "r" ? resRow(R[o.id]) : reelRow(V[o.id], false)).join("")}</ul>` : ""}
      </section>`;
    }
    if (!shown) return out + empty();
    if (plan.later.length) out += `<section class="group"><div class="group-h"><h2>Later</h2></div><p class="group-desc">This plan leaves these topics for afterwards; they are all in the Learning path tab: ${plan.later.map(t => esc(topicLabel(t))).join("; ")}.</p></section>`;
    return out;
  }

  function viewResources() {
    const pool = D.resources.filter(r => visible(r, "r:" + r.id));
    const counts = {};
    pool.forEach(r => counts[r.type] = (counts[r.type] || 0) + 1);
    const chips = [`<button class="chip" data-type="" aria-pressed="${!state.type}">All<span class="n">${pool.length}</span></button>`]
      .concat(Object.keys(D.types).filter(t => counts[t]).map(t => `<button class="chip" data-type="${esc(t)}" aria-pressed="${state.type === t}">${esc(D.types[t])}<span class="n">${counts[t]}</span></button>`));
    const items = pool.filter(r => !state.type || r.type === state.type).sort((a, b) => mentions(b) - mentions(a) || a.name.localeCompare(b.name));
    return `<div class="chips" role="group" aria-label="Filter by type">${chips.join("")}</div>
      ${items.length ? `<ul class="list">${items.map(resRow).join("")}</ul>` : empty()}`;
  }

  function viewReels() {
    const items = D.videos.filter(v => visible(v, "v:" + v.id));
    return `<p class="intro">Newest first. Open a reel or post for its key points and every link${D.public ? "; the original post is one click away" : ", and the transcript. Search looks inside transcripts too"}.</p>
      ${items.length ? `<ul class="list">${items.map(v => reelRow(v, false)).join("")}</ul>` : empty()}`;
  }

  function viewGuides() {
    const docs = Object.entries(D.docs).filter(([k, d]) => matches({ title: d.title, summary: d.summary }));
    const dms = D.resources.filter(r => r.dm && visible(r, "r:" + r.id));
    if (!docs.length && !dms.length) return empty();
    const dmBlock = dms.length ? `<section class="group"><div class="group-h"><h2>Sent only by DM</h2><span class="count">${dms.length} guides</span></div>
      <p class="group-desc">Open the post and comment the keyword. The link arrives by DM.</p>
      <ul class="list">${dms.map(resRow).join("")}</ul></section>` : "";
    return dmBlock + `<p class="intro">PDFs shared in the captions${D.local ? " (downloaded to the downloads folder)" : ""}, and every resource listed inside them.</p><div class="guides">${docs.map(([k, d]) => {
      const res = d.res.map(id => R[id]).filter(Boolean);
      return `<article class="guide"><h2>${esc(d.title)}</h2>
        <div class="meta mono">${d.pages ? Number(d.pages) + " pages" : ""}${d.videos.length ? ` &middot; shared in ${d.videos.length} post${d.videos.length > 1 ? "s" : ""}` : ""}</div>
        ${d.summary ? `<p class="desc">${esc(d.summary)}</p>` : ""}
        <div class="links">${D.local && d.file ? `<a href="${esc(fileUrl(d.file))}" target="_blank" rel="noopener">Open local copy</a>` : ""}${safeUrl(d.url) ? `<a class="ext" href="${esc(d.url)}" target="_blank" rel="noopener">Original link</a>` : ""}</div>
        ${res.length ? `<ul>${res.map(r => `<li>${safeUrl(r.url) ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>` : esc(r.name)}</li>`).join("")}</ul>` : ""}
      </article>`;
    }).join("")}</div>`;
  }

  const empty = () => `<p class="empty">Nothing matches${state.q ? ` &ldquo;${esc(state.q)}&rdquo;` : ""}${state.topic ? " in this topic" : ""}${state.hideDone ? " (done items are hidden)" : ""}.</p>`;
  const VIEWS = { watch: viewWatch, path: viewPath, plans: viewPlans, resources: viewResources, reels: viewReels, guides: viewGuides };

  // ---------- chrome
  function header() {
    const s = D.stats;
    document.getElementById("eyebrow").innerHTML = D.creators.map(c => `<a href="${esc(safeUrl(c.url) || "#")}" target="_blank" rel="noopener">${esc(c.name)} &middot; ${esc(c.label)}</a>`).join("") + `<span>Updated ${esc(fmtDate(D.generated))}</span>` + (window.cookieConsent ? `<a href="#" data-cookie-settings>Cookie settings</a>` : "");
    const many = new Set(D.creators.map(c => c.name)).size > 1;
    document.getElementById("lede").textContent = `Every resource ${D.creator} ${many ? "mention" : "mentions"} in their reels, posts and articles, with links back to each source, organised into a study plan. The free things to watch come first.`;
    const span = s.first && s.last ? `${fmtDate(s.first)} to ${fmtDate(s.last)}` : "";
    const n = x => Number(x || 0).toLocaleString("en-US");
    const per = [["facebook", "Facebook reels"], ["x", "X posts"], ["web", "blog articles"]];
    document.getElementById("stats").innerHTML = [
      ...per.filter(([p]) => (s.by_platform || {})[p]).map(([p, label]) => `<li><b>${n(s.by_platform[p])}</b> ${label}</li>`),
      span ? `<li>${esc(span)}</li>` : "",
      `<li><b>${dur(s.seconds)}</b> of video</li>`,
      `<li><b>${n(s.resources)}</b> resources</li>`,
      `<li><b>${n(s.watch)}</b> free to watch</li>`,
      `<li><b>${n(s.docs)}</b> PDF guides</li>`,
    ].join("");
    const cr = D.credits || { creators: [] };
    const lic = cr.content_license;
    const licUrl = lic && safeUrl(lic.url);
    const licLine = D.public && lic ? ` Summaries and notes: ${licUrl ? `<a href="${esc(licUrl)}" target="_blank" rel="noopener">${esc(lic.name)}</a>` : esc(lic.name)} (${/NC/.test(lic.name) ? "credit the creators, non-commercial" : "free to reuse with credit to the creators"}; see the <a href="license.html">license</a> and <a href="credits.html">credits</a>). Page code: MIT-0.` : "";
    document.getElementById("footer").innerHTML = (D.public
      ? `An unofficial study index of public reels, posts and articles by ${esc(D.creator)}, not affiliated with or endorsed by them. Summaries and key points are AI-assisted and may contain mistakes; every entry links to the original, and all videos, posts and guides belong to their creators. Progress is saved in this browser only. Generated ${esc(D.generated)}.`
      : `Built from public reels and posts by ${esc(D.creator)}. Progress is saved in this browser only. Generated ${esc(D.generated)}.`) + licLine
      + (D.public ? ` <a href="privacy.html">Privacy</a>${window.cookieConsent ? ` &middot; <a href="#" data-cookie-settings>Cookie settings</a>` : ""}.` : "");
    if (D.public) document.getElementById("q").placeholder = "Search names, topics and summaries";
  }

  function progress() {
    const watch = D.resources.filter(r => r.watch);
    const n = watch.filter(r => done.has("r:" + r.id)).length;
    document.getElementById("progress-label").textContent = `${n} of ${watch.length} free resources done · ${D.videos.filter(v => done.has("v:" + v.id)).length} of ${D.videos.length} reels & posts done`;
    document.getElementById("progress-bar").style.width = (watch.length ? (100 * n / watch.length) : 0) + "%";
  }

  function tabs() {
    document.getElementById("tabs").innerHTML = TABS.map(([id, label, count]) => {
      const c = count();
      return `<button class="tab" role="tab" id="tab-${id}" data-tab="${id}" aria-selected="${state.tab === id}">${esc(label)}${c !== null ? `<span class="n">${c}</span>` : ""}</button>`;
    }).join("");
    const strip = document.getElementById("tabs"), cur = strip.querySelector('[aria-selected="true"]');
    if (cur && strip.scrollWidth > strip.clientWidth) strip.scrollLeft += cur.getBoundingClientRect().left - strip.getBoundingClientRect().left - 16;
  }

  function topics() {
    const people = [...new Set(D.creators.map(c => c.name))].map(name => [name, D.creators.filter(c => c.name === name).map(c => c.label)]);
    document.getElementById("who").innerHTML = `<option value="">All creators</option>` +
      people.map(([name, labels]) => `<option value="${esc(name)}"${state.who === name ? " selected" : ""}>${esc(name)} (${esc(labels.join(", "))})</option>`).join("");
    document.getElementById("who").hidden = people.length < 2;
    const used = new Set(D.resources.map(topicOf).concat(D.videos.map(topicOf)));
    document.getElementById("topic").innerHTML = `<option value="">All topics</option>` +
      topicOrder.filter(t => used.has(t)).map(t => `<option value="${esc(t)}"${state.topic === t ? " selected" : ""}>${esc(topicLabel(t))}</option>`).join("");
  }

  function render(keepScroll) {
    const y = window.scrollY;
    tabs();
    document.getElementById("view").innerHTML = VIEWS[state.tab]();
    progress();
    if (keepScroll) window.scrollTo(0, y);
  }

  // ---------- events
  // Google Analytics, when the public page has it (see analytics() in site.py); a no-op otherwise.
  const track = (name, params) => { try { if (typeof gtag === "function") gtag("event", name, params); } catch (e) { /* blocked */ } };
  let searchTimer;
  document.getElementById("tabs").addEventListener("click", e => {
    const b = e.target.closest("[data-tab]");
    if (!b) return;
    state.tab = b.dataset.tab; state.type = "";
    store.set("tab", state.tab);
    setHash(state.tab);
    render(false);
    track("select_tab", { tab: state.tab });
  });
  let timer;
  document.getElementById("q").addEventListener("input", e => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = e.target.value.trim(); render(false); }, 120);
    clearTimeout(searchTimer);  // one event per search once typing stops, not one per keystroke
    searchTimer = setTimeout(() => { const q = e.target.value.trim(); if (q.length >= 3 && !/@|\d{5,}|\+?\d[\d\s().-]{7,}\d/.test(q)) track("search", { search_term: q.slice(0, 100), tab: state.tab }); }, 1500);
  });
  document.getElementById("topic").addEventListener("change", e => { state.topic = e.target.value; render(false); });
  document.getElementById("who").addEventListener("change", e => { state.who = e.target.value; render(false); });
  const hide = document.getElementById("hide-done");
  hide.checked = state.hideDone;
  hide.addEventListener("change", e => { state.hideDone = e.target.checked; store.set("hideDone", state.hideDone); render(true); });
  document.getElementById("view").addEventListener("change", e => {
    const key = e.target.dataset && e.target.dataset.done;
    if (!key) return;
    e.target.checked ? done.add(key) : done.delete(key);
    store.set("done", [...done]);
    const row = e.target.closest(".row");
    if (row) row.classList.toggle("is-done", e.target.checked);
    // the same item can be listed twice on a page (e.g. in two weeks' views): keep every copy and count in step
    document.querySelectorAll("#view input[data-done]").forEach(i => {
      if (i !== e.target && i.dataset.done === key) { i.checked = e.target.checked; const r = i.closest(".row"); if (r) r.classList.toggle("is-done", i.checked); }
    });
    document.querySelectorAll("#view .count[data-keys]").forEach(el => {
      const ks = el.dataset.keys.split(" ");
      el.textContent = `${ks.filter(k => done.has(k)).length} of ${ks.length} done`;
    });
    if (state.hideDone) render(true); else { progress(); tabs(); }
  });
  // "toggle" doesn't bubble, so listen in the capture phase; fill a transcript the first time it opens.
  document.getElementById("view").addEventListener("toggle", e => {
    const d = e.target;
    if (!d.classList || !d.open) return;
    if (d.classList.contains("mored") && !d.querySelector(".more") && V[d.dataset.more]) {
      d.insertAdjacentHTML("beforeend", moreHtml(V[d.dataset.more], false));
    }
    if (d.classList.contains("txd")) {
      const box = d.querySelector(".tx");
      if (box && !box.childElementCount && V[d.dataset.tx]) box.innerHTML = txHtml(V[d.dataset.tx]);
    }
  }, true);
  document.getElementById("view").addEventListener("click", e => {
    const a = e.target.closest("[data-reel], [data-type], [data-plan], [data-clear-filters], a[href='#guides']");
    if (!a) return;
    if (a.dataset.type !== undefined) { state.type = a.dataset.type; render(true); return; }
    if (a.dataset.clearFilters !== undefined) {
      state.topic = ""; state.who = "";
      document.getElementById("topic").value = ""; document.getElementById("who").value = "";
      render(true); return;
    }
    if (a.dataset.plan !== undefined) { state.plan = a.dataset.plan; store.set("plan", state.plan); render(true); return; }
    e.preventDefault();
    if (a.dataset.reel) {
      state.tab = "reels"; state.q = ""; state.topic = ""; state.who = "";
      if (state.hideDone && done.has("v:" + a.dataset.reel)) { state.hideDone = false; store.set("hideDone", false); }
      document.getElementById("q").value = ""; hide.checked = state.hideDone;
      topics(); render(false);
      const el = document.getElementById("reel-" + a.dataset.reel);
      if (el) {
        el.querySelector("details").open = true;
        const bar = document.querySelector(".controls");
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - (bar ? bar.offsetHeight : 0) - 8);
      }
    } else {
      state.tab = "guides"; render(false); window.scrollTo(0, 0);
    }
    setHash(state.tab);
  });

  header(); topics(); render(false);
})();
