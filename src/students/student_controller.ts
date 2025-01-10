import { Controller, Post, Get, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { StudentService } from './student_service';

import { Student } from './entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  // Get all students
  @Get()
  async findAll(): Promise<Student[]> {
    return await this.studentService.findAll();
  }

  // Get a specific student by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return await this.studentService.findOne(+id);
  }

  
}
