type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider ${
          dark
            ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            : "bg-cyan-50 text-cyan-700"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-black tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
