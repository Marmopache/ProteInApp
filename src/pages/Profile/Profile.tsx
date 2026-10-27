import PageHeader from "../../components/ui/PageHeader";
import ComingSoon from "../../components/ui/ComingSoon";

export default function Profile() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <PageHeader
        title="Perfil y meta de proteína"
        description="Tu meta diaria y el progreso de hoy."
      />
      <ComingSoon phase="Fase 3" />
    </div>
  );
}
