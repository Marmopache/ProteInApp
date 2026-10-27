import PageHeader from "../../components/ui/PageHeader";
import ComingSoon from "../../components/ui/ComingSoon";

export default function Recipes() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <PageHeader
        title="Recetas"
        description="Ideas de comidas con lo que tienes en casa."
      />
      <ComingSoon phase="Fase 6" />
    </div>
  );
}
