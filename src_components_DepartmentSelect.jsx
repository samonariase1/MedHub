// UBTH Departments with subspecialties
export const ubthDepartments = {
  "Internal Medicine": {
    subspecialties: [
      "General Internal Medicine",
      "Cardiology",
      "Endocrinology",
      "Gastroenterology",
      "Nephrology",
      "Respiratory Medicine",
      "Rheumatology",
      "Infectious Diseases",
      "Hematology",
      "Oncology",
      "Geriatrics"
    ],
  },
  Surgery: {
    subspecialties: [
      "General Surgery",
      "Neurosurgery",
      "Cardiothoracic Surgery",
      "Orthopedic Surgery",
      "Plastic & Reconstructive Surgery",
      "Urology",
      "Pediatric Surgery",
      "Vascular Surgery",
      "Trauma Surgery",
      "Surgical Oncology"
    ],
  },
  Pediatrics: {
    subspecialties: [
      "General Pediatrics",
      "Neonatology",
      "Pediatric Cardiology",
      "Pediatric Neurology",
      "Pediatric Endocrinology",
      "Pediatric Gastroenterology",
      "Pediatric Nephrology",
      "Pediatric Oncology",
      "Pediatric Emergency",
      "Adolescent Medicine"
    ],
  },
  "Obstetrics & Gynecology": {
    subspecialties: [
      "General Obstetrics",
      "General Gynecology",
      "Maternal-Fetal Medicine",
      "Reproductive Endocrinology & Infertility",
      "Gynecologic Oncology",
      "Urogynecology",
      "Family Planning",
      "Adolescent Gynecology"
    ],
  },
  "Emergency Medicine": {
    subspecialties: [
      "Adult Emergency Medicine",
      "Pediatric Emergency",
      "Trauma",
      "Critical Care",
      "Toxicology",
      "Emergency Cardiology",
      "Disaster Medicine"
    ],
  }
};

// Comprehensive symptom list (grouped)
export const comprehensiveSymptoms = {
  Constitutional: ['Fever', 'Chills', 'Night sweats', 'Weight loss', 'Weight gain', 'Fatigue', 'Loss of appetite', 'Malaise', 'Weakness'],
  Neurological: ['Headache', 'Severe headache', 'Dizziness', 'Seizures', 'Convulsions', 'Weakness', 'Numbness', 'Confusion', 'Memory loss', 'Speech problems', 'Vision changes', 'Hearing loss', 'Balance problems'],
  Cardiovascular: ['Chest pain', 'Palpitations', 'Shortness of breath', 'Orthopnea', 'Ankle swelling', 'Syncope', 'Heart murmur', 'High blood pressure'],
  Respiratory: ['Cough', 'Chronic cough', 'Sputum production', 'Hemoptysis', 'Wheezing', 'Difficulty breathing', 'Chest tightness', 'Snoring'],
  Gastrointestinal: ['Nausea', 'Vomiting', 'Abdominal pain', 'Heartburn', 'Dysphagia', 'Diarrhea', 'Constipation', 'Blood in stool', 'Change in bowel habits'],
  Genitourinary: ['Dysuria', 'Frequency', 'Urgency', 'Nocturia', 'Hematuria', 'Incontinence', 'Reduced urine output', 'Flank pain'],
  Musculoskeletal: ['Joint pain', 'Joint swelling', 'Muscle pain', 'Back pain', 'Stiffness', 'Limited range of motion', 'Bone pain'],
  Dermatological: ['Skin rash', 'Itching', 'Skin lesions', 'Hair loss', 'Nail changes', 'Easy bruising', 'Skin discoloration'],
  Endocrine: ['Excessive thirst', 'Frequent urination', 'Heat intolerance', 'Cold intolerance', 'Excessive hunger', 'Mood changes'],
  Psychiatric: ['Depression', 'Anxiety', 'Mood swings', 'Hallucinations', 'Delusions', 'Sleep disturbances', 'Irritability'],
  Obstetric: ['Vaginal bleeding', 'Abdominal pain in pregnancy', 'Reduced fetal movement', 'Labor pains', 'Amniotic fluid leakage']
};

// Disease database with diagnosis, ICD-10, drugs, labs (Nigerian NSTG & EDL aligned)

