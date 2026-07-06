export const MESSAGES = {
    server: {
        started: "BookVerse server started successfully.",
        startupFailed: "BookVerse server failed to start.",
        databasePending: "Database connection is not configured yet.",
    },

    database: {
        connected: "Database connected successfully.",
        connectionFailed: "Database connection failed."
    },

    general: {
        home: "Welcome to BookVerse API ",
        success: "Request completed successfully.",
    },

    generalError: {
        somethingWentWrong: "Something went wrong.",
        internalServerError: "Internal server error.",
        routeNotFound: "Requested route was not found.",
    },

    validation: {
        bookNameRequired: "Book name is required.",
        authorNameRequired: "Author name is required.",
        priceRequired: "Book price is required.",
        invalidPrice: "Book price must be greater than zero.",
        invalidQuantity: "Book quantity cannot be negative.",
        bookTypeRequired: "Book type is required.",
    },

    book: {
        created: "Book created successfully.",
        fetched: "Books fetched successfully.",
        updated: "Book updated successfully.",
        deleted: "Book deleted successfully.",
        notFound: "Book not found.",
    },
} as const;