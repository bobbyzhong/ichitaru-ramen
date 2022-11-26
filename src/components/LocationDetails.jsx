import React from "react";

export default function LocationDetails({ county, city, phone, address }) {
  return (
    <div className="contact">
      <div className="county">{county}</div>
      <h3 className="city">{city}, CA</h3>
      <span className="apps">
        <a href="https://www.doordash.com/store/ichitaru-ramen-cypress-626144/">
          <img className="app" src="assets/icons/doordash.png" alt="uber-eats" />
        </a>
        <a href="https://www.ubereats.com/store/ichitaru-ramen/5Xcaqg6HT1OgtUEyotUL9A">
          <img className="app" src="assets/icons/ubereats.png" alt="uber-eats" />
        </a>
        <a href="https://www.grubhub.com/restaurant/ichitaru-ramen-5721-lincoln-ave-ste-f-cypress/1224511">
          <img className="app" src="assets/icons/grubhub.png" alt="uber-eats" />
        </a>
      </span>
      <h3 className="phone">{phone}</h3>
      <p className="address">{address}</p>
      <div className="hours">
        <p className="hoursText">
          Sun 11:00 am - 9:00 pm
          <br />
          Mon 11:00 am - 9:00 pm
          <br />
          Tue 11:00 am - 9:00 pm
          <br />
          Wed 11:00 am - 9:00 pm
          <br />
          Thu 11:00 am - 9:00 pm
          <br />
          Fri 11:00 am - 9:00 pm
          <br />
          Sat 11:00 am - 9:00 pm
        </p>
      </div>
    </div>
  );
}
