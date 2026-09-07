import { APPOINTMENT_STATUS, PAYMENT_STATUS, BED_STATUS, TEST_STATUS, DEPARTMENTS } from './constants';

// Dummy doctors
export const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    qualification: 'MBBS, MD, DM (Cardiology)',
    experience: 15,
    rating: 4.8,
    reviews: 234,
    fee: 800,
    city: 'New York',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    available: true,
    about: 'Specialized in interventional cardiology with extensive experience in complex cardiac procedures.',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialization: 'Neurology',
    qualification: 'MBBS, MD (Neurology)',
    experience: 12,
    rating: 4.9,
    reviews: 189,
    fee: 900,
    city: 'Los Angeles',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    available: true,
    about: 'Expert in treating neurological disorders with focus on stroke and epilepsy management.',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrics',
    qualification: 'MBBS, MD (Pediatrics)',
    experience: 10,
    rating: 4.7,
    reviews: 312,
    fee: 600,
    city: 'Chicago',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    available: true,
    about: 'Caring pediatrician with expertise in child development and preventive care.',
  },
  {
    id: 4,
    name: 'Dr. Robert Williams',
    specialization: 'Orthopedics',
    qualification: 'MBBS, MS (Orthopedics)',
    experience: 18,
    rating: 4.9,
    reviews: 267,
    fee: 850,
    city: 'Houston',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    available: false,
    about: 'Renowned orthopedic surgeon specializing in joint replacement and sports injuries.',
  },
  {
    id: 5,
    name: 'Dr. Amanda Wilson',
    specialization: 'Dermatology',
    qualification: 'MBBS, MD (Dermatology)',
    experience: 8,
    rating: 4.6,
    reviews: 198,
    fee: 700,
    city: 'Miami',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    available: true,
    about: 'Expert in cosmetic and medical dermatology with modern treatment approaches.',
  },
  {
    id: 6,
    name: 'Dr. James Anderson',
    specialization: 'General Surgery',
    qualification: 'MBBS, MS (Surgery)',
    experience: 20,
    rating: 4.8,
    reviews: 345,
    fee: 1000,
    city: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    available: true,
    about: 'Experienced surgeon with expertise in minimally invasive surgical techniques.',
  },
];

// Dummy appointments
export const appointments = [
  {
    id: 1,
    patientName: 'John Doe',
    patientId: 'P12345',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    date: '2026-01-08',
    time: '10:00 AM',
    status: APPOINTMENT_STATUS.SCHEDULED,
    type: 'Consultation',
    reason: 'Chest pain and irregular heartbeat',
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    patientId: 'P12346',
    doctorName: 'Dr. Michael Chen',
    department: 'Neurology',
    date: '2026-01-08',
    time: '11:30 AM',
    status: APPOINTMENT_STATUS.CONFIRMED,
    type: 'Follow-up',
    reason: 'Migraine management',
  },
  {
    id: 3,
    patientName: 'Robert Brown',
    patientId: 'P12347',
    doctorName: 'Dr. Emily Davis',
    department: 'Pediatrics',
    date: '2026-01-08',
    time: '02:00 PM',
    status: APPOINTMENT_STATUS.IN_PROGRESS,
    type: 'Vaccination',
    reason: 'Routine immunization',
  },
  {
    id: 4,
    patientName: 'Lisa Anderson',
    patientId: 'P12348',
    doctorName: 'Dr. Robert Williams',
    department: 'Orthopedics',
    date: '2026-01-09',
    time: '09:00 AM',
    status: APPOINTMENT_STATUS.SCHEDULED,
    type: 'Consultation',
    reason: 'Knee pain',
  },
];

