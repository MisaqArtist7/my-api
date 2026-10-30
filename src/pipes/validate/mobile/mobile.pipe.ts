import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const mobile = value?.mobile;
    if (!mobile) {
      throw new Error('Mobile number is required');
    }
    if (typeof mobile !== 'string') {
      throw new Error('Mobile number must be a string');
    }
    if (!/^\d{10}$/.test(mobile)) {
      throw new Error('Mobile number must be a 10-digit number');
    }
    return value;
  }
}
