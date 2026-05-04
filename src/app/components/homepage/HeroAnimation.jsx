"use client";

import Lottie from "lottie-react";

export default function HeroAnimation() {
    return (
        <Lottie
            animationData={require("@/data/lottie/laptop-animation.json")}
            loop={true}
            className="w-full"
        />
    );
}