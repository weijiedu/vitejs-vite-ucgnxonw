# Telemetry Triage Dashboard

You're triaging incoming autonomous vehicle telemetry.

Some sensor readings are physically impossible — specifically:

- speed < 0 mph
- speed > 150 mph

Your task is to build a small React dashboard that makes it easy to inspect the telemetry data and identify invalid readings.

## Data

Use the `fetchTelemetry()` function from:

`src/api/telemetry.ts`

It returns:

```ts
type TelemetryResponse = {
  data: Reading[];
};
```

Each telemetry reading has the following shape:

```ts
type Reading = {
  id: number;
  vehicle_id: string;
  speed: number;
  brake_pressure: number;
  wheel_angle: number;
  battery_level: number;
  tire_pressure: number;
  engine_temp: number;
  region: "North" | "South" | "East" | "West";
  recorded_at: string;
};
```

## Your Tasks

### 1. Display the telemetry data

Fetch the telemetry readings and display them in a table.

The table should show:

- Vehicle ID
- Speed
- Brake Pressure
- Wheel Angle
- Battery Level
- Tire Pressure
- Engine Temperature
- Region
- Recorded At

The UI does not need to be highly polished, but the data should be readable.

### 2. Show the number of invalid readings

Display a summary in the following format:

```text
Invalid Readings Detected: X
```

A reading is considered invalid when:

```ts
speed < 0 || speed > 150
```

`X` should represent the total number of invalid readings in the dataset.

### 3. Highlight invalid readings

Make invalid readings visually distinguishable in the table.

For example, you may:

- highlight the row
- change the text color
- display a warning icon

The exact visual treatment is up to you.

## Notes

- You may use the existing CSS or add your own styles.
- You do not need to spend significant time on visual design.
- Feel free to create additional components if you think they improve the structure of the solution.
- You may use React hooks as needed.
