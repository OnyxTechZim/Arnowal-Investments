# React + Vite

## Contact form email

The contact form posts to `public/api/contact.php`, which is included in the
production build and sends enquiries to `info@arnowal.co.zw` with PHP's `mail()`.
The cPanel hosting account must support PHP and have outgoing mail enabled. Set
up the domain's SPF and DKIM records in cPanel to improve delivery. If PHP mail
is disabled by the host, enable it with the host or configure an authenticated
SMTP service before expecting the form to deliver messages.

The API runs on the deployed cPanel site; Vite's local development server does
not execute PHP, so test delivery from the deployed site.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
