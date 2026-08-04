'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AbstractModel() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#141414"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          wireframe
        />
      </Sphere>
    </>
  );
}

export default function Research() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yMove = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative w-full">
      
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        
        {/* Full background 3D Scene */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none md:pointer-events-auto">
          {mounted && (
            <Canvas camera={{ position: [0, 0, 5] }}>
              <AbstractModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          )}
        </div>

        <motion.div 
          className="relative z-10 text-center max-w-3xl px-6"
          style={{ opacity: yOpacity, y: yMove }}
        >
          <div className="inline-block border border-stone-light px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-6 bg-bone/50 backdrop-blur-sm">
            Published in / Working Paper
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-obsidian tracking-tight mb-6">
            Neurocomputational Models of Decision-Making
          </h1>
          <p className="font-sans font-light text-lg text-stone-mid mb-6">
            Investigating the algorithmic basis of choice architecture under high-uncertainty environments using functional neuroimaging and reinforcement learning models.
          </p>
          <p className="font-mono text-xs text-stone-mid tracking-widest">2025</p>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-stone-mid">
          <div className="w-[1px] h-12 bg-stone-light overflow-hidden">
             <motion.div 
                className="w-full h-full bg-accent origin-top"
                animate={{ translateY: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             />
          </div>
        </div>
      </section>

      {/* Scrollytelling content */}
      <section className="min-h-[200vh] relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Narrative */}
        <div className="w-full md:w-5/12 relative h-full">
          <div className="sticky top-32 flex flex-col gap-32">
            {[
              {
                title: "Introduction",
                content: "Traditional models assume a unitary decision threshold. However, clinical data suggests that the striatal gating mechanism is highly adaptive. We proposed a multi-threshold model.", // TODO: Replace with actual content
              },
              {
                title: "The Mechanics",
                content: "By altering the drift rate dynamically based on incoming reward prediction errors, the circuit can transition from exploratory to exploitative states rapidly.", // TODO: Replace with actual content
              },
              {
                title: "Results",
                content: "Our updated architecture outperforms standard Drift-Diffusion Models (DDM) by 14% on out-of-sample prediction in high-volatility environments.", // TODO: Replace with actual content
              }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 0.5 }}
                className="prose prose-stone"
              >
                <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">0{i+1} {/* block.title */} {block.title}</div>
                <p className="font-sans text-lg text-ink leading-relaxed">
                  {block.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Diagram Placeholder */}
        <div className="w-full md:w-7/12 sticky top-32 h-[60vh] bg-white border border-stone-light flex items-center justify-center">
            
            <div className="text-center">
              <div className="font-mono text-sm text-stone-mid mb-4">Interactive Diagram Zone</div>
              <p className="font-sans text-xs text-stone-mid max-w-[240px] mb-8">
                {/* TODO: Replace with actual React component visualizing the data. Toggles and variables can be placed here. */}
              </p>

              <div className="flex justify-center gap-4">
                <button className="border border-stone-light px-4 py-2 font-mono text-xs hover:bg-stone-50 transition-colors pointer-events-auto" data-cursor="hover">Simulate Var A</button>
                <button className="border border-stone-light px-4 py-2 font-mono text-xs hover:bg-stone-50 transition-colors pointer-events-auto" data-cursor="hover">Simulate Var B</button>
              </div>
            </div>

        </div>

      </section>

    </div>
  );
}
