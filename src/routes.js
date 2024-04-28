const {
  addBookHandler,
  getAllBookHandler,
  getBookByHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

// API Hapi
const routes = [
  // menyimpan data buku
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  // menampilkan seluruh buku
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  // menampilkan detail buku
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByHandler,
  },
  // mengubah data buku
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  // menghapus data buku
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];

// module exports
module.exports = routes;
