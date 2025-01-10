import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { StudentService } from './student_service';
import { CreateStudentDto } from './table';
import { Student } from './entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Create a new student
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.studentService.create(createStudentDto);
  }
}
