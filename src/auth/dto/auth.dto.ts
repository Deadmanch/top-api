import { IsString } from 'class-validator';
import { AuthErrors } from '../auth.constants';

export class AuthDto {
	@IsString({ message: AuthErrors.LOGIN_MUST_BE_STRING })
	login: string;
	@IsString({ message: AuthErrors.PASSWORD_MUST_BE_STRING })
	password: string;
}
