import { useState } from 'react';

function PhoneNumberInput({ onChange }) {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedInput = input.replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (_, p1, p2, p3) => {
      let result = '';
      if (p1) result += `${p1}`;
      if (p2) result += `-${p2}`;
      if (p3) result += `-${p3}`;
      return result;
    });

    setFormattedPhoneNumber(formattedInput);

    // Call the parent's onChange prop with the formatted phone number
    onChange(formattedInput);
  };

  return (
    <div>
      <label htmlFor='phoneNumber'>Phone:</label>
      <input
        type='tel'
        name='phoneNumber'
        className='form-control'
        placeholder='Enter Phone Number'
        value={formattedPhoneNumber}
        onChange={handlePhoneNumberChange}
        inputMode="numeric"
        maxLength={12} // Limit total characters to 12 (including dashes)
        required
      />
    </div>
  );
}

export default PhoneNumberInput;
