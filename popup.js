// SVG Presets & Icons
const SVG_ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.21c-.24.67-1.39 1.27-1.92 1.34-.47.06-.92.1-3 .76-2.5.83-4.42-.81-5.12-1.54-.08-.08-.6-1.01-1.06-2.58-.46-1.57-.02-2.39.16-2.63.18-.24.51-.36.67-.36.16 0 .32 0 .46.01.15.01.35-.06.55.43.2.49.69 1.68.75 1.8.06.12.1.26.02.43-.08.17-.18.27-.3.41-.12.14-.26.31-.37.42-.12.12-.25.25-.1.51.15.26.68 1.12 1.46 1.82.99.91 1.83 1.19 2.09 1.32.26.13.41.11.56-.06.15-.17.65-.76.83-1.02.18-.26.36-.22.61-.13.25.09 1.57.74 1.84.87.27.13.45.2.51.31.07.11.07.65-.17 1.32z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V13.4h6.887c-.648 2.41-2.519 4.13-5.136 4.13A5.71 5.71 0 0 1 8.24 11.82a5.71 5.71 0 0 1 5.751-5.715c1.448 0 2.642.525 3.57 1.378l2.44-2.44C18.423 3.535 15.968 2.68 13.99 2.68 8.847 2.68 4.68 6.848 4.68 11.99s4.167 9.31 9.31 9.31c5.378 0 8.947-3.782 8.947-9.112 0-.618-.055-1.217-.16-1.802h-10.536z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
};

const SVG_EDIT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
const SVG_TRASH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;
const SVG_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const SVG_PIN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.89a2 2 0 0 1-1.11-1.79V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z"/></svg>`;

// Storage abstraction (with localStorage fallback for browser testing)
const storage = {
  get: (key, callback) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get([key], (result) => {
        callback(result[key]);
      });
    } else {
      const data = localStorage.getItem(key);
      callback(data ? JSON.parse(data) : null);
    }
  },
  set: (key, value, callback) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ [key]: value }, () => {
        if (callback) callback();
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      if (callback) callback();
    }
  }
};

const openUrl = (url) => {
  if (!url) return;
  let targetUrl = url.trim();
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = 'https://' + targetUrl;
  }
  
  if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
    chrome.tabs.create({ url: targetUrl });
  } else {
    window.open(targetUrl, '_blank');
  }
};

const getDomain = (url) => {
  if (!url) return null;
  let targetUrl = url.trim();
  if (!targetUrl) return null;
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = 'http://' + targetUrl;
  }
  try {
    const parsed = new URL(targetUrl);
    const host = parsed.hostname;
    if (host && host.includes('.') && host.length > 3) {
      return host;
    }
    return null;
  } catch (e) {
    return null;
  }
};

// Default Sample Data
const DEFAULT_ENTRIES = [
  {
    id: "d1",
    name: "LinkedIn",
    value: "linkedin.com/in/usuario",
    url: "https://linkedin.com",
    color: "#0A66C2",
    icon: { type: "preset", value: "linkedin" }
  },
  {
    id: "d2",
    name: "GitHub",
    value: "github.com/usuario",
    url: "https://github.com",
    color: "#2ea44f",
    icon: { type: "preset", value: "github" }
  },
  {
    id: "d3",
    name: "CPF",
    value: "123.456.789-00",
    url: "",
    color: "#6C63FF",
    icon: { type: "preset", value: "card" }
  }
];

// App State
let entries = [];
let selectedIcon = { type: 'preset', value: 'link' };
let selectedTag = 'all';
let editingId = null;
let clickTimer = null;
const CLICK_DELAY = 250;
let deleteTimeouts = {};

// DOM Elements
const cardsList = document.getElementById('cardsList');
const emptyState = document.getElementById('emptyState');
const noResults = document.getElementById('noResults');
const searchTermSpan = document.getElementById('searchTerm');
const searchInput = document.getElementById('search');
const btnAdd = document.getElementById('btnAdd');
const btnAddEmpty = document.getElementById('btnAddEmpty');

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const btnClose = document.getElementById('btnClose');
const btnCancel = document.getElementById('btnCancel');
const btnSave = document.getElementById('btnSave');

