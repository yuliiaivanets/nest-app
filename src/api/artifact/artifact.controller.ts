import { Controller, Headers, Get, Param, ParseIntPipe, Query, UsePipes, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthPipe } from 'src/common/pipes/auth.pipe';
import { PositiveNumberPipe } from 'src/common/pipes/positive-number.pipe';
import { RarityPipe } from 'src/common/pipes/rarity.pipe';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateArifactDto, CreateArtifactSchema } from './artifact.create.dto';

@Controller('/api/artifacts')
export class ArtifactController {
  @Get()
  getAll(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('rarity', RarityPipe) rarity: string,
  ) {
    return { skip, limit, rarity };
  }

// artifacts/private
  @Get('private')
  @UsePipes(AuthPipe)
  getPrivateInfo(@Headers() headers:Record<string, string>) {
return {message: 'Private info, hurra'}
  }

  //Get /artifacts/:id
  @Get('/:id')
  getById(@Param('id', ParseIntPipe, PositiveNumberPipe) id: number) {
    return { id };
  }


  // GET /artifacts/:id
  // пример когда id является UUUID
  /*@Get('/:id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    return { id };
  } */

  @Post()
  createArtifact(
    @Body(new ZodValidationPipe(CreateArtifactSchema)) body: CreateArifactDto,
  ) {
    return body;
  }

}
