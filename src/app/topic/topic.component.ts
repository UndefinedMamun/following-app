import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, group } from '@angular/core';

@Component({
  selector: 'add-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  
  /* Using Form Builder */
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        address: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  ngOnInit() {
  }

  /* Traditional way */
  // form = new FormGroup({
  //   name: new FormControl(''),
  //   contact: new FormGroup({
  //     address: new FormControl(""),
  //     phone: new FormControl("")
  //   }),
  //   topics: new FormArray([])
  // });

  addTopic(item: HTMLInputElement){
    this.topics.push(new FormControl(item.value));
    item.value = "";
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
