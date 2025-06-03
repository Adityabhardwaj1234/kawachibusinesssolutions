Kawachi Admin App

An employee management dashboard with biometric attendance tracking functionality.

Version

Current Version: v1.5
Status: Production Ready (100% functional)
Last Update: Bug fixes, GUI revamp, new features
Features

🔐 Secure Authentication System - Multi-user login with role-based access
🔥 Firebase Integration - Real-time database with cloud storage and analytics
📊 Interactive Dashboard - Live employee statistics with real-time updates
👥 Employee Management - Full CRUD operations with Firebase synchronization
📝 Biometric Attendance - Advanced attendance tracking with Firebase storage
📱 Responsive Design - Works on desktop, tablet, and mobile devices
🌙 Dark/Light Mode - User preference theme switching
📁 Excel Export - Export Firebase data to Excel files
🔔 Real-time Updates - Live data synchronization across all devices
📈 Analytics Integration - Google Analytics for usage tracking
Getting Started

Prerequisites

Node.js (v14 or higher)
npm package manager
Firebase project (configured and ready)
Installation

Clone the repository

git clone <repository-url>
cd kawachi-admin-app
Install dependencies

npm install
Firebase Configuration The app is pre-configured with Firebase. If you want to use your own Firebase project:

Update the Firebase configuration in relevant HTML files
Ensure Firebase Realtime Database and Analytics are enabled
Set up appropriate security rules
Start the development server

npm start
# or
npm run dev
Open your browser Navigate to http://localhost:3000

Alternative Usage

If you prefer to serve the files directly without npm:

# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using PHP
php -S localhost:8000
Default Login Credentials

The application comes with pre-configured user accounts:

Username	Password	Role	Name
170712@ab	OWNER@00014243774	OWNER	Aditya Bhardwaj
310712@cb	CO-OWNER@bhardwaj3107cb	CO-OWNER	Chandan Bhardwaj
310712@db	CO-OWNER@bhardwaj3107db	CO-OWNER	Deepak Bhardwaj
Project Structure

kawachi-admin-app/
├── index.html              # Main dashboard page
├── login.html              # Authentication page
├── biometric_app.html      # Attendance tracking module
├── employee_data.html      # Employee management page
├── myprofile.html          # User profile page
├── settings.html           # Application settings
├── clock.html              # Clock/time utilities
├── style.css               # Main stylesheet
├── script.js               # Core JavaScript functionality
├── attendance_data.xlsx    # Sample employee data
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
Available Scripts

npm start - Start the development server
npm run dev - Start the development server (alias)
npm run serve - Serve the application on port 3000
npm run build - Prepare files for deployment
Firebase API Usage

Employee Management

Add Employee: Use the "Add New Employee" form in Employee Data page
View Employees: Real-time display with automatic updates
Edit Employee: Click "Edit" on any employee card
Delete Employee: Click "Delete" with confirmation dialog
Export to Excel: Download all employee data from Firebase
Attendance System

Record Attendance: Use the biometric app to save to Firebase
Fetch from API: Load all attendance data from Firebase
Export to Excel: Create comprehensive Excel with both employee and attendance data
Real-time Sync: All changes appear instantly across devices
Data Flow

Employee Data: HTML forms → Firebase Realtime Database → Real-time UI updates
Attendance Data: Biometric app → Firebase → Excel export
Analytics: User actions → Google Analytics → Usage insights
Key Features Breakdown

🔐 Authentication System

Session-based authentication
Automatic redirection to login for unauthenticated users
Remember user preferences across sessions
🔥 Firebase Integration

Realtime Database: All data stored and synchronized in real-time
Analytics: Track user interactions and app usage
Cloud Storage: Secure, scalable data storage
Real-time Updates: Changes appear instantly across all devices
📊 Dashboard

Live employee count from Firebase
Real-time data synchronization
Interactive data tables with Firebase data
Analytics tracking for user interactions
👥 Employee Management

Full CRUD operations (Create, Read, Update, Delete)
Real-time data synchronization with Firebase
Add new employees with instant cloud sync
Export employee data to Excel from Firebase
Professional employee cards with Firebase data
📝 Biometric Attendance

Save attendance directly to Firebase
Fetch attendance data from Firebase API
Export Firebase data to comprehensive Excel files
Real-time location and IP tracking
Fingerprint simulation interface
Full attendance history in the cloud
🎨 User Interface

Modern, responsive design
Smooth animations and transitions
Mobile-optimized layout
Customizable themes
Browser Compatibility

Chrome (recommended)
Firefox
Safari
Edge
Mobile browsers (iOS Safari, Chrome Mobile)
Contributing

Fork the repository
Create a feature branch (git checkout -b feature/new-feature)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Create a Pull Request
Troubleshooting

Common Issues

Server won't start

Ensure Node.js is installed: node --version
Check if port 3000 is available
Try: npm install then npm start
Login not working

Verify credentials are correct
Check browser console for errors
Clear browser cache and cookies
Excel file not loading

Ensure attendance_data.xlsx exists in the root directory
Check file permissions
Verify file is not corrupted
Performance Tips

Use Chrome for best performance
Keep Excel files under 5MB for optimal loading
Clear browser cache periodically
Close unused browser tabs
License

This project is licensed under the MIT License - see the LICENSE file for details.

Support

For support and questions:

Create an issue in the repository
Contact the development team
Check the troubleshooting section above
Built with ❤️ by the Kawachi Team
