// src/app/security/securityData.tsx
import { AiOutlineLock, AiOutlineAudit, AiOutlineGlobal, AiOutlineSafetyCertificate, AiOutlineUser, AiOutlineBug } from 'react-icons/ai';

export type SecurityInfo = {
    title: string;
    description: string;
    icon: JSX.Element;
};

export const securityData: SecurityInfo[] = [
    {
        title: "Enterprise Privacy and Consumer Protection",
        description: "We prioritize the security of our operations, protecting the computing efforts that drive our AI technologies and preparing for emerging security challenges.",
        icon: <AiOutlineLock  />,
    },
    {
        title: "Compliance and Accreditation",
        description: "Our services comply with key privacy laws like GDPR and CCPA. We offer a Data Processing Addendum to facilitate compliance and have received SOC 2 Type 2 accreditation.",
        icon: <AiOutlineAudit  />,
    },
    {
        title: "External Auditing",
        description: "Annual third-party penetration testing ensures any security weaknesses are identified and rectified, safeguarding against threats.",
        icon: <AiOutlineGlobal  />,
    },
    {
        title: "Data Encryption and Security",
        description: "All customer data is encrypted both in transit and at rest using state-of-the-art security technologies to prevent unauthorized access.",
        icon: <AiOutlineSafetyCertificate  />,
    },
    {
        title: "User Privacy and Data Control",
        description: "Users have full control over their data with options to view, modify, and delete information in accordance with privacy regulations.",
        icon: <AiOutlineUser  />,
    },
    {
        title: "Bug Bounty Program",
        description: "We encourage ethical hackers to help us maintain the highest security standards through our Bug Bounty Program, offering rewards for vulnerability disclosures.",
        icon: <AiOutlineBug  />,
    }
];
