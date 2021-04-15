package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type Book struct {
	Id int
	Title string
	Author string
}

var Books []Book = []Book{
	Book{
		Id: 1,
		Title: "Test Book",
		Author: "Test Author",
	},
}

func mainRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome!")
}

func booksRoute(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	encoder.Encode(Books)
}

func routesConfiguration() {
	http.HandleFunc("/", mainRoute)
	http.HandleFunc("/books", booksRoute)
}

func serverConfiguration() {
	routesConfiguration()

	fmt.Println("Server is running!")
	http.ListenAndServe(":1337", nil)
}

func main() {
	serverConfiguration()
}
