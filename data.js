// data.js - Simulación de registros exportados de la base de datos SecurityLogsDB (SQL Server)
const securityLogsData = [
    {
        id: 1,
        timestamp: "2026-10-30 22:03:16",
        sourceIp: "192.168.1.55",
        destIp: "10.0.0.5",
        eventType: "SSH_Failed_Login",
        severity: "High",
        description: "Multiple failed password attempts for user root from external IP.",
        isBlocked: true
    },
    {
        id: 2,
        timestamp: "2026-10-30 22:03:16",
        sourceIp: "203.0.113.42",
        destIp: "10.0.0.15",
        eventType: "Port_Scan",
        severity: "Medium",
        description: "Nmap SYN scan detected across multiple high-risk ports.",
        isBlocked: false
    },
    {
        id: 3,
        timestamp: "2026-10-30 22:03:16",
        sourceIp: "192.168.1.105",
        destIp: "10.0.0.5",
        eventType: "SQL_Injection_Attempt",
        severity: "Critical",
        description: "Suspicious payload detected in HTTP GET parameters.",
        isBlocked: true
    },
    {
        id: 4,
        timestamp: "2026-10-30 22:15:42",
        sourceIp: "172.16.0.88",
        destIp: "10.0.0.22",
        eventType: "Brute_Force_Attempt",
        severity: "High",
        description: "Sustained login attempts detected on administrative portal.",
        isBlocked: true
    },
    {
        id: 5,
        timestamp: "2026-10-30 22:20:00",
        sourceIp: "198.51.100.14",
        destIp: "10.0.0.8",
        eventType: "Malware_Outbound_C2",
        severity: "Critical",
        description: "Unusual outbound traffic matching known C2 server signatures.",
        isBlocked: true
    },
    {
        id: 6,
        timestamp: "2026-10-30 22:28:11",
        sourceIp: "192.168.1.200",
        destIp: "10.0.0.1",
        eventType: "ARP_Spoofing_Alert",
        severity: "Medium",
        description: "Duplicate MAC address responding to default gateway requests.",
        isBlocked: false
    }
];