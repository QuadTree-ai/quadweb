// src/app/cliniqx/pricing/pricingData.tsx
import { FiUsers, FiMail, FiCheckCircle, FiStar } from 'react-icons/fi';

export const plans = [
    {
        name: "Basic Plan",
        price: "₹199",
        features: [
            { text: "Access to basic features", icon: FiCheckCircle },
            { text: "Up to 5 user accounts", icon: FiUsers },
            { text: "Email support", icon: FiMail }
        ],
        description: "An affordable plan that covers all the basics."
    },
    {
        name: "Premium Plan",
        price: "₹299",
        features: [
            { text: "Access to all features", icon: FiStar },
            { text: "Unlimited user accounts", icon: FiUsers },
            { text: "Priority email support", icon: FiMail },
            { text: "Access to beta features", icon: FiCheckCircle }
        ],
        description: "Perfect for businesses looking for more comprehensive solutions."
    }
];
