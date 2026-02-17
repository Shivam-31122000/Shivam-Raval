import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Chinonso Dombili",
        role: "Client, Challenge App",
        content: "Shivam is a highly skilled developer who brought our vision for the Challenge App to life. His expertise in Kotlin and Jetpack Compose is top-notch.",
        rating: 5,
    },
    {
        name: "Chales Anderson",
        role: "CEO, Hooked App",
        content: "The Hooked App required a complex real-time video infrastructure, and Shivam delivered flawlessly. Great communication and technical skill.",
        rating: 4.5,
    },
    {
        name: "Andru Johnson",
        role: "Product Owner, Lend Driver",
        content: "Working on the Lend platforms was a smooth process. Shivam's attention to detail in the customer and driver interfaces was exceptional.",
        rating: 5,
    },
    {
        name: "Ryan Sprakett",
        role: "Founder, Postalott",
        content: "Excellent work on Postalott. The app is fast, reliable, and our users love the smooth animations. Highly recommend for any mobile project.",
        rating: 4,
    },
    {
        name: "Ashly Clark",
        role: "CTO, Chatalott",
        content: "Chatalott's real-time messaging features were perfectly implemented. Shivam's knowledge of Socket.IO and Firebase made a huge difference.",
        rating: 4.5,
    },
    {
        name: "Emily Chen",
        role: "Manager, 7 Clue",
        content: "The 7 Clue game logic was tricky, but Shivam handled it with ease. The final product exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Marcus Rashford",
        role: "Directer, Flip talk",
        content: "Shivam is proactive and dedicated. He helped us scale Flip talk while maintaining performance. A valuable addition to any team.",
        rating: 4,
    },
    {
        name: "Sarah Jenkins",
        role: "Lead, Flirt pen",
        content: "Creative and technical – that's Shivam. He built a beautiful and functional UI for Flirt pen that our users adore.",
        rating: 4.5,
    },
    {
        name: "Davina Miller",
        role: "CEO, Ollama AI",
        content: "Integrating LLMs into our mobile app was a breeze with Shivam. He's ahead of the curve when it comes to AI integration.",
        rating: 5,
    },
    {
        name: "James Wilson",
        role: "Head of Dev, Dance Anim",
        content: "Animations in Dance Anim are fluid and responsive, thanks to Shivam's deep understanding of motion design and performance.",
        rating: 5,
    },
];

const RatingStars = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-1 mb-4">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
            {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-500 text-yellow-500" />}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-500/30" />
            ))}
        </div>
    );
};

const ReviewsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 skew-y-3 transform origin-bottom-right" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                        Client Reviews
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what my clients have to say about working with me.
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-4 md:-ml-6">
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="bg-card/50 backdrop-blur-sm border-white/5 h-full hover:border-white/20 transition-colors duration-300">
                                        <CardContent className="flex flex-col justify-between p-6 h-full gap-6">
                                            <div>
                                                <RatingStars rating={review.rating} />
                                                <p className="text-muted-foreground italic relative">
                                                    "{review.content}"
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg text-white">{review.name}</h4>
                                                <p className="text-sm text-muted-foreground">{review.role}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-white/10 hover:bg-white/10 text-white" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-white/10 hover:bg-white/10 text-white" />
                </Carousel>
            </div>
        </section>
    );
};


export default ReviewsSection;
