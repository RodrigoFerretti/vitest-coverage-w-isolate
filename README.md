# Vitest Coverage w Isolate

The problem is:

- using isolate: true results in 100% coverage
- using isolate: false lowers the coverage

I figured out how to reproduce it. I've read somewhere that vitest orders the execution by the file's size descending.
The coverage is ignored for the smaller tests when the method being tested is called in one of the "setupFiles" configured, even though the test covers everything.
