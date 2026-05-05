import { use } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const fetchCoursesPromise = fetch(`${BASE_URL}/data/data.json`)
    .then(async(res) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
    });


export const FetchCourseData = () => { 

const coursesData = use(fetchCoursesPromise);
return coursesData;

}