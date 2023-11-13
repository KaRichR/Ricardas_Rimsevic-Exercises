let page = {
    pageNumber: 1,
    pageSize: 5,
    items: [1, 2, 3, 4, 5]
}

function paginate(items, pageSize, pageNumber) {
    return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

console.log(paginate(page.items, page.pageSize, page.pageNumber));
