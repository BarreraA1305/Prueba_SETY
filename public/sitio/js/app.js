/* ==========================================================================
   MOTOR COMPARTIDO PARA TODAS LAS PESTAÑAS (.html) Y BUSCADOR GLOBAL ("/")
   ========================================================================== */
(function () {
  const DATA = window.AGENDA_DATA;

  const PAGES = [
    { id: "inicio", file: "index.html", label: "Inicio", icon: "🏛️" },
    { id: "agenda", file: "agenda.html", label: "Agenda diaria", icon: "📅" },
    { id: "promocion", file: "promocion.html", label: "Material de promoción", icon: "📊" },
    { id: "economia", file: "economia.html", label: "Información económica", icon: "📈" },
    { id: "reuniones", file: "reuniones.html", label: "Reuniones y empresas", icon: "🤝" },
    { id: "documentos", file: "documentos.html", label: "Documentos", icon: "📁" },
    { id: "vuelos", file: "vuelos.html", label: "Vuelos · dos rutas", icon: "✈️" },
    { id: "hospedajes", file: "hospedajes.html", label: "Hospedajes", icon: "🏨" }
  ];

  const currentPageId = document.body.dataset.page || "inicio";
  const params = new URLSearchParams(window.location.search);

  let state = {
    selectedDayId: params.get("day") || (DATA.agenda[0] && DATA.agenda[0].id) || "",
    meetingFilter: ""
  };

  /* Compatibilidad por si alguien entra con hash antiguo (ej. index.html#agenda) */
  if (currentPageId === "inicio" && window.location.hash) {
    const hashTarget = window.location.hash.replace("#", "").trim();
    const found = PAGES.find(p => p.id === hashTarget && p.id !== "inicio");
    if (found) {
      window.location.replace(found.file);
      return;
    }
  }

  function buildShell() {
    const cfg = DATA.config;
    const currentPageObj = PAGES.find(p => p.id === currentPageId) || PAGES[0];
    document.title = `${currentPageObj.label} · ${cfg.missionFullTitle} | ${cfg.siteSuffix}`;

    const shellHTML = `
      <a href="#main" class="skip-link">Ir al contenido</a>

      <div class="app-shell">
        <aside class="sidebar" aria-label="Navegación principal">
          <div class="sidebar-brand">
            <a href="index.html" class="brand-logo-link" id="brandLogoContainer">
              <div class="brand-fallback">
                <div class="brand-emblem">${cfg.monogram}</div>
                <div class="brand-text-stack">
                  <span class="brand-eyebrow">${cfg.brandEyebrow}</span>
                  <span class="brand-org">${cfg.brandOrg}</span>
                </div>
              </div>
            </a>
            <div class="delegation-card">
              <span class="delegation-tag">${cfg.delegationEyebrow}</span>
              <div class="delegation-title">${cfg.missionShortTitle}</div>
              <span class="delegation-dates">${cfg.dateRange}</span>
            </div>
          </div>

          <nav class="sidebar-nav">
            ${PAGES.map(p => `
              <a href="${p.file}" class="nav-item ${p.id === currentPageId ? "active" : ""}">
                <span class="nav-icon">${p.icon}</span>
                <span>${p.label}</span>
              </a>
            `).join("")}
          </nav>

          <div class="sidebar-footer">
            <div class="meta-title">Guía de la misión</div>
            <div class="meta-version">Agenda institucional · ${cfg.versionTag}</div>
            <div class="inst-lines">${cfg.institutionLines.join("<br />")}</div>
          </div>
        </aside>

        <div class="main-wrapper">
          <header class="topbar">
            <div class="topbar-context">
              <span class="topbar-eyebrow">GUÍA DE LA DELEGACIÓN</span>
              <span class="topbar-title">${currentPageObj.label}</span>
            </div>

            <div class="topbar-actions">
              <button type="button" class="search-trigger" id="openSearchBtn" aria-label="Buscar en la misión">
                <span>🔍 Buscar en la misión</span>
                <kbd class="kbd-badge">/</kbd>
              </button>
              <div class="monogram-badge" title="${cfg.siteSuffix}">${cfg.monogram}</div>
            </div>
          </header>

          <main id="main" class="main-content" tabindex="-1"></main>

          <footer class="main-footer">
            <span>${cfg.siteSuffix} · ${cfg.missionFullTitle}</span>
            <span>Agenda ${cfg.versionTag} · Actualización: ${cfg.lastUpdated}</span>
          </footer>
        </div>
      </div>

      <nav class="mobile-nav" aria-label="Navegación móvil">
        <a href="index.html" class="mobile-nav-btn ${currentPageId === "inicio" ? "active" : ""}"><span>🏛️</span><span>Inicio</span></a>
        <a href="agenda.html" class="mobile-nav-btn ${currentPageId === "agenda" ? "active" : ""}"><span>📅</span><span>Agenda</span></a>
        <a href="promocion.html" class="mobile-nav-btn ${currentPageId === "promocion" ? "active" : ""}"><span>📊</span><span>Promoción</span></a>
        <button type="button" class="mobile-nav-btn" id="mobileMoreBtn"><span>☰</span><span>Más</span></button>
      </nav>

      <div class="mobile-more-drawer" id="mobileMoreDrawer">
        <div class="mobile-more-sheet">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <strong>Pestañas de la guía</strong>
            <button type="button" class="btn btn-outline" id="closeMoreBtn" style="padding:4px 10px;">Cerrar</button>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${PAGES.map(p => `
              <a href="${p.file}" class="nav-item ${p.id === currentPageId ? "active" : ""}">
                <span class="nav-icon">${p.icon}</span>
                <span>${p.label}</span>
              </a>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="modal-backdrop" id="searchModal" role="dialog" aria-modal="true" aria-labelledby="searchModalTitle">
        <div class="search-modal">
          <div class="search-modal-header">
            <span>🔍</span>
            <input
              type="search"
              id="globalSearchInput"
              class="search-modal-input"
              placeholder="Buscar empresa, actividad o documento"
              autocomplete="off"
            />
            <kbd class="kbd-badge">ESC</kbd>
          </div>
          <div class="search-results" id="searchResults">
            <div class="search-empty" id="searchModalTitle">
              Busca en toda la agenda, las empresas, los hoteles y los documentos.
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", shellHTML);

    /* Intentar cargar el logotipo oficial si existe */
    if (cfg.logoUrl) {
      const img = new Image();
      img.src = cfg.logoUrl;
      img.alt = cfg.logoAlt;
      img.className = "brand-logo-img";
      img.onload = () => {
        const box = document.getElementById("brandLogoContainer");
        if (box) {
          box.innerHTML = "";
          box.appendChild(img);
        }
      };
    }
  }

  function renderInicio() {
    const { inicio, config } = DATA;
    return `
      <section class="hero-banner">
        <span class="hero-kicker">${inicio.kicker}</span>
        <h1>${inicio.headline}</h1>
        <p>${inicio.summary}</p>
        <div class="hero-actions">
          <a href="agenda.html" class="btn btn-primary">📅 Consultar agenda diaria</a>
          <a href="reuniones.html" class="btn btn-outline">🤝 Ver reuniones y empresas</a>
          <a href="${config.pdfUrl}" target="_blank" rel="noopener" class="btn btn-outline">📄 ${config.pdfLabel}</a>
        </div>
      </section>

      <div class="grid-4" style="margin-bottom: 24px;">
        ${inicio.kpis.map(k => `
          <div class="card">
            <div class="kpi-value">${k.value}</div>
            <div class="kpi-label">${k.label}</div>
            <div class="kpi-sub">${k.sub}</div>
          </div>
        `).join("")}
      </div>

      <div class="section-header">
        <h2>Lineamientos operativos de la delegación</h2>
        <p>Información esencial para todos los integrantes de la comitiva oficial y empresarial.</p>
      </div>

      <div class="grid-3">
        ${inicio.quickNotes.map(n => `
          <div class="card">
            <span class="pill pill-gold" style="margin-bottom:8px;">${n.tag}</span>
            <h3 style="font-size:1rem; margin-bottom:6px;">${n.title}</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">${n.body}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderAgenda() {
    const days = DATA.agenda;
    const activeDay = days.find(d => d.id === state.selectedDayId) || days[0];

    return `
      <div class="section-header">
        <h2>Agenda diaria de actividades</h2>
        <p>Selecciona una jornada para consultar horarios, sedes y notas operativas.</p>
      </div>

      <div class="day-tabs" role="tablist">
        ${days.map(d => `
          <button type="button" class="day-tab ${d.id === activeDay.id ? "active" : ""}" data-day-id="${d.id}">
            <span class="dt-date">${d.dateLabel}</span>
            <span class="dt-city">${d.city}</span>
          </button>
        `).join("")}
      </div>

      <div class="card" style="margin-bottom: 16px; background: #fcfaf5;">
        <span class="pill pill-primary">${activeDay.dateLabel} · ${activeDay.city}</span>
        <h3 style="font-size:1.15rem; margin-top:6px;">${activeDay.title}</h3>
      </div>

      <div>
        ${activeDay.events.map((ev, idx) => `
          <article class="agenda-item" id="item-agenda-${activeDay.id}-${idx}">
            <div>
              <div class="agenda-time">${ev.time}</div>
              <div class="agenda-duration">${ev.duration}</div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; flex-wrap:wrap;">
                <h4 class="agenda-title">${ev.title}</h4>
                <span class="pill">${ev.category}</span>
              </div>
              <div class="agenda-meta">
                <span>📍 <strong>Sede:</strong> ${ev.location}</span>
              </div>
              ${ev.notes ? `<p style="font-size:0.86rem; color:var(--text-muted); margin-top:8px;">${ev.notes}</p>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderPromocion() {
    return `
      <div class="section-header">
        <h2>Material de promoción económica</h2>
        <p>Presentaciones ejecutivas y fichas sectoriales preparadas por SETY para promoción de inversiones.</p>
      </div>

      <div class="grid-2">
        ${DATA.promocion.map((p, idx) => `
          <div class="card" id="item-promocion-${idx}">
            <div style="display:flex; justify-content:space-between; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
              <span class="pill pill-primary">${p.sector}</span>
              <span class="pill">${p.format}</span>
            </div>
            <h3 style="font-size:1.05rem; margin-bottom:8px;">${p.title}</h3>
            <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:14px;">${p.description}</p>
            <a href="${p.link}" class="btn btn-outline">Ver recurso</a>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderEconomia() {
    const ec = DATA.economia;
    return `
      <div class="section-header">
        <h2>Información económica y competitividad</h2>
        <p>${ec.intro}</p>
      </div>

      <div class="grid-4" style="margin-bottom: 24px;">
        ${ec.highlights.map(h => `
          <div class="card">
            <div class="kpi-value">${h.value}</div>
            <div class="kpi-label">${h.label}</div>
            <div class="kpi-sub">${h.sub}</div>
          </div>
        `).join("")}
      </div>

      <div class="section-header">
        <h3 style="font-size:1.1rem;">${ec.tableTitle}</h3>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>${ec.tableHeaders.map(th => `<th>${th}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${ec.tableRows.map(row => `
              <tr>
                <td><strong>${row[0]}</strong></td>
                <td>${row[1]}</td>
                <td><span class="pill pill-gold">${row[2]}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderReuniones() {
    const q = state.meetingFilter.trim().toLowerCase();
    const filtered = DATA.reuniones.filter(r =>
      !q ||
      r.company.toLowerCase().includes(q) ||
      r.sector.toLowerCase().includes(q) ||
      r.city.toLowerCase().includes(q) ||
      r.objective.toLowerCase().includes(q)
    );

    return `
      <div class="section-header">
        <h2>Reuniones y empresas</h2>
        <p>Directorio de contrapartes empresariales, cámaras e instituciones en agenda.</p>
      </div>

      <div class="filter-bar">
        <input
          type="search"
          id="meetingSearchInput"
          class="input-control"
          placeholder="Filtrar por empresa, sector o ciudad..."
          value="${state.meetingFilter}"
        />
      </div>

      <div class="grid-2">
        ${filtered.length ? filtered.map((r, idx) => `
          <div class="card" id="item-reuniones-${idx}">
            <div style="display:flex; justify-content:space-between; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
              <span class="pill pill-primary">${r.sector}</span>
              <span class="pill pill-gold">${r.status}</span>
            </div>
            <h3 style="font-size:1.06rem; margin-bottom:4px;">${r.company}</h3>
            <div style="font-size:0.82rem; color:var(--text-light); margin-bottom:10px;">
              📍 ${r.city} · 🕒 ${r.date}
            </div>
            <p style="font-size:0.88rem; color:var(--text-muted);">${r.objective}</p>
          </div>
        `).join("") : `<div class="card">No se encontraron empresas con ese criterio.</div>`}
      </div>
    `;
  }

  function renderDocumentos() {
    return `
      <div class="section-header">
        <h2>Documentos y carpetas ejecutivas</h2>
        <p>Archivos descargables de referencia oficial para los miembros de la delegación.</p>
      </div>

      <div class="grid-2">
        ${DATA.documentos.map((doc, idx) => `
          <div class="card" id="item-documentos-${idx}">
            <div style="display:flex; justify-content:space-between; gap:8px; margin-bottom:8px;">
              <span class="pill pill-primary">${doc.type}</span>
              <span style="font-size:0.78rem; color:var(--text-light);">${doc.size} · Act. ${doc.updated}</span>
            </div>
            <h3 style="font-size:1.02rem; margin-bottom:6px;">${doc.title}</h3>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:14px;">${doc.description}</p>
            <a href="${doc.url}" target="_blank" rel="noopener" class="btn btn-primary">Abrir documento</a>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderVuelos() {
    return `
      <div class="section-header">
        <h2>Vuelos · dos rutas de traslado</h2>
        <p>Itinerarios aéreos programados para la comitiva principal y el equipo técnico.</p>
      </div>

      <div class="grid-2">
        ${DATA.vuelos.map((v, idx) => `
          <div class="card" id="item-vuelos-${idx}">
            <span class="pill pill-primary" style="margin-bottom:8px;">${v.badge}</span>
            <h3 style="font-size:1.1rem; margin-bottom:4px;">${v.routeName}</h3>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:14px;">${v.summary}</p>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${v.segments.map(s => `
                <div style="padding:10px 12px; background:var(--bg-page); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                  <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:var(--brand-primary);">
                    <span>${s.leg}</span>
                    <span>${s.flight}</span>
                  </div>
                  <div style="font-weight:700; font-size:0.92rem; margin-top:2px;">${s.route}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">${s.schedule}</div>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderHospedajes() {
    return `
      <div class="section-header">
        <h2>Hospedajes por ciudad</h2>
        <p>Hoteles sede, fechas de estancia y direcciones locales de referencia.</p>
      </div>

      <div class="grid-3">
        ${DATA.hospedajes.map((h, idx) => `
          <div class="card" id="item-hospedajes-${idx}">
            <span class="pill pill-gold" style="margin-bottom:8px;">${h.city}</span>
            <h3 style="font-size:1.06rem; margin-bottom:4px;">${h.hotel}</h3>
            <div style="font-size:0.82rem; font-weight:700; color:var(--brand-primary); margin-bottom:10px;">${h.dates}</div>
            <p style="font-size:0.86rem; margin-bottom:6px;"><strong>Dirección:</strong> ${h.address}</p>
            <p style="font-size:0.82rem; background:var(--bg-page); padding:8px 10px; border-radius:6px; margin-bottom:10px;">
              ${h.localAddress}
            </p>
            <p style="font-size:0.82rem; color:var(--text-muted);">${h.notes}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderMainContent() {
    const mainEl = document.getElementById("main");
    switch (currentPageId) {
      case "agenda": mainEl.innerHTML = renderAgenda(); break;
      case "promocion": mainEl.innerHTML = renderPromocion(); break;
      case "economia": mainEl.innerHTML = renderEconomia(); break;
      case "reuniones": mainEl.innerHTML = renderReuniones(); break;
      case "documentos": mainEl.innerHTML = renderDocumentos(); break;
      case "vuelos": mainEl.innerHTML = renderVuelos(); break;
      case "hospedajes": mainEl.innerHTML = renderHospedajes(); break;
      default: mainEl.innerHTML = renderInicio();
    }

    document.querySelectorAll("[data-day-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedDayId = btn.dataset.dayId;
        renderMainContent();
      });
    });

    const meetingInput = document.getElementById("meetingSearchInput");
    if (meetingInput) {
      meetingInput.addEventListener("input", e => {
        state.meetingFilter = e.target.value;
        const pos = e.target.selectionStart;
        renderMainContent();
        const reInput = document.getElementById("meetingSearchInput");
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(pos, pos);
        }
      });
    }
  }

  function buildSearchIndex() {
    const index = [];

    DATA.agenda.forEach(day => {
      day.events.forEach((ev, idx) => {
        index.push({
          section: "Agenda diaria",
          url: `agenda.html?day=${encodeURIComponent(day.id)}&highlight=item-agenda-${day.id}-${idx}`,
          title: `${ev.time} · ${ev.title}`,
          subtitle: `${day.dateLabel} · ${day.city} · ${ev.location}`
        });
      });
    });

    DATA.reuniones.forEach((r, idx) => {
      index.push({
        section: "Reuniones y empresas",
        url: `reuniones.html?highlight=item-reuniones-${idx}`,
        title: r.company,
        subtitle: `${r.sector} · ${r.city} (${r.date})`
      });
    });

    DATA.hospedajes.forEach((h, idx) => {
      index.push({
        section: "Hospedajes",
        url: `hospedajes.html?highlight=item-hospedajes-${idx}`,
        title: `${h.hotel} (${h.city})`,
        subtitle: `${h.dates} · ${h.address}`
      });
    });

    DATA.documentos.forEach((d, idx) => {
      index.push({
        section: "Documentos",
        url: `documentos.html?highlight=item-documentos-${idx}`,
        title: d.title,
        subtitle: `${d.type} · ${d.description}`
      });
    });

    DATA.promocion.forEach((p, idx) => {
      index.push({
        section: "Promoción",
        url: `promocion.html?highlight=item-promocion-${idx}`,
        title: p.title,
        subtitle: `${p.sector} · ${p.format}`
      });
    });

    DATA.vuelos.forEach((v, idx) => {
      index.push({
        section: "Vuelos",
        url: `vuelos.html?highlight=item-vuelos-${idx}`,
        title: v.routeName,
        subtitle: v.summary
      });
    });

    return index;
  }

  function setupInteractions() {
    const modal = document.getElementById("searchModal");
    const input = document.getElementById("globalSearchInput");
    const resultsBox = document.getElementById("searchResults");
    const openBtn = document.getElementById("openSearchBtn");
    const searchIndex = buildSearchIndex();

    function openSearch() {
      modal.classList.add("open");
      input.value = "";
      resultsBox.innerHTML = `<div class="search-empty">Busca en toda la agenda, las empresas, los hoteles y los documentos.</div>`;
      setTimeout(() => input.focus(), 30);
    }

    function closeSearch() {
      modal.classList.remove("open");
    }

    openBtn.addEventListener("click", openSearch);
    modal.addEventListener("click", e => { if (e.target === modal) closeSearch(); });

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        resultsBox.innerHTML = `<div class="search-empty">Busca en toda la agenda, las empresas, los hoteles y los documentos.</div>`;
        return;
      }

      const matches = searchIndex.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
      );

      if (!matches.length) {
        resultsBox.innerHTML = `<div class="search-empty">Sin coincidencias para "<strong>${input.value}</strong>".</div>`;
        return;
      }

      resultsBox.innerHTML = matches.map((m, i) => `
        <div class="search-result-item" data-match-idx="${i}">
          <div>
            <div style="font-weight:700; font-size:0.9rem;">${m.title}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${m.subtitle}</div>
          </div>
          <span class="pill pill-primary">${m.section}</span>
        </div>
      `).join("");

      resultsBox.querySelectorAll("[data-match-idx]").forEach(el => {
        el.addEventListener("click", () => {
          const item = matches[Number(el.dataset.matchIdx)];
          window.location.href = item.url;
        });
      });
    });

    document.addEventListener("keydown", e => {
      const tag = document.activeElement && document.activeElement.tagName;
      const isTyping = tag === "INPUT" || tag === "TEXTAREA";

      if (e.key === "/" && !isTyping && !modal.classList.contains("open")) {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape" && modal.classList.contains("open")) {
        closeSearch();
      }
    });

    const moreBtn = document.getElementById("mobileMoreBtn");
    const moreDrawer = document.getElementById("mobileMoreDrawer");
    const closeMoreBtn = document.getElementById("closeMoreBtn");

    moreBtn.addEventListener("click", () => moreDrawer.classList.add("open"));
    closeMoreBtn.addEventListener("click", () => moreDrawer.classList.remove("open"));
    moreDrawer.addEventListener("click", e => {
      if (e.target === moreDrawer) moreDrawer.classList.remove("open");
    });

    /* Resaltar tarjeta si se llegó desde el buscador global */
    const highlightId = params.get("highlight");
    if (highlightId) {
      const target = document.getElementById(highlightId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("highlight-pulse");
        }, 80);
      }
    }
  }

  buildShell();
  renderMainContent();
  setupInteractions();
})();
