import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (configSevice: ConfigService): Promise<JwtModuleOptions> => {
	return {
		secret: configSevice.get('JWT_SECRET'),
	};
};
