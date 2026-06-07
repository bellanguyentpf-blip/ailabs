type Section = { title: string; body: string[] }

export function ServiceSectionsAccordion({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-col">
      {sections.map((section, i) => (
        <div key={section.title} className="grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-16 md:py-12">
          <div>
            <h3 className="font-display text-lg font-medium leading-snug">
              {section.title}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {section.body.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
