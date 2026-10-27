import { ButtonLink } from "../../components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Página no encontrada</h1>
      <p className="mt-2 text-gray-600">La dirección que buscas no existe.</p>
      <ButtonLink to="/" className="mt-6">
        Volver al inicio
      </ButtonLink>
    </div>
  );
}
