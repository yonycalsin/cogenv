import { Config as Init, CogenvOptions, Use } from '@cogenv/core';
import { CogenvType, CogenvTypeOptions } from '@cogenv/typed';
import { CogenvObject } from '@cogenv/object';

interface Options extends CogenvOptions {
   typedOptions?: CogenvTypeOptions;
   [key: string]: any;
}

export const Config = (options: Options = {}) => {
   const { typedOptions, ...more } = options;

   Init({
      types: true,
      objects: true,
      logging: true,
      ...more,
   });

   // initializing typing plugin
   Use<CogenvTypeOptions>(CogenvType, {
      mergedTypes: true,
      ...typedOptions,
   });

   // Starting the object divider
   Use(CogenvObject);

   return cog.env || process.env;
};

export default Config;
