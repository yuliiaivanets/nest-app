import { BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) {}
     
    transform(value: unknown) {
         const result = this.schema.safeParse(value);
         if(!result.success) {
        //console.log(
        //result.error.issues.map((issue) => ({
        // message: issue.message,
        // field: issue.path.at(0),
        //})),
      //);

            throw new BadRequestException(result.error.format());
         }
         return result.data;
     }
}