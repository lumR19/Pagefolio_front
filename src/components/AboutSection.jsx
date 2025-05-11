import myImage from "../assets/Logohbab.png"; // تأكد من وضع الصورة في المسار الصحيح

const AboutPage = () => {
  return (
    <section className="px-4 md:px-10 lg:px-15 py-12 md:py-20 lg:py-28 flex flex-col lg:flex-row items-center justify-center gap-10">

      {/* النصوص */}
      <div className="w-full lg:w-1/2 text-right px-2 md:px-5 lg:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">مين هبـــّــــــــــاب؟</h1>

        <p className="text-base md:text-xl lg:text-2xl text-black leading-7 md:leading-8 mb-6">
          في هبّاب، أنت المصمم، وأنت القائد، ونحن الجسر الذي يحول رؤيتك إلى واقع.
          تخيل لاندينج بيج كأنها مرآتك: ألوانك، أفكارك، صورك، ذوقك — بضغطة زر، تتحول إلى حضور رقمي نابض بالحياة.
        </p>

        <p className="text-base md:text-xl lg:text-2xl text-black leading-7 md:leading-8 mb-6">
          كل ما تحتاجه هو أن تخبرنا كيف تتخيل صفحة أحلامك — من الألوان والثيمات إلى الصور والفيديوهات والأقسام —
          ونحن نصنعها لك ببساطة، بدون تعقيد ولا انتظار، وبدون الحاجة إلى أي كود. في عالم يتغير بسرعة،
          نؤمن أن التخصيص السهل والنتائج الفورية هما سر النجاح الحقيقي.
        </p>

        <p className="text-base md:text-xl lg:text-2xl text-black leading-7 md:leading-8 mb-6">
          في هبّاب، نصغي إلى تفاصيلك الصغيرة قبل الكبيرة، ونحول أفكارك إلى صفحات تبهر العالم.
          معنا، أنت تبدأ الحكاية، ونحن نكتب لك أجمل فصولها.
        </p>
      </div>

      {/* الصورة */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <img
          src={myImage}
          alt="Logo"
          className="w-60 md:w-80 lg:w-[30rem] h-auto object-contain lg:mr-36"
        />
      </div>
    </section>
  );
};

export default AboutPage;
