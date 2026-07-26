# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project

======================= MY PERSPECTIVE ========================================
======================== MY COMPANY MOCK PREPARE =============================

STEPS:--

1. First, i have completed my Design , where i have created three card components Such as , Physics, Chemistry, Mathematics.
2. The amazing component i created, which is anyonen comes in my website first or when he/she will refreshed then it will shows "Banner Image" before looking website.
3. In first Interface I created Three Hero Images , which is animated run by every 2 seconds.
4. Three  Cards Component created here , the first one is for "Free Mock Test", second is "Paid Mock test" , third is  "Mock prepare, Our Company , what can do for you", that's it.
5. I created Blogs part , Lets fun part which is extra ordinary for students, then login with Phone Number.
6. One section is Your Mock ,where every students will do a test.
7. In this "your mock " frame , i created Next button for next questions , and back buttons for back questions. 
8. Now, the next is set my "Finish Button", when the mock test became the last question , then there a finish button will show.

9. // here we use navigate , when user reached at last question then will be finish button , if click it then go to /yourmock page

<!-- 10.  <button onClick={() => navigate('/yourmock')} -->
10. when we write direct  navigate in onClick , ten function does not be waiting for use r it directly render , when screen looks . that is why we pass () => this things until or unless user not click the finish button , it will not go /yourmock.

11.








=========================== CHALLENES ===============================

** The main challenges facing to me , my data is not working on smart phone means questions are not visible in phone view but it is showing on desktop , because local host , backend, database all are open in one palce , therefore it is running smoothly on my Desktop, but not in my phone.

** Solution: i should to be deploy beckend on render, then it will take a link ,and i have to put it that link on my frontend area where, localhost located.