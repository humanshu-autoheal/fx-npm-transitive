# fx-npm-transitive

Test fixture for an Autoheal vulnerability-remediation agent. Nothing here is production code.

- **Setup:** `express-session` is pinned to `1.17.3`. It has no advisory of its own, but it pulls in `cookie 0.4.2` and `on-headers 1.0.2`, both of which have advisories.
- **Why this is a good case:** the parent pins ranges that exclude the fixed versions, so upgrading the parent is not enough. The fix is a scoped `overrides` entry in `package.json`.
- **Reachable:** `src/index.js` creates the session middleware.
- **Expected agent outcome:** a pull request that adds `overrides` for `cookie` and `on-headers`, regenerates `package-lock.json`, and keeps `npm test` green.
