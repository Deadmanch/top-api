import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { AuthErrors } from '../src/auth/auth.constants';

const loginDto: AuthDto = {
	login: 'a2@.ru',
	password: '123',
};

describe('AuthController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/auth/login (POST) - success', async () => {
		await request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }) => {
				expect(body.access_token).toBeDefined();
				return;
			});
	});

	it('/auth/login (POST) - failed login not found', async () => {
		await request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: 'a1@.ru' })
			.expect(401, {
				statusCode: 401,
				message: AuthErrors.USER_NOT_FOUND,
				error: 'Unauthorized',
			});
	});

	it('/auth/login (POST) - failed incorrect password', async () => {
		await request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '321' })
			.expect(401, {
				statusCode: 401,
				message: AuthErrors.INCORRECT_PASSWORD,
				error: 'Unauthorized',
			});
	});
});
afterAll(async () => {
	disconnect();
});
