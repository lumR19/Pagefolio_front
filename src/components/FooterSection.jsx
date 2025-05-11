const SiteFooter = () => {
  return (
    <footer dir="rtl" className="bg-[#0A5A7D] text-white text-sm">
      <div className="lg:container mx-auto flex md:flex-col md:flex-row justify-between items-start md:items-center gap-6 ">

        {/* القسم الأيمن - الشعار والنص داخل مربع بلون مختلف */}
        <div className="p-5 rounded-lg flex flex-col items-center md:items-start text-center md:text-right max-w-xs lg:mr-10">
          <img src="/src/assets/Logohbab.png" alt="شعار الموقع" className="w-20 h-auto mb-2" />
          <p>
            هي أول صفحة بسيطة تُمكّنكم من تفصيل صفحات الهبوط بطريقة مرنة، ذكية وسلسة.
          </p>
        </div>

        {/* القسم الأوسط - معلومات الاتصال */}
        <div className="text-center md:text-right lg:ml-10">
          <p className="font-bold">البريد الإلكتروني</p>
          <p>info@pagefolio.sa</p>
        </div>

        {/* القسم الأيسر - الأيقونات */}


      </div>

      {/* حقوق النشر */}
      <div className="bg-[#034A69] p-3 text-center text-xs">
        <p>جميع الحقوق محفوظة © Pagefolio 2025</p>
        <p>هباب سرعة وابداع</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
