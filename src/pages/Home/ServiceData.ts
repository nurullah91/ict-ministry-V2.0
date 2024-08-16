export type TItems = {
  name: string;
  path: string;
};

export type TService = {
  title: string;
  image: string;
  serviceItems: TItems[];
};

export type TServices = TService[];

export const ServiceData: TServices = [
  {
    title: "আমাদের বিষয়ে",
    image: "https://i.ibb.co/LvDjDhy/aboutus2.png",
    serviceItems: [
      {
        name: "ভিশন ও মিশন",
        path: "",
      },
      {
        name: "সাংগঠনিক কাঠামো",
        path: "",
      },
      {
        name: "কর্মকর্তা/কর্মচারী",
        path: "",
      },
      {
        name: "কর্মবন্টন",
        path: "",
      },
    ],
  },
  {
    title: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
    image: "https://i.ibb.co/Q8D5Y9X/image.png",
    serviceItems: [
      {
        name: " প্রজ্ঞাপন/পরিপত্র",
        path: "",
      },
      {
        name: "অফিস আদেশ/বিদেশ ভ্রমণের জিও/পাসপোর্ট",
        path: "",
      },
      {
        name: "অনাপত্তিপত্র",
        path: "",
      },
      {
        name: "সংবাদ বিজ্ঞপ্তি",
        path: "",
      },
      {
        name: "দরপত্র/নিয়োগ বিজ্ঞপ্তি",
        path: "",
      },
    ],
  },
  {
    title: "নীতিমালা ও প্রকাশনা",
    image: "https://i.ibb.co/s6vPCmM/POLICY-PUBLICATION-New-1.png",
    serviceItems: [
      {
        name: "নীতিমালা",
        path: "",
      },
      {
        name: "আইন ও বিধি/নির্দেশিকা ও কৌশলপত্র",
        path: "",
      },
      {
        name: "প্রকাশনা ও বার্ষিক প্রতিবেদন",
        path: "",
      },
      {
        name: "বিভিন্ন প্রতিবেদন",
        path: "",
      },
    ],
  },
  {
    title: "নাগরিক ই-সেবাসমূহ",
    image: "https://i.ibb.co/5KtmVyN/5-0.png",
    serviceItems: [
      {
        name: "উদ্ভাবনীমুলক কাজে অনুদান",
        path: "",
      },
      {
        name: "ফেলোশিপ ও বৃত্তি",
        path: "",
      },
      {
        name: "হাইটেক পার্ক ওয়ান স্টপ সার্ভিস",
        path: "",
      },
      {
        name: "অন্যান্য ই-সেবা",
        path: "",
      },
    ],
  },
  {
    title: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)",
    image: "https://i.ibb.co/NTDTZp7/Citizen-Charter.png",
    serviceItems: [
      {
        name: "সেবা প্রদান প্রতিশ্রুতি",
        path: "",
      },
      {
        name: "ফোকাল পয়েন্ট/পরিবীক্ষণ কমিটি",
        path: "",
      },
      {
        name: "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        path: "",
      },
      {
        name: "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/পরিপত্র",
        path: "",
      },
    ],
  },
  {
    title: "বার্ষিক কর্মসম্পাদন চুক্তি",
    image: "https://i.ibb.co/Lx4ZH6J/apa.png",
    serviceItems: [
      {
        name: "নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট",
        path: "",
      },
      {
        name: "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
        path: "",
      },
      {
        name: "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        path: "",
      },
      {
        name: "এপিএএমএস সফটওয়্যার লিংক",
        path: "",
      },
    ],
  },
  {
    title: "জাতীয় শুদ্ধাচার কৌশল",
    image: "https://i.ibb.co/W3Xxmxf/nis-logo3.png",
    serviceItems: [
      {
        name: "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
        path: "",
      },
      {
        name: "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট",
        path: "",
      },
      {
        name: "পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "",
      },
      {
        name: "আইন/বিধি/ নীতিমালা/নির্দেশিকা/পরিপত্র/প্রজ্ঞাপন/কর্মপরিকল্পনা",
        path: "",
      },
    ],
  },
  {
    title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
    image: "https://i.ibb.co/Ct4MkRG/complain-1-1.png",
    serviceItems: [
      {
        name: "অনিক ও আপিল কর্মকর্তা",
        path: "",
      },
      {
        name: "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        path: "",
      },
      {
        name: "অভিযোগ দাখিল (অনলাইন)",
        path: "",
      },
      {
        name: "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/নির্দেশিকা",
        path: "",
      },
    ],
  },
  {
    title: "তথ্য অধিকার",
    image: "https://i.ibb.co/ZfgHSLw/infocom.png",
    serviceItems: [
      {
        name: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ",
        path: "",
      },
      {
        name: "আবেদন ও আপিল ফরম",
        path: "",
      },
      {
        name: "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ/বাস্তবায়ন অগ্রগতি প্রতিবেদন",
        path: "",
      },
      {
        name: "আইন/বিধি/কর্মপরিকল্পনা/প্রতিবেদন/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
        path: "",
      },
    ],
  },
  {
    title: "উদ্ভাবনী কার্যক্রম",
    image: "https://i.ibb.co/Lt9GpLK/INNOVATION-1.png",
    serviceItems: [
      {
        name: "ইনোভেশন টিম",
        path: "",
      },
      {
        name: "ইনোভেশন আইডিয়া",
        path: "",
      },
      {
        name: "ইনোভেশন কর্মপরিকল্পনা/প্রকাশনা",
        path: "",
      },
      {
        name: "পাইলটিং প্রকল্পের তালিকা",
        path: "",
      },
    ],
  },
  {
    title: "সেবা সহজিকরণ",
    image: "https://i.ibb.co/TRwG6xL/SPS-3.png",
    serviceItems: [
      {
        name: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/প্রকাশনা",
        path: "",
      },
      {
        name: "বাস্তবায়িত ডিজিটাল সেবার তথ্য",
        path: "",
      },
      {
        name: "সেবা সহজিকরণের দৃষ্টান্ত",
        path: "",
      },
      {
        name: "সহজিকৃত সেবার তালিকা",
        path: "",
      },
    ],
  },
  {
    title: "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
    image: "https://i.ibb.co/tY1ZgQk/Final-Logo-SDG.png",
    serviceItems: [
      {
        name: "মন্ত্রণালয়/বিভাগের এসডিজি",
        path: "",
      },
      {
        name: "এসডিজি ফোকাল পয়েন্ট/বিকল্প ফোকাল পয়েন্ট",
        path: "",
      },
      {
        name: "এসডিজি জাতীয় ডকুমেন্ট",
        path: "",
      },
      {
        name: "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
        path: "",
      },
    ],
  },
  {
    title: "বাজেট ও প্রকল্পসমূহ",
    image: "https://i.ibb.co/CJ1mxfT/budget2-1.png",
    serviceItems: [
      {
        name: "বার্ষিক ক্রয় পরিকল্পনা",
        path: "",
      },
      {
        name: "বাজেট ও এমটিবিএফ বাজেট",
        path: "",
      },
      {
        name: "বাজেট প্রতিবেদন/অফিস আদেশ",
        path: "",
      },
      {
        name: "গুরুত্বপূর্ণ সমাপ্ত প্রকল্পসমূহ",
        path: "",
      },
    ],
  },
  {
    title: "জাতীয় আইসিটি নীতিমালা ২০১৮",
    image: "https://i.ibb.co/0F4b3Vy/Capture-1.jpg",
    serviceItems: [
      {
        name: "জাতীয় আইসিটি নীতিমালা ২০১৮",
        path: "",
      },
      {
        name: "মন্ত্রণালয়/বিভাগভিত্তিক কর্মপরিকল্পনা",
        path: "",
      },
      {
        name: "অফিস আদেশ, প্রজ্ঞাপন",
        path: "",
      },
      {
        name: "ফোকাল পয়েন্ট",
        path: "",
      },
    ],
  },
  {
    title: "বিবিধ",
    image: "https://i.ibb.co/BVWkw8n/1-0.png",
    serviceItems: [
      {
        name: "বিভিন্ন ফরম",
        path: "",
      },
      {
        name: "উত্তম চর্চা",
        path: "",
      },
      {
        name: "আইসিটি সম্পর্কিত অর্জিত পুরস্কার",
        path: "",
      },
      {
        name: "বিভিন্ন কমিটি",
        path: "",
      },
    ],
  },
];
