// app.js - Lógica interactiva del Dashboard SOC

document.addEventListener("DOMContentLoaded", () => {
    renderKPIs();
    renderTable(securityLogsData); // Renderiza todos los logs al inicio
    setupSidebarEvents();
});

// Función para calcular y mostrar los KPIs
function renderKPIs() {
    const totalAlerts = securityLogsData.length;
    const criticalAlerts = securityLogsData.filter(log => log.severity === "Critical" || log.severity === "High").length;
    const blockedIps = securityLogsData.filter(log => log.isBlocked === true).length;

    document.getElementById("total-alerts").textContent = totalAlerts;
    document.getElementById("critical-alerts").textContent = criticalAlerts;
    document.getElementById("blocked-ips").textContent = blockedIps;
}

// Función para poblar la tabla dinámicamente según el filtro
function renderTable(logsToRender) {
    const tbody = document.getElementById("logs-table-body");
    tbody.innerHTML = "";

    if (logsToRender.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#9ca3af; padding:20px;">No se encontraron eventos para esta categoría.</td></tr>`;
        return;
    }

    logsToRender.forEach(log => {
        const tr = document.createElement("tr");

        let badgeClass = "badge-medium";
        if (log.severity === "Critical") badgeClass = "badge-critical";
        else if (log.severity === "High") badgeClass = "badge-high";

        const statusText = log.isBlocked ? "Bloqueado (Drop)" : "Monitoreado";
        const statusClass = log.isBlocked ? "status-blocked" : "status-monitored";

        tr.innerHTML = `
            <td>${log.timestamp}</td>
            <td><code>${log.sourceIp}</code></td>
            <td><code>${log.destIp}</code></td>
            <td><strong>${log.eventType}</strong></td>
            <td><span class="${badgeClass}">${log.severity}</span></td>
            <td>${log.description}</td>
            <td><span class="${statusClass}">${statusText}</span></td>
        `;

        tbody.appendChild(tr);
    });
}

// Interactividad para el Menú Lateral (Sidebar)
function setupSidebarEvents() {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            // Cambiar clase activa visualmente
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            const menuText = item.textContent.trim();

            // Filtrado dinámico de eventos
            if (menuText.includes("Dashboard") || menuText.includes("Event Logs")) {
                renderTable(securityLogsData); // Muestra todos los logs
            } else if (menuText.includes("Threat Intel")) {
                // Filtra solo los eventos de alta severidad o críticos
                const threats = securityLogsData.filter(log => log.severity === "Critical" || log.severity === "High");
                renderTable(threats);
            }
        });
    });
}