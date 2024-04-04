/// <reference types="nativewind/types" />
import { HeadersDefaults } from 'axios';


interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
  ['X-Company']: string;
}
