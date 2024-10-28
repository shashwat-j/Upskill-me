import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Brain, Target, BookOpen } from "lucide-react"


const Home = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-2xl font-bold">upskill me</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Abstract background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Your Perfect Career Path
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Generate ultra-personalized skill-learning roadmaps to excel at the career that suits you best.
          </p>
          <div className="space-y-4">
            <button
              // onClick={() => navigate("/form")}
              onClick={() => navigate("/quiz")}
              className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-lg font-semibold flex items-center justify-center mx-auto"
            >
              Start Your Career Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-gray-400">No login required</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Brain className="h-12 w-12 text-purple-500" />}
            title="AI-Powered Insights"
            description="Our advanced AI analyzes your personality and interests to provide tailored career recommendations."
          />
          <FeatureCard
            icon={<Target className="h-12 w-12 text-purple-500" />}
            title="Personalized Roadmaps"
            description="Get a customized skill-learning plan to help you achieve your career goals efficiently."
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12 text-purple-500" />}
            title="Curated Udemy Courses"
            description="Receive recommendations for specific Udemy courses that align with each step of your personalized roadmap."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Take the Quiz</h3>
              <p className="text-gray-400">Answer questions about your interests, skills, and personality.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Get Your Roadmap</h3>
              <p className="text-gray-400">Receive a personalized career path and skill development plan.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Start Learning</h3>
              <p className="text-gray-400">Begin your journey with recommended Udemy courses and resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">upskill me</div>
          <div className="text-gray-400">
            Contact us: <a href="mailto:whatshashwat@gmail.com" className="hover:text-purple-500 transition-colors duration-300">whatshashwat@gmail.com</a>, <a href="mailto:rishabhjain2dtu@gmail.com" className="hover:text-purple-500 transition-colors duration-300">rishabhjain2dtu@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default Home;
