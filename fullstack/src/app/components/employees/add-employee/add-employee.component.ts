import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: 0,
    phone: 0,
    salary: 0,
    department: ''
  };

  errorMessage: string | null = null;

  constructor(private employeeService: EmployeesService , private router: Router) { }
  
  ngOnInit(): void { }
  
  addEmployee() {
    // // Convert email to string if necessary
   // this.addEmployeeRequest.email = String(this.addEmployeeRequest.email);
  
    // Send the request to add the employee
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          console.log(employee);
          this.router.navigate(['employees']);
        },
        error: (error) => {
          console.error('Error adding employee', error);
          // Handle error appropriately
        }
      });
  }
  
}
