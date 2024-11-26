export const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    next();
};

export const isAdmin = (req, res, next) => {
    if (req.session.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};
