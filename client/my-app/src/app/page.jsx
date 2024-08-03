'use client'


import WebcamCapture from "./components/WebcamCapture";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WebcamCapture></WebcamCapture>
    </main>
  );
}
