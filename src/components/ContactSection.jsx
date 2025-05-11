import mapImage from "/src/assets/Map.png";

const ContactSection = () => {
  return (
    <section className=" bg-no-repeat bg-gradient-to-r from-[#FFEB9A] via-[#D9AE28] to-[#E0AA25] py-10">
      <div className="container mx-auto px-30 flex flex-col md:flex-row items-center justify-between  gap-10">
        {/* خريطة */}
        <a href="*" target="_blank">
          <img
            src={mapImage}
            className="rounded-lg shadow- w-100 h-full object-cover"
          />
        </a>

        {/* نص */}
        <div className="text-white max-w-xl text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            !قم بزيارتنا للوصول وانضم الينا
          </h2>
          <p className="leading-loose text-sm md:text-base">
            في موقعنا، نؤمن أن كل فكرة تستحق أن تظهر بأفضل شكل على الإنترنت، لذلك أنشأنا نظامًا سريعًا ومرنًا يتيح لك الحصول على موقع إلكتروني خاص بك بكل سهولة. كل ما عليك هو تزويدنا بمعلوماتك الأساسية، ونحن سنتولى الباقي! من خلال منصتنا، نقوم بإنشاء موقع ديناميكي مصمم حسب احتياجك، سواء كنت صاحب مشروع، مقدم خدمة، أو حتى شخص يريد عرض أعماله في بورتفوليو أنيق. لا حاجة لأي خبرة تقنية، فقط زرنا أو تواصل معنا، وسنحوّل فكرتك إلى موقع فعّال يعكس هويتك ويبرز تميزك.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
