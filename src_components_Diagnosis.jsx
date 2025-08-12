import React from 'react';

export default function Diagnosis({ diagnosis }) {
  if (diagnosis.length === 0) {
    return <p className="italic text-gray-600">No diagnosis matched the symptoms.</p>;
  }

  return (
    <div>
      {diagnosis.map((disease, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded shadow-sm bg-white">
          <h2 className="text-xl font-bold mb-2">{disease.name}</h2>
          <p><strong>ICD-10 Code:</strong> {disease.icd10}</p>
          <p className="mt-2"><strong>Department:</strong> {disease.department}</p>
          {disease.subspecialty && <p><strong>Subspecialty:</strong> {disease.subspecialty}</p>}
          <p className="mt-2"><strong>Common Symptoms:</strong> {disease.symptoms.join(', ')}</p>
          <div className="mt-3">
            <strong>Recommended Drugs (NSTG/EDL):</strong>
            <ul className="list-disc list-inside ml-5">
              {disease.drugs.map((drug, i) => (
                <li key={i}>{drug}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <strong>Further Laboratory Tests:</strong>
            <ul className="list-disc list-inside ml-5">
              {disease.labs.map((lab, i) => (
                <li key={i}>{lab}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}