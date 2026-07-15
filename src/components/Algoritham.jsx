const Algoritham = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 px-5 relative top-86">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/10 backdrop-blur-lg shadow-2xl p-10 md:p-16">
          {/* Decorative Blur */}
          <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Welcome to <span className="text-cyan-400">Mock Prepare</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          {/* Paragraph */}
          <p
            className="mt-10 text-center text-gray-200 leading-9 text-lg md:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.5px",
            }}
          >
            Dear Students, welcome to{" "}
            <span className="font-semibold text-cyan-300">Mock Prepare</span>, a
            learning platform designed to transform the way you study. We
            strongly believe that education should never feel boring or
            stressful. Instead, it should be engaging, enjoyable, and inspiring.
            Our mission is to help every learner achieve their academic goals by
            making every concept easier to understand through smart learning
            techniques and practical explanations. At Mock Prepare, every
            subject is presented with clarity, creativity, and genuine
            information so that you gain confidence with every lesson you
            explore. We encourage you to visit our website every day, even if
            you have only a few minutes to spare. Read our blogs, discover
            exciting educational content, and explore our fun learning section
            where knowledge meets curiosity. Our philosophy is simple —
            <span className="font-semibold text-cyan-300">
              {" "}
              Less Time, More Learning
            </span>
            . Every article, fact, and explanation is based on authentic,
            relevant, and well-researched information to ensure quality learning
            for every student. We aim to boost your understanding of every
            subject, strengthen every concept, and motivate you to become a
            better learner every single day. Learning with us is not just about
            preparing for exams; it is about building confidence, developing
            curiosity, and creating a lifelong habit of gaining knowledge. So,
            keep learning, stay consistent, believe in yourself, and let Mock
            Prepare become your trusted companion on your educational journey.
            Together, we will explore amazing facts, unlock new opportunities,
            and turn every challenge into success.
          </p>

          {/* Bottom Quote */}
          <div className="mt-10 flex justify-center">
            <div className="border border-cyan-400/40 rounded-full px-8 py-3 bg-cyan-400/10">
              <p
                className="text-cyan-300 text-lg italic"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                "Learn Smart • Stay Curious • Achieve Success"
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-gray-400 text-sm tracking-wider uppercase">
            Thank You ❤️ | Team Mock Prepare
          </p>
        </div>
      </div>
    </section>
  );
};

export default Algoritham;
