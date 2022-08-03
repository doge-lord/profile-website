# Profile website

## Installation

Made with [Next.js](https://nextjs.org) and [Material UI](https://mui.com/material-ui).

Requires Node.js > 14.

Install via `npm install`.

## Configuration

The following files are necessary to be added/changed:

| File                                 | Type   | Remarks                                                                                                                                                                             |
| ------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/assets/hero-avatar.jpg`      | image  | This is used on the `HeroSection`. Preferrably a square image. Configure the dimensions on all the usage of `Photo` on `HeroSection`.                                               |
| `public/assets/profile-portrait.jpg` | image  | This is used on the `AboutSection`. Preferrably a portrait image. Configure the dimensions on all the usage of `ParallaxImage` on `AboutSection`.                                   |
| `public/assets/profile-avatar.jpg`   | image  | This is used on the About section. Preferrably a square image that was cropped from `profile-portrait.jpg`. Configure the dimensions on all the usage of `Photo` on `AboutSection`. |
| `src/i18n/translations.en.json`      | json   | Most, if not all the text on the profile website is placed here.                                                                                                                    |
| `.env`                               | dotenv | Either set these variables on your terminal or add them to `.env` - `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_PHONE_NUMBER`           |