const settingsModalOverlay = document.getElementById('settingsModalOverlay');
const btnSettings = document.getElementById('btnSettings');
const btnSettingsClose = document.getElementById('btnSettingsClose');
const btnExport = document.getElementById('btnExport');
const importFile = document.getElementById('importFile');

const fieldName = document.getElementById('fieldName');
const fieldValue = document.getElementById('fieldValue');
const fieldUrl = document.getElementById('fieldUrl');
const fieldTag = document.getElementById('fieldTag');
const fieldColor = document.getElementById('fieldColor');

const iconPreviewBtn = document.getElementById('iconPreviewBtn');
const iconPreview = document.getElementById('iconPreview');
const iconPickerPanel = document.getElementById('iconPickerPanel');
const presetGrid = document.getElementById('presetGrid');
const emojiInput = document.getElementById('emojiInput');
const imageUpload = document.getElementById('imageUpload');
const colorDots = document.querySelectorAll('.color-dot');
const toast = document.getElementById('toast');

// Image Compressor (fits in base64 without storage bloat)
function compressImage(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 80;
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const dataUrl = canvas.toDataURL('image/png');
      callback(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Show Toast feedback
function showToast(message, isSuccess = true) {
  const successIcon = `<span class="toast-success-icon">${SVG_CHECK}</span>`;
  toast.innerHTML = (isSuccess ? successIcon : '') + message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Copy to Clipboard Action
function copyValue(value, label) {
  navigator.clipboard.writeText(value)
    .then(() => {
      showToast(`Copiado: "${label}"`);
    })
    .catch(err => {
      console.error('Falha ao copiar:', err);
      // Fallback copy logic
      const el = document.createElement('textarea');
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      showToast(`Copiado: "${label}"`);
    });
}

// Render entries to popup list
function render() {
  const query = searchInput.value.toLowerCase().trim();
  cardsList.innerHTML = '';
  
  const filtered = entries.filter(entry => {
    const queryMatch = entry.name.toLowerCase().includes(query) || 
                       entry.value.toLowerCase().includes(query);
    const tagMatch = selectedTag === 'all' || (entry.tag && entry.tag.trim() === selectedTag);
    return queryMatch && tagMatch;
  });

  filtered.sort((a, b) => {
    const aPinned = a.pinned ? 1 : 0;
    const bPinned = b.pinned ? 1 : 0;
    return bPinned - aPinned;
  });

  if (entries.length === 0) {
    emptyState.style.display = 'flex';
    noResults.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  
  if (filtered.length === 0) {
    searchTermSpan.innerText = query;
    noResults.style.display = 'flex';
    return;
  }
  
  noResults.style.display = 'none';
  
  filtered.forEach(entry => {
    const card = document.createElement('div');
    card.className = `card${entry.pinned ? ' pinned' : ''}`;
    card.style.setProperty('--accent-color', entry.color || '#6c63ff');
    card.setAttribute('data-id', entry.id);
    
    let iconHtml = '';
    if (entry.icon.type === 'preset') {
      iconHtml = SVG_ICONS[entry.icon.value] || SVG_ICONS['link'];
    } else if (entry.icon.type === 'emoji') {
      iconHtml = `<span>${entry.icon.value}</span>`;
    } else if (entry.icon.type === 'image') {
      iconHtml = `<img src="${entry.icon.value}" alt="">`;
    } else if (entry.icon.type === 'favicon') {
      iconHtml = `<img src="https://www.google.com/s2/favicons?sz=64&domain=${entry.icon.value}" alt="">`;
    }
    
    card.innerHTML = `
      ${entry.pinned ? `<div class="card-pinned-badge" title="Fixado no topo">${SVG_PIN}</div>` : ''}
      <div class="card-icon-wrapper" title="Clique para copiar">
        <div class="card-icon">${iconHtml}</div>
      </div>
      <div class="card-content" title="1 clique copia, 2 cliques abrem link">
        <div class="card-name">${entry.name}${entry.tag ? `<span class="card-tag">${entry.tag}</span>` : ''}</div>
        <div class="card-value-wrapper">
          <span class="card-value">${entry.value}</span>
          <span class="copy-badge">Copiado</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-card-action btn-pin${entry.pinned ? ' active' : ''}" title="${entry.pinned ? 'Desafixar do topo' : 'Fixar no topo'}">
          ${SVG_PIN}
        </button>
        <button class="btn-card-action btn-edit" title="Editar">
          ${SVG_EDIT}
        </button>
        <button class="btn-card-action btn-delete" title="Excluir">
          ${SVG_TRASH}
        </button>
      </div>
    `;
    
    // Event listeners
    const iconWrap = card.querySelector('.card-icon-wrapper');
    const contentWrap = card.querySelector('.card-content');
    const pinBtn = card.querySelector('.btn-pin');
    const editBtn = card.querySelector('.btn-edit');
    const deleteBtn = card.querySelector('.btn-delete');
    
    // Pin/unpin entry
    pinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePin(entry.id);
    });
    
    // Clicking on icon directly COPIES value
    iconWrap.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerCopyVisual(card, entry.value, entry.name);
    });
    
    // Clicking card content handles single/double click
    contentWrap.addEventListener('click', (e) => {
      e.stopPropagation();
      if (clickTimer === null) {
        clickTimer = setTimeout(() => {
          clickTimer = null;
          triggerCopyVisual(card, entry.value, entry.name);
        }, CLICK_DELAY);
      } else {
        clearTimeout(clickTimer);
        clickTimer = null;
        if (entry.url) {
          openUrl(entry.url);
        } else {
          // If no link, copy instead
          triggerCopyVisual(card, entry.value, entry.name);
        }
      }
    });
    
    // Edit entry
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(entry.id);
    });
    
    // Double tap confirm delete logic
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const id = entry.id;
      if (deleteTimeouts[id]) {
        // Confirmed delete
        clearTimeout(deleteTimeouts[id]);
        delete deleteTimeouts[id];
        deleteEntry(id);
      } else {
        // First click: arm confirmation
        // Clear any other armed buttons first
        document.querySelectorAll('.btn-delete.confirm').forEach(btn => {
          btn.classList.remove('confirm');
          btn.innerHTML = SVG_TRASH;
          const parentId = btn.closest('.card').getAttribute('data-id');
          if (deleteTimeouts[parentId]) {
            clearTimeout(deleteTimeouts[parentId]);
            delete deleteTimeouts[parentId];
          }
        });
        
        deleteBtn.classList.add('confirm');
        deleteBtn.innerHTML = SVG_CHECK;
        
        deleteTimeouts[id] = setTimeout(() => {
          deleteBtn.classList.remove('confirm');
          deleteBtn.innerHTML = SVG_TRASH;
          delete deleteTimeouts[id];
        }, 3000); // 3 seconds to confirm
      }
    });
    
    cardsList.appendChild(card);
  });
}

