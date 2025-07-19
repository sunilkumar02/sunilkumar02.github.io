interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h2 className="title" data-text={text}>{text}</h2>
    );
}

export default Title;