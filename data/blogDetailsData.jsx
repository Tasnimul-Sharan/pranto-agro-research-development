import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const blogDetailsData = {
  meta: {
    title: "Blogs | Pranto Agro Research & Development Initiatives",
    description:
      "Explore Pranto Agro’s insightful blogs on sustainable farming, aquaculture, agro-tourism, research, and eco-friendly living in Bangladesh.",
    keywords:
      "Pranto Agro, agro-tourism Bangladesh, sustainable farming, fisheries, research agriculture, eco-friendly tourism, organic farming, high-value crops",
    author: "Pranto Agro",
    url: "https://www.prantoardi.com/blogs",
    image: "https://www.prantoardi.com/blogs/blogs-og.jpg",
  },

  blogDetails: [
    {
      slug: "sustainable-agro-tourism-bangladesh",
      blogPost: {
        title: "A New Era of Sustainable Agro-Tourism in Bangladesh",
        image: "/blogs/overview/overview-1.jpg",
        author: "Pranto Agro Editorial Team",
        date: "01 AUGUST, 2025",
        description:
          "Pranto Agro stands as a pioneering agricultural hub where sustainability meets experience. Nestled within the Meghna River delta, it integrates high-value farming, eco-friendly tourism, and educational initiatives into one visionary destination.",
        checklist: [
          "Combines agriculture, aquaculture, and tourism under one roof.",
          "Promotes eco-conscious living and community engagement.",
          "Offers hands-on experiences in farming and research.",
        ],
        subImages: [
          "/blogs/overview/overview-2.jpg",
          "/blogs/overview/overview-3.jpg",
        ],
        quote:
          "Sustainability is not a choice—it’s the foundation of a better tomorrow.",
        postTags: ["Agro-Tourism", "Sustainability", "Innovation"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "vision-mission-pranto-agro",
      blogPost: {
        title:
          "Pranto Agro’s Vision: Blending Research, Education & Eco-Tourism",
        image: "/blogs/vision/vision-1.jpg",
        author: "Pranto Agro Management",
        date: "05 AUGUST, 2025",
        description:
          "Our mission is to promote high-value farming, support young researchers, and create immersive agro-tourism experiences that reconnect people with nature.",
        checklist: [
          "Fosters a culture of scientific farming and research.",
          "Supports students and future agricultural leaders.",
          "Promotes eco-friendly tourism and biodiversity conservation.",
        ],
        subImages: ["/blogs/vision/vision-2.jpg", "/blogs/vision/vision-3.jpg"],
        quote:
          "Our vision is rooted in the soil, but our mission reaches the skies.",
        postTags: ["Vision", "Education", "Research"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "high-value-farming-pranto-agro",
      blogPost: {
        title: "High-Value Farming: From Rock Melons to Grapevines",
        image: "/blogs/farming/farming-1.jpg",
        author: "Pranto Agro Research Division",
        date: "10 AUGUST, 2025",
        description:
          "Pranto Agro cultivates a diverse range of high-value crops including rock melon, capsicum, squash, and grapes using modern techniques like drip irrigation and greenhouse farming.",
        checklist: [
          "Implements controlled-environment agriculture for year-round yield.",
          "Focuses on premium crops like rock melon and grapes.",
          "Uses bio-organic soil and sustainable irrigation systems.",
        ],
        subImages: [
          "/blogs/farming/farming-2.jpg",
          "/blogs/farming/farming-3.jpg",
        ],
        quote: "Healthy soil grows not just crops—but the future of a nation.",
        postTags: ["Farming", "Innovation", "Sustainability"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "sustainable-aquaculture-pranto-agro",
      blogPost: {
        title: "Inside Our Fisheries: Sustainable Aquaculture Practices",
        image: "/blogs/fisheries/fisheries-1.jpg",
        author: "Pranto Agro Fisheries Team",
        date: "15 AUGUST, 2025",
        description:
          "Our nine large ponds house diverse species such as Rui, Katla, Pangas, and Tilapia. We follow semi-intensive polyculture systems that maintain ecological harmony while ensuring high yields.",
        checklist: [
          "Uses eco-balanced aquaculture models.",
          "Engages visitors in feeding and harvesting activities.",
          "Promotes native and exotic freshwater species.",
        ],
        subImages: [
          "/blogs/fisheries/fisheries-2.jpg",
          "/blogs/fisheries/fisheries-3.jpg",
        ],
        quote: "A thriving pond reflects a thriving planet.",
        postTags: ["Aquaculture", "Fisheries", "Eco Farming"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "agro-tourism-experience",
      blogPost: {
        title: "Agro-Tourism Adventures: Stay, Learn & Experience Nature",
        image: "/blogs/agrotourism/agrotourism-1.jpg",
        author: "Pranto Agro Tourism Team",
        date: "20 AUGUST, 2025",
        description:
          "Pranto Agro welcomes visitors to live the farm life — from planting crops and feeding fish to enjoying traditional meals, folk music, and serene river rides.",
        checklist: [
          "Stay-in-the-farm lodging for families and students.",
          "Interactive farming and aquaculture activities.",
          "Cultural evenings with bonfire and folk music.",
        ],
        subImages: [
          "/blogs/agrotourism/agrotourism-2.jpg",
          "/blogs/agrotourism/agrotourism-3.jpg",
        ],
        quote: "Come for the crops, stay for the experience.",
        postTags: ["Agro-Tourism", "Nature", "Culture"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "research-education-pranto-agro",
      blogPost: {
        title: "Pranto Agro: A Living Laboratory for Future Farmers",
        image: "/blogs/research/research-1.jpg",
        author: "Research & Development Team",
        date: "25 AUGUST, 2025",
        description:
          "Our farm is a living classroom, open to students and researchers. We offer free access to land, experiments, and practical training in modern agriculture.",
        checklist: [
          "Hands-on research opportunities for students.",
          "On-site accommodation and support for field studies.",
          "Collaborations with universities and NGOs.",
        ],
        subImages: [
          "/blogs/research/research-2.jpg",
          "/blogs/research/research-3.jpg",
        ],
        quote: "Knowledge grows best when planted in fertile fields.",
        postTags: ["Research", "Education", "Agriculture"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "agro-museum-bangladesh",
      blogPost: {
        title: "Agro-Museum: Preserving Bangladesh’s Agricultural Heritage",
        image: "/blogs/museum/museum-1.jpg",
        author: "Cultural Affairs Team",
        date: "28 AUGUST, 2025",
        description:
          "The Pranto Agro Museum showcases Bangladesh’s agricultural journey—from ancient tools to modern innovation—bridging generations through knowledge and nostalgia.",
        checklist: [
          "Features traditional and modern farming equipment.",
          "Displays indigenous seeds and educational exhibits.",
          "Offers interactive experiences for students and families.",
        ],
        subImages: ["/blogs/museum/museum-2.jpg", "/blogs/museum/museum-3.jpg"],
        quote: "To preserve the future, we must honor the past.",
        postTags: ["Heritage", "Agriculture", "Education"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "sustainability-pranto-agro",
      blogPost: {
        title: "Sustainability First: How Pranto Agro Protects Nature",
        image: "/blogs/sustainability/sustainability-1.jpg",
        author: "Sustainability & Environment Division",
        date: "30 AUGUST, 2025",
        description:
          "Environmental care defines our identity. From solar power and composting to biocontrol farming and rainwater harvesting—sustainability drives every part of Pranto Agro.",
        checklist: [
          "100% organic composting and zero synthetic pesticides.",
          "Solar-powered lighting and rainwater systems.",
          "Tree plantation drives for biodiversity.",
        ],
        subImages: [
          "/blogs/sustainability/sustainability-2.jpg",
          "/blogs/sustainability/sustainability-3.jpg",
        ],
        quote:
          "We don’t inherit the earth from our ancestors—we borrow it from our children.",
        postTags: ["Environment", "Eco Farming", "Sustainability"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "investment-opportunities-pranto-agro",
      blogPost: {
        title: "Investing in the Future of Agro-Tourism & Research",
        image: "/blogs/investment/investment-1.jpg",
        author: "Business Development Team",
        date: "02 SEPTEMBER, 2025",
        description:
          "Pranto Agro welcomes strategic partners and investors to expand eco-resorts, research centers, and corporate wellness programs built on sustainable growth.",
        checklist: [
          "Opportunities in eco-lodging and research sponsorship.",
          "Farm-to-market retail ventures.",
          "Corporate retreats and training programs.",
        ],
        subImages: [
          "/blogs/investment/investment-2.jpg",
          "/blogs/investment/investment-3.jpg",
        ],
        quote: "Invest where growth is green and impact is lasting.",
        postTags: ["Investment", "Agro-Tourism", "Development"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "future-goals-pranto-agro",
      blogPost: {
        title: "Future Goals: Expanding Innovation in Agro-Education",
        image: "/blogs/future/future-1.jpg",
        author: "Pranto Agro Leadership",
        date: "05 SEPTEMBER, 2025",
        description:
          "Our future vision includes building a 50-bed eco-lodge, launching hydroponic systems, and hosting annual Agro-Fair Festivals to promote modern farming education.",
        checklist: [
          "Introduce exotic crops and hydroponic farming.",
          "Establish agro-education and certification programs.",
          "Create digital archives and host annual Agro-Fair.",
        ],
        subImages: ["/blogs/future/future-2.jpg", "/blogs/future/future-3.jpg"],
        quote: "The seeds we plant today will shape tomorrow’s harvest.",
        postTags: ["Future", "Education", "Innovation"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
  ],
};
