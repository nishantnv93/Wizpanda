import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student/student'

@Component({
  selector: 'app-get-record',
  templateUrl: './get-record.component.html',
  styleUrls: ['./get-record.component.scss']
})
export class GetRecordComponent implements OnInit {

  constructor(private studentService:StudentService ) { }

   students = new Student();

  ngOnInit(): void {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
