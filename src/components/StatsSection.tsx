import { motion } from "framer-motion";

const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Years Experience", value: "5+" },
    { label: "Lines of Code", value: "100k+" },
    { label: "Coffee Cups", value: "1000+" },
];

const StatsSection = () => {
    return (
        <section className="py-12 bg-secondary/30 overflow-hidden relative border-y border-white/5">
            <div className="flex w-full">
                <div className="flex animate-infinite-scroll gap-16 whitespace-nowrap px-8">
                    {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
                        <div key={index} className="flex items-center gap-4 group">
                            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                {stat.value}
                            </span>
                            <span className="text-lg text-muted-foreground font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
