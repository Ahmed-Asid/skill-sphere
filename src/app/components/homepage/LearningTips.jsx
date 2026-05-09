
import { Lightbulb, Clock, BookOpen, Target } from 'lucide-react';

const LearningTips = () => {
    const tips = [
        {
            title: "The Pomodoro Technique",
            description: "Study for 25 minutes, then take a 5-minute break. This keeps your brain fresh and prevents burnout during long coding sessions.",
            icon: <Clock className="w-6 h-6" />,
            color: "bg-blue-50"
        },
        {
            title: "Active Recall",
            description: "Don't just re-read notes. Quiz yourself on the material to strengthen neural pathways and improve long-term retention.",
            icon: <BookOpen className="w-6 h-6" />,
            color: "bg-purple-50"
        },
        {
            title: "Set Micro-Goals",
            description: "Break down a massive course into small, daily wins. Completing one small lesson a day is better than a 5-hour marathon once a week.",
            icon: <Target className="w-6 h-6" />,
            color: "bg-green-50"
        },
        {
            title: "Learn by Doing",
            description: "For every hour of video you watch, spend two hours coding. Building projects is the fastest way to turn theory into skill.",
            icon: <Lightbulb className="w-6 h-6" />,
            color: "bg-yellow-50"
        }
    ];

    return (

        <section className="w-[90%] mx-auto py-20">
            <div className="mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#10b981] mb-4">
                        Maximize Your Learning
                    </h2>
                    <p className=" max-w-2xl mx-auto">
                        Studying hard is good, but studying smart is better. Use these proven techniques
                        to master your new skills faster and more effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className="bg-[#10b981] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            <div className={`${tip.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#020617]`}>
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-50 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-gray-100 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningTips;