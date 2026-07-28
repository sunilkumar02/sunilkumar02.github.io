import style from './code-pill.module.scss'

interface CodePillProps {
    codeSnippet: string[];
}

const CodePill: React.FC<CodePillProps> = ({ codeSnippet }) => {
    return (
        <div className={style["code-pill"]}>
            <span>#</span>
            <ul>
                {codeSnippet.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
};

export default CodePill;
