import BenefitsSection from '@/components/BenefitsSection'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[var(--dark-green)] mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              UjiPawa draws from generations of Kenyan tradition, combining nourishing porridge with carefully 
              selected local herbs to promote health and wellness.
            </p>
          </div>
          <BenefitsSection />
        </div>
      </section>
    </div>
  )
}