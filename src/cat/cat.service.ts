import { Injectable, HttpException, HttpStatus, UsePipes, ValidationPipe, ParseIntPipe, Get } from '@nestjs/common';
import { Cat } from './interfaces'

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): boolean {
    this.cats.push(cat);

    return true
  }

  findAll(): Cat[] {
    return this.cats
  }

  findByName(name: string): Cat[] {
    return this.cats.filter((cat: Cat) => cat.name.includes(name))
  }

  deleteByName(name: string): boolean {
    const indexForDelete = this.cats.findIndex((cat: Cat) => cat.name === name)

    if (indexForDelete === -1)
      throw new HttpException('cat was not found', HttpStatus.NOT_FOUND)

    this.cats.splice(indexForDelete, 1)

    return true
  }

  getByIndex(id: number): number {
    console.log(id)

    return id
  }
}
