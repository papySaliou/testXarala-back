import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { RevenuModule } from './revenu/revenu.module';
import { DepenseModule } from './depense/depense.module';
import { RapportModule } from './rapport/rapport.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      }),
    UserModule, TransactionModule, RevenuModule, DepenseModule, RapportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
