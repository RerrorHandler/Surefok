import React from 'react';

function CallButton({ phoneNumber }) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <button onClick={handleCall}>{phoneNumber}</button>
    </div>
  );
}

export default CallButton;
