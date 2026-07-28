import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ICardSmallProps {
  label: string;
  value: string;
  icon: IconProp;
}

const CardSmall = ({ label, value, icon }: ICardSmallProps) => {
  return (
    <div className="min-w-0 rounded-xl border border-semantic-line-rule bg-semantic-panel-bg-03-40 px-4 py-4">
      <dt className="flex items-center gap-2 text-xs font-semibold text-semantic-accent-primary">
        <FontAwesomeIcon icon={icon} />
        {label}
      </dt>
      <dd className="mt-2 truncate text-[0.7rem] leading-5 text-semantic-text-body" title={value}>
        {value}
      </dd>
    </div>
  );
};

export default CardSmall;
