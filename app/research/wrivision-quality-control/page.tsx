'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

type LayerId = 'input' | 'conv' | 'pool' | 'dense' | 'transition' | 'heads';
type TaskId = 'projection' | 'laterality' | 'cast' | 'hardware';

const layers: Array<{
  id: LayerId;
  label: string;
  short: string;
  color: string;
  width: number;
  height: number;
  detail: string;
}> = [
  {
    id: 'input',
    label: 'Input',
    short: '224 x 224 wrist radiograph',
    color: '#555555',
    width: 96,
    height: 150,
    detail:
      'Each de-identified wrist radiograph was resized to 224 x 224 pixels and normalized before the model saw it.',
  },
  {
    id: 'conv',
    label: 'Convolution',
    short: 'feature extraction',
    color: '#9BBE83',
    width: 34,
    height: 118,
    detail:
      'Convolutional layers applied kernels across the image to pick up edges, marker shapes, cast texture, hardware, and anatomy.',
  },
  {
    id: 'pool',
    label: 'Pooling',
    short: 'dimension reduction',
    color: '#D884C8',
    width: 30,
    height: 96,
    detail:
      'Pooling compressed the image representation so later layers could keep the useful signal while reducing spatial noise.',
  },
  {
    id: 'dense',
    label: 'Dense blocks',
    short: 'x6 / x12 / x24 / x16',
    color: '#4D559A',
    width: 76,
    height: 108,
    detail:
      'DenseNet121 reused features across layers, which helped one model learn related tasks instead of training four isolated classifiers.',
  },
  {
    id: 'transition',
    label: 'Transition',
    short: 'conv + pooling',
    color: '#E9A777',
    width: 26,
    height: 76,
    detail:
      'Transition layers reduced the load entering each dense block and kept the model compact enough for a quality-control workflow.',
  },
  {
    id: 'heads',
    label: 'Four output heads',
    short: 'projection / laterality / cast / hardware',
    color: '#744F8A',
    width: 142,
    height: 36,
    detail:
      'The final shared representation branched into four Softmax heads: projection, laterality marker, cast presence, and hardware presence.',
  },
];

const tasks: Record<TaskId, {
  label: string;
  f1: number;
  auc: number;
  classes: string;
  interpretation: string;
  limitation: string;
}> = {
  projection: {
    label: 'Projection',
    f1: 97.23,
    auc: 0.992,
    classes: 'Posteroanterior, oblique, lateral',
    interpretation:
      'The strongest quality-control signal was identifying the projection/view, which is essential because a missing or mislabeled view changes how a radiologist interprets the wrist series.',
    limitation:
      'Scaphoid and carpal tunnel views were excluded because there were not enough examples to represent the full variety.',
  },
  laterality: {
    label: 'Laterality',
    f1: 82.52,
    auc: 0.958,
    classes: 'Left marker, right marker, no marker',
    interpretation:
      'Laterality was the clinically important stress test: the model needed to catch whether the L/R marker matched what was entered into the imaging workflow.',
    limitation:
      'The hardest cases were missing or incorrectly captured markers. The no-marker precision-recall AUC dropped to 0.597, which made this the main limitation.',
  },
  cast: {
    label: 'Cast',
    f1: 97.7,
    auc: 0.996,
    classes: 'Cast, no cast',
    interpretation:
      'Cast detection worked especially well because casts change image texture and attenuation in a way the network could consistently learn.',
    limitation:
      'The clinical value is highest when this label is passed back to the technologist before the patient leaves, not only after radiology review.',
  },
  hardware: {
    label: 'Hardware',
    f1: 92.27,
    auc: 0.989,
    classes: 'Hardware, no hardware',
    interpretation:
      'Hardware detection added a second safety check for plates, screws, and other structures that can obscure anatomy or alter interpretation.',
    limitation:
      'Saliency maps were useful here because they showed whether the model was attending to the hardware region or relying on broader image context.',
  },
};

