# Kawachi Admin App

An employee management dashboard with biometric attendance tracking functionality.

## Version

- **Current Version:** v1.5
- **Status:** Production Ready (100% functional)
- **Last Update:** Bug fixes, GUI revamp, new features

## Features

- 🔐 **Secure Authentication System** - Multi-user login with role-based access
- 📊 **Interactive Dashboard** - Real-time employee statistics and data visualization
- 👥 **Employee Management** - View and manage team member information
- 📝 **Biometric Attendance** - Advanced attendance tracking with location data
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode** - User preference theme switching
- 📁 **Excel Integration** - Import/export employee data via Excel files
- 🔔 **Notification System** - Real-time notifications and alerts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kawachi-admin-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Alternative Usage

If you prefer to serve the files directly without npm:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using PHP
php -S localhost:8000
```

## Default Login Credentials

The application comes with pre-configured user accounts:

| Username    | Password                  | Role     | Name             |
| ----------- | ------------------------- | -------- | ---------------- |
| `170712@ab` | `OWNER@00014243774`       | OWNER    | Aditya Bhardwaj  |
| `310712@cb` | `CO-OWNER@bhardwaj3107cb` | CO-OWNER | Chandan Bhardwaj |
| `310712@db` | `CO-OWNER@bhardwaj3107db` | CO-OWNER | Deepak Bhardwaj  |

## Project Structure

```
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
```

## Available Scripts

- `npm start` - Start the development server
- `npm run dev` - Start the development server (alias)
- `npm run serve` - Serve the application on port 3000
- `npm run build` - Prepare files for deployment

## Key Features Breakdown

### 🔐 Authentication System

- Session-based authentication
- Automatic redirection to login for unauthenticated users
- Remember user preferences across sessions

### 📊 Dashboard

- Live employee count display
- Task management system
- Recent activity tracking
- Interactive data tables

### 👥 Employee Management

- View employee details from Excel data
- Real-time data loading
- Sortable and filterable employee lists

### 📝 Biometric Attendance

- Fingerprint simulation interface
- GPS location tracking
- IP address logging
- Excel export functionality
- Real-time timestamp recording

### 🎨 User Interface

- Modern, responsive design
- Smooth animations and transitions
- Mobile-optimized layout
- Customizable themes

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Troubleshooting

### Common Issues

1. **Server won't start**

   - Ensure Node.js is installed: `node --version`
   - Check if port 3000 is available
   - Try: `npm install` then `npm start`

2. **Login not working**

   - Verify credentials are correct
   - Check browser console for errors
   - Clear browser cache and cookies

3. **Excel file not loading**
   - Ensure `attendance_data.xlsx` exists in the root directory
   - Check file permissions
   - Verify file is not corrupted

### Performance Tips

- Use Chrome for best performance
- Keep Excel files under 5MB for optimal loading
- Clear browser cache periodically
- Close unused browser tabs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section above

---

**Built with ❤️ by the Kawachi Team**
