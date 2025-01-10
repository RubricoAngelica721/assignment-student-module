import { Controller, Post, Get, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { StudentService } from './student_service';
import { Student } from './entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Get a specific student by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return await this.studentService.findOne(+id);
  }

  // Delete a student
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return await this.studentService.remove(+id);
  }
}
