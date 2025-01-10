import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './students/student_module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '', 
      database: 'studentsdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,
      autoLoadEntities: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}