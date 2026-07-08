import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "When is the best time to visit Tanzania?",
    answer:
      "Tanzania is great year-round, but June to October is excellent for safaris, while January to March is good for calving season in Serengeti.",
  },
  {
    question: "Do you arrange Kilimanjaro treks?",
    answer:
      "Yes. We organize Kilimanjaro climbs with professional mountain guides, porters, meals, camping equipment and safety support.",
  },
  {
    question: "Can you customize a safari package?",
    answer:
      "Yes. We can customize safaris based on your budget, travel dates, group size and preferred destinations.",
  },
  {
    question: "Do you offer Zanzibar holidays?",
    answer:
      "Yes. We arrange Zanzibar beach holidays, Stone Town tours, spice tours, airport transfers and honeymoon packages.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-center text-5xl font-bold text-forest">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl bg-white p-7 shadow-xl">
              <h2 className="text-xl font-bold text-forest">{faq.question}</h2>
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}