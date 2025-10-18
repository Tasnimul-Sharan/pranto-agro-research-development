"use client";
import { useTranslation } from "next-i18next";

export default function LocationAccessibility() {
  const { t } = useTranslation("common");

  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          {t("location_title")}
        </h2>

        <p className="text-gray-700">{t("location_text")}</p>

        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            <strong>{t("location_road")}</strong> {t("location_road_text")}
          </li>
          <li>
            <strong>{t("location_river")}</strong> {t("location_river_text")}
          </li>
        </ul>
      </div>
    </section>
  );
}
