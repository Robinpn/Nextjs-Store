'use client';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  );
}
