# Employee Data Structure - Kawachi Admin App

## Complete Employee Information Fields

This document outlines the comprehensive employee data structure used in the Kawachi Admin App with Firebase integration.

### 📊 Employee Data Fields

| Field Name                 | Type   | Required | Description                        | Example              |
| -------------------------- | ------ | -------- | ---------------------------------- | -------------------- |
| **Emp_ID**                 | String | ✅ Yes   | Unique employee identifier         | EMP001               |
| **Name**                   | String | ✅ Yes   | Full name of employee              | John Doe             |
| **Contact Number**         | String | ✅ Yes   | Primary contact number             | 9876543210           |
| **Email**                  | String | ✅ Yes   | Official email address             | john.doe@company.com |
| **Marital Status**         | String | No       | Single/Married/Divorced/Widowed    | Married              |
| **Emergency Contact**      | String | No       | Emergency contact number           | 9876543211           |
| **Address**                | String | No       | Complete residential address       | 123 Main St, City    |
| **PAN**                    | String | No       | 10 digits alpha numeric            | ABCDE1234F           |
| **Aadhar**                 | String | No       | 12 digit number                    | 123456789012         |
| **UAN**                    | String | No       | 12 digit number                    | 123456789012         |
| **Date of Joining**        | Date   | ✅ Yes   | Employee joining date              | 2024-01-15           |
| **Date of Exit**           | Date   | No       | Employee exit date (if applicable) | 2024-12-31           |
| **Basic Salary**           | Number | ✅ Yes   | Basic salary amount                | 25000                |
| **Dearness Allowance**     | Number | No       | Dearness allowance amount          | 2000                 |
| **Personal Allowance**     | Number | No       | Personal allowance amount          | 1500                 |
| **Conveyance Allowance**   | Number | No       | Conveyance allowance amount        | 1000                 |
| **Professional Allowance** | Number | No       | Professional allowance amount      | 2000                 |
| **Bonus**                  | Number | No       | Bonus amount                       | 5000                 |
| **Gross Salary**           | Number | Auto     | Total salary (auto-calculated)     | 36500                |

## 🔥 Firebase Data Structure

### Employee Storage Path

```
employees/
  ├── EMP001/
  │   ├── empId: "EMP001"
  │   ├── name: "John Doe"
  │   ├── contact: "9876543210"
  │   ├── email: "john.doe@company.com"
  │   ├── maritalStatus: "Married"
  │   ├── emergencyContact: "9876543211"
  │   ├── address: "123 Main St, City"
  │   ├── pan: "ABCDE1234F"
  │   ├── aadhar: "123456789012"
  │   ├── uan: "123456789012"
  │   ├── joinDate: "2024-01-15"
  │   ├── exitDate: ""
  │   ├── basicSalary: 25000
  │   ├── dearnessAllowance: 2000
  │   ├── personalAllowance: 1500
  │   ├── conveyanceAllowance: 1000
  │   ├── professionalAllowance: 2000
  │   ├── bonus: 5000
  │   ├── grossSalary: 36500
  │   ├── createdAt: "2024-01-15T10:30:00.000Z"
  │   ├── updatedAt: "2024-01-15T10:30:00.000Z"
  │   └── status: "active"
  └── EMP002/
      └── ... (similar structure)
```

### Attendance Storage Path

```
attendance/
  ├── unique-firebase-id-1/
  │   ├── id: "unique-firebase-id-1"
  │   ├── empId: "EMP001"
  │   ├── name: "John Doe"
  │   ├── contact: "9876543210"
  │   ├── email: "john.doe@company.com"
  │   ├── basicSalary: 25000
  │   ├── grossSalary: 36500
  │   ├── date: "1/15/2024, 10:30:00 AM"
  │   ├── timestamp: "2024-01-15T10:30:00.000Z"
  │   ├── ip: "192.168.1.1"
  │   └── coords: "28.6139, 77.2090"
  └── unique-firebase-id-2/
      └── ... (similar structure)
```

## 📱 Application Features

### 1. Employee Data Management (`employee_data.html`)

- ✅ **Add New Employee**: Complete form with all fields
- ✅ **Fetch Employee by ID**: Search and display complete employee information
- ✅ **Edit Employee**: Modify existing employee data
- ✅ **Delete Employee**: Remove employee from Firebase
- ✅ **Export to Excel**: Download complete employee data
- ✅ **Real-time Sync**: Live updates across all devices

### 2. Biometric Attendance (`biometric_app.html`)

- ✅ **Employee ID Input**: Single field for employee identification
- ✅ **Auto-fill Information**: Automatically loads employee data
- ✅ **Mark Attendance**: Records attendance with location and time
- ✅ **Fetch from API**: Load all Firebase data
- ✅ **Excel Export**: Comprehensive attendance and employee data
- ✅ **Firebase Integration**: Real-time data storage

### 3. Dashboard (`index.html`)

- ✅ **Live Employee Count**: Real-time employee statistics
- ✅ **Employee Summary**: Latest employee information
- ✅ **Gross Salary Display**: Shows salary information instead of position

## 📊 Excel Export Format

### Employee Data Export

```
Emp_ID | Name | Contact Number | Email | Marital Status | Emergency Contact | Address | PAN | Aadhar | UAN | Date of Joining | Date of Exit | Basic Salary | Dearness Allowance | Personal Allowance | Conveyance Allowance | Professional Allowance | Bonus | Gross Salary
```

### Attendance Data Export

```
S.No | Emp_ID | Name | Contact Number | Email | Basic Salary | Gross Salary | Date & Time | IP Address | Coordinates | Firebase ID
```

## 🔧 Technical Implementation

### Firebase Integration

- **Database**: Firebase Realtime Database
- **Analytics**: Google Analytics integration
- **Security**: Employee ID as unique key
- **Real-time**: Live data synchronization

### Data Validation

- **Required Fields**: Employee ID, Name, Contact, Email, Join Date, Basic Salary
- **Format Validation**: PAN (10 chars), Aadhar (12 digits), UAN (12 digits)
- **Duplicate Check**: Employee ID uniqueness validation
- **Auto-calculation**: Gross salary computation

### User Experience

- **Step-by-step Progress**: Visual feedback during save operations
- **Error Handling**: Comprehensive error messages
- **Auto-fill**: Employee data auto-population
- **Responsive Design**: Works on all devices

## 🚀 Usage Workflow

### Adding New Employee

1. Click "Add New Employee"
2. Fill in required fields (marked with \*)
3. Optional fields auto-fill or can be left empty
4. Gross salary auto-calculates
5. Firebase connection status shown
6. Step-by-step save progress
7. Real-time data sync

### Recording Attendance

1. Enter Employee ID
2. System auto-fills employee information
3. Click "Mark Attendance"
4. System records location and time
5. Data saved to Firebase
6. Download comprehensive Excel report

### Data Management

1. Fetch employee by ID for detailed view
2. Export complete data to Excel
3. Real-time synchronization across devices
4. Comprehensive reporting

This structure ensures complete employee lifecycle management with comprehensive data tracking and reporting capabilities.