const workflow = [
  {
    label: 'Acquire',
    icon: ScanSearch,
    text: 'A technologist captures PA, oblique, and lateral wrist radiographs and uploads the images into the PACS/DICOM workflow.',
  },
  {
    label: 'Classify',
    icon: Cpu,
    text: 'One multi-task DenseNet121 model reads the image and predicts projection, laterality, cast, and hardware at the same time.',
  },
  {
    label: 'Compare',
    icon: Workflow,
    text: 'The model output is compared against the order, metadata, and expected labels. A match passes quality control.',
  },
  {
    label: 'Alert',
    icon: AlertTriangle,
    text: 'If the labels disagree, the system can alert the technologist while the patient is still present and the image can be corrected.',
  },
];

const architectureBlocks: Array<{
  key: string;
  id: LayerId;
  label: string;
  note?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dx: number;
  dy: number;
  front: string;
  top: string;
  side: string;
  captionX?: number;
  captionY: number;
}> = [
  { key: 'input', id: 'input', label: 'Input image', note: '224 x 224 radiograph', x: 72, y: 172, w: 158, h: 292, dx: 64, dy: -42, front: '#454545', top: '#9A9A9A', side: '#6D6D6D', captionY: 536 },
  { key: 'conv-stem', id: 'conv', label: 'Convolution', x: 390, y: 232, w: 46, h: 196, dx: 26, dy: -22, front: '#A8C790', top: '#D7F2BA', side: '#789068', captionY: 504 },
  { key: 'pool', id: 'pool', label: 'Pooling', x: 550, y: 252, w: 48, h: 152, dx: 26, dy: -21, front: '#D17AC8', top: '#F2A6E8', side: '#975B8E', captionY: 480 },
  { key: 'dense-6', id: 'dense', label: 'Dense block', note: 'x6 layers', x: 700, y: 216, w: 140, h: 144, dx: 54, dy: -24, front: '#545DA3', top: '#7D86DE', side: '#3D467F', captionY: 430 },
  { key: 'transition-1', id: 'transition', label: 'Transition', x: 965, y: 246, w: 28, h: 92, dx: 22, dy: -17, front: '#EAAA76', top: '#FFD3A4', side: '#A87553', captionY: 412 },
  { key: 'dense-12', id: 'dense', label: 'Dense block', note: 'x12 layers', x: 1088, y: 242, w: 122, h: 86, dx: 46, dy: -20, front: '#545DA3', top: '#7D86DE', side: '#3D467F', captionY: 396 },
  { key: 'transition-2', id: 'transition', label: 'Transition', x: 1320, y: 256, w: 26, h: 64, dx: 20, dy: -15, front: '#EAAA76', top: '#FFD3A4', side: '#A87553', captionY: 386 },
  { key: 'dense-24', id: 'dense', label: 'Dense block', note: 'x24 layers', x: 1430, y: 260, w: 112, h: 54, dx: 40, dy: -17, front: '#545DA3', top: '#7D86DE', side: '#3D467F', captionY: 374 },
  { key: 'transition-3', id: 'transition', label: 'Transition', x: 1640, y: 268, w: 24, h: 48, dx: 18, dy: -13, front: '#EAAA76', top: '#FFD3A4', side: '#A87553', captionY: 368 },
  { key: 'dense-16', id: 'dense', label: 'Dense block', note: 'x16 layers', x: 1724, y: 276, w: 90, h: 42, dx: 32, dy: -14, front: '#545DA3', top: '#7D86DE', side: '#3D467F', captionY: 360 },
  { key: 'conv-tail', id: 'conv', label: 'Final feature map', x: 1588, y: 470, w: 44, h: 128, dx: 23, dy: -17, front: '#A8C790', top: '#D7F2BA', side: '#789068', captionY: 662 },
  { key: 'heads', id: 'heads', label: 'Four output heads', note: 'projection / laterality / cast / hardware', x: 990, y: 538, w: 380, h: 46, dx: 28, dy: -17, front: '#79528F', top: '#A678BF', side: '#5B3D6F', captionX: 1190, captionY: 654 },
];

function getArchitectureBlock(key: string) {
  const block = architectureBlocks.find((item) => item.key === key);

  if (!block) {
    throw new Error(`Missing architecture block: ${key}`);
  }

  return block;
}

