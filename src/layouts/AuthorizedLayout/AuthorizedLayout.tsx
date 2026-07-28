import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLock, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Link, useOutlet } from 'react-router';

const AuthorizedLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="relative isolate min-h-svh w-full overflow-hidden bg-semantic-page-bg text-semantic-text-body">
      {outlet ?? (
        <main className="relative grid min-h-svh place-items-center px-6 py-16" aria-labelledby="workspace-title">
          <div
            className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(var(--semantic-line-rule)_1px,transparent_1px),linear-gradient(90deg,var(--semantic-line-rule)_1px,transparent_1px)] opacity-30 [background-size:42px_42px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-semantic-accent-primary-10 blur-[100px]"
            aria-hidden="true"
          />

          <section className="w-full max-w-2xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-semantic-line-rule bg-semantic-panel-bg-50 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-semantic-text-body backdrop-blur-md">
              <FontAwesomeIcon className="text-semantic-accent-primary" icon={faLock} />
              Authorized workspace
              <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-semantic-accent-primary" aria-hidden="true" />
            </div>

            <div className="relative mx-auto mb-10 grid h-28 w-28 place-items-center rounded-[2rem] border border-semantic-accent-primary-40 bg-semantic-panel-bg shadow-[0_0_60px_var(--semantic-accent-primary-20)]">
              <div className="absolute inset-2 rounded-[1.6rem] border border-dashed border-semantic-line-rule" aria-hidden="true" />
              <FontAwesomeIcon className="h-10 w-10 text-semantic-accent-primary" icon={faScrewdriverWrench} />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-semantic-accent-primary">
              Work in progress
            </p>
            <h1
              id="workspace-title"
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-semantic-text-strong"
            >
              Something useful is
              <span className="block bg-theme-gradient bg-clip-text text-transparent">being assembled.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-semantic-text-body md:text-base">
              This private workspace is taking shape behind the scenes. The foundation is ready; the thoughtful details are next.
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-semantic-line-rule bg-semantic-panel-bg-50 p-5 text-left backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                <span>Workspace progress</span>
                <span className="text-semantic-accent-primary">In development</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-semantic-line-rule">
                <div className="h-full w-2/3 rounded-full bg-theme-gradient" />
              </div>
            </div>

            <Link
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-semantic-line-rule px-5 py-3 text-sm font-semibold text-semantic-text-body no-underline hover:border-semantic-accent-primary hover:text-semantic-accent-primary"
              to="/profile"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to public profile
            </Link>
          </section>
        </main>
      )}
    </div>
  );
};

export default AuthorizedLayout;
