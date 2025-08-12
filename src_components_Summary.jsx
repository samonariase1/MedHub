import React from 'react';

export default function Summary({ patient, department, subspecialty, symptoms, diagnosis }) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>

      <section className="mb-4">
        <h3 className="font-semibold">Patient Information</h3>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        {patient.state && <p><strong>State of Origin:</strong> {patient.state}</p>}
        {patient.occupation && <p><strong>Occupation:</strong> {patient.occupation}</p>}
        {patient.phone && <p><strong>Phone Number:</strong> {patient.phone}</p>}
        {patient.maritalStatus && <p><strong>Marital Status:</strong> {patient.maritalStatus}</p>}
        {patient.religion && <p><strong>Religion:</strong> {patient.religion}</p>}
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Department</h3>
        <p>{department} {subspecialty && `> ${subspecialty}`}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Selected Symptoms</h3>
        <p>{symptoms.join(', ')}</p>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Possible Diagnoses</h3>
        {diagnosis.length === 0 && <p>No matching diagnosis found.</p>}
        {diagnosis.map((d, i) => (
          <div key={i} className="mb-3 p-3 border rounded">
            <p><strong>{d.name}</strong> (ICD-10: {d.icd10})</p>
            <p><strong>Drugs:</strong> {d.drugs.join(', ')}</p>
            <p><strong>Laboratory Tests:</strong> {d.labs.join(', ')}</p>
          </div>
        ))}
      </section>
    </div>
  );
}