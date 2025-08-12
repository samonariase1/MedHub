import React from 'react';

export default function DepartmentSelect({ departments, department, setDepartment, subspecialty, setSubspecialty }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Select Department</label>
      <select
        className="w-full p-2 border rounded"
        value={department}
        onChange={e => {
          setDepartment(e.target.value);
          setSubspecialty('');
        }}
      >
        <option value="">-- Select Department --</option>
        {Object.entries(departments).map(([dept, data]) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      {department && departments[department].subspecialties.length > 0 && (
        <>
          <label className="block mt-4 mb-2 font-semibold">Select Subspecialty (optional)</label>
          <select
            className="w-full p-2 border rounded"
            value={subspecialty}
            onChange={e => setSubspecialty(e.target.value)}
          >
            <option value="">-- None --</option>
            {departments[department].subspecialties.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}