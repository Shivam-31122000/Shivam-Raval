import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Alex Johnson",
        role: "CEO, TechStart",
        content: "Shivam delivered an exceptional website that perfectly captures our brand. The attention to detail and animations are outstanding.",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        role: "Founder, DesignLab",
        content: "Working with Shivam was a pleasure. He understood our vision immediately and executed it with precision. Highly recommended!",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Product Manager, Innovate Inc",
        content: "The best developer I've worked with. Fast, professional, and the code quality is top-notch. Our site performance improved significantly.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Marketing Director, CreativeFlow",
        content: "Incredible work! The site is fast, responsive, and looks amazing on all devices. Shivam is a true professional.",
        rating: 5,
    },
];

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
                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                                    ))}
                                                </div>
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
