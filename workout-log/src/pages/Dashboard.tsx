import { mockWorkouts } from "../data/mockWorkouts";

export default function Dashboard() {
  return (
    <div className="">
      <header className="shadow p-4 mb-4">
        <h1 className="text-2xl font-bold text-center">Workout Log</h1>
      </header>

      <main className="max-w-3xl mx-auto p-4 shadow text-center">
        {mockWorkouts.map((workout) => (
          <div key={workout.id} className="">
            <p className="font-semibold">{workout.exercise}</p>
            <p className="text-sm">
              {workout.sets} x {workout.reps} @ {workout.weight}kg
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}
