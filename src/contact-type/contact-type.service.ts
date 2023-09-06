import { Injectable } from '@nestjs/common';
import { CreateContactTypeDto } from './dto/create-contact-type.dto';
import { UpdateContactTypeDto } from './dto/update-contact-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ContactTypeService {
  constructor(private prisma: PrismaService) { }


  findAll() {
    return this.prisma.sAB_TipoContato.findMany({
      orderBy: {
        TC_cd: 'asc'
      }
    })
  }

  findOne(id: number) {
    return this.prisma.sAB_TipoContato.findFirst({
      where: {
        TC_cd: id
      }
    });
  }

  async create(createContactTypeDto: CreateContactTypeDto) {

    const ultimoItem = await this.prisma.sAB_TipoContato.findMany({
      orderBy: {
        TC_cd: 'desc'
      }
    })
    const ultimoId = (ultimoItem[0]?.TC_cd ?? 1) + 1

    return this.prisma.sAB_TipoContato.create({
      data: {
        TC_cd: ultimoId,
        TC_ds: createContactTypeDto.name
      }
    })
  }

  update(id: number, updateContactTypeDto: UpdateContactTypeDto) {
    return this.prisma.sAB_TipoContato.update({
      where: { TC_cd: Number(id) }, data: {
        TC_ds: updateContactTypeDto.name
      }
    });
  }

  remove(id: number) {
    return this.prisma.sAB_TipoContato.delete({
      where: { TC_cd: id }
    });
  }
}
