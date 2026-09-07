// User roles
export const USER_ROLES = {
  PATIENT: 'patient',
  DOCTOR: 'doctor',
  ADMIN: 'admin',
  STAFF: 'staff',
};

// Appointment status
export const APPOINTMENT_STATUS = {
  SCHEDULED: 'Scheduled',
  CONFIRMED: 'Confirmed',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
  NO_SHOW: 'No Show',
};

// Payment status
export const PAYMENT_STATUS = {
  PENDING: 'Pending',
  PAID: 'Paid',
  PARTIAL: 'Partial',
  OVERDUE: 'Overdue',
};

// Bed status
export const BED_STATUS = {
  AVAILABLE: 'Available',
  OCCUPIED: 'Occupied',
  MAINTENANCE: 'Maintenance',
  RESERVED: 'Reserved',
};

// Test status
export const TEST_STATUS = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  REPORT_READY: 'Report Ready',
};

// Departments
export const DEPARTMENTS = [
  { id: 1, name: 'Cardiology', icon: '❤️' },
  { id: 2, name: 'Neurology', icon: '🧠' },
  { id: 3, name: 'Orthopedics', icon: '🦴' },
  { id: 4, name: 'Pediatrics', icon: '👶' },
  { id: 5, name: 'Dermatology', icon: '🩹' },
  { id: 6, name: 'Ophthalmology', icon: '👁️' },
  { id: 7, name: 'ENT', icon: '👂' },
  { id: 8, name: 'Gynecology', icon: '👩‍⚕️' },
  { id: 9, name: 'Urology', icon: '🫘' },
  { id: 10, name: 'General Surgery', icon: '🔪' },
  { id: 11, name: 'Psychiatry', icon: '🧘' },
  { id: 12, name: 'Emergency', icon: '🚑' },
];

// Blood groups
export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Time slots
export const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
];
