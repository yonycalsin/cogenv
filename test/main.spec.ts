import { Config } from '..';
import { env } from '@cogenv/core';

Config({
   logging: false,
});

// obtaining simple variable
test('obtaining simple variable', () => {
   expect(env('APP_NAME')).toBe('Cogenv');
});

// obtaining variable with interpolation
test('obtaining variable with interpolation', () => {
   expect(env('APP_URL')).toBe('http://localhost:3000');
});

// obtaining variable with typing
test('obtaining variable with typing', () => {
   expect(env('APP_PORT')).toEqual('3000');
   expect(env('APP_PORT_NUMBER')).toEqual(3000);
});

// obtaining objects
test('obtaining objects', () => {
   expect(env('DB')).toEqual({
      dialect: 'mysql',
      port: 336,
      port_string: '336',
      localhost: 'localhost',
      user: 'root',
      password: 'cogenv_password',
      logging: true,
      database: 'cogenv_database',
      URL: 'http://localhost:336',
   });

   // Database name
   expect(env('DB.database')).toEqual('cogenv_database');
});

// obtaining objects with typing
test('obtaining objects with typing', () => {
   expect(env('DB.port_string')).toEqual('336');
   expect(env('DB.port')).toEqual(336);
});

// obtaining objects with interpolation
test('obtaining objects with interpolation', () => {
   expect(env('DB.URL')).toEqual('http://localhost:336');
});
