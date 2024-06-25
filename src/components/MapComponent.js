import React from 'react';

function MapComponent() {
  return (
    <div className="map-component">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1503822695863!2d-77.03910472420974!3d38.89767627172399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sBia%C5%82y%20Dom!5e0!3m2!1spl!2spl!4v1719169882344!5m2!1spl!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </div>
  );
}

export default MapComponent;
