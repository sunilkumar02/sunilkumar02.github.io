interface ISkillPillProps {
  label: string;
}

const SkillPill = ({ label }: ISkillPillProps) => {
  return (
    <span className="inline-flex rounded-full border border-semantic-accent-primary-40 bg-semantic-panel-bg-50 px-4 py-2 text-xs font-medium text-semantic-text-body shadow-[inset_0_0_12px_var(--semantic-accent-primary-10)]">
      {label}
    </span>
  );
};

export default SkillPill;