function ArchitectureDiagram({
  activeLayer,
  setActiveLayer,
}: {
  activeLayer: LayerId;
  setActiveLayer: (layer: LayerId) => void;
}) {
  const drawStraightArrow = (key: string, x1: number, y1: number, x2: number, y2: number) => {
    const pointsRight = x2 >= x1;
    const head = pointsRight
      ? `M ${x2 - 18} ${y2 - 13} L ${x2} ${y2} L ${x2 - 18} ${y2 + 13}`
      : `M ${x2 + 18} ${y2 - 13} L ${x2} ${y2} L ${x2 + 18} ${y2 + 13}`;

    return (
      <g key={key}>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#0A0A0A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d={head}
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    );
  };

  const drawArrowBetween = (key: string, fromKey: string, toKey: string, yOffset = 0) => {
    const from = getArchitectureBlock(fromKey);
    const to = getArchitectureBlock(toKey);
    const y = Math.round((from.y + from.h / 2 + to.y + to.h / 2) / 2) + yOffset;
    const startX = from.x + from.w + from.dx + 28;
    const endX = to.x - 28;

    if (endX <= startX) {
      return null;
    }

    return drawStraightArrow(key, startX, y, endX, y);
  };

  const drawPrism = (block: (typeof architectureBlocks)[number]) => {
    const { x, y, w, h, dx, dy } = block;
    const active = activeLayer === block.id;
    const captionX = block.captionX ?? x + w / 2 + dx / 2;
    const underlineY = block.captionY + (block.note ? 44 : 15);
    const stroke = '#24313B';
    const strokeWidth = 2;

    return (
      <g key={block.key}>
        <g
          onClick={() => setActiveLayer(block.id)}
          className="cursor-pointer"
          data-cursor="hover"
          filter="url(#architecture-shadow)"
        >
          <title>{block.label}</title>
          <polygon
            points={`${x},${y} ${x + dx},${y + dy} ${x + w + dx},${y + dy} ${x + w},${y}`}
            fill={block.top}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <polygon
            points={`${x + w},${y} ${x + w + dx},${y + dy} ${x + w + dx},${y + h + dy} ${x + w},${y + h}`}
            fill={block.side}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <polygon
            points={`${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`}
            fill={block.front}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={x + w + 0.5}
            y1={y + 1}
            x2={x + w + dx - 0.5}
            y2={y + dy + 1}
            stroke="#FFFFFF"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
        </g>
        <text
          x={captionX}
          y={block.captionY}
          textAnchor="middle"
          className={`font-mono text-[17px] uppercase tracking-[0.24em] ${
            active ? 'fill-accent' : 'fill-stone-mid'
          }`}
        >
          {block.label}
        </text>
        {block.note && (
          <text
            x={captionX}
            y={block.captionY + 29}
            textAnchor="middle"
            className="font-sans text-[18px] fill-ink"
          >
            {block.note}
          </text>
        )}
        {active && (
          <line
            x1={captionX - 38}
            y1={underlineY}
            x2={captionX + 38}
            y2={underlineY}
            stroke="#2F58FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </g>
    );
  };

  const dense16 = getArchitectureBlock('dense-16');
  const convTail = getArchitectureBlock('conv-tail');
  const heads = getArchitectureBlock('heads');
  const loopStartX = dense16.x + dense16.w + dense16.dx + 20;
  const loopStartY = dense16.y + dense16.h / 2;
  const loopEndX = convTail.x + convTail.w + convTail.dx + 30;
  const loopEndY = convTail.y + convTail.h / 2 - 6;
  const headStartX = convTail.x - 34;
  const headEndX = heads.x + heads.w + heads.dx + 34;
  const headY = heads.y + heads.h / 2;

  return (
    <svg viewBox="0 0 1900 720" className="h-auto w-full" role="img" aria-label="DenseNet121 architecture flow">
      <defs>
        <filter id="architecture-shadow" x="-18%" y="-24%" width="142%" height="156%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#0A0A0A" floodOpacity="0.12" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1900" height="720" fill="#DDEAF3" />
      <rect x="42" y="36" width="1816" height="648" fill="none" stroke="#D3D8D8" strokeWidth="1.5" />

      <text x="78" y="84" className="fill-stone-mid font-mono text-[18px] uppercase tracking-[0.28em]">
        DenseNet121 flow
      </text>

      {drawArrowBetween('input-to-conv', 'input', 'conv-stem')}
      {drawArrowBetween('conv-to-pool', 'conv-stem', 'pool')}
      {drawArrowBetween('pool-to-dense6', 'pool', 'dense-6')}
      {drawArrowBetween('dense6-to-transition1', 'dense-6', 'transition-1')}
      {drawArrowBetween('transition1-to-dense12', 'transition-1', 'dense-12')}
      {drawArrowBetween('dense12-to-transition2', 'dense-12', 'transition-2')}
      {drawArrowBetween('transition2-to-dense24', 'transition-2', 'dense-24')}
      {drawArrowBetween('dense24-to-transition3', 'dense-24', 'transition-3')}
      {drawArrowBetween('transition3-to-dense16', 'transition-3', 'dense-16')}

      <path
        d={`M ${loopStartX} ${loopStartY} H 1844 V ${loopEndY} H ${loopEndX}`}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M ${loopEndX + 18} ${loopEndY - 13} L ${loopEndX} ${loopEndY} L ${loopEndX + 18} ${loopEndY + 13}`}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {drawStraightArrow('feature-to-heads', headStartX, headY, headEndX, headY)}

      <g>
        <text x="690" y="568" className="fill-obsidian font-serif text-[32px]">Classification</text>
        <path d="M 866 512 C 832 520 832 606 866 614" fill="none" stroke="#0A0A0A" strokeWidth="5" />
        {['Projection', 'Laterality', 'Cast', 'Hardware'].map((task, index) => (
          <text
            key={task}
            x="896"
            y={524 + index * 30}
            className="fill-obsidian font-sans text-[17px]"
          >
            {task}
          </text>
        ))}
      </g>

      {architectureBlocks.map(drawPrism)}
    </svg>
  );
}

function ArchitectureExplorer() {
  const [activeLayer, setActiveLayer] = useState<LayerId>('dense');
  const selected = layers.find((layer) => layer.id === activeLayer) ?? layers[0];

  return (
    <section className="border-y border-obsidian bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              Interactive architecture
            </div>
            <h2 className="font-serif text-4xl leading-tight text-obsidian md:text-5xl">
              The poster architecture, rebuilt as a cleaner full-width model map.
            </h2>
          </div>
          <p className="font-sans text-lg font-light leading-relaxed text-ink">
            The key design choice was not just using a CNN. It was using a multi-task DenseNet121 backbone so the same visual representation could support four quality-control decisions. Click a layer in the diagram or selector to inspect what it contributed.
          </p>
        </div>

        <div className="overflow-hidden border border-stone-light bg-[#E7F0F7] p-4 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              DenseNet121 flow
            </div>
            <Layers size={18} className="text-accent" />
          </div>

          <div className="relative overflow-hidden border border-stone-light bg-[#DDEAF3]">
            <ArchitectureDiagram activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-stone-light bg-bone p-6">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              Active layer
            </div>
            <h3 className="mb-3 font-serif text-3xl text-obsidian">{selected.label}</h3>
            <p className="font-sans text-sm leading-relaxed text-ink">{selected.detail}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                data-cursor="hover"
                className={`border px-3 py-3 text-left transition-colors ${
                  activeLayer === layer.id ? 'border-obsidian bg-obsidian text-bone' : 'border-stone-light bg-white text-obsidian hover:border-obsidian'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest">{layer.label}</div>
                <div className="mt-1 font-sans text-xs opacity-70">{layer.short}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowPanel() {
  const [activeStep, setActiveStep] = useState(1);
  const CurrentIcon = workflow[activeStep].icon;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            Clinical workflow
          </div>
          <h2 className="font-serif text-4xl leading-tight text-obsidian">
            The point was quality control before the patient leaves.
          </h2>
        </div>
        <p className="font-sans text-lg font-light leading-relaxed text-ink">
          Most MSK radiographs are not reviewed by a radiologist until after acquisition. That delay matters: if a wrist is mislabeled, the patient may already be gone. This system reframes the model as a near-real-time technologist assistant rather than a diagnostic black box.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3 md:grid-cols-4">
          {workflow.map((step, index) => {
            const Icon = step.icon;
            return (
              <button
                key={step.label}
                onClick={() => setActiveStep(index)}
                data-cursor="hover"
                className={`min-h-[220px] border p-5 text-left transition-all ${
                  activeStep === index ? 'border-obsidian bg-obsidian text-bone' : 'border-stone-light bg-white text-obsidian hover:border-obsidian'
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <Icon size={20} className={activeStep === index ? 'text-accent-warm' : 'text-accent'} />
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">0{index + 1}</span>
                </div>
                <div className="font-serif text-2xl">{step.label}</div>
              </button>
            );
          })}
        </div>

        <div className="border border-stone-light bg-white p-8">
          <CurrentIcon size={28} className="mb-8 text-accent" />
          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
            Step 0{activeStep + 1}
          </div>
          <h3 className="mb-4 font-serif text-3xl text-obsidian">{workflow[activeStep].label}</h3>
          <p className="font-sans text-base font-light leading-relaxed text-ink">{workflow[activeStep].text}</p>
        </div>
      </div>
    </section>
  );
}

function ResultsDashboard() {
  const [activeTask, setActiveTask] = useState<TaskId>('laterality');
  const selected = tasks[activeTask];

  return (
    <section className="bg-obsidian text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.2fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent-warm">
            Model performance
          </div>
          <h2 className="mb-6 font-serif text-4xl leading-tight">
            Four outputs, one quality-control decision.
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-stone-200">
            The model only becomes useful when the outputs are interpreted together. Projection, laterality, cast, and hardware each answer a different question about whether the image is safe to send forward.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {(Object.keys(tasks) as TaskId[]).map((taskId) => (
              <button
                key={taskId}
                onClick={() => setActiveTask(taskId)}
                data-cursor="hover"
                className={`border px-4 py-4 text-left transition-colors ${
                  activeTask === taskId ? 'border-accent-warm bg-accent-warm text-bone' : 'border-stone-mid text-stone-200 hover:border-bone'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest">{tasks[taskId].label}</div>
                <div className="mt-2 font-serif text-2xl">{tasks[taskId].f1.toFixed(2)}%</div>
                <div className="font-sans text-xs opacity-70">F1 score</div>
              </button>
            ))}
          </div>
        </div>

        <div className="border border-stone-mid bg-bone p-8 text-obsidian">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                Selected task
              </div>
              <h3 className="font-serif text-4xl">{selected.label}</h3>
            </div>
            <ShieldCheck size={28} className="text-accent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                <span>F1 score</span>
                <span>{selected.f1.toFixed(2)}%</span>
              </div>
              <div className="h-3 border border-obsidian bg-white">
                <div className="h-full bg-accent" style={{ width: `${selected.f1}%` }} />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                <span>PR AUC</span>
                <span>{selected.auc.toFixed(3)}</span>
              </div>
              <div className="h-3 border border-obsidian bg-white">
                <div className="h-full bg-accent-warm" style={{ width: `${selected.auc * 100}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-light pt-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              Classes
            </div>
            <p className="mb-6 font-serif text-2xl text-obsidian">{selected.classes}</p>
            <p className="mb-6 font-sans text-base font-light leading-relaxed text-ink">{selected.interpretation}</p>
            <div className="border-l-2 border-accent-warm pl-5 font-sans text-sm leading-relaxed text-ink">
              {selected.limitation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValidationGrid() {
  const folds = [
    ['A', 'B', 'C', 'D', 'E'],
    ['E', 'A', 'B', 'C', 'D'],
    ['D', 'E', 'A', 'B', 'C'],
    ['C', 'D', 'E', 'A', 'B'],
    ['B', 'C', 'D', 'E', 'A'],
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            Training and validation
          </div>
          <h2 className="mb-6 font-serif text-4xl leading-tight text-obsidian">
            The model was tuned for generalization, not a clean-looking demo.
          </h2>
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-ink">
            <p>
              The dataset started with 8,718 wrist radiographs and was filtered to 6,823 de-identified images from 2,591 patients after excluding low-quantity views and enforcing label consistency.
            </p>
            <p>
              Images were split into training/validation and test subsets with stratification based on projection. The final training setup used mini-batches of 64, Adam optimization, weighted categorical cross-entropy, learning-rate decay, and early stopping after validation loss plateaued.
            </p>
            <p>
              Five-fold cross-validation checked that the model was not simply memorizing the training distribution. That was especially important because the class balance varied across projection, marker, cast, and hardware labels.
            </p>
          </div>
        </div>

        <div className="border border-stone-light bg-white p-6">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
            Five-fold rotation
          </div>
          <div className="space-y-3">
            {folds.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-2">
                {row.map((cell, cellIndex) => {
                  const isValidation = cellIndex === 0;
                  return (
                    <div
                      key={`${rowIndex}-${cell}`}
                      className={`border px-3 py-4 text-center font-mono text-xs uppercase tracking-widest ${
                        isValidation ? 'border-accent bg-accent text-bone' : 'border-stone-light bg-bone text-obsidian'
                      }`}
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 font-sans text-sm text-stone-mid">
            <span className="h-3 w-3 border border-accent bg-accent" />
            Held-out validation fold
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WriVisionQualityControlPage() {
  return (
    <div className="relative min-h-screen bg-bone pt-16">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/research"
            data-cursor="hover"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid hover:text-accent"
          >
            Back to research <ArrowRight size={12} />
          </Link>
          <div className="mb-5 inline-flex border border-stone-light bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
            Medical imaging AI / Quality control
          </div>
          <h1 className="mb-8 font-serif text-5xl leading-[1.02] tracking-tight text-obsidian md:text-7xl">
            WriVision: AI quality control for wrist X-rays.
          </h1>
          <p className="max-w-3xl font-sans text-xl font-light leading-relaxed text-ink">
            This project asked a practical question: can an AI model help technologists catch wrist X-ray labeling and acquisition problems before the patient leaves? I built the page around the actual research arc: the clinical problem, the DenseNet121 multi-task model, and the places where the model worked or still struggled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-obsidian bg-white p-6 shadow-[8px_8px_0px_var(--color-obsidian)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              Core study facts
            </div>
            <CheckCircle2 size={18} className="text-accent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['8,718', 'original wrist radiographs'],
              ['6,823', 'filtered training set images'],
              ['4', 'simultaneous output heads'],
              ['97.23%', 'projection F1 score'],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-stone-light pt-4">
                <div className="font-serif text-4xl text-obsidian">{value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-accent pl-5 font-sans text-sm leading-relaxed text-ink">
            The model was built for four checks: projection/view, laterality marker, cast presence, and hardware presence. A disagreement could trigger a correction while the patient was still in the department.
          </div>
        </motion.div>
      </section>

      <WorkflowPanel />
      <ArchitectureExplorer />
      <ResultsDashboard />
      <ValidationGrid />

      <section className="border-t border-stone-light px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              What I learned
            </div>
            <h2 className="font-serif text-4xl leading-tight text-obsidian">
              The hard part was not whether the model could classify. It was whether it could be trusted in the workflow.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-stone-light bg-white p-6">
              <AlertTriangle className="mb-6 text-accent-warm" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">Marker dependence</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                Laterality was the most fragile output because missing or poorly captured markers were harder for the model than ordinary left/right marker reads. Future work should force the model to learn anatomy by training with marker-cropped images.
              </p>
            </div>
            <div className="border border-stone-light bg-white p-6">
              <ScanSearch className="mb-6 text-accent" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">Saliency as a safety layer</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                Saliency maps helped show which regions influenced the prediction, especially for hardware and cast. That makes the model easier to audit before it is integrated into clinical software.
              </p>
            </div>
            <div className="border border-stone-light bg-white p-6 md:col-span-2">
              <Workflow className="mb-6 text-accent" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">Next version</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                The natural extension is moving upstream: apply a similar model to a live patient-hand view before radiation is administered, then expand from wrist radiographs into other anatomy such as ankle studies where projection and laterality checks matter in a similar way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
