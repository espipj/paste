import { Cypress } from 'cypress';

declare module "*.svg" {
  const content: any;
  export default content;
}

// Add Cypress to global window for testing
export declare global {
  interface Window {
    Cypress: Cypress;
  }
}
