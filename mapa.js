// ═══════════════════════════════════════════════════════
// MAPA.JS — D3 Visualization Engine
// Masks of Nyarlathotep — Campaign Mental Map
// ═══════════════════════════════════════════════════════

const linkColors = {
  arc:      '#307888',   // chapter → character connections — ocean teal
  geo:      '#585028',   // geographic — sandstone/olive
  rel:      '#7a5818',   // relationships — bronze
  magic:    '#6020a0',   // magic / wards — violet
  conflict: '#901818',   // conflict — blood red
  goal:     '#906018',   // goals / plans — amber
  event:    '#782828',   // events — dark red
  lore:     '#582878',   // lore / mythos knowledge — purple
  history:  '#584838',   // historical connections — sepia
  clue:     '#a08820',   // handout → node connections — aged gold
};

// ── D3 Setup ─────────────────────────────────────────────
const svg       = d3.select('#graph');
const container = document.getElementById('graph-container');
const width     = () => container.clientWidth;
const height    = () => container.clientHeight;
const g         = svg.append('g');

// ── Legend ───────────────────────────────────────────────
(function buildLegend() {
  const strip = document.getElementById('legend-strip');
  const entries = [
    { label: 'Outer God',   color: '#cc2020' },
    { label: 'Chapter',     color: '#3a90b0' },
    { label: 'Cult',        color: '#8030a8' },
    { label: 'Carlyle Exp', color: '#b88828' },
    { label: 'Great Plan',  color: '#2828aa' },
    { label: 'Enemy',       color: '#b04820' },
    { label: 'Ally',        color: '#308050' },
    { label: 'Mythos',      color: '#7028a8' },
    { label: 'Location',    color: '#585020' },
    { label: 'Artifact',    color: '#704a18' },
    { label: 'Event',       color: '#782020' },
    { label: 'Handout',     color: '#a08820' },
  ];
  entries.forEach(e => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<div class="legend-dot" style="background:${e.color};border-color:${e.color}"></div>${e.label}`;
    strip.appendChild(item);
  });
})();

// ── Zoom ─────────────────────────────────────────────────
const zoom = d3.zoom()
  .scaleExtent([0.1, 3])
  .on('zoom', e => g.attr('transform', e.transform));
svg.call(zoom);

// ── Arrow markers ────────────────────────────────────────
const defs = svg.append('defs');
Object.entries(linkColors).forEach(([type, color]) => {
  defs.append('marker')
    .attr('id',          `arrow-${type}`)
    .attr('viewBox',     '0 -4 8 8')
    .attr('refX',        20)
    .attr('refY',        0)
    .attr('markerWidth', 4)
    .attr('markerHeight',4)
    .attr('orient',      'auto')
    .append('path')
    .attr('d',       'M0,-4L8,0L0,4')
    .attr('fill',    color)
    .attr('opacity', 0.55);
});

// ── Assign group properties to nodes ─────────────────────
const nodeMap = {};
nodes.forEach(n => {
  const grp = GROUPS[n.group] || GROUPS.EVENT;
  n.r      = grp.r;
  n.color  = grp.color;
  n.stroke = grp.stroke;
  nodeMap[n.id] = n;
});

// ── Force simulation ─────────────────────────────────────
const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
    if (d.type === 'geo')     return 85;
    if (d.type === 'arc')     return 140;
    if (d.type === 'goal')    return 130;
    if (d.type === 'lore')    return 110;
    if (d.type === 'rel')     return 100;
    if (d.type === 'history') return 115;
    if (d.type === 'event')   return 120;
    return 95;
  }).strength(0.35))
  .force('charge', d3.forceManyBody().strength(d => {
    if (d.group === 'CENTER')  return -1400;
    if (d.group === 'CHAPTER') return -900;
    if (d.group === 'CULT')    return -600;
    if (d.group === 'PLAN')    return -550;
    if (d.group === 'CARLYLE') return -400;
    return -320;
  }))
  .force('center',    d3.forceCenter(width() / 2, height() / 2))
  .force('collision', d3.forceCollide(d => d.r + 20))
  .alphaDecay(0.018)
  .velocityDecay(0.28);

// ── Draw links ───────────────────────────────────────────
const linkSel = g.append('g').attr('class', 'links')
  .selectAll('line').data(links).join('line')
  .attr('class', 'link')
  .attr('stroke',     d => linkColors[d.type] || '#5a4a30')
  .attr('marker-end', d => `url(#arrow-${d.type})`);

// ── Draw nodes ───────────────────────────────────────────
const nodeSel = g.append('g').attr('class', 'nodes')
  .selectAll('g').data(nodes).join('g')
  .attr('class', d =>
    `node ${d.group === 'CENTER'  ? 'center-node'   : ''} ` +
          `${d.group === 'CHAPTER'? 'category-node' : ''}`
  )
  .call(d3.drag()
    .on('start', (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
    .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
    .on('end',   (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
  );

nodeSel.append('circle')
  .attr('r',            d => d.r)
  .attr('fill',         d => d.color)
  .attr('stroke',       d => d.stroke)
  .attr('stroke-width', 1.5);

// Multi-line labels with dynamic sizing
nodeSel.each(function(d) {
  const el    = d3.select(this);
  const r     = d.r;
  const fs    = r * 0.36;
  const lh    = fs * 1.15;
  const mw    = r * 1.7;
  const isCat = d.group === 'CENTER' || d.group === 'CHAPTER';
  const ff    = isCat ? "'Cinzel', serif" : "'Crimson Pro', serif";

  const words = d.label.split(' ');
  let lines = [], cur = [];
  const tmp = el.append('text').attr('font-size', fs).attr('font-family', ff).style('visibility', 'hidden');

  words.forEach(w => {
    cur.push(w);
    tmp.text(cur.join(' '));
    if (tmp.node().getComputedTextLength() > mw && cur.length > 1) {
      cur.pop();
      lines.push(cur.join(' '));
      cur = [w];
    }
  });
  if (cur.length) lines.push(cur.join(' '));
  tmp.remove();

  const totalH = (lines.length - 1) * lh;
  lines.forEach((line, i) => {
    el.append('text')
      .attr('y', i * lh - totalH / 2)
      .attr('font-size',         fs)
      .attr('font-family',       ff)
      .attr('fill',              d.group === 'CENTER' ? '#dd3030' : isCat ? '#e8d8a8' : '#d0c080')
      .attr('font-weight',       isCat ? '600' : '400')
      .attr('text-anchor',       'middle')
      .attr('dominant-baseline', 'central')
      .attr('pointer-events',    'none')
      .attr('user-select',       'none')
      .text(line);
  });
});

// ── Tick ─────────────────────────────────────────────────
simulation.on('tick', () => {
  linkSel
    .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
  nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
});

// ── Tooltip ──────────────────────────────────────────────
const tooltip = document.getElementById('tooltip');
const ttName  = document.getElementById('tt-name');
const ttDesc  = document.getElementById('tt-desc');

if (!('ontouchstart' in window)) {
  nodeSel
    .on('mouseenter', (e, d) => {
      ttName.textContent = d.label;
      ttDesc.textContent = d.type;
      tooltip.classList.add('visible');
    })
    .on('mousemove', e => {
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top  = (e.clientY - 8)  + 'px';
    })
    .on('mouseleave', () => tooltip.classList.remove('visible'));
}

// ── Detail Panel ─────────────────────────────────────────
const panel  = document.getElementById('detail-panel');
const pType  = document.getElementById('p-type');
const pName  = document.getElementById('p-name');
const pDesc  = document.getElementById('p-desc');
const pConns = document.getElementById('p-connections');
const pStar  = document.getElementById('p-star');
let selectedNode = null;

function showPanel(d) {
  pType.textContent = d.type;
  pName.textContent = d.label;
  pDesc.textContent = d.desc;
  pStar.innerHTML   = d.star ? `<div class="star-note">${d.star}</div>` : '';

  const conns = links
    .filter(l => l.source.id === d.id || l.target.id === d.id)
    .map(l => {
      const fromSrc = l.source.id === d.id;
      return { node: fromSrc ? l.target : l.source, label: l.label, dir: fromSrc ? '→' : '←' };
    });

  pConns.innerHTML = '';
  conns.forEach(c => {
    const div = document.createElement('div');
    div.className = 'conn-item';
    div.style.borderLeftColor = c.node.stroke;
    div.innerHTML = `
      <div class="conn-dot" style="background:${c.node.color};border-color:${c.node.stroke}"></div>
      <div>
        <div class="conn-name">${c.node.label}</div>
        ${c.label ? `<div class="conn-rel">${c.dir} ${c.label}</div>` : ''}
      </div>`;
    div.addEventListener('click', () => { if (c.node) selectNode(c.node); });
    pConns.appendChild(div);
  });

  panel.classList.remove('hidden');
}

function selectNode(d) {
  selectedNode = d;
  showPanel(d);
  const connIds = new Set([d.id]);
  links.forEach(l => {
    if (l.source.id === d.id) connIds.add(l.target.id);
    if (l.target.id === d.id) connIds.add(l.source.id);
  });
  nodeSel
    .classed('selected', nd => nd.id === d.id)
    .classed('faded',    nd => !connIds.has(nd.id));
  linkSel
    .classed('highlighted', l => l.source.id === d.id || l.target.id === d.id)
    .classed('faded',       l => l.source.id !== d.id && l.target.id !== d.id);
}

function clearSelection() {
  selectedNode = null;
  nodeSel.classed('selected faded', false);
  linkSel.classed('highlighted faded', false);
  panel.classList.add('hidden');
}

nodeSel.on('click', (e, d) => {
  e.stopPropagation();
  if (selectedNode && selectedNode.id === d.id) clearSelection();
  else selectNode(d);
});

svg.on('click', clearSelection);
document.getElementById('panel-close').addEventListener('click', clearSelection);

// ── Zoom controls ─────────────────────────────────────────
document.getElementById('btn-zoom-in').addEventListener('click',
  () => svg.transition().duration(300).call(zoom.scaleBy, 1.4));
document.getElementById('btn-zoom-out').addEventListener('click',
  () => svg.transition().duration(300).call(zoom.scaleBy, 0.7));

function resetZoom(animate) {
  const t = d3.zoomIdentity
    .translate(width() / 2, height() / 2)
    .scale(0.65)
    .translate(-width() / 2, -height() / 2);
  (animate ? svg.transition().duration(500) : svg).call(zoom.transform, t);
}
document.getElementById('btn-reset').addEventListener('click', () => resetZoom(true));

// ── Search ────────────────────────────────────────────────
const searchInput = document.getElementById('search-input');
let searchTO;
const isMobile = 'ontouchstart' in window;

searchInput.addEventListener('input', e => {
  clearTimeout(searchTO);
  searchTO = setTimeout(() => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      nodeSel.classed('selected faded', false);
      linkSel.classed('highlighted faded', false);
      panel.classList.add('hidden');
      return;
    }
    const hits = new Set();
    nodes.forEach(n => {
      if (n.id.toLowerCase().includes(q) || n.label.toLowerCase().includes(q)) hits.add(n.id);
    });
    if (hits.size) {
      nodeSel.classed('selected', n => hits.has(n.id)).classed('faded', n => !hits.has(n.id));
      linkSel.classed('highlighted', false).classed('faded', false);
      const exact = nodes.find(n => n.label.toLowerCase() === q || n.id.toLowerCase() === q);
      if (exact) selectNode(exact);
    } else {
      nodeSel.classed('selected', false).classed('faded', true);
      linkSel.classed('highlighted', false).classed('faded', true);
    }
  }, isMobile ? 300 : 150);
});

if (isMobile) {
  searchInput.addEventListener('focus', () =>
    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  document.querySelector('.controls').addEventListener('touchstart',
    e => e.stopPropagation(), { passive: false });
}

// ── Summary Panel ─────────────────────────────────────────
const summaryPanel   = document.getElementById('summary-panel');
const summaryContent = document.getElementById('summary-content');
const btnSummaries   = document.getElementById('btn-summaries');
const summaryClose   = document.getElementById('summary-close');

function loadSummaries() {
  summaryContent.innerHTML = chapterSummaries.map(ch => `
    <div class="chapter-item">
      <div class="chapter-title">
        <span>${ch.title}</span>
        <span class="chapter-toggle">▼</span>
      </div>
      <div class="chapter-text collapsed">${ch.summary}</div>
    </div>`).join('');

  document.querySelectorAll('.chapter-item').forEach(item => {
    const title  = item.querySelector('.chapter-title');
    const text   = item.querySelector('.chapter-text');
    const toggle = item.querySelector('.chapter-toggle');
    title.addEventListener('click', () => {
      text.classList.toggle('collapsed');
      toggle.classList.toggle('expanded');
    });
  });
}

function toggleSummaryPanel() {
  summaryPanel.classList.toggle('visible');
  if (summaryPanel.classList.contains('visible') && summaryContent.innerHTML === '') {
    loadSummaries();
  }
}

btnSummaries.addEventListener('click', toggleSummaryPanel);
summaryClose.addEventListener('click', () => summaryPanel.classList.remove('visible'));

// ── Handout Toggle ────────────────────────────────────────
const btnHandouts = document.getElementById('btn-handouts');
let handoutsVisible = true;

function setHandoutsVisible(show) {
  handoutsVisible = show;
  nodeSel.each(function(d) {
    if (d.group === 'HANDOUT') d3.select(this).style('display', show ? null : 'none');
  });
  linkSel.each(function(d) {
    const srcHO = (d.source.group === 'HANDOUT');
    const tgtHO = (d.target.group === 'HANDOUT');
    if (srcHO || tgtHO) d3.select(this).style('display', show ? null : 'none');
  });
  btnHandouts.style.opacity = show ? '1' : '0.45';
  btnHandouts.title = show ? 'Hide Handouts' : 'Show Handouts';
}

btnHandouts.addEventListener('click', () => setHandoutsVisible(!handoutsVisible));

// ── Initial state ─────────────────────────────────────────
setTimeout(() => resetZoom(false), 120);

window.addEventListener('resize', () => {
  simulation.force('center', d3.forceCenter(width() / 2, height() / 2));
  simulation.alpha(0.1).restart();
});
