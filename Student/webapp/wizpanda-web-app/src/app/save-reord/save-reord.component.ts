import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Student } from 'src/app/student/student'
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-save-reord',
  templateUrl: './save-reord.component.html',
  styleUrls: ['./save-reord.component.scss']
})
export class SaveReordComponent implements OnInit {

  private student = new Student();
  registerForm: FormGroup;
  submitted:boolean = false;
  getRecord: boolean = false;

  constructor(private fb: FormBuilder,
    private studentService:StudentService ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
      this.student = <Student>this.registerForm.value;
      this.studentService.saveStudentData(this.student)
      .subscribe(
        response => {
          console.log(response);
          this.getRecord = true;
        },
        error => {
          console.log(error);
        });
    }
  }