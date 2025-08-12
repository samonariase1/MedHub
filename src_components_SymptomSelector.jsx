import React from 'react';

export default function PatientInfo({ patient, setPatient }) {
  const updateField = (field, value) => {
    setPatient(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          value={patient.name}
          onChange={e => updateField('name', e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Age</label>
        <input
          type="number"
          min="0"
          value={patient.age}
          onChange={e => updateField('age', e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Gender</label>
        <select
          value={patient.gender}
          onChange={e => updateField('gender', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">State of Origin</label>
        <input
          type="text"
          value={patient.state}
          onChange={e => updateField('state', e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Occupation</label>
        <input
          type="text"
          value={patient.occupation}
          onChange={e => updateField('occupation', e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Phone Number</label>
        <input
          type="tel"
          value={patient.phone}
          onChange={e => updateField('phone', e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="+234..."
        />
      </div>

      <div>
        <label className="block font-semibold">Marital Status</label>
        <select
          value={patient.maritalStatus}
          onChange={e => updateField('maritalStatus', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Marital Status --</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Religion</label>
        <input
          type="text"
          value={patient.religion}
          onChange={e => updateField('religion', e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}