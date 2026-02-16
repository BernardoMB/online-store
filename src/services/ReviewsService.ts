import type { Review } from "@/model/ReviewModel";

const reviews: Review[] = [
  {
    id: 1,
    image: "images/reviews/reviewImg1.jpg",
    name: "Luna M.",
    rating: 5,
    reviewNote: "I’ve worn many rings in my life, but none have felt quite like this. The moment I slipped on my amethyst glow ring, I felt a subtle pulse—like the stone was syncing with my energy. It’s not just jewelry; it’s a talisman. The soft glow in the dark feels like a whisper from the universe, reminding me that even in shadow, there’s light.\n\nI hold them during meditation to absorb their crystal powers. The craftsmanship is stunning, but what truly sets these apart is the intention behind them. If you believe in the healing power of crystals, these rings are like portable spells. I wear mine daily, and I swear my anxiety has softened. Whether you’re a spiritual seeker or just love beautiful things, these glow rings are pure magic.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
  {
    id: 2,
    image: "images/reviews/reviewImg2.jpg",
    name: "Jake T.",
    rating: 5,
    reviewNote: "Didn’t expect much, but wow—the glow is legit. People always want to see it lit up, and they always ask about the ring when they spot it. Looks cool, feels solid, and it’s addictive to look at.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
  {
    id: 3,
    image: "images/reviews/reviewImg3.jpg",
    name: "Seraphina R.",
    rating: 5,
    reviewNote: "A ring that glows like moonlight and carries the soul of the earth—what more could one ask for? Mine holds rose quartz, and I swear it hums with warmth. In the quiet hours, when the world dims, it glows softly, like a heartbeat in the dark.\nIt’s not just a ring. It’s a reminder. Of love. Of light. Of the quiet power that lives in stone.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
  {
    id: 4,
    image: "images/reviews/reviewImg4.jpg",
    name: "Michael D.",
    rating: 5,
    reviewNote: "Bought three—all beautiful, but the green is my favorite. They glow beautifully and feel personal. Not big on crystal healing, but they’re stylish, well-made, and get compliments.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
  {
    id: 5,
    image: "images/reviews/reviewImg5.jpg",
    name: "Zion K.",
    rating: 5,
    reviewNote: "These glow rings are like wearing a piece of the cosmos. I chose labradorite, known for its protective and transformative energy, and I genuinely feel more grounded when I wear it. The glow is ethereal—like starlight trapped in a circle.\nI’ve used crystals for years, and having one embedded in something I can wear daily is a game-changer. It’s not just about fashion—it’s about frequency. These rings vibrate with intention. I’ve felt more aligned, more centered, and more connected to my inner self since I started wearing mine.\nIf you’re on a spiritual journey, this is a must-have. If you’re not, it’s still one of the coolest accessories you’ll ever own.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
  {
    id: 6,
    image: "images/reviews/reviewImg6.jpg",
    name: "Milo D.",
    rating: 5,
    reviewNote: "Simple. Glows. Feels good. I got amethyst. It’s clean, no fuss, and somehow calming. I wear it every day.",
    createdAt: new Date("2025-08-06T15:23:00"),
    isActive: true
  },
];

export const ReviewsService = {
  getAllReviews: (): Review[] => {
    return reviews.filter(review => review.isActive);
  },
  getReviewById: (reviewId: number): Review | undefined => {
    const review: Review | undefined = reviews.find(review => review.id == reviewId);
    return review;
  },
  getReviewsByRating: (rating: number): Review[] => {
    return reviews.filter(review => review.rating === rating);
  },
};
