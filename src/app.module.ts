import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { FilesModule } from './files/files.module';
import { SitemapModule } from './sitemap/sitemap.module';
import { TelegramModule } from './telegram/telegram.module';
import { getTelegramConfig } from './configs/telegram.config';
import { HhModule } from './hh/hh.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
	imports: [
		ScheduleModule.forRoot(),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getMongoConfig,
			inject: [ConfigService],
		}),
		ConfigModule.forRoot(),
		AuthModule,
		PageModule,
		ProductModule,
		ReviewModule,
		FilesModule,
		SitemapModule,
		TelegramModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTelegramConfig,
		}),
		HhModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
