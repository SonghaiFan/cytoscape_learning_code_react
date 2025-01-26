import { ReactNode } from "react";

interface ExampleSectionProps {
  title?: string;
  children: ReactNode;
  description?: string;
}

export function ExampleSection({
  title,
  description,
  children,
}: ExampleSectionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
}
