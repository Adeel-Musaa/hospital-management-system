import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import Button from '../../components/Button';
import './OtpVerification.css';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert('OTP Verified Successfully!');
      }, 2000);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="otp-icon">
          <FiLock size={40} />
        </div>
        <h1 className="otp-title">Verify Your Identity</h1>
        <p className="otp-subtitle">
          We've sent a 6-digit code to your registered email. Please enter it below.
        </p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input"
              placeholder="0"
              inputMode="numeric"
            />
          ))}
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={handleVerify}
          disabled={otp.join('').length !== 6 || isLoading}
        >
          {isLoading ? 'Verifying...' : 'Verify OTP'}
        </Button>

        <div className="otp-footer">
          <p>Didn't receive the code? <a href="#resend">Resend in 30s</a></p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
