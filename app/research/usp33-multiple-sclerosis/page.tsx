'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function ProteinModel({ isHealthy }: { isHealthy: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={isHealthy ? "#2b5c54" : "#8d302a"}
          attach="material"
          distort={isHealthy ? 0.2 : 0.8}
          speed={isHealthy ? 1 : 4}
          roughness={0.4}
          wireframe
        />
      </Sphere>
    </>
  );
}

export default function Usp33Research() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yMove = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const [simHealthy, setSimHealthy] = useState(false);

  return (
    <div ref={containerRef} className="relative w-full">
      
      {/* Hero Section */}
      <section className="h-[90vh] w-full relative flex items-center justify-center overflow-hidden">
        
        {/* Full background 3D Scene */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none md:pointer-events-auto">
          {mounted && (
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ProteinModel isHealthy={false} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          )}
        </div>

        <motion.div 
          className="relative z-10 text-center max-w-4xl px-6"
          style={{ opacity: yOpacity, y: yMove }}
        >
          <div className="inline-block border border-stone-light px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-6 bg-bone/50 backdrop-blur-sm">
            Research Paper
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-obsidian tracking-tight mb-6">
            Targeting USP33 in Multiple Sclerosis
          </h1>
          <p className="font-sans font-light text-lg md:text-xl text-stone-mid mb-6 max-w-2xl mx-auto">
            Linking Deubiquitination to Immune Activation and Demyelination.
          </p>
          <p className="font-mono text-xs text-stone-mid tracking-widest uppercase">By Devarshi Dalal</p>
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
      <section className="min-h-[200vh] relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Narrative */}
        <div className="w-full md:w-5/12 relative h-full">
          <div className="md:sticky md:top-32 flex flex-col gap-32">
            {[
              {
                title: "Abstract",
                content: "Multiple sclerosis (MS) is an autoimmune disease characterized by demyelination. USP33, a gene that codes for a deubiquitinating enzyme, has emerged as a potential therapeutic target due to its association with inflammation and demyelination. My analysis found USP33 exhibited significantly more expression in MS brain samples, pointing to increased immune cell activation and inflammation."
              },
              {
                title: "Introduction",
                content: "Impacting 2.8 million individuals globally, MS disrupts electrical signal transmission by damaging the protective myelin sheath. Our study investigates Ubiquitin-specific Protease 33 (USP33) and its role in abnormal protein abundance, linking protein dysregulation to neurological dysfunction."
              },
              {
                title: "Methodology",
                content: "Gene expression analysis utilizing GEO2R uncovered USP33's logFC values and significant p-values. STRING-DB untangled the biological processes, while KEGG mapped the Ubiquitin-mediated proteolysis pathway with a low False Discovery Rate (2.61e-06)."
              },
              {
                title: "Results & Mechanistic Implications",
                content: "Overexpression of USP33 is directly related to the UMP pathway, which drives the degradation of Myelin Basic Protein (MBP) and Proteolipid Proteins (PLPs). Downregulating USP33 through RNA interference or small molecule inhibitors is a promising therapeutic strategy to decelerate MS progression."
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
                <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">0{i+1} &mdash; {block.title}</div>
                <p className="font-sans text-lg text-ink leading-relaxed">
                  {block.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Diagram Zone */}
        <div className="w-full md:w-7/12 sticky top-32 h-[60vh] bg-stone-light/30 border border-stone-200 mt-20 md:mt-0 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Abstract grid pattern */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
              <div className="font-mono text-xs text-stone-mid uppercase tracking-widest mb-8">
                Simulation: USP33 Targeting via RNAi
              </div>
              
              <div className="h-[250px] w-full max-w-[300px] mb-8 relative">
                 {mounted && (
                   <Canvas camera={{ position: [0, 0, 5] }}>
                      <ProteinModel isHealthy={simHealthy} />
                      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={simHealthy ? 2 : 6} />
                   </Canvas>
                 )}
              </div>

              <p className="font-sans text-sm text-stone-mid max-w-[300px] mb-8 h-12">
                {simHealthy 
                  ? "Downregulation stabilizes MBP and PLPs, actively reducing demyelination." 
                  : "USP33 overexpression drives abnormal protein degradation and myelin assault."}
              </p>

              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => setSimHealthy(false)}
                  className={`border border-stone-300 px-6 py-2 font-mono text-xs transition-colors pointer-events-auto ${!simHealthy ? 'bg-obsidian text-bone' : 'hover:bg-stone-50 bg-bone text-obsidian'}`}
                  data-cursor="hover"
                >
                  MS Pathology
                </button>
                <button 
                  onClick={() => setSimHealthy(true)}
                  className={`border border-stone-300 px-6 py-2 font-mono text-xs transition-colors pointer-events-auto ${simHealthy ? 'bg-accent text-bone' : 'hover:bg-stone-50 bg-bone text-obsidian'}`}
                  data-cursor="hover"
                >
                  Target USP33 (RNAi)
                </button>
              </div>
            </div>

        </div>

      </section>

    </div>
  );
}
