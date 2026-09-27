import SectionHeader from '../common/SectionHeader'

const steps = [
  { n: '01', title: 'Discover', text: "Find restaurants and dishes you'll love." },
  { n: '02', title: 'Choose',   text: 'Pick your favorites and build your order.' },
  { n: '03', title: 'Enjoy',    text: 'Check out and wait for the good stuff.' },
]

export default function HowItWorks() {
  return (
    <section className="container-nomi pb-20 md:pb-32">
      <SectionHeader eyebrow="How NOMI works" title="Three steps. That's it." />

      <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
        {/* connector line — desktop only */}
        <div className="hidden md:block absolute top-[36px] left-[16.66%] right-[16.66%] h-px bg-line" aria-hidden />

        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="w-16 h-16 rounded-full bg-cream border border-line flex items-center justify-center font-extrabold text-accent text-lg relative z-10">
              {s.n}
            </div>
            <h3 className="text-xl font-bold mt-5">{s.title}</h3>
            <p className="text-muted mt-2 max-w-xs">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}