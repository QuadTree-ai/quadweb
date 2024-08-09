// src/app/documentation/documentationData.tsx
import { FiBookOpen, FiCode, FiSettings, FiHelpCircle, FiUserCheck } from 'react-icons/fi';

export const documentationSections = [
    {
        title: "Getting Started",
        description: "Learn how to get started with our platform, including account setup and initial configurations.",
        icon: FiBookOpen,
        link: "/documentation/getting-started"
    },
    {
        title: "API Reference",
        description: "Detailed API documentation, including endpoints, request parameters, and response formats.",
        icon: FiCode,
        link: "/documentation/api-reference"
    },
    {
        title: "Configuration",
        description: "Instructions on configuring your account, managing settings, and integrating with other services.",
        icon: FiSettings,
        link: "/documentation/configuration"
    },
    {
        title: "FAQs",
        description: "Frequently asked questions and troubleshooting tips.",
        icon: FiHelpCircle,
        link: "/documentation/faqs"
    },
    {
        title: "User Guide",
        description: "Comprehensive user guide covering all aspects of our platform.",
        icon: FiUserCheck,
        link: "/documentation/user-guide"
    }
];