function triggerCopyVisual(cardElement, value, name) {
  cardElement.classList.add('copied');
  copyValue(value, name);
  setTimeout(() => {
    cardElement.classList.remove('copied');
  }, 1200);
}

// Delete Entry
function deleteEntry(id) {
  entries = entries.filter(e => e.id !== id);
  storage.set('entries', entries, () => {
    renderTagsFilter();
    render();
    showToast('Entrada removida');
  });
}

function togglePin(id) {
  entries = entries.map(entry => {
    if (entry.id === id) {
      return { ...entry, pinned: !entry.pinned };
    }
    return entry;
  });
  storage.set('entries', entries, () => {
    renderTagsFilter();
    render();
  });
}

function renderTagsFilter() {
  const tagsFilterWrap = document.getElementById('tagsFilterWrap');
  if (!tagsFilterWrap) return;
  
  const tags = new Set();
  entries.forEach(entry => {
    if (entry.tag && entry.tag.trim()) {
      tags.add(entry.tag.trim());
    }
  });
  
  if (tags.size === 0) {
    tagsFilterWrap.style.display = 'none';
    selectedTag = 'all';
    return;
  }
  
  tagsFilterWrap.style.display = 'flex';
  tagsFilterWrap.innerHTML = '';
  
  const allPill = document.createElement('button');
  allPill.className = `tag-pill${selectedTag === 'all' ? ' active' : ''}`;
  allPill.innerText = 'Tudo';
  allPill.addEventListener('click', () => {
    selectedTag = 'all';
    renderTagsFilter();
    render();
  });
  tagsFilterWrap.appendChild(allPill);
  
  tags.forEach(tag => {
    const pill = document.createElement('button');
    pill.className = `tag-pill${selectedTag === tag ? ' active' : ''}`;
    pill.innerText = tag;
    pill.addEventListener('click', () => {
      selectedTag = selectedTag === tag ? 'all' : tag;
      renderTagsFilter();
      render();
    });
    tagsFilterWrap.appendChild(pill);
  });
}

