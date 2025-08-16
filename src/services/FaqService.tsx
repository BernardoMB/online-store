import type { FrequentAskedQuestion } from "@/model/FrequentAskedQuestion";
import { FaRing } from "react-icons/fa";
import { SiQuicklook } from "react-icons/si";
import { MdLocalShipping } from "react-icons/md";
import { PiShippingContainerFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { MdOutlineMailLock } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";
import { MdTrackChanges } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { RiMailLockFill } from "react-icons/ri";
import { BiSolidTimeFive } from "react-icons/bi";

export const questions: FrequentAskedQuestion[] = [
  {
    id: 1,
    question: "How are Hue & Hoot rings made?",
    answer: "Each ring is handcrafted by our team using a blend of crystals, stones, glow powder, high-grade glue, and precision tools. No two rings are exactly alike — every piece is a unique fusion of color, texture, and glow.",
    isActive: true,
    icon: <FaRing />
  },
  {
    id: 2,
    question: "Will my ring look exactly like the one in the photos?",
    answer: "Not quite — and that’s the beauty of it. Because every ring is handmade, the patterns may vary slightly. But rest assured: the colors, materials, and glow are consistent across every piece.",
    isActive: true,
    icon: <SiQuicklook />
  },
  {
    id: 3,
    question: "When will my ring ship?",
    answer: "As soon as you place your order, we get to work. Due to material availability — especially the ring blanks — shipping typically takes 1 to 2 weeks. We prioritize affordability, which means we don’t mass-produce or rush the process.",
    isActive: true,
    icon: <MdLocalShipping />
},
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
    "Not yet. For now, we only ship within the United States. We’re working on expanding soon!",
    isActive: true,
    icon: <PiShippingContainerFill />
  },
  {
    id: 5,
    question: "Does shipping time vary by location?",
    answer:
    "Yes — depending on where you are in the U.S., delivery times may vary slightly. We’ll send tracking info once your ring is on its way.",
    isActive: true,
    icon: <FaMapLocationDot />
  },
  {
    id: 6,
    question: "Can I customize my ring?",
    answer:
    "Custom options are coming soon! We’re currently developing a way for you to choose your glow, stone type, and more. Stay tuned. For now, you can pick from a variety of rings.",
    isActive: true,
    icon: <IoMdCreate />
  },
  {
    id: 7,
    question: "Do you use my email for marketing?",
    answer:
    "Nope. We don’t believe in inbox spam. We never use your email for marketing purposes, and we don’t share your data with other companies. Your trust matters more than a newsletter.",
    isActive: true,
    icon: <RiMailLockFill />
},
  {
    id: 8,
    question: "Why does it take longer to receive my ring?",
    answer:
    "We focus on quality and affordability. That means we handcraft each ring to order, using carefully sourced materials — no shortcuts, no mass production.",
    isActive: true,
    icon: <BiSolidTimeFive   />
  },
  {
    id: 9,
    question: "Can I track my order?",
    answer:
    "Yes! Once your ring ships, you’ll receive a tracking number via email so you can follow its journey to your doorstep.",
    isActive: true,
    icon: <MdTrackChanges />
  },
  {
    id: 10,
    question: "What makes Hue & Hoot rings special?",
    answer:
    "They glow. They’re crafted by hand. And they’re made to feel personal. Every ring carries a story — yours.",
    isActive: true,
    icon: <WiStars />
  },
];

export const FaqService = {
  getAllQuestions: (): FrequentAskedQuestion[] => {
    return questions.filter(review => review.isActive);
  },
  getQuestionById: (itemId: number): FrequentAskedQuestion | undefined => {
    const item: FrequentAskedQuestion | undefined = questions.find(i => i.id == itemId);
    return item;
  },
};
