import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Render,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @Render('login')
  loginPage(@Req() req: Request) {
    const error = req.session['loginError'];
    req.session['loginError'] = null; // reset lỗi sau khi đọc
    return { error };
  }

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { username, password } = req.body;

    try {
      const user = await this.authService.validateUser(username, password);

      if (!user) {
        req.session['loginError'] = 'Sai tên đăng nhập hoặc mật khẩu!';
        return res.redirect('/');
      }

      req.session['user'] = user;
      return res.redirect('/nhanvien');

    } catch (err) {
      req.session['loginError'] = 'Có lỗi xảy ra khi đăng nhập!';
      return res.redirect('/');
    }
  }

  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.session.destroy(() => res.redirect('/'));
  }
}
