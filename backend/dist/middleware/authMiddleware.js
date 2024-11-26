import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authenticateUser = (req, res, next) => {
    var _a;
    // Check for token in cookies or Authorization header
    const token = req.cookies.jwt || ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "Authentication required." });
    }
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Attach userId to the request
        next();
    }
    catch (error) {
        return res
            .status(403)
            .json({ success: false, message: "Invalid or expired token." });
    }
};
