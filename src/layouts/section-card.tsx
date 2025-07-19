interface SectionCardProps {
    className?: string;
    styles?: React.CSSProperties;
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children, className, styles }) => {
    return (
        <div className={`section-card ${className}`} style={styles}>
            {children}
        </div>
    );
}

export default SectionCard;
