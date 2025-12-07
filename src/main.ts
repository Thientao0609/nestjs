import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Session middleware
  app.use(
    session({
      secret: process.env.SESSION_SECRET ?? 'default_secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // View config
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}

bootstrap();
