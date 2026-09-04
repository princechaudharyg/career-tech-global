import Badge from "./Badge";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && <Badge>{badge}</Badge>}

      <h2 className="heading-lg mt-6">
        {title}

        {highlight && (
          <>
            <br />

            <span className="gradient-text">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="paragraph mt-6">
          {description}
        </p>
      )}
    </div>
  );
}