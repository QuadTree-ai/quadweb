// src/app/api/pricing/apiPricingData.tsx
import { FiServer, FiDatabase, FiCpu, FiLock, FiSettings, FiActivity } from 'react-icons/fi';

export const apiPlans = [
    {
        name: "Starter Plan",
        price: "₹299",
        features: [
            { text: "10,000 API calls per month", icon: FiCpu },
            { text: "Basic support", icon: FiSettings },
            { text: "Data encryption", icon: FiLock }
        ],
        description: "A great entry-level plan for small projects."
    },
    {
        name: "Pro Plan",
        price: "₹999",
        features: [
            { text: "100,000 API calls per month", icon: FiCpu },
            { text: "Priority support", icon: FiSettings },
            { text: "Advanced analytics", icon: FiActivity },
            { text: "Data encryption", icon: FiLock },
            { text: "Custom API integrations", icon: FiServer }
        ],
        description: "Perfect for growing applications that need more resources."
    },
    {
        name: "Enterprise Plan",
        price: "₹4999",
        features: [
            { text: "Unlimited API calls", icon: FiCpu },
            { text: "Dedicated support", icon: FiSettings },
            { text: "Comprehensive analytics and reporting", icon: FiActivity },
            { text: "Enhanced security features", icon: FiLock },
            { text: "Custom API integrations and SLA", icon: FiServer },
            { text: "Dedicated account manager", icon: FiDatabase }
        ],
        description: "Designed for large enterprises with extensive needs."
    }
];
