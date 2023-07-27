import React from "react";

const PasswordStrengthIndicator = ({ password = '' }) => {
    const getpasswordStrength = () => {
        const passwordLength = password.length;

        if (passwordLength < 1) {
            return "At least enter 8 characters";
        } else if (passwordLength < 4) {
            return "Very weak password";
        } else if (passwordLength < 12) {
            return "Good password";
        } else {
            return "Very strong password";
        }
    };

    const passwordStrength = getpasswordStrength();

    return (
        <div className="password-Strength">
            Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
        </div>
    );
};
export default PasswordStrengthIndicator;
