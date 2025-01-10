import { Controller, Post, Get, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
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

  // Update a student
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateStudentDto: Partial<CreateStudentDto>
  ): Promise<Student> {
    return await this.studentService.update(+id, UpdateStudentDto);
  }

  // Delete a student
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return await this.studentService.remove(+id);
  }
}
