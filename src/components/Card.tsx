import { NavLink } from "react-router-dom";
import { ArrowRight, Icon } from "@phosphor-icons/react";

type CardProps = {
    page: string;
    CardIcon: Icon;
    label: string;
    labelLink: string;
};

const Card = function ({ page, CardIcon, label, labelLink }: CardProps) {
    return (
        <NavLink to={page}>
            <div className="group flex gap-4 items-center p-4 border hover:border-red-400 border-gray-300 rounded-lg cursor-pointer transition-all shadow-sm">
                <div className="h-14 w-14 flex items-center justify-center border border-gray-300 rounded-full">
                    <CardIcon size={20} />
                </div>
                <div className="flex-1"> {label} </div>
                <div className="flex items-center gap-2 group-hover:text-red-600 transition-all">
                    <span> {labelLink} </span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
