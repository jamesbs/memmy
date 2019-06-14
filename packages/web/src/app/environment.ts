import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export type Environment = typeof environment;

export const Environment = new InjectionToken<Environment>('environment');
