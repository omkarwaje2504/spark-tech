const steps = [
  {
    title: 'Consultation and plant brief',
    description: 'Capture capacity targets, feedstock, product mix, utilities, and expansion goals before engineering starts.',
  },
  {
    title: 'Process design and detailed engineering',
    description: 'Translate business requirements into practical process flow, equipment scope, and execution-ready planning.',
  },
  {
    title: 'Procurement and fabrication',
    description: 'Align materials, equipment, and fabrication decisions with the approved process and delivery schedule.',
  },
  {
    title: 'Installation and commissioning',
    description: 'Coordinate site execution, startup, and performance stabilization with fewer handoff gaps.',
  },
  {
    title: 'Training and post-handover support',
    description: 'Equip operators and maintenance teams to run the plant with confidence after commissioning.',
  },
];
const triggers = [
  'Planning a new edible oil plant',
  'Increasing throughput or product range',
  'Upgrading an existing refinery line',
];

export default function ProcessFlow() {
  return (
    <section className="bg-[#f6f8fb] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950">
              Process clarity reduces buying friction
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
              B2B buyers want to understand how a project moves from discussion to delivery. A visible process
              builds confidence before the first call.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-4 rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[72px_minmax(0,1fr)] md:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-55/10 text-lg font-semibold text-sky-700">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">Typical triggers</p>
            <div className="mt-4 space-y-3">
              {triggers.map((trigger) => (
                <div key={trigger} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-700">
                  {trigger}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-gray-950 px-5 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">What buyers get</p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>Clearer scope before procurement decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>Fewer execution handoffs across the project lifecycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>One accountable engineering partner through commissioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

