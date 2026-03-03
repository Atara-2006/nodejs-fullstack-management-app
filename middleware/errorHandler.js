const errorHandler = (err, req, res, next) => {
    console.error("--- שגיאת מערכת ---");
    console.error(err.stack); // מדפיס את פירוט השגיאה לטרמינל לצרכי פיתוח

    // קביעת סטטוס השגיאה (ברירת מחדל היא 500)
    const statusCode = err.statusCode || 500;
    
    // שליחת תשובה אחידה ללקוח
    res.status(statusCode).json({
        success: false,
        message: err.message || "שגיאת שרת פנימית",
        // אופציונלי: הצגת ה-stack רק בסביבת פיתוח
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = errorHandler;