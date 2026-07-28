import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../hooks/useTheme';

interface IThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: IThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const nextTheme = isDarkTheme ? 'light' : 'dark';

  return (
    <button
      className={`relative inline-flex h-9 w-[4.25rem] items-center rounded-full border border-semantic-line-rule bg-semantic-panel-bg-50 p-0.5 text-semantic-text-body shadow-lg backdrop-blur-md transition-colors hover:border-semantic-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-accent-primary ${className}`}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-8 w-8 rounded-full bg-semantic-accent-primary shadow-[0_0_18px_var(--semantic-accent-primary-30)] transition-transform duration-300 motion-reduce:transition-none ${isDarkTheme ? 'translate-x-8' : 'translate-x-0'}`}
        aria-hidden="true"
      />

      <span
        className={`relative z-10 grid h-8 w-8 place-items-center text-xs transition-colors ${isDarkTheme ? 'text-semantic-text-body' : 'text-semantic-page-bg'}`}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={faSun} />
      </span>
      <span
        className={`relative z-10 grid h-8 w-8 place-items-center text-xs transition-colors ${isDarkTheme ? 'text-semantic-page-bg' : 'text-semantic-text-body'}`}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={faMoon} />
      </span>

      <span className="sr-only">Current theme: {theme}</span>
    </button>
  );
};

export default ThemeToggle;
