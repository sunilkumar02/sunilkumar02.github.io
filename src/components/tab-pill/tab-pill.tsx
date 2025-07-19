import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './tab-pill.module.css'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TabPillProps {
    label: string;
    id?: string;
    icon?: IconProp;
    pillType: 'notify' | 'tab';
    isActive?: boolean;
    className?: string;
    onTabClick?: (propDetails: TabPillProps) => void;
}

const TabPill: React.FC<TabPillProps> = ({ label, id,  isActive, icon, onTabClick, pillType, className }) => {
    const handleClick = () => {
        const propDetails = { label, id, isActive, icon, pillType };
        onTabClick?.(propDetails);
    };
    return (
        <div className={` 
                ${icon ? style['isIconTab'] : ''}
                ${style['tab-pill']} 
                ${isActive ? style['active'] : ''}
                ${style[`tab-pill--${pillType}`]}
                ${className || ''}`}
             onClick={handleClick}>
            {icon && <span className={style['tab-pill-icon']}><FontAwesomeIcon icon={icon} /></span>}
            <span className={style['tab-pill-label']}>{label}</span>
        </div>
    );
};

export default TabPill;
