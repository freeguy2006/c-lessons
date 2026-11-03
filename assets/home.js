// 首頁：讀 lessons.json，依模組畫出講義卡片。
// 首頁不寫死任何課程；新增講義只要改 lessons.json。

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// 摘要允許用 `code` 標示程式碼
const inlineCode = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');

function lessonLabel(lesson) {
  return /^E/i.test(lesson.no) ? `番外 ${lesson.no}` : `第 ${lesson.no} 堂`;
}

async function main() {
  const root = document.getElementById('modules');
  let data;
  try {
    data = await (await fetch('lessons.json', { cache: 'no-cache' })).json();
  } catch (e) {
    root.innerHTML = '<div class="error">讀不到 lessons.json。若是直接雙擊開檔，請改用本機伺服器預覽（見 README）。</div>';
    return;
  }

  document.getElementById('tagline').textContent = data.site.tagline;

  root.innerHTML = data.modules.map(mod => {
    const lessons = data.lessons.filter(l => l.module === mod.id);
    const cards = lessons.map(l => `
      <a class="card" href="lesson.html?id=${encodeURIComponent(l.id)}">
        <span class="no">${esc(lessonLabel(l))}</span>
        <h3>${esc(l.title)}</h3>
        <p>${inlineCode(l.summary)}</p>
        <span class="go">開始閱讀 →</span>
      </a>`).join('');
    const soon = lessons.length ? '' : `<div class="card soon">這個模組的講義整理中，敬請期待</div>`;
    return `
      <section class="module" data-color="${esc(mod.color)}" id="${esc(mod.id)}">
        <div class="module-head">
          <h2>${esc(mod.name)}</h2>
          <span class="range">${esc(mod.range)}</span>
          <span class="hint">已上架 ${lessons.length} 份</span>
        </div>
        <p>${esc(mod.summary)}</p>
        <div class="cards">${cards}${soon}</div>
      </section>`;
  }).join('');
}

main();
