export type Review = {
    id: number;
    /**
     * URL to the image of the person who wrote the review
     */
    image: string;
    name: string;
    /**
     * Integer from 1 to 5
     */
    rating: number;
    /**
     * The actual written review
     */
    reviewNote: string;
    createdAt: Date;
    isActive: Boolean;
};