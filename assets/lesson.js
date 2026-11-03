// 講義閱讀器：lesson.html?id=lesson-04
// 讀 lessons/<id>.md（Marp 格式原檔），同一份內容提供「閱讀模式」與「簡報模式」。

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Marp 解析 ----------
// 支援：開頭 YAML front matter（header / footer）、以 --- 分頁（略過程式碼區塊內的 ---）、
// <!-- _class: lead --> 封面頁、移除 <style> 區塊與其他 HTML 註解。
function parseMarp(src) {
  src = src.replace(/\r\n?/g, '\n');
  const meta = {};
  const fm = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (fm) {
    for (const line of fm[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    }
    src = src.slice(fm[0].length);
  }
  src = src.replace(/<style[\s\S]*?<\/style>/gi, '');

  const chunks = [];
  let cur = [];
  let fence = false;
  for (const line of src.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (!fence && /^---\s*$/.test(line)) { chunks.push(cur.join('\n')); cur = []; continue; }
    cur.push(line);
  }
  chunks.push(cur.join('\n'));

  const slides = chunks
    .map(s => ({
      lead: /<!--\s*_class:\s*lead\s*-->/.test(s),
      body: s.replace(/<!--[\s\S]*?-->/g, '').trim(),
    }))
    .filter(s => s.body);
  return { meta, slides };
}

// ---------- Markdown → HTML ----------
function renderMd(md) {
  const el = document.createElement('div');
  el.className = 'md';
  el.innerHTML = marked.parse(md, { gfm: true });
  el.querySelectorAll('pre code').forEach(code => {
    if (!/language-/.test(code.className)) code.classList.add('language-plaintext');
    hljs.highlightElement(code);
  });
  el.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
  return el;
}

// 「自我檢查」清單可以勾選，狀態存在瀏覽器（localStorage），每堂分開記。
function enableChecklists(root, lessonId) {
  root.querySelectorAll('li input[type="checkbox"]').forEach((box, i) => {
    const key = `c-lessons:${lessonId}:check:${i}`;
    box.disabled = false;
    box.closest('li').classList.add('task');
    box.checked = localStorage.getItem(key) === '1';
    box.addEventListener('change', () => localStorage.setItem(key, box.checked ? '1' : '0'));
  });
}

function lessonLabel(lesson) {
  return /^E/i.test(lesson.no) ? `番外 ${lesson.no}` : `第 ${lesson.no} 堂`;
}

// ---------- 主程式 ----------
async function main() {
  const id = new URLSearchParams(location.search).get('id');
  const fail = msg => { document.getElementById('reader').innerHTML = `<div class="error">${msg}</div>`; };

  let data, src;
  try {
    data = await (await fetch('lessons.json', { cache: 'no-cache' })).json();
  } catch (e) {
    return fail('讀不到 lessons.json。若是直接雙擊開檔，請改用本機伺服器預覽（見 README）。');
  }
  const order = data.modules.flatMap(m => data.lessons.filter(l => l.module === m.id));
  const idx = order.findIndex(l => l.id === id);
  if (idx < 0) return fail(`找不到這份講義（id=${esc(id)}）。<a href="index.html">回講義庫</a>`);
  const lesson = order[idx];
  const mod = data.modules.find(m => m.id === lesson.module);

  try {
    const res = await fetch(`lessons/${lesson.id}.md`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(res.status);
    src = await res.text();
  } catch (e) {
    return fail(`讀不到 lessons/${esc(lesson.id)}.md。`);
  }

  const { meta, slides } = parseMarp(src);
  document.body.dataset.color = mod.color;
  document.title = `${lessonLabel(lesson)} ${lesson.title}｜${data.site.title}`;
  document.getElementById('tag').textContent = `${mod.name}・${lessonLabel(lesson)}`;
  document.getElementById('title').textContent = lesson.title;

  // 閱讀模式
  const reader = document.getElementById('reader');
  reader.innerHTML = '';
  slides.forEach((s, i) => {
    const page = document.createElement('section');
    page.className = 'page' + (s.lead ? ' lead' : '');
    page.id = `p${i + 1}`;
    page.innerHTML = `<a class="pno" href="#p${i + 1}">p.${i + 1}</a>`;
    page.appendChild(renderMd(s.body));
    reader.appendChild(page);
  });
  enableChecklists(reader, lesson.id);

  // 上一堂／下一堂
  const prev = order[idx - 1], next = order[idx + 1];
  document.getElementById('lesson-nav').innerHTML =
    (prev ? `<a class="prev" href="lesson.html?id=${encodeURIComponent(prev.id)}"><small>← 上一份</small>${esc(lessonLabel(prev))} ${esc(prev.title)}</a>` : '<span></span>') +
    (next ? `<a class="next" href="lesson.html?id=${encodeURIComponent(next.id)}"><small>下一份 →</small>${esc(lessonLabel(next))} ${esc(next.title)}</a>` : '<span></span>');

  // 簡報模式
  const stage = document.getElementById('stage');
  const count = document.getElementById('count');
  const progress = document.getElementById('progress');
  const toggle = document.getElementById('mode');
  let cur = 0;

  function show(i) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    const s = slides[cur];
    stage.className = 'stage' + (s.lead ? ' lead' : '');
    stage.innerHTML = '';
    if (meta.header && !s.lead) stage.insertAdjacentHTML('beforeend', `<span class="corner top">${esc(meta.header)}</span>`);
    stage.appendChild(renderMd(s.body));
    if (meta.footer) stage.insertAdjacentHTML('beforeend', `<span class="corner left">${esc(meta.footer)}</span>`);
    stage.insertAdjacentHTML('beforeend', `<span class="corner right">${cur + 1}</span>`);
    enableChecklists(stage, lesson.id);
    count.textContent = `${cur + 1} / ${slides.length}`;
    progress.style.width = `${((cur + 1) / slides.length) * 100}%`;
    history.replaceState(null, '', `#p${cur + 1}`);
  }

  function setMode(present) {
    document.body.classList.toggle('present', present);
    toggle.setAttribute('aria-pressed', String(present));
    toggle.textContent = present ? '回到閱讀' : '簡報模式';
    if (present) {
      const m = location.hash.match(/^#p(\d+)$/);
      show(m ? Number(m[1]) - 1 : 0);
    } else {
      document.getElementById(`p${cur + 1}`)?.scrollIntoView({ behavior: 'instant' });
    }
  }

  toggle.addEventListener('click', () => setMode(!document.body.classList.contains('present')));
  document.getElementById('prev').addEventListener('click', () => show(cur - 1));
  document.getElementById('next').addEventListener('click', () => show(cur + 1));
  document.getElementById('full').addEventListener('click', () => {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  });
  document.addEventListener('keydown', e => {
    if (!document.body.classList.contains('present')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); show(cur + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); show(cur - 1); }
    else if (e.key === 'f' || e.key === 'F') document.getElementById('full').click();
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(slides.length - 1);
    else if (e.key === 'Escape' && !document.fullscreenElement) setMode(false);
  });

  // 網址帶 #p5 時，閱讀模式捲到該頁
  const m = location.hash.match(/^#p(\d+)$/);
  if (m) { cur = Number(m[1]) - 1; document.getElementById(`p${m[1]}`)?.scrollIntoView({ behavior: 'instant' }); }
}

main();