// Dummy prescriptions
export const prescriptions = [
  {
    id: 1,
    doctorName: 'Dr. Sarah Johnson',
    date: '2026-01-05',
    diagnosis: 'Hypertension',
    medicines: [
      { name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily', duration: '30 days' },
      { name: 'Metoprolol', dosage: '50mg', frequency: 'Twice daily', duration: '30 days' },
    ],
    instructions: 'Take medications with food. Monitor blood pressure daily.',
  },
  {
    id: 2,
    doctorName: 'Dr. Michael Chen',
    date: '2026-01-03',
    diagnosis: 'Migraine',
    medicines: [
      { name: 'Sumatriptan', dosage: '50mg', frequency: 'As needed', duration: '15 days' },
      { name: 'Propranolol', dosage: '40mg', frequency: 'Once daily', duration: '30 days' },
    ],
    instructions: 'Avoid triggers. Stay hydrated.',
  },
];

// Dummy lab reports
export const labReports = [
  {
    id: 1,
    testName: 'Complete Blood Count (CBC)',
    date: '2026-01-06',
    status: TEST_STATUS.REPORT_READY,
    orderedBy: 'Dr. Sarah Johnson',
    category: 'Hematology',
    results: [
      { parameter: 'Hemoglobin', value: '14.2', unit: 'g/dL', range: '13.0-17.0', status: 'Normal' },
      { parameter: 'WBC Count', value: '7500', unit: 'cells/µL', range: '4000-11000', status: 'Normal' },
      { parameter: 'Platelets', value: '250000', unit: '/µL', range: '150000-400000', status: 'Normal' },
    ],
  },
  {
    id: 2,
    testName: 'Lipid Profile',
    date: '2026-01-04',
    status: TEST_STATUS.REPORT_READY,
    orderedBy: 'Dr. Sarah Johnson',
    category: 'Biochemistry',
    results: [
      { parameter: 'Total Cholesterol', value: '210', unit: 'mg/dL', range: '<200', status: 'High' },
      { parameter: 'HDL', value: '45', unit: 'mg/dL', range: '>40', status: 'Normal' },
      { parameter: 'LDL', value: '140', unit: 'mg/dL', range: '<100', status: 'High' },
      { parameter: 'Triglycerides', value: '150', unit: 'mg/dL', range: '<150', status: 'Normal' },
    ],
  },
];

// Dummy bills
export const bills = [
  {
    id: 1,
    invoiceNo: 'INV-2026-001',
    date: '2026-01-06',
    items: [
      { description: 'Consultation Fee - Dr. Sarah Johnson', quantity: 1, rate: 800, amount: 800 },
      { description: 'ECG Test', quantity: 1, rate: 500, amount: 500 },
      { description: 'Blood Tests', quantity: 1, rate: 1200, amount: 1200 },
    ],
    subtotal: 2500,
    tax: 250,
    discount: 0,
    total: 2750,
    paid: 2750,
    status: PAYMENT_STATUS.PAID,
  },
  {
    id: 2,
    invoiceNo: 'INV-2026-002',
    date: '2026-01-05',
    items: [
      { description: 'Consultation Fee - Dr. Michael Chen', quantity: 1, rate: 900, amount: 900 },
      { description: 'MRI Scan', quantity: 1, rate: 5000, amount: 5000 },
    ],
    subtotal: 5900,
    tax: 590,
    discount: 500,
    total: 5990,
    paid: 3000,
    status: PAYMENT_STATUS.PARTIAL,
  },
];

// Dummy beds
export const beds = [
  { id: 1, bedNo: 'B-101', ward: 'General Ward', floor: '1st Floor', status: BED_STATUS.OCCUPIED, patient: 'John Doe', admissionDate: '2026-01-05' },
  { id: 2, bedNo: 'B-102', ward: 'General Ward', floor: '1st Floor', status: BED_STATUS.AVAILABLE, patient: null, admissionDate: null },
  { id: 3, bedNo: 'B-103', ward: 'General Ward', floor: '1st Floor', status: BED_STATUS.OCCUPIED, patient: 'Jane Smith', admissionDate: '2026-01-06' },
  { id: 4, bedNo: 'ICU-201', ward: 'ICU', floor: '2nd Floor', status: BED_STATUS.OCCUPIED, patient: 'Robert Brown', admissionDate: '2026-01-07' },
  { id: 5, bedNo: 'ICU-202', ward: 'ICU', floor: '2nd Floor', status: BED_STATUS.AVAILABLE, patient: null, admissionDate: null },
  { id: 6, bedNo: 'PVT-301', ward: 'Private Room', floor: '3rd Floor', status: BED_STATUS.RESERVED, patient: 'Lisa Anderson', admissionDate: '2026-01-08' },
  { id: 7, bedNo: 'PVT-302', ward: 'Private Room', floor: '3rd Floor', status: BED_STATUS.AVAILABLE, patient: null, admissionDate: null },
  { id: 8, bedNo: 'B-104', ward: 'General Ward', floor: '1st Floor', status: BED_STATUS.MAINTENANCE, patient: null, admissionDate: null },
];

// Dummy medicines
export const medicines = [
  { id: 1, name: 'Paracetamol', category: 'Analgesic', stock: 500, unit: 'Tablets', price: 2, minStock: 100, expiryDate: '2027-12-31' },
  { id: 2, name: 'Amoxicillin', category: 'Antibiotic', stock: 250, unit: 'Capsules', price: 5, minStock: 50, expiryDate: '2026-08-15' },
  { id: 3, name: 'Omeprazole', category: 'Antacid', stock: 300, unit: 'Tablets', price: 3, minStock: 80, expiryDate: '2027-06-30' },
  { id: 4, name: 'Metformin', category: 'Antidiabetic', stock: 400, unit: 'Tablets', price: 4, minStock: 100, expiryDate: '2027-03-20' },
  { id: 5, name: 'Amlodipine', category: 'Antihypertensive', stock: 45, unit: 'Tablets', price: 6, minStock: 50, expiryDate: '2026-11-10' },
  { id: 6, name: 'Aspirin', category: 'Antiplatelet', stock: 600, unit: 'Tablets', price: 1.5, minStock: 150, expiryDate: '2028-01-15' },
];

// Analytics data
export const analyticsData = {
  patientGrowth: [
    { month: 'Jul', patients: 320 },
    { month: 'Aug', patients: 380 },
    { month: 'Sep', patients: 420 },
    { month: 'Oct', patients: 490 },
    { month: 'Nov', patients: 540 },
    { month: 'Dec', patients: 610 },
    { month: 'Jan', patients: 680 },
  ],
  revenueData: [
    { month: 'Jul', revenue: 45000 },
    { month: 'Aug', revenue: 52000 },
    { month: 'Sep', revenue: 49000 },
    { month: 'Oct', revenue: 63000 },
    { month: 'Nov', revenue: 71000 },
    { month: 'Dec', revenue: 78000 },
    { month: 'Jan', revenue: 85000 },
  ],
  departmentLoad: [
    { name: 'Cardiology', value: 25 },
    { name: 'Neurology', value: 18 },
    { name: 'Orthopedics', value: 22 },
    { name: 'Pediatrics', value: 15 },
    { name: 'Others', value: 20 },
  ],
  appointmentsPerDay: [
    { day: 'Mon', appointments: 45 },
    { day: 'Tue', appointments: 52 },
    { day: 'Wed', appointments: 48 },
    { day: 'Thu', appointments: 61 },
    { day: 'Fri', appointments: 55 },
    { day: 'Sat', appointments: 38 },
    { day: 'Sun', appointments: 25 },
  ],
};

// Dummy patients
export const patients = [
  {
    id: 1,
    patientId: 'P12345',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '+1-234-567-8900',
    email: 'john.doe@email.com',
    address: '123 Main St, New York, NY 10001',
    emergencyContact: '+1-234-567-8901',
    registeredDate: '2025-06-15',
    lastVisit: '2026-01-05',
  },
  {
    id: 2,
    patientId: 'P12346',
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    bloodGroup: 'A+',
    phone: '+1-234-567-8902',
    email: 'jane.smith@email.com',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    emergencyContact: '+1-234-567-8903',
    registeredDate: '2025-08-20',
    lastVisit: '2026-01-04',
  },
];

// Dummy staff
export const staff = [
  { id: 1, name: 'Emma Thompson', role: 'Nurse', department: 'Cardiology', shift: 'Morning', phone: '+1-234-567-8910', joinDate: '2023-05-15' },
  { id: 2, name: 'David Martinez', role: 'Technician', department: 'Laboratory', shift: 'Evening', phone: '+1-234-567-8911', joinDate: '2024-02-10' },
  { id: 3, name: 'Sophia Lee', role: 'Pharmacist', department: 'Pharmacy', shift: 'Morning', phone: '+1-234-567-8912', joinDate: '2023-11-20' },
  { id: 4, name: 'Oliver Brown', role: 'Receptionist', department: 'Front Desk', shift: 'Morning', phone: '+1-234-567-8913', joinDate: '2024-06-01' },
];
