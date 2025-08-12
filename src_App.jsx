import React, { useState } from 'react';
import DepartmentSelect from './components/DepartmentSelect.jsx';
import PatientInfo from './components/PatientInfo.jsx';
import SymptomSelector from './components/SymptomSelector.jsx';
import Diagnosis from './components/Diagnosis.jsx';
import Summary from './components/Summary.jsx';

import { ubthDepartments, comprehensiveSymptoms, diseaseDatabase } from './data.js';

const steps = [
  'Select Department',
  'Patient Info',
  'Select Symptoms',
  'View Diagnosis',
  'Summary'
];

export default function App() {
  const [step, setStep] = useState(0);
  const [department, setDepartment] = useState('');
  const [subspecialty, setSubspecialty] = useState('');
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    state: '',
    occupation: '',
    phone: '',
    maritalStatus: '',
    religion: ''
  });
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState([]);

  const next = () => {
    if (step === 2) {
      // Calculate diagnosis on symptom selection
      const diag = diagnose(selectedSymptoms, department, subspecialty);
      setDiagnosis(diag);
    }
    if (step < steps.length - 1) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  // Simple diagnosis algorithm: match symptoms to diseases in selected dept & subspecialty
  function diagnose(symptoms, dept, subspec) {
    if (!symptoms.length) return [];
    const filteredDiseases = diseaseDatabase.filter((d) => {
      if (d.department !== dept) return false;
      if (d.subspecialty && subspec && d.subspecialty !== subspec) return false;
      // count matching symptoms
      const matches = d.symptoms.filter(s => symptoms.includes(s));
      return matches.length >= Math.ceil(d.symptoms.length / 2); // at least half symptoms match
    });
    return filteredDiseases;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">UBTH Medical Diagnosis System</h1>
      <div className="mb-6 text-center font-semibold">
        Step {step + 1} of {steps.length}: {steps[step]}
      </div>

      {step === 0 && (
        <DepartmentSelect
          departments={ubthDepartments}
          department={department}
          setDepartment={setDepartment}
          subspecialty={subspecialty}
          setSubspecialty={setSubspecialty}
        />
      )}

      {step === 1 && (
        <PatientInfo patient={patient} setPatient={setPatient} />
      )}

      {step === 2 && (
        <SymptomSelector
          comprehensiveSymptoms={comprehensiveSymptoms}
          selectedSymptoms={selectedSymptoms}
          setSelectedSymptoms={setSelectedSymptoms}
        />
      )}

      {step === 3 && (
        <Diagnosis diagnosis={diagnosis} />
      )}

      {step === 4 && (
        <Summary
          patient={patient}
          department={department}
          subspecialty={subspecialty}
          symptoms={selectedSymptoms}
          diagnosis={diagnosis}
        />
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={prev}
          disabled={step === 0}
          className={`px-4 py-2 rounded ${step === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-600 text-white'}`}
        >
          Previous
        </button>
        <button
          onClick={next}
          disabled={
            (step === 0 && !department) ||
            (step === 2 && !selectedSymptoms.length) ||
            (step === 1 && (!patient.name || !patient.age || !patient.gender))
          }
          className={`px-4 py-2 rounded ${(
            (step === 0 && !department) ||
            (step === 2 && !selectedSymptoms.length) ||
            (step === 1 && (!patient.name || !patient.age || !patient.gender))
          ) ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
        >
          {step === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}