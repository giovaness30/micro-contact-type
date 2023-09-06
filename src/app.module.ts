import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContactTypeController } from './contact-type/contact-type.controller';
import { ContactTypeService } from './contact-type/contact-type.service';

@Module({
  imports: [PrismaModule],
  controllers: [ContactTypeController],
  providers: [ContactTypeService],
})
export class AppModule { }
