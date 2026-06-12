import { FormsList } from "@/app/(dashboard)/_components/forms-list";

export const metadata = {
  title: "Forms — WebForm Verse",
};

export default function FormsPage() {
  return (
    <div>
      {/* Hero band */}
      <section className="mb-8">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.4em] text-konoha-orange">
          Forms
        </p>
        <h1 className="font-heading text-3xl font-black tracking-tight md:text-4xl">
          Form Archive
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Every form you&apos;ve built. Sort, search, publish across the web,
          or close it when it&apos;s complete.
        </p>
      </section>

      <FormsList full />
    </div>
  );
}
