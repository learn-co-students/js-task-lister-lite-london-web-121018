let TaskId = 0;

class Task {
 constructor(content) {
   this.content = content;
   this.id = ++TaskId;
 }
}
