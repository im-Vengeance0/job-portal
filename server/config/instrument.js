// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node"

Sentry.init({
  dsn: "https://9553ac2ea3e89a3c7dea555af3cc5f95@o4509561281118208.ingest.us.sentry.io/4509561290227712",
  integrations:[nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
//   sendDefaultPii: true,
//
// tracesSampleRate:1.0, // capture 100% of the transactions
});

//Manually call startProfiler and stopProfiler
// to profile the code in between

Sentry.profiler.startProfiler();