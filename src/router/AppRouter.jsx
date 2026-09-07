import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Public Pages
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Departments from '../pages/public/Departments';
import Contact from '../pages/public/Contact';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Patient Pages
import PatientDashboard from '../pages/patient/PatientDashboard';
import BookAppointment from '../pages/patient/BookAppointment';
import ViewDoctors from '../pages/patient/ViewDoctors';
import MyAppointments from '../pages/patient/MyAppointments';
import MedicalHistory from '../pages/patient/MedicalHistory';
import MyPrescriptions from '../pages/patient/MyPrescriptions';
import MyLabReports from '../pages/patient/MyLabReports';
import MyBills from '../pages/patient/MyBills';
import PatientProfile from '../pages/patient/PatientProfile';

// Doctor Pages
import DoctorDashboard from '../pages/doctor/DoctorDashboard';
import DoctorAppointments from '../pages/doctor/DoctorAppointments';
import DoctorPatients from '../pages/doctor/DoctorPatients';
import WritePrescription from '../pages/doctor/WritePrescription';
import DoctorSchedule from '../pages/doctor/DoctorSchedule';
import DoctorProfile from '../pages/doctor/DoctorProfile';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageDoctors from '../pages/admin/ManageDoctors';
import ManagePatients from '../pages/admin/ManagePatients';
import ManageStaff from '../pages/admin/ManageStaff';
import AdminAppointments from '../pages/admin/AdminAppointments';
import ManageDepartments from '../pages/admin/ManageDepartments';
import BedManagement from '../pages/admin/BedManagement';
import Laboratory from '../pages/admin/Laboratory';
import Pharmacy from '../pages/admin/Pharmacy';
import Billing from '../pages/admin/Billing';
import Analytics from '../pages/admin/Analytics';
import AdminSettings from '../pages/admin/AdminSettings';
import InsuranceClaims from '../pages/admin/InsuranceClaims';
import AuditLogs from '../pages/admin/AuditLogs';

// Auth Error Pages
import OtpVerification from '../pages/auth/OtpVerification';
import NotFound from '../pages/errors/NotFound';
import Unauthorized from '../pages/errors/Unauthorized';
import SessionExpired from '../pages/errors/SessionExpired';

// Patient Additional Pages
import SupportTickets from '../pages/patient/SupportTickets';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/departments" element={<PublicLayout><Departments /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Patient Routes */}
        <Route path="/patient/dashboard" element={<DashboardLayout role="patient"><PatientDashboard /></DashboardLayout>} />
        <Route path="/patient/book-appointment" element={<DashboardLayout role="patient"><BookAppointment /></DashboardLayout>} />
        <Route path="/patient/doctors" element={<DashboardLayout role="patient"><ViewDoctors /></DashboardLayout>} />
        <Route path="/patient/appointments" element={<DashboardLayout role="patient"><MyAppointments /></DashboardLayout>} />
        <Route path="/patient/medical-history" element={<DashboardLayout role="patient"><MedicalHistory /></DashboardLayout>} />
        <Route path="/patient/prescriptions" element={<DashboardLayout role="patient"><MyPrescriptions /></DashboardLayout>} />
        <Route path="/patient/lab-reports" element={<DashboardLayout role="patient"><MyLabReports /></DashboardLayout>} />
        <Route path="/patient/bills" element={<DashboardLayout role="patient"><MyBills /></DashboardLayout>} />
        <Route path="/patient/profile" element={<DashboardLayout role="patient"><PatientProfile /></DashboardLayout>} />
        <Route path="/patient/support" element={<DashboardLayout role="patient"><SupportTickets /></DashboardLayout>} />

        {/* Doctor Routes */}
        <Route path="/doctor/dashboard" element={<DashboardLayout role="doctor"><DoctorDashboard /></DashboardLayout>} />
        <Route path="/doctor/appointments" element={<DashboardLayout role="doctor"><DoctorAppointments /></DashboardLayout>} />
        <Route path="/doctor/patients" element={<DashboardLayout role="doctor"><DoctorPatients /></DashboardLayout>} />
        <Route path="/doctor/prescriptions" element={<DashboardLayout role="doctor"><WritePrescription /></DashboardLayout>} />
        <Route path="/doctor/schedule" element={<DashboardLayout role="doctor"><DoctorSchedule /></DashboardLayout>} />
        <Route path="/doctor/profile" element={<DashboardLayout role="doctor"><DoctorProfile /></DashboardLayout>} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<DashboardLayout role="admin"><AdminDashboard /></DashboardLayout>} />
        <Route path="/admin/doctors" element={<DashboardLayout role="admin"><ManageDoctors /></DashboardLayout>} />
        <Route path="/admin/patients" element={<DashboardLayout role="admin"><ManagePatients /></DashboardLayout>} />
        <Route path="/admin/staff" element={<DashboardLayout role="admin"><ManageStaff /></DashboardLayout>} />
        <Route path="/admin/appointments" element={<DashboardLayout role="admin"><AdminAppointments /></DashboardLayout>} />
        <Route path="/admin/departments" element={<DashboardLayout role="admin"><ManageDepartments /></DashboardLayout>} />
        <Route path="/admin/beds" element={<DashboardLayout role="admin"><BedManagement /></DashboardLayout>} />
        <Route path="/admin/laboratory" element={<DashboardLayout role="admin"><Laboratory /></DashboardLayout>} />
        <Route path="/admin/pharmacy" element={<DashboardLayout role="admin"><Pharmacy /></DashboardLayout>} />
        <Route path="/admin/billing" element={<DashboardLayout role="admin"><Billing /></DashboardLayout>} />
        <Route path="/admin/analytics" element={<DashboardLayout role="admin"><Analytics /></DashboardLayout>} />
        <Route path="/admin/settings" element={<DashboardLayout role="admin"><AdminSettings /></DashboardLayout>} />
        <Route path="/admin/claims" element={<DashboardLayout role="admin"><InsuranceClaims /></DashboardLayout>} />
        <Route path="/admin/audit-logs" element={<DashboardLayout role="admin"><AuditLogs /></DashboardLayout>} />

        {/* Auth Error Pages */}
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/404" element={<NotFound />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default AppRouter;
