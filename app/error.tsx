"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold">Coś poszło nie tak!</h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
}
