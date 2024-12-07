const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Number of Pages: ${book.numberOfPages}`);
    console.log("Awards:");
    for (let j = 0; j < book.awards.length; j++) {
      console.log(`- ${book.awards[j]}`);
    }
    console.log("");
  }