import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Banner({
  changeLanguage,
  local,
}: {
  changeLanguage: (language: string) => void;
  local: string;
}) {
  const { t } = useTranslation();

  return (
    <section className="bg-black  text-center">
      <div className="container  m-auto h-[48] flex items-center justify-around  p-2">
        <p>
          <span className="text-white text-[14px] ">
            {t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}
          </span>
          <Link to={"/"} className="font-bold ml-[10px] text-white">
            {t("Shop Now")}
          </Link>
        </p>
        <select
          value={local}
          onChange={(e) => changeLanguage(e.target.value)}
          className="text-white outline-none bg-black"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </section>
  );
}
