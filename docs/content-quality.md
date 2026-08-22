# Kannada Content Quality Standard

All Kannada text added to the toolkit must be reviewed for spelling, grammar, word choice, punctuation, and Unicode correctness before it is committed.

## Varamahalakshmi standard

Use the festival name:

**ವರಮಹಾಲಕ್ಷ್ಮಿ**

Preferred greeting:

**ವರಮಹಾಲಕ್ಷ್ಮಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!**

Avoid common misspellings such as:

- `ವರಮಹಾಲಕ್ಶ್ಮಿ`
- `ವರಮಹಾಲಕ್ಷ್ಮೀ` when referring to the festival name used by this project
- `ಹಾರ್ಧಿಕ`

The project should prefer natural, standard Kannada rather than literal word-for-word translations from English.

## Before committing Kannada content

1. Check every word against the project dictionary or a trusted Kannada reference.
2. Check sentence structure and case endings.
3. Check punctuation and spacing.
4. Preserve Kannada Unicode characters exactly.
5. Add a regression test for important public-facing text.
6. Run `npm test` before committing.
