// Import CommonModule for common Angular directives
import { CommonModule } from '@angular/common';
// Import Component decorator from Angular core
import { Component } from '@angular/core';
// Import FormsModule for template-driven forms support
import { FormsModule } from '@angular/forms';

/**
 * TodoListComponent
 *
 * This component provides a simple to-do list functionality.
 * Users can add new tasks and remove existing ones.
 */
@Component({
  // Selector for using this component in templates
  selector: 'app-todo-list',
  // Import required Angular modules
  imports: [CommonModule, FormsModule],
  // Path to the component's HTML template
  templateUrl: './todo-list.component.html',
  // Path to the component's SCSS stylesheet
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  /**
   * Array to store the list of tasks
   */
  tasks: string[] = [];
  /**
   * Model for the new task input field
   */
  newTask: string = '';

  /**
   * Adds a new task to the list if the input is not empty or whitespace
   * Clears the input field after adding
   */
  addTask() {
    if (!this.newTask.trim()) {
      this.newTask = '';
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  /**
   * Removes a task from the list by its index
   * @param index - The index of the task to remove
   */
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
