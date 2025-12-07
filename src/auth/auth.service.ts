import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}

  async validateUser(username: string, password: string) {
    const user = await this.adminService.findByUsername(username);

    if (!user) return null;
    if (user.password !== password) return null;

    return user;   // hợp lệ
  }
}
