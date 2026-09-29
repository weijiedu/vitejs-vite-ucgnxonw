import { telemetry, type Reading } from '../../lib/telemetry';

export type TelemetryResponse = {
  data: Reading[];
};

export async function fetchTelemetry(): Promise<TelemetryResponse> {
  // Simulate a network request.
  await new Promise((resolve) => {
    setTimeout(resolve, 300);
  });

  return {
    data: telemetry,
  };
}
