import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ (for *ngFor and other directives if used)

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // ✅ This is required for ngModel
  ]
})
export class BookComponent {
  bookForm = {
    title: '',
    author: ''
  };

  editingId: number | null = null;
  books = [
    { id: 1, title: 'Book A', author: 'Author A' },
    { id: 2, title: 'Book B', author: 'Author B' }
  ];

  addBook() {
    const newId = this.books.length + 1;
    this.books.push({ id: newId, ...this.bookForm });
    this.bookForm = { title: '', author: '' };
  }

  editBook(book: any) {
    this.editingId = book.id;
    this.bookForm = { title: book.title, author: book.author };
  }

  updateBook() {
    const book = this.books.find(b => b.id === this.editingId);
    if (book) {
      book.title = this.bookForm.title;
      book.author = this.bookForm.author;
    }
    this.cancel();
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  cancel() {
    this.editingId = null;
    this.bookForm = { title: '', author: '' };
  }
}
