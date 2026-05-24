import { useState, useRef } from "react";

import { Play, X } from "lucide-react";
import { Button, Modal } from "@mantine/core";
export default function VideoPlayerModal() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // آدرس ویدیو در لوکال هاست (باید در پوشه public پروژه شما باشد)
  // مثلاً public/videos/sample.mp4

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
    setOpened(false);
  };

  return (
    <>
      {/* دکمه باز کردن مودال */}
      <Button
        onClick={() => setOpened(true)}
        leftSection={<Play className="h-4 w-4" />}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        size="md"
        radius="xl"
      >
        مشاهده ویدیوی معرفی
      </Button>

      {/* مودال Mantine */}
      <Modal
        opened={opened}
        onClose={handleClose}
        size="70rem"
        centered
        withCloseButton={false}
        padding={0}
        radius="xl"
        styles={{
          content: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {/* کانتینر ویدیو با Tailwind */}
        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10">
          {/* دکمه بستن سفارشی */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:text-red-400"
          >
            <X className="h-5 w-5" />
          </button>

          {/* تگ ویدیو */}
          <video
            ref={videoRef}
            src="/videos/filmtest.mp4"
            className="h-full w-full object-cover"
            controls={true} // می‌توانید false کنید اگر فقط کنترل‌های کاستوم خودتان را می‌خواهید
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controlsList="nodownload"
          />

          {/* لایه رویی برای دکمه Play/Pause بزرگ وسط ویدیو (مخفی شدن هنگام پخش) */}
          {!isPlaying && (
            <div
              className="absolute inset-0 z-40 flex cursor-pointer items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all"
              onClick={togglePlay}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-md transition-transform hover:scale-110 hover:bg-white/30">
                <Play className="h-10 w-10 translate-x-0.5 fill-white" />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
