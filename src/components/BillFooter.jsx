import "../bengali-font.css";

const BillFooter = ({ data }) => {
  const { teacherName, calculatedBill } = data;

  return (
    <div className="bengaliPoppins px-12">
      <section className="">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>প্রতি স্বাক্ষর</p>
            <p>পরীক্ষা পরিষদের সভাপতি</p>
            <p>............বিভাগ</p>
          </div>
          <div>
            <p>........................</p>
            <p>পরীক্ষক/নিরীক্ষক/সন্নিবেশকের স্বাক্ষর</p>
            <p>বর্তমান ঠিকানা..........................</p>
          </div>
        </div>
        <div className="mt-4">
          <p>তারিখ................</p>
          <p>
            ডঃ/জনাব {teacherName ? teacherName : "........................."} কে
            (অংকে) টাকা {calculatedBill ? calculatedBill : "..................."}
          </p>
          <p>
            (কথায়)...............................পয়সা.................মাত্র দেওয়া
          </p>
          <p>যাইতে পারে।</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p>....................................</p>
            <p>পরীক্ষক/নিরীক্ষক/সন্নিবেশকের স্বাক্ষর</p>
            <p>তারিখ..............................</p>
            <p>(বিলে উল্লেখিত সমুদয় টাকা বুঝিয়া পাইলাম)</p>
          </div>
          <div className="flex items-center justify-center border border-black h-24">
            <p>স্বাক্ষর</p>
          </div>
        </div>
        <div className="mt-4">
          <p>পরীক্ষা উপ-নিয়ন্ত্রক</p>
          <p>ঢাকা বিশ্ববিদ্যালয়।</p>
        </div>
        <div className="mt-4">
          <p>
            বিঃ দ্রঃ- (ক) ২০০.০০ টাকার উর্ধে দাবী রাজস্ব টিকিট ব্যতীত পরিশোধ করা
            যাইবে না।
          </p>
          <p>
            (খ) পরীক্ষক সরকারী চাকুরীয়া হইলে যথাযথ কর্মকর্তার অনুমতি ব্যতিরেকে
            দাবী পরিশোধ করা হইবে না।
          </p>
        </div>
        <div className="mt-4">
          <p>ঢবপ-৩৮৬-১২-০৬-২২-১,০০,০০০ কপি</p>
        </div>
      </section>
    </div>
  );
};

export default BillFooter;
