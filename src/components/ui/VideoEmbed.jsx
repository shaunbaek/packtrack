export default function VideoEmbed({ youtubeId, driveId, title }) {
  const src = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : driveId
      ? `https://drive.google.com/file/d/${driveId}/preview`
      : null

  if (!src) {
    return (
      <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-slate">Video coming soon</p>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
