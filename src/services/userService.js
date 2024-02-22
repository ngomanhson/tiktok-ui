import * as httpRequest from "~/utils/httpRequest";

export const getFollowing = async ({ page }) => {
    const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTcwODQwNjIxMSwiZXhwIjoxNzEwOTk4MjExLCJuYmYiOjE3MDg0MDYyMTEsImp0aSI6IkNEcTVoTzJxZDFoQW1LeTQiLCJzdWIiOjY1NzksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.HZFYoYJbamSWzaC_khIuUb-UzgIXUa681QTeyL7gGmQ";

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await httpRequest.get("me/followings", {
            params: {
                page,
            },
            headers: config.headers,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
