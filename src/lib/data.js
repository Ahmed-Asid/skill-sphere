import data from "@/../public/data/data.json";

export const fetchCourseData = async () => {

    await new Promise(resolve =>
        setTimeout(resolve, 2000)
    );

    return data;
};