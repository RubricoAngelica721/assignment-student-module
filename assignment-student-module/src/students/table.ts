import { IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()  
  enrollmentDate: Date;
}

export class UpdateStudentDto extends CreateStudentDto {}