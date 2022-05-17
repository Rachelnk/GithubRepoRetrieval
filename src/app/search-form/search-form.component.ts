import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // searchName!: string;
  // @Output() searchOutput = new EventEmitter<any>()

  name = new FormControl()
  constructor() { }
  search_repo(){
    let my_name = this.name.value
    return false
  }
  ngOnInit(): void {
  }


}

