import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react';
import type { IconType } from 'react-icons';
import { LuBrainCircuit, LuMessageSquareCode } from 'react-icons/lu';
import { MdWeb } from 'react-icons/md';
import { RiRobot2Line } from 'react-icons/ri';
import {
  SiGit,
  SiGithubcopilot,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi, TbPlugConnected } from 'react-icons/tb';
import {
  Angular as AngularAsset,
  Javascript as JavaScriptAsset,
  React as ReactAsset,
  Typescript as TypeScriptAsset,
} from '@assets/index';
import type { userInfo } from '@utils/types/user.type';

interface ISkillsSectionProps {
  userData: userInfo;
}

interface ISkillPosition {
  x: number;
  y: number;
}

interface IDragState {
  index: number;
  offsetX: number;
  offsetY: number;
}

interface ISkillVisual {
  asset?: string;
  icon?: IconType;
}

const SKILL_VISUALS: Record<string, ISkillVisual> = {
  Angular: { asset: AngularAsset },
  Git: { icon: SiGit },
  'GitHub Copilot': { icon: SiGithubcopilot },
  JavaScript: { asset: JavaScriptAsset },
  'Next.js': { icon: SiNextdotjs },
  'Prompt Engineering': { icon: LuMessageSquareCode },
  RAG: { icon: RiRobot2Line },
  React: { asset: ReactAsset },
  'REST APIs': { icon: TbApi },
  Redux: { icon: SiRedux },
  SCSS: { icon: SiSass },
  'Tailwind CSS': { icon: SiTailwindcss },
  TypeScript: { asset: TypeScriptAsset },
  'Web Components': { icon: MdWeb },
  WebSockets: { icon: TbPlugConnected },
  Zustand: { icon: LuBrainCircuit },
};

const shuffle = <T,>(items: T[]): T[] => {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex]!,
      shuffledItems[index]!,
    ];
  }

  return shuffledItems;
};

const createRandomPositions = (
  count: number,
  canvasWidth: number,
  canvasHeight: number,
  isDesktop: boolean,
): ISkillPosition[] => {
  const padding = isDesktop ? 28 : 12;
  const itemWidth = isDesktop ? 96 : 80;
  const itemHeight = isDesktop ? 112 : 96;
  const columns = Math.min(count, isDesktop ? 6 : 3);
  const rows = Math.ceil(count / columns);
  const horizontalStep =
    columns > 1 ? (canvasWidth - padding * 2 - itemWidth) / (columns - 1) : 0;
  const verticalStep =
    rows > 1 ? (canvasHeight - padding * 2 - itemHeight) / (rows - 1) : 0;
  const horizontalJitter = Math.max(0, horizontalStep - itemWidth) / 3;
  const verticalJitter = Math.max(0, verticalStep - itemHeight) / 3;
  const slots = Array.from({ length: columns * rows }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const jitterX = (Math.random() * 2 - 1) * horizontalJitter;
    const jitterY = (Math.random() * 2 - 1) * verticalJitter;

    return {
      x:
        ((padding + itemWidth / 2 + column * horizontalStep + jitterX) / canvasWidth) *
        100,
      y:
        ((padding + itemHeight / 2 + row * verticalStep + jitterY) / canvasHeight) *
        100,
    };
  });

  return shuffle(slots).slice(0, count);
};

