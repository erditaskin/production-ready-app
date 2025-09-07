import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {
  findAll() {
    // Implementation here
    return [];
  }

  findOne(id: string) {
    // Implementation here
    return null;
  }

  create(createDto: any) {
    // Implementation here
    return createDto;
  }
}
