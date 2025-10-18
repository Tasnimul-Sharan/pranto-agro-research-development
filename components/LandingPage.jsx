"use client";
import { useTranslation } from "next-i18next";

export default function LandingPage() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="mt-6 inline-flex gap-3">
          <a
            href="#visit"
            className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-md text-sm"
          >
            {t("visit")}
          </a>
          <a
            href="#agriculture"
            className="bg-white text-green-800 px-5 py-2 rounded-md text-sm font-semibold"
          >
            {t("explore")}
          </a>
        </div>
      </div>
    </section>
  );
}