const SkillsSection = ({ userData }: ISkillsSectionProps) => {
  const skills = Array.isArray(userData.skills) ? userData.skills : [];
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<ISkillPosition[]>([]);
  const [dragState, setDragState] = useState<IDragState | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasRect = canvas.getBoundingClientRect();
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    setPositions(
      createRandomPositions(skills.length, canvasRect.width, canvasRect.height, isDesktop),
    );
  }, [skills.length]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const updatePosition = (index: number, position: ISkillPosition) => {
    setPositions((currentPositions) =>
      currentPositions.map((currentPosition, currentIndex) =>
        currentIndex === index ? position : currentPosition,
      ),
    );
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    const itemRect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({
      index,
      offsetX: event.clientX - itemRect.left,
      offsetY: event.clientY - itemRect.top,
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragState) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasRect = canvas.getBoundingClientRect();
    const itemRect = event.currentTarget.getBoundingClientRect();
    const halfItemWidth = itemRect.width / 2;
    const halfItemHeight = itemRect.height / 2;
    const centerX = Math.min(
      Math.max(
        event.clientX - canvasRect.left - dragState.offsetX + halfItemWidth,
        halfItemWidth,
      ),
      canvasRect.width - halfItemWidth,
    );
    const centerY = Math.min(
      Math.max(
        event.clientY - canvasRect.top - dragState.offsetY + halfItemHeight,
        halfItemHeight,
      ),
      canvasRect.height - halfItemHeight,
    );

    updatePosition(dragState.index, {
      x: (centerX / canvasRect.width) * 100,
      y: (centerY / canvasRect.height) * 100,
    });
  };

  const handlePointerEnd = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragState(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const movementByKey: Partial<Record<string, ISkillPosition>> = {
      ArrowDown: { x: 0, y: 3 },
      ArrowLeft: { x: -3, y: 0 },
      ArrowRight: { x: 3, y: 0 },
      ArrowUp: { x: 0, y: -3 },
    };
    const movement = movementByKey[event.key];
    const currentPosition = positions[index];

    if (!movement || !currentPosition) return;

    event.preventDefault();
    updatePosition(index, {
      x: Math.min(Math.max(currentPosition.x + movement.x, 6), 94),
      y: Math.min(Math.max(currentPosition.y + movement.y, 8), 92),
    });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-semantic-panel-bg px-6 py-12 text-semantic-text-body md:px-12 md:py-14 lg:px-[clamp(4rem,7vw,8rem)] lg:py-16"
      aria-labelledby="skills-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-semantic-accent-primary-10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[90rem]">
        <header className="text-center">
          <h2
            id="skills-title"
            className="font-display text-[clamp(2.25rem,4vw,5.5rem)] font-light leading-[0.95] tracking-[-0.045em] text-semantic-text-strong"
          >
            My{' '}
            <strong className="bg-theme-gradient bg-clip-text font-bold uppercase tracking-normal text-transparent">
              Skills
            </strong>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-semantic-text-body md:text-base md:leading-8">
            Technical expertise blended with creativity — explore the tools behind my work.
          </p>
        </header>

        <div
          ref={canvasRef}
          className="relative mt-10 h-[48rem] touch-none overflow-hidden rounded-[2rem] border border-semantic-line-rule bg-semantic-page-bg shadow-[0_0_45px_var(--semantic-shadow-color)] md:h-[36rem]"
          aria-label="Draggable skill canvas"
        >
          <div
            className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-theme-gradient opacity-70"
            aria-hidden="true"
          />

          {skills.map((skill, index) => {
            const visual = SKILL_VISUALS[skill] ?? { icon: LuBrainCircuit };
            const Icon = visual.icon;
            const position = positions[index];

            if (!position) return null;

            const style = {
              '--skill-bounce-delay': `${index * 70}ms`,
              left: `${position.x}%`,
              top: `${position.y}%`,
            } as CSSProperties;

            return (
              <button
                type="button"
                className={`${isVisible ? 'skill-bounce-in' : 'skill-bounce-pending'} absolute z-10 flex h-24 w-20 -translate-x-1/2 -translate-y-1/2 touch-none select-none flex-col items-center justify-center gap-2 rounded-xl text-semantic-text-body transition-[scale,color,filter] hover:scale-110 hover:text-semantic-text-strong hover:drop-shadow-[0_0_14px_var(--semantic-shadow-color)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-semantic-accent-primary active:cursor-grabbing md:h-28 md:w-24 ${dragState?.index === index ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={style}
                aria-label={`${skill} skill. Drag or use arrow keys to reposition.`}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onPointerCancel={handlePointerEnd}
                onPointerDown={(event) => handlePointerDown(event, index)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
              >
                {visual.asset ? (
                  <img
                    className="h-11 w-11 object-contain md:h-14 md:w-14"
                    src={visual.asset}
                    alt=""
                    draggable={false}
                  />
                ) : (
                  Icon && (
                    <Icon
                      className="text-[2.75rem] text-semantic-accent-primary md:text-[3.25rem]"
                      aria-hidden="true"
                    />
                  )
                )}
                <span className="max-w-24 text-center text-[0.65rem] font-semibold leading-tight text-semantic-text-body md:text-xs">
                  {skill}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
