import '@styles/layout.css';
import { GridTemplateColumns } from '@utils/enums/enums';

interface GridLayoutProps {
    gridColumns?: GridTemplateColumns;
    children: React.ReactNode;
    className?: string;
    styles?: React.CSSProperties;
}

const GridLayout: React.FC<GridLayoutProps> = ({ gridColumns=GridTemplateColumns.four, children, className, styles }) => {
    return (
        <div className={`grid-layout ${gridColumns} ${className}`} style={styles}>
            {children}
        </div>
    );
};

export default GridLayout;
