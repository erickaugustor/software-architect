package main

import "fmt"

var global_var = "erick!!"

func main() {
	name := "erick"

	fmt.Println("Hello ", name)
	fmt.Printf("%v %T", name, name)
	fmt.Println(" - \n - ")

	name = "test"

	fmt.Println("Hello ", name)
}
