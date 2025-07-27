import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'INTADMDMF10 - .NET FSD',
      startedOn: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Nithesh',
      trainer: 'Jojo',
    },
    {
      name: 'ADM21JF014 - Java FSD',
      startedOn: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Leo Das',
      trainer: 'Elisa',
    },
    {
      name: 'CDBJF21025 - Java FSD',
      startedOn: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Ana De Armas',
      trainer: 'Robert Downey Jr.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