function openSettingsModal() {
  settingsModalOverlay.classList.add('active');
}

function closeSettingsModal() {
  settingsModalOverlay.classList.remove('active');
}

function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entries, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "infovault-backup.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Backup exportado!");
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const importedEntries = JSON.parse(evt.target.result);
      if (!Array.isArray(importedEntries)) {
        throw new Error("Backup deve ser uma lista de entradas.");
      }
      
      const isValid = importedEntries.every(item => 
        item && typeof item === 'object' && item.id && item.name && item.value && item.color && item.icon
      );
      
      if (!isValid) {
        throw new Error("Formato inválido em algumas entradas.");
      }
      
      entries = importedEntries;
      storage.set('entries', entries, () => {
        closeSettingsModal();
        renderTagsFilter();
        render();
        showToast("Backup importado com sucesso!");
      });
    } catch (err) {
      showToast(err.message || "Erro ao ler backup", false);
    }
  };
  reader.readAsText(file);
  importFile.value = '';
}

// Preset Picker Construction
function initPresetGrid() {
  presetGrid.innerHTML = '';
  Object.keys(SVG_ICONS).forEach(key => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-btn';
    btn.setAttribute('data-preset', key);
    btn.innerHTML = SVG_ICONS[key];
    btn.title = key.toUpperCase();
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedIcon = { type: 'preset', value: key };
      emojiInput.value = ''; // clear emoji
      updatePreview();
      iconPickerPanel.classList.remove('active');
    });
    
    presetGrid.appendChild(btn);
  });
}

function updatePreview() {
  if (selectedIcon.type === 'preset') {
    iconPreview.innerHTML = SVG_ICONS[selectedIcon.value] || SVG_ICONS['link'];
  } else if (selectedIcon.type === 'emoji') {
    iconPreview.innerHTML = `<span>${selectedIcon.value}</span>`;
  } else if (selectedIcon.type === 'image') {
    iconPreview.innerHTML = `<img src="${selectedIcon.value}">`;
  } else if (selectedIcon.type === 'favicon') {
    iconPreview.innerHTML = `<img src="https://www.google.com/s2/favicons?sz=64&domain=${selectedIcon.value}">`;
  }
}

// Modal Toggle
function openModal(id = null) {
  editingId = id;
  iconPickerPanel.classList.remove('active');
  
  if (id) {
    // Edit Mode
    modalTitle.innerText = 'Editar entrada';
    const entry = entries.find(e => e.id === id);
    if (entry) {
      fieldName.value = entry.name;
      fieldValue.value = entry.value;
      fieldUrl.value = entry.url || '';
      fieldTag.value = entry.tag || '';
      fieldColor.value = entry.color || '#6c63ff';
      selectedIcon = { ...entry.icon };
      emojiInput.value = selectedIcon.type === 'emoji' ? selectedIcon.value : '';
    }
  } else {
    // Add Mode
    modalTitle.innerText = 'Nova entrada';
    fieldName.value = '';
    fieldValue.value = '';
    fieldUrl.value = '';
    fieldTag.value = '';
    fieldColor.value = '#6c63ff';
    selectedIcon = { type: 'preset', value: 'link' };
    emojiInput.value = '';
  }
  
  // Highlight active preset
  document.querySelectorAll('.preset-btn').forEach(b => {
    const key = b.getAttribute('data-preset');
    if (selectedIcon.type === 'preset' && selectedIcon.value === key) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  
  // Highlight active color preset
  updateColorDotSelection();
  updatePreview();
  modalOverlay.classList.add('active');
  
  // Focus name field
  setTimeout(() => fieldName.focus(), 150);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  editingId = null;
}

// Colors dot selector visual match
function updateColorDotSelection() {
  const currentColor = fieldColor.value.toLowerCase();
  colorDots.forEach(dot => {
    const colorAttr = dot.getAttribute('data-color').toLowerCase();
    if (colorAttr === currentColor) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Save Entry
function saveEntry() {
  const name = fieldName.value.trim();
  const value = fieldValue.value.trim();
  const url = fieldUrl.value.trim();
  const tag = fieldTag.value.trim();
  const color = fieldColor.value;
  
  if (!name || !value) {
    showToast('Nome e Valor são obrigatórios!', false);
    return;
  }
  
  const iconData = { ...selectedIcon };
  
  if (editingId) {
    // Edit existing
    entries = entries.map(entry => {
      if (entry.id === editingId) {
        return { ...entry, name, value, url, tag, color, icon: iconData };
      }
      return entry;
    });
  } else {
    // Create new
    const newEntry = {
      id: Date.now().toString(),
      name,
      value,
      url,
      tag,
      color,
      icon: iconData,
      pinned: false
    };
    entries.push(newEntry);
  }
  
  storage.set('entries', entries, () => {
    closeModal();
    renderTagsFilter();
    render();
    showToast(editingId ? 'Entrada atualizada' : 'Nova entrada adicionada');
  });
}

// Listeners & Bindings
function init() {
  initPresetGrid();
  
  // Load storage
  storage.get('entries', (savedEntries) => {
    if (savedEntries && Array.isArray(savedEntries)) {
      entries = savedEntries;
    } else {
      entries = [...DEFAULT_ENTRIES];
      storage.set('entries', entries);
    }
    renderTagsFilter();
    render();
  });
  
  // Search
  searchInput.addEventListener('input', render);
  
  // Open Add Modal
  btnAdd.addEventListener('click', () => openModal());
  btnAddEmpty.addEventListener('click', () => openModal());
  
  // Close Add Modal
  btnClose.addEventListener('click', closeModal);
  btnCancel.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  
  // Settings Modal Events
  btnSettings.addEventListener('click', openSettingsModal);
  btnSettingsClose.addEventListener('click', closeSettingsModal);
  settingsModalOverlay.addEventListener('click', (e) => {
    if (e.target === settingsModalOverlay) closeSettingsModal();
  });
  
  btnExport.addEventListener('click', exportData);
  importFile.addEventListener('change', importData);
  
  // Save Entry
  btnSave.addEventListener('click', saveEntry);
  
  // Show / Toggle icon picker
  iconPreviewBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    iconPickerPanel.classList.toggle('active');
  });
  
  document.addEventListener('click', (e) => {
    if (!iconPickerPanel.contains(e.target) && e.target !== iconPreviewBtn) {
      iconPickerPanel.classList.remove('active');
    }
  });
  
  // Custom Emoji Input
  emojiInput.addEventListener('input', () => {
    const val = emojiInput.value.trim();
    if (val) {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      selectedIcon = { type: 'emoji', value: val };
      updatePreview();
    } else {
      // Revert to link default if empty
      selectedIcon = { type: 'preset', value: 'link' };
      const defaultPreset = document.querySelector('.preset-btn[data-preset="link"]');
      if (defaultPreset) defaultPreset.classList.add('active');
      updatePreview();
    }
  });
  
  // Custom Image Upload
  imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      compressImage(file, (dataUrl) => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        emojiInput.value = '';
        selectedIcon = { type: 'image', value: dataUrl };
        updatePreview();
        iconPickerPanel.classList.remove('active');
      });
    }
  });
  
  fieldColor.addEventListener('input', updateColorDotSelection);
  
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const color = dot.getAttribute('data-color');
      fieldColor.value = color;
      updateColorDotSelection();
    });
  });

  // Auto-favicon detection when user types a URL
  fieldUrl.addEventListener('input', () => {
    const urlVal = fieldUrl.value.trim();
    const domain = getDomain(urlVal);
    
    if (selectedIcon.type === 'preset' && selectedIcon.value === 'link' && domain) {
      selectedIcon = { type: 'favicon', value: domain };
      updatePreview();
    } else if (selectedIcon.type === 'favicon') {
      if (domain) {
        selectedIcon.value = domain;
      } else {
        selectedIcon = { type: 'preset', value: 'link' };
        const defaultPreset = document.querySelector('.preset-btn[data-preset="link"]');
        if (defaultPreset) defaultPreset.classList.add('active');
      }
      updatePreview();
    }
  });
  
  // Prevent form submission on Enter
  const inputs = [fieldName, fieldValue, fieldUrl, fieldTag];
  inputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveEntry();
      }
    });
  });
}

// Run init on DOM loaded
document.addEventListener('DOMContentLoaded', init);
