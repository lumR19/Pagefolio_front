const Navbar = () => {
  return (
    <nav className="font-[Cairo] w-full">
      <div className="flex flex-col items-center py-4 px-4 lg:flex-row lg:justify-between lg:items-center lg:px-20">

        {/* روابط + لوقو */}
        <div className="flex flex-col items-center lg:flex-row lg:gap-6 lg:order-2">
          {/* اللوقو */}
          <div className="mb-4 lg:mb-0">
            <img
              src="src/assets/Logohbab.png"
              alt="شعار"
              className="w-24 h-20"
            />

          </div>

          {/* الروابط + الأزرار (في الجوال مع بعض، في lg يتفرقوا) */}
          <ul className="flex flex-wrap justify-center items-center gap-4 text-white font-bold text-[14px] lg:text-[18px]">
            <li className="cursor-pointer">من نحن</li>
            <li className="cursor-pointer">واجهتنا</li>
            <li className="cursor-pointer">المميزات</li>
            <li className="cursor-pointer">عملاءنا</li>

            {/* الزرين داخل UL للجوال، بس يطلعون منها في الشاشات الكبيرة */}
            <li className="block lg:hidden bg-[#DCB12E] text-white px-4 py-1 rounded-full text-sm hover:bg-[#bb9d5b] transition cursor-pointer">
              !انشئ ملفك
            </li>
            <li className="block lg:hidden text-[#DCAD27] font-extrabold text-sm cursor-pointer">
              للدخول لملفك
            </li>
          </ul>
        </div>

        {/* الزرين فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex gap-3 lg:order-1">
          <button className="bg-[#DCB12E] text-white px-4 py-1 rounded-full lg:text-lg hover:bg-[#bb9d5b] transition cursor-pointer">
            !انشئ ملفك
          </button>
          <button className="text-[#DCAD27] font-extrabold lg:text-lg cursor-pointer">للدخول لملفك</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
