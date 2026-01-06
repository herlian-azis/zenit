"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 240;

// Generate frame paths
const getFramePath = (index: number) => {
  const frameNumber = String(index).padStart(3, "0");
  return `/frames/ezgif-frame-${frameNumber}.jpg`;
};

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = getFramePath(i + 1);
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
          img.onerror = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
        });
      });

      const results = await Promise.all(promises);
      loadedImages.push(...results);
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Draw current frame to canvas
  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || images.length === 0) return;

      const frameIdx = Math.min(Math.max(Math.round(index) - 1, 0), images.length - 1);
      const img = images[frameIdx];

      if (img && img.complete && img.naturalWidth > 0) {
        // Set canvas size to match image aspect ratio
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const containerWidth = canvas.parentElement?.clientWidth || window.innerWidth;
        const containerHeight = canvas.parentElement?.clientHeight || window.innerHeight;

        // Calculate dimensions to fit contain
        let drawWidth, drawHeight;
        if (containerWidth / containerHeight > aspectRatio) {
          drawHeight = containerHeight;
          drawWidth = drawHeight * aspectRatio;
        } else {
          drawWidth = containerWidth;
          drawHeight = drawWidth / aspectRatio;
        }

        canvas.width = containerWidth;
        canvas.height = containerHeight;

        // Center the image
        const x = (containerWidth - drawWidth) / 2;
        const y = (containerHeight - drawHeight) / 2;

        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, containerWidth, containerHeight);
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      }
    },
    [images]
  );

  // Subscribe to frame changes
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    // Initial render
    if (images.length > 0) {
      renderFrame(1);
    }

    return () => unsubscribe();
  }, [frameIndex, images, renderFrame]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, renderFrame]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center gap-6">
            {/* Loading Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-2 border-white/10 rounded-full" />
              <div className="absolute top-0 left-0 w-16 h-16 border-2 border-transparent border-t-white/80 rounded-full animate-spin" />
            </div>
            <div className="text-white/60 text-sm tracking-wider uppercase">
              Loading {loadProgress}%
            </div>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ backgroundColor: "#050505" }}
          />
        )}
      </div>

      {/* Text Overlays */}
      {!isLoading && (
        <>
          {/* 0% - Hero Title */}
          <TextOverlay
            scrollProgress={scrollYProgress}
            start={0}
            end={0.15}
            position="center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient">
              Zenith X
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mt-4 tracking-wide">
              Pure Sound.
            </p>
          </TextOverlay>

          {/* 30% - Left Aligned */}
          <TextOverlay
            scrollProgress={scrollYProgress}
            start={0.25}
            end={0.4}
            position="left"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white/90">
              Precision
              <br />
              Engineering.
            </h2>
            <p className="text-lg md:text-xl text-white/60 mt-4 max-w-md">
              Every component meticulously crafted for acoustic perfection.
            </p>
          </TextOverlay>

          {/* 60% - Right Aligned */}
          <TextOverlay
            scrollProgress={scrollYProgress}
            start={0.5}
            end={0.65}
            position="right"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white/90">
              Titanium
              <br />
              Drivers.
            </h2>
            <p className="text-lg md:text-xl text-white/60 mt-4 max-w-md">
              50mm custom drivers delivering unparalleled clarity and depth.
            </p>
          </TextOverlay>

          {/* 90% - CTA */}
          <TextOverlay
            scrollProgress={scrollYProgress}
            start={0.8}
            end={0.95}
            position="center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient">
              Hear Everything.
            </h2>
            <button className="mt-8 px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Pre-Order Now
            </button>
          </TextOverlay>
        </>
      )}
    </div>
  );
}

// Text Overlay Component
interface TextOverlayProps {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  position: "left" | "center" | "right";
  children: React.ReactNode;
}

function TextOverlay({
  scrollProgress,
  start,
  end,
  position,
  children,
}: TextOverlayProps) {
  const opacity = useTransform(
    scrollProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [start - 0.05, start, end, end + 0.05],
    [30, 0, 0, -30]
  );

  const positionClasses = {
    left: "left-8 md:left-16 lg:left-24 text-left items-start",
    center: "left-1/2 -translate-x-1/2 text-center items-center",
    right: "right-8 md:right-16 lg:right-24 text-right items-end",
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`fixed top-1/2 -translate-y-1/2 z-10 flex flex-col ${positionClasses[position]}`}
    >
      {children}
    </motion.div>
  );
}
