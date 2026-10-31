-- schema.sql: Estructura DDL/DML de la base de datos SecurityLogsDB
-- Motor: Microsoft SQL Server

CREATE DATABASE SecurityLogsDB;
GO

USE SecurityLogsDB;
GO

-- 1. Creación de la tabla principal de eventos de seguridad
CREATE TABLE SecurityLogs (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    Timestamp DATETIME NOT NULL DEFAULT GETDATE(),
    SourceIP VARCHAR(45) NOT NULL,
    DestinationIP VARCHAR(45) NOT NULL,
    EventType VARCHAR(100) NOT NULL,
    Severity VARCHAR(20) NOT NULL,
    Description TEXT NOT NULL,
    IsBlocked BIT NOT NULL DEFAULT 0
);
GO

-- 2. Inserción de logs simulados de auditoría de red
INSERT INTO SecurityLogs (SourceIP, DestinationIP, EventType, Severity, Description, IsBlocked)
VALUES 
('192.168.1.55', '10.0.0.5', 'SSH_Failed_Login', 'High', 'Multiple failed password attempts for user root from external IP.', 1),
('203.0.113.42', '10.0.0.15', 'Port_Scan', 'Medium', 'Nmap SYN scan detected across multiple high-risk ports.', 0),
('192.168.1.105', '10.0.0.5', 'SQL_Injection_Attempt', 'Critical', 'Suspicious payload detected in HTTP GET parameters.', 1),
('172.16.0.88', '10.0.0.22', 'Brute_Force_Attempt', 'High', 'Sustained login attempts detected on administrative portal.', 1),
('198.51.100.14', '10.0.0.8', 'Malware_Outbound_C2', 'Critical', 'Unusual outbound traffic matching known C2 server signatures.', 1),
('192.168.1.200', '10.0.0.1', 'ARP_Spoofing_Alert', 'Medium', 'Duplicate MAC address responding to default gateway requests.', 0);
GO

-- 3. Consulta de auditoría ordenada por tiempo
SELECT * FROM SecurityLogs ORDER BY Timestamp DESC;
GO