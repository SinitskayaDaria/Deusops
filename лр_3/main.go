package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    port := os.Getenv("APP_PORT")
    if port == "" {
        port = "8080"
    }

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, Go with Docker!")
    })

    fmt.Println("Starting server on port", port)
    err := http.ListenAndServe(":" + port, nil)
    if err != nil {
        fmt.Println("Server failed:", err)
    }
}
