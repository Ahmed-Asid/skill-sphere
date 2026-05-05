export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const fetchCourseData = async() => {
    const res = await fetch(`${BASE_URL}/data/data.json`);
    const data = await res.json();

    return data;
}