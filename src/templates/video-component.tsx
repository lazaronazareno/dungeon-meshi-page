'use server';

export default function VideoComponent() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/n5JEoD7keVo?si=1Fs4GemJFqa2f6me?autoplay=1"
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  );
}
