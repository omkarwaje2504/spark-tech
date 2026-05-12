import ContactForm from '@/app/contact/ContactForm';

export default function QuickInquiry() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-10">
          <div className="rounded-[1.75rem] bg-gray-950 p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Send Your Enquiry
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
              Share your plant requirements, capacity targets, and processing needs.
              Our engineering team will respond with the right solution path.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Share capacity targets and product mix',
                'Mention utility limits, footprint, or expansion constraints',
                'Get routed to the right engineering discussion faster',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-gray-200">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-gray-50 p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-gray-950">Send Your Enquiry</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Fill in the basics and Sparktech can respond with the right service path and discussion scope.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
