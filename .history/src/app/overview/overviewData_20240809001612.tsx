// src/app/overview/overviewData.tsx
import { FaInfoCircle, FaTools, FaRocket } from 'react-icons/fa'; // Example icons
import { SectionData } from './types'; // Assuming you have defined types separately

export const sections: SectionData[] = [
    {
        title: "Mission",
        content: "To revolutionize business operations through advanced technology, enhancing efficiency and creating exceptional user experiences.",
        buttonLabel: "Learn More",
        onButtonClick: () => alert("More about our mission"),
        icon: FaInfoCircle,
    },
    {
        title: "Services",
        content: "Advanced Data Analytics, Scalable Cloud Solutions, Custom AI Integration",
        buttonLabel: "Our Services",
        onButtonClick: () => alert("Detailed view of services"),
        icon: FaTools,
    },
    {
        title: "Future Goals",
        content: "We aim to expand our reach by developing new innovative products, exploring emerging markets, and continuing our commitment to technological innovation.",
        buttonLabel: "Explore Goals",
        onButtonClick: () => alert("More on future goals"),
        icon: FaRocket,
    },
];
