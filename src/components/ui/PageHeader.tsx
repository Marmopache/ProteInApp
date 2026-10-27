interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
}
