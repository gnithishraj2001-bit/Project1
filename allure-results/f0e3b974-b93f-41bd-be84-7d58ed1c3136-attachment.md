# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WindowHandling.spec.js >> Window Handling
- Location: tests\WindowHandling.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=f1e9]
    - button "Continue shopping" [ref=f1e18] [cursor=pointer]
  - generic [ref=f1e21]:
    - link "Conditions of Use & Sale" [ref=f1e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=f1e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=f1e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```