// src/app/cliniqx/pricing/pricingData.tsx
import { FiUsers, FiMail, FiCheckCircle, FiStar, FiDatabase, FiShield, FiActivity } from 'react-icons/fi';

export const plans = [
    {
        name: "Basic Plan",
        price: "₹499",
        features: [
            { text: "Access to basic EHR/EMR features", icon: FiCheckCircle },
            { text: "Up to 2 user accounts", icon: FiUsers },
            { text: "Basic reporting and analytics", icon: FiActivity },
            { text: "Standard email support", icon: FiMail },
            { text: "Data encryption at rest", icon: FiShield }
        ],
        description: "An affordable plan that provides essential EHR/EMR functionalities."
    },
    {
        name: "Premium Plan",
        price: "₹999",
        features: [
            { text: "Access to all EHR/EMR features", icon: FiStar },
            { text: "4 user accounts", icon: FiUsers },
            { text: "Advanced reporting and analytics", icon: FiActivity },
            { text: "Priority email and phone support", icon: FiMail },
            { text: "Data encryption and secure backups", icon: FiShield },
            { text: "Customizable dashboards", icon: FiDatabase },
            { text: "Access to beta features", icon: FiCheckCircle }
        ],
        description: "Ideal for growing practices needing advanced functionalities and support."
    },
    {
        name: "Enterprise Plan",
        price: "₹1999",
        features: [
            { text: "Comprehensive EHR/EMR platform access", icon: FiStar },
            { text: "Unlimited user accounts", icon: FiUsers },
            { text: "Full suite of reporting and analytics", icon: FiActivity },
            { text: "24/7 premium support", icon: FiMail },
            { text: "Advanced security and compliance", icon: FiShield },
            { text: "Custom integrations and APIs", icon: FiDatabase },
            { text: "Dedicated account manager", icon: FiCheckCircle },
            { text: "Early access to new features", icon: FiStar }
        ],
        description: "Designed for large healthcare organizations with extensive needs and requirements."
    }
];
