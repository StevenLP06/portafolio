const VARIANT_CLASSES = {
  primary:
    'bg-cyan text-bg hover:shadow-[0_0_20px_-2px_rgba(79,214,196,0.6)] hover:-translate-y-0.5',
  secondary:
    'border border-border dark:border-border text-ink-light dark:text-ink hover:border-cyan hover:text-cyan',
  ghost: 'text-ink-light dark:text-ink hover:text-cyan',
};

/**
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'button'|'a'} as - permite renderizar como <a> para anclas/enlaces externos
 */
export default function Button({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Component = as;
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none';

  return (
    <Component className={`${base} ${VARIANT_CLASSES[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
