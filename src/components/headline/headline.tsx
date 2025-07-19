import  { HeadlineType, TextAlignment } from "@utils/enums/enums";
import style from './headline.module.scss'

interface HeadlineProps {
    title: string;
    subTitle?: string;
    aligment?: TextAlignment;
    type?: HeadlineType;
}

const Headline:React.FC<HeadlineProps> = ({title, subTitle, aligment = TextAlignment.Left, type = HeadlineType.Underline}) => {
    return (
        <>
            <div className={`${style['headlineOuter']} ${style[aligment]} ${style[type]} text-${aligment}`}>
                <div className={`${style['title']}`}>{title}</div>
                {subTitle && <div className={`${style['subtitle']} text-${aligment}`}>{subTitle}</div>}
            </div>
        </>
    )
}

export default Headline