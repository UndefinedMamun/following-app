import { CoursesService } from './courses/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <img src="{{imgUrl}}" alt="">
    `
})

export class CourseComponent {
    title = "List Of courses";
    imgUrl = "http://truck.dbrqx.com/img/trucks/truck_model_005_orange_right.png";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
}