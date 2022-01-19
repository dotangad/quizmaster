export default function Media({ media, mediaType, className }) {
  return mediaType === "Image" ? (
    <img src={media} alt="media" className={className} />
  ) : mediaType === "Video" ? (
    <video controls className={className}>
      <source src={media} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  ) : (
    <></>
  );
}
