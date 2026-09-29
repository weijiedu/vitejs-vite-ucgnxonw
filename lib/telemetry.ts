export type Region = 'North' | 'South' | 'East' | 'West';

export type Reading = {
  id: number;
  vehicle_id: string;
  speed: number;
  brake_pressure: number;
  wheel_angle: number;
  battery_level: number;
  tire_pressure: number;
  engine_temp: number;
  region: Region;
  recorded_at: string;
};

const regions: Region[] = ['North', 'South', 'East', 'West'];

const BASE_TIME = new Date('2026-09-28T20:00:00Z').getTime();

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function randomInt(seed: number, min: number, max: number) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

function generateReading(index: number): Reading {
  const shouldBeInvalid = seededRandom(index * 13 + 7) < 0.08;

  let speed: number;

  if (shouldBeInvalid) {
    const negative = seededRandom(index * 17 + 3) < 0.5;

    speed = negative
      ? randomInt(index * 19, -30, -1)
      : randomInt(index * 23, 151, 190);
  } else {
    speed = randomInt(index * 29, 0, 150);
  }

  return {
    id: index + 1,
    vehicle_id: `V-${String((index % 20) + 1).padStart(2, '0')}`,
    speed,
    brake_pressure: randomInt(index * 31 + 1, 0, 100),
    wheel_angle: randomInt(index * 37 + 2, -45, 45),
    battery_level: randomInt(index * 41 + 3, 10, 100),
    tire_pressure: randomInt(index * 43 + 4, 25, 40),
    engine_temp: randomInt(index * 47 + 5, 70, 120),
    region: regions[index % regions.length],
    recorded_at: new Date(BASE_TIME - index * 60_000).toISOString(),
  };
}

export const telemetry: Reading[] = Array.from({ length: 1000 }, (_, index) =>
  generateReading(index)
);
