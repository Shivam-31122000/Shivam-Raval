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
        name: "Aarav Sharma",
        role: "Client, Fancall Private Limited",
        content: "Shivam led the complete technical development of our platform, scaling it to 195,000+ users. The performance improvements and Agora integrations were absolutely world-class.",
        rating: 5,
    },
    {
        name: "Omar Al-Fayed",
        role: "Client, SAMACO Motors",
        content: "We needed a premium digital showroom reflecting our luxury vehicle line. Shivam delivered an exceptionally sleek application, seamlessly handling test drives and service bookings.",
        rating: 5,
    },
    {
        name: "Sami Haddad",
        role: "Client, PAC Automotive",
        content: "An outstanding experience. Through his expertise, we digitized our vehicle purchasing journey and revolutionized our administrative workflows with flawless AI support.",
        rating: 4.5,
    },
    {
        name: "Tariq Mansour",
        role: "Client, BMW Egypt",
        content: "A premium brand demands a premium digital interface. Shivam developed highly robust systems for BMW Egypt that perfectly aligned with our international brand guidelines.",
        rating: 5,
    },
    {
        name: "Youssef Ibrahim",
        role: "Client, MINI Egypt",
        content: "We wanted a modern, fast, and energetic app. The digital interaction he delivered for MINI is exactly what we needed to retain our vibrant customer base.",
        rating: 4.5,
    },
    {
        name: "Zainab Al-Hassan",
        role: "Client, Meet & Greet Service",
        content: "Our VIP airport concierge platform requires extreme reliability and speed. The application architecture Shivam built was smooth, stable, and highly professional.",
        rating: 5,
    },
    {
        name: "Khalid Bin Salman",
        role: "Client, Al Mana Automotive",
        content: "Exceptional attention to detail. Managing our showroom catalog and roadside assistance tracking in one unified mobile app was executed brilliantly.",
        rating: 4.5,
    },
    {
        name: "Rami Khoury",
        role: "Client, BNK Automotive",
        content: "The level of engineering and clean UI implementation was highly impressive. Outstanding cross-functional collaboration and extremely fast delivery times.",
        rating: 4.5,
    },
    {
        name: "Hassan El-Sayed",
        role: "Client, Ezz Elarab",
        content: "Our users love the smooth transitions and reliable push notifications. Shivam optimized our platform to be extremely lightweight and crash-free.",
        rating: 5,
    },
    {
        name: "Faisal Alesayi",
        role: "Client, Alesayi Motors",
        content: "From the virtual showroom integrations to real-time chat APIs, the architectural knowledge provided here modernized our entire sales pipeline.",
        rating: 5,
    },
    {
        name: "Nabil Tawfiq",
        role: "Client, SNA (Natco)",
        content: "Top-tier Android networking and application state management. The app is incredibly resilient, saving us hundreds of hours in customer support.",
        rating: 4.5,
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
