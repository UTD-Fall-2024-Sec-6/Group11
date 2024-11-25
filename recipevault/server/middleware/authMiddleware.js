import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access token is missing or invalid." });
    }

    // Dynamically choose secret based on token payload
    let secret;
    jwt.verify(token, JWT_USER_SECRET, (err, decodedUser) => {
        if (!err) {
            secret = JWT_USER_SECRET;
            req.user = decodedUser;
        }
    });

    jwt.verify(token, JWT_ADMIN_SECRET, (err, decodedAdmin) => {
        if (!err) {
            secret = JWT_ADMIN_SECRET;
            req.user = decodedAdmin;
        }
    });

    if (!req.user) {
        return res.status(403).json({ message: "Token is invalid or expired." });
    }

    jwt.verify(token, secret, (err) => {
        if (err) {
            return res.status(403).json({ message: "Token verification failed." });
        }
        next();
    });
};


export const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};