export const diseaseDatabase = [
  {
    name: "Malaria",
    department: "Internal Medicine",
    subspecialty: "Infectious Diseases",
    icd10: "B50-B54",
    symptoms: ['Fever', 'Chills', 'Sweats', 'Headache', 'Nausea', 'Vomiting'],
    drugs: [
      "Artemether-lumefantrine",
      "Quinine sulfate",
      "Doxycycline (adjunct)",
      "Paracetamol (symptomatic)"
    ],
    labs: [
      "Malaria rapid diagnostic test (RDT)",
      "Peripheral blood smear (thick and thin films)",
      "Complete blood count (CBC)"
    ]
  },
  {
    name: "Hypertension",
    department: "Internal Medicine",
    subspecialty: "Cardiology",
    icd10: "I10",
    symptoms: ['Headache', 'Dizziness', 'Chest pain', 'Palpitations', 'Shortness of breath'],
    drugs: [
      "Amlodipine",
      "Lisinopril",
      "Hydrochlorothiazide",
      "Losartan"
    ],
    labs: [
      "Blood pressure monitoring",
      "Serum electrolytes",
      "Renal function tests",
      "Lipid profile"
    ]
  },
  {
    name: "Type 2 Diabetes Mellitus",
    department: "Internal Medicine",
    subspecialty: "Endocrinology",
    icd10: "E11",
    symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Weight loss'],
    drugs: [
      "Metformin",
      "Glibenclamide",
      "Insulin (if indicated)"
    ],
    labs: [
      "Fasting blood glucose",
      "HbA1c",
      "Urinalysis",
      "Serum creatinine"
    ]
  },
  {
    name: "Peptic Ulcer Disease",
    department: "Internal Medicine",
    subspecialty: "Gastroenterology",
    icd10: "K27",
    symptoms: ['Abdominal pain', 'Nausea', 'Vomiting', 'Heartburn'],
    drugs: [
      "Omeprazole",
      "Amoxicillin (if H. pylori positive)",
      "Clarithromycin (if H. pylori positive)",
      "Metronidazole (if H. pylori positive)"
    ],
    labs: [
      "Upper GI endoscopy",
      "H. pylori testing (stool antigen or breath test)",
      "Complete blood count"
    ]
  },
  {
    name: "Acute Appendicitis",
    department: "Surgery",
    subspecialty: "General Surgery",
    icd10: "K35",
    symptoms: ['Abdominal pain', 'Nausea', 'Vomiting', 'Fever', 'Loss of appetite'],
    drugs: [
      "IV fluids",
      "Antibiotics: Ceftriaxone + Metronidazole",
      "Analgesics"
    ],
    labs: [
      "Complete blood count",
      "Abdominal ultrasound",
      "C-reactive protein (optional)"
    ]
  },
  {
    name: "Community-acquired Pneumonia",
    department: "Internal Medicine",
    subspecialty: "Respiratory Medicine",
    icd10: "J18",
    symptoms: ['Fever', 'Cough', 'Sputum production', 'Shortness of breath', 'Chest pain'],
    drugs: [
      "Amoxicillin-clavulanate",
      "Azithromycin",
      "Paracetamol"
    ],
    labs: [
      "Chest X-ray",
      "Sputum culture and sensitivity",
      "Complete blood count"
    ]
  },
  {
    name: "Eclampsia",
    department: "Obstetrics & Gynecology",
    subspecialty: "Maternal-Fetal Medicine",
    icd10: "O15",
    symptoms: ['Seizures in pregnancy', 'Headache', 'Visual disturbances', 'Hypertension', 'Proteinuria'],
    drugs: [
      "Magnesium sulfate",
      "Antihypertensives (Labetalol, Hydralazine)",
      "IV fluids"
    ],
    labs: [
      "Urinalysis for protein",
      "Blood pressure monitoring",
      "Liver function tests",
      "Renal function tests",
      "Full blood count"
    ]
  },
  {
    name: "Asthma",
    department: "Internal Medicine",
    subspecialty: "Respiratory Medicine",
    icd10: "J45",
    symptoms: ['Wheezing', 'Cough', 'Shortness of breath', 'Chest tightness'],
    drugs: [
      "Salbutamol inhaler",
      "Inhaled corticosteroids",
      "Oral corticosteroids (if severe)"
    ],
    labs: [
      "Spirometry",
      "Peak expiratory flow rate (PEFR)",
      "Chest X-ray (to exclude other causes)"
    ]
  }
];