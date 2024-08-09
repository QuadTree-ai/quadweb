// src/app/documentation/documentationData.tsx
import { FiBookOpen, FiCode, FiSettings, FiHelpCircle, FiUserCheck, FiShield, FiLayers, FiZap } from 'react-icons/fi';

export const documentationSections = [
    {
        title: "Getting Started",
        description: "Learn how to get started with our platform, including account setup and initial configurations.",
        icon: FiBookOpen,
    },
    {
        title: "API Reference",
        description: "Detailed API documentation, including endpoints, request parameters, and response formats.",
        icon: FiCode,
    },
    {
        title: "Configuration",
        description: "Instructions on configuring your account, managing settings, and integrating with other services.",
        icon: FiSettings,
    },
    {
        title: "FAQs",
        description: "Frequently asked questions and troubleshooting tips.",
        icon: FiHelpCircle,
    },
    {
        title: "User Guide",
        description: "Comprehensive user guide covering all aspects of our platform.",
        icon: FiUserCheck,
    },
    {
        title: "Security",
        description: "Learn about our security practices and how we keep your data safe.",
        icon: FiShield,
    },
    {
        title: "Advanced Features",
        description: "Explore advanced features and functionalities for power users.",
        icon: FiZap,
    },
    {
        title: "Integration",
        description: "Guide on integrating our platform with third-party services.",
        icon: FiLayers,
    }
];
