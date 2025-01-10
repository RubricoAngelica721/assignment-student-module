import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

}
