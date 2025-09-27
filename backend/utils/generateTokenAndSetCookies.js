import jwt from "jsonwebtoken"

export const generateTokenAndSetCookies = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
    res.cookie('token', token, {
        httpOnly: true, // JS can't access cookie
        secure: process.env.NODE_ENV === "production", // only send over HTTPS in production
        sameSite: "strict", // prevent from csrf
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return token;
}