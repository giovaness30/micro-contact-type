import { ApiProperty } from "@nestjs/swagger";

export class CreateContactTypeDto {

  // @ApiProperty()
  // TC_cd: number;

  @ApiProperty()
  name: string;

  // @ApiProperty()
  // SAB_TipoContatoCreateInput: any
}
