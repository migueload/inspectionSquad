import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.inspection.squad',
  appName: 'InspectionSquad',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
