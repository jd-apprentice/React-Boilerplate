export {};

declare global { 
    interface Window {
      config: Record<string, string>;
      baseUrl: string;
    }
}