package com.cloudthat.librarymanagement;

import java.util.HashMap;
import java.util.Map;

public class Library {

    private Map<String, Book> books;

    public Library() {
        books = new HashMap<>();
    }

    public void addBook (Book book) {
        if(books.containsKey(book.getIsbn())){
            System.out.println("Book already exists");
        } else{
            books.put(book.getIsbn(), book);
            System.out.println("Book Added Successfully");
        }
    }

    // Implement methods for removing a book & displayAllBooks
    public void removeBook (String isbn) {
        if (books.containsKey(isbn)) {
            Book removedBook = books.remove(isbn);
            System.out.println(" Removed: " + removedBook);
        } else {
            System.out.println("No book with ISBN: " + isbn + " is found");
        }
    }

    public void displayAllBooks(){
        if(books.isEmpty()){
            System.out.println(" No Books in the library. ");
        }else{
            System.out.println("Books in the library: ");
            for(Map.Entry<String, Book> entry: books.entrySet()){
                System.out.println(entry.getValue());
            }
        }
    }
}
