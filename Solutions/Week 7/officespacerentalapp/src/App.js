import React from 'react';

function App() {
  const heading = <h1>Office Space Rental App</h1>;

  const officeImage = "https://png.pngtree.com/thumb_back/fw800/background/20230531/pngtree-corporate-business-office-workplace-background-image-image_2856638.jpg";

  const office = {
    name: "Sunrise Tech Park",
    rent: 55000,
    address: "123, IT Highway, Chennai"
  };

  const offices = [
    { name: "Sunrise Tech Park", rent: 55000, address: "IT Highway" },
    { name: "Downtown Spaces", rent: 65000, address: "Anna Nagar" },
    { name: "Skyline Towers", rent: 60000, address: "T Nagar" },
    { name: "EcoSpace Hub", rent: 70000, address: "Guindy" },
    { name: "Budget Base", rent: 40000, address: "Velachery" },
  ];

  const rentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: 'bold'
    };
  };

  return (
    <div className="App">
      {heading}

      <img src={officeImage} alt="Office" style={{ width: '400px', height: '200px' }} />

      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={rentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Spaces:</h2>
      <ul>
        {offices.map((o, i) => (
          <li key={i}>
            <p><strong>Name:</strong> {o.name}</p>
            <p><strong>Rent:</strong> <span style={rentStyle(o.rent)}>{o.rent}</span></p>
            <p><strong>Address:</strong> {o.address}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
