// src/app/overview/overviewData.tsx
import { AiOutlineInfoCircle, AiOutlineSave, AiOutlineBulb } from 'react-icons/ai';

export type SectionData = {
    title: string;
    content: string;
    buttonLabel: string;
    onButtonClick: () => void;
    icon: JSX.Element;
};

export const sections: SectionData[] = [
    {
        title: "Mission",
        content: "To revolutionize business operations through advanced technology, enhancing efficiency and creating exceptional user experiences.",
        buttonLabel: "Learn More",
        onButtonClick: () => alert("More about our mission"),
        icon: <AiOutlineInfoCircle size={20} />,
    },
    {
        title: "Services",
        content: "Advanced Data Analytics, Scalable Cloud Solutions, Custom AI Integration",
        buttonLabel: "Our Services",
        onButtonClick: () => alert("Detailed view of services"),
        icon: <AiOutlineSave size={20} />,
    },
    {
        title: "Future Goals",
        content: "We aim to expand our reach by developing new innovative products, exploring emerging markets, and continuing our commitment to technological innovation.",
        buttonLabel: "Explore Goals",
        onButtonClick: () => alert("More on future goals"),
        icon: <AiOutlineBulb size={20} />,
    },
];
