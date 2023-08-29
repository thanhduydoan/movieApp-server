// Function to paginate data
const paginate = (data, page, itemsPerPage) => {
    // Calculate start and end indices for the slice operation
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    // Return a slice of the data array
    return data.slice(start, end);
}

// Export the paginate function
exports.paginate = paginate;