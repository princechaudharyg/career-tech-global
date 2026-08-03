type SectionHeadingProps = {
    badge: string;
    title: string;
    description: string;
  };
  
  export default function SectionHeading({
    badge,
    title,
    description,
  }: SectionHeadingProps) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
  
        <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
          {title}
        </h2>
  
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    );
  }