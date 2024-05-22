import { Component, inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [13, 188] as const;
  announcer = inject(LiveAnnouncer);

  skills: any[] = [{name: 'Örnek'}];


  add(selectedSection ,event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    
    // Add our fruit
    if (value) {
        this.skills.push({name: value});

    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(selectedSection,fruit: any): void {
    if(selectedSection ==0){
      const index = this.skills.indexOf(fruit);

      if (index >= 0) {
        this.skills.splice(index, 1);
  
        this.announcer.announce(`Removed ${fruit}`);
      }

    }

  }

  edit(selectedSection,fruit: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(selectedSection,fruit);
      return;
    }

    // Edit existing fruit
    if(selectedSection ==0){
    const index = this.skills.indexOf(fruit);
    if (index >= 0) {
      this.skills[index].name = value;
    }
  }
  }
}
