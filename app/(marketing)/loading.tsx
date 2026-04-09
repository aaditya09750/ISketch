export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent-decorative/20 border-t-accent-decorative/60 rounded-full animate-spin" />
      </div>
    </div>
  )
}
