export type Testimonial = {
  initials: string;
  name: string;
  location: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MK",
    name: "Maria K.",
    location: "Chicago, IL",
    text: "The whole process was so easy and smooth. I had my evaluation within 24 hours and the doctor was incredibly knowledgeable. Got my certification the same day!",
    rating: 5,
  },
  {
    initials: "JD",
    name: "James D.",
    location: "Springfield, IL",
    text: "I was nervous about the process but the team walked me through every step. The doctor was compassionate and really took time to understand my chronic pain condition.",
    rating: 5,
  },
  {
    initials: "SR",
    name: "Sarah R.",
    location: "Naperville, IL",
    text: "Incredibly professional service. The online platform made it so convenient — I didn't have to leave my home. Highly recommend to anyone in Illinois seeking their MMJ card.",
    rating: 5,
  },
];
