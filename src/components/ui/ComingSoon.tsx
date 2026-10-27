interface ComingSoonProps {
  phase: string;
}

export default function ComingSoon({ phase }: ComingSoonProps) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
      <p className="font-medium text-gray-700">Función planificada</p>
      <p className="mt-1 text-sm text-gray-500">Se construirá en la {phase}.</p>
    </div>
  );
}
