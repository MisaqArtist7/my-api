import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const mobile = value?.mobile;
    if (!mobile) {
      throw new BadRequestException('Mobile number is required');
    }
    if (typeof mobile !== 'string') {
      throw new BadRequestException('Mobile number must be a string');
    }
    if (!/^\d{11}$/.test(mobile)) {
      throw new BadRequestException('Mobile number must be a 11-digit number');
    }
    return value;
  }
}
