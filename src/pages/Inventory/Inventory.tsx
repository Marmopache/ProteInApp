import PageHeader from "../../components/ui/PageHeader";
import ComingSoon from "../../components/ui/ComingSoon";

export default function Inventory() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <PageHeader
        title="Inventario"
        description="Alimentos de tu refrigerador y despensa."
      />
      <ComingSoon phase="Fase 2" />
    </div>
  );
}
