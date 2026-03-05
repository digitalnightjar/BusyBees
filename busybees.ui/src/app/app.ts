import { Component } from '@angular/core';
// We define what a 'Chore' looks like
interface Chore {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'BusyBees';

  // Chores for Child 1
  alexChores: Chore[] = [
    { id: 1, name: 'Make the Bed 🛏️', completed: false },
    { id: 2, name: 'Put Toys Away 🧸', completed: false },
    { id: 3, name: 'Brush Teeth 🪥', completed: false }
  ];

  // Chores for Child 2
  samChores: Chore[] = [
    { id: 4, name: 'Feed the Dog 🐶', completed: false },
    { id: 5, name: 'Hang up Coat 🧥', completed: false },
    { id: 6, name: 'Clear the Table 🍽️', completed: false }
  ];

  /**
   * This function flips the 'completed' status when a button is tapped.
   */
  toggleDone(chore: Chore): void {
    chore.completed = !chore.completed;

    // Fun Console Log for debugging
    if (chore.completed) {
      console.log(`Bzzzt! ${chore.name} is finished! 🐝✨`);
    }
  }
}
