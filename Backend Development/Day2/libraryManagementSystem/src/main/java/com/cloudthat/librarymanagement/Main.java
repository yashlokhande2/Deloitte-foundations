package com.cloudthat.librarymanagement;

public class Main {
    public static void main(String[] args) {

        System.out.println("Welcome to Library Management System");
        Library library = new Library();

        library.addBook(new Book("1234567","Introduction to Java","James Gosling"));
        library.addBook(new Book("1234765","Introduction to JavaScript","James"));
        library.addBook(new Book("1234765","Introduction to JavaScript","James"));
        library.addBook(new Book("1","Oracle","Jack"));
        library.displayAllBooks();

        library.removeBook("1");
        library.removeBook("123476");
        library.displayAllBooks();
//        Book b1 = new Book("1234567","Introduction to Java","James Gosling");
//        System.out.println(b1);
    }
}