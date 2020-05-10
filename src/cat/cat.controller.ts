import { Controller, Get, Post, Delete, Body, Param, UsePipes, UseGuards } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO, FindByNameDTO, DeleteByName } from './dto'
import { FindByIdDTO } from './dto/find-by-id.dto';
import { CreateCatValidation } from './validation'
import { JoiValidationPipe } from '../common/validation/JoiValidation'
import { Roles } from './roles.decorator'

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) { }

  @Post()
  @Roles('admin', 'vendor')
  @UsePipes(new JoiValidationPipe(CreateCatValidation))
  create(@Body() body: CreateCatDTO) {
    this.catService.create(body)

    return { success: true, message: 'cat was created' }
  }

  @Get()
  findAll() {
    const cats = this.catService.findAll()

    return cats
  }

  @Get(':name')
  findByName(@Param() { name }: FindByNameDTO) {
    return this.catService.findByName(name)
  }

  @Delete(':name')
  deleteByName(@Param() params: DeleteByName) {
    const isDeleted = this.catService.deleteByName(params.name)

    return { success: isDeleted, message: isDeleted ? 'cat was deleted' : 'cat wasn\'t found' }
  }

  @Get('id/:id')
  getById(@Param() { id }: FindByIdDTO) {
    return this.catService.getByIndex(id)
  }
}
