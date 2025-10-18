"use client";
import { useTranslation } from "next-i18next";

export default function VisionMission() {
  const { t } = useTranslation("common");

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          {t("vision_mission_title")}
        </h2>

        <p className="text-gray-700 mb-4">
          <strong>{t("vision")}:</strong> {t("vision_text")}
        </p>

        <div className="text-gray-700">
          <strong>{t("mission")}:</strong>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>{t("mission_1")}</li>
            <li>{t("mission_2")}</li>
            <li>{t("mission_3")}</li>
            <li>{t("mission_4")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
