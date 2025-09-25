# Dirty Code

**Dirty Code** is a cross-platform desktop application for Windows and macOS that rivals SQL Server Management Studio (SSMS). It provides a modern, intuitive interface for managing SQL Server databases, including support for T-SQL, Azure SQL, and SQL Server running on Linux.

## 🚀 Project Overview

Dirty Code is designed to be a powerful and user-friendly database management tool. It combines the flexibility of Electron with the performance of Node.js and the elegance of React to deliver a seamless experience for database developers and administrators.

## Features

- SQL Editor with T-SQL syntax highlighting and IntelliSense
- Database Explorer for SQL Server, Azure SQL, and SQL Server on Linux
- Query Results Viewer with grid and raw text modes
- Execution Plan Viewer (visual and XML)
- Stored Procedure and Function Editor
- Connection Manager with saved profiles
- Query History and Snippet Organizer
- Dark Mode and Custom Themes
- ER Diagram Generator
- Data Import/Export Tools

## 🧠 Tech Stack

- **Electron** – Cross-platform desktop app shell
- **React** – UI framework
- **Monaco Editor** – SQL editing with syntax support
- **Node.js** – Backend connectivity and logic
- **mssql / ODBC** – SQL Server drivers for Windows, macOS, and Linux
- **SQLite** – Local storage for settings and history

## ⚙️ Setup Instructions

1. Clone the repository:  
   `git clone https://github.com/your-username/dirty-code.git`

2. Install dependencies:  
   `npm install`

3. Run the app:  
   `npm start`

## 📅 Roadmap

### Phase 1: MVP
- SQL Server support
- SQL Editor with T-SQL syntax highlighting
- Basic Database Explorer
- Connection Manager
- Query Results Viewer

### Phase 2: Multi-DB Support
- Add support for PostgreSQL, MySQL, SQLite, and Oracle
- Unified connection interface for all databases

### Phase 3: Advanced Features
- Execution Plan Viewer
- Stored Procedure & Function Editor
- ER Diagram Generator
- Data Import/Export Tools
- Query History & Snippet Organizer

### Phase 4: Polish & Distribution
- Dark Mode and Custom Themes
- Auto-update mechanism
- Windows and macOS installers
- Performance optimization and bug fixes
