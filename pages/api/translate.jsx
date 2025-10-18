// // pages/api/translate.js
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Only POST requests allowed" });
//   }

//   try {
//     const { text, targetLang } = req.body;

//     const response = await fetch(
//       `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(
//         text
//       )}`
//     );
//     const data = await response.json();

//     const translatedText = data[0][0][0];
//     res.status(200).json({ translatedText });
//   } catch (error) {
//     res.status(500).json({ error: "Translation failed" });
//   }
// }

// pages/api/translate.js

// ✅ pages/api/translate.js
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { text, targetLang } = req.body;

  try {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text",
      }),
    });

    const data = await response.json();
    res.status(200).json({ translatedText: data.translatedText });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
}
