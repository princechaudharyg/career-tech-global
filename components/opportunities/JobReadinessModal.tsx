"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconBook2,
  IconCheck,
  IconCircleCheck,
  IconClock,
  IconRefresh,
  IconTargetArrow,
  IconX,
} from "@tabler/icons-react";

import {
  coursePaths,
  getJobTrack,
  questionBank,
  type JobCategory,
} from "./jobQuestions";

type Job = {
  id?: string;
  role: string;
  company: string;
  category: JobCategory;
  recommendedProgram: string;
};

type JobReadinessModalProps = {
  job: Job | null;
  onClose: () => void;
};

export default function JobReadinessModal({
  job,
  onClose,
}: JobReadinessModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const track = useMemo(() => {
    if (!job) {
      return "full-stack-development" as const;
    }

    return getJobTrack(job.role, job.category);
  }, [job]);

  const questions = useMemo(() => {
    return questionBank[track];
  }, [track]);

  const course = coursePaths[track];

  useEffect(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setAnswerRevealed(false);
    setFinished(false);
  }, [job?.id, job?.role, track]);

  if (!job || questions.length === 0) {
    return null;
  }

  const current = questions[currentQuestion];

  const correctAnswers = questions.filter(
    (question) => answers[question.id] === question.correctIndex,
  ).length;

  const score = Math.round((correctAnswers / questions.length) * 100);

  const incorrectQuestions = questions.filter(
    (question) =>
      answers[question.id] !== undefined &&
      answers[question.id] !== question.correctIndex,
  );

  const isReadyToApply = score >= 70;

  const result =
    score >= 85
      ? {
          label: "Strong Match",
          color: "text-emerald-600",
          background: "bg-emerald-50",
          description:
            "You have a strong foundation for this role. Review the job requirements and apply confidently.",
        }
      : score >= 70
        ? {
            label: "Good Potential",
            color: "text-amber-600",
            background: "bg-amber-50",
            description:
              "You have a good foundation. Strengthen the highlighted topics before applying.",
          }
        : {
            label: "Needs Preparation",
            color: "text-violet-600",
            background: "bg-violet-50",
            description:
              "Your next best step is focused training and practical projects in the weak areas below.",
          };

  const handleAnswer = (optionIndex: number) => {
    if (answerRevealed) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [current.id]: optionIndex,
    }));

    setAnswerRevealed(true);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setAnswerRevealed(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAnswerRevealed(false);
    setFinished(false);
  };

  const selectedOption = answers[current.id];
  const isCorrect = selectedOption === current.correctIndex;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-md">
      <div className="relative max-h-[92vh] w-full max-w-[690px] overflow-y-auto rounded-[30px] bg-white p-5 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close assessment"
          className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <IconX size={21} />
        </button>

        <div className="pr-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">
            <IconTargetArrow size={15} />
            Role-specific readiness assessment
          </div>

          <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
            {job.role}
          </h2>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            {job.company} · {course.title}
          </p>
        </div>

        {!finished ? (
          <>
            <div className="mt-7 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>

              <span>
                {Math.round(
                  ((currentQuestion + 1) / questions.length) * 100,
                )}
                %
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                style={{
                  width: `${
                    ((currentQuestion + 1) / questions.length) * 100
                  }%`,
                }}
              />
            </div>

            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-600">
                {current.skill}
              </p>

              <h3 className="mt-3 text-xl font-black leading-8 text-slate-900">
                {current.question}
              </h3>

              <div className="mt-6 space-y-3">
                {current.options.map((option, index) => {
                  const wasSelected = selectedOption === index;
                  const isCorrectOption = index === current.correctIndex;

                  let optionClass =
                    "border-slate-200 bg-white hover:border-cyan-400 hover:bg-cyan-50";

                  if (answerRevealed && isCorrectOption) {
                    optionClass =
                      "border-emerald-400 bg-emerald-50 text-emerald-900";
                  }

                  if (
                    answerRevealed &&
                    wasSelected &&
                    !isCorrectOption
                  ) {
                    optionClass =
                      "border-rose-400 bg-rose-50 text-rose-900";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      disabled={answerRevealed}
                      className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${optionClass} ${
                        answerRevealed
                          ? "cursor-default"
                          : "cursor-pointer hover:shadow-md"
                      }`}
                    >
                      <span className="pr-4 text-sm font-semibold leading-6">
                        {option}
                      </span>

                      {answerRevealed && isCorrectOption && (
                        <IconCheck
                          size={19}
                          className="shrink-0 text-emerald-600"
                        />
                      )}

                      {answerRevealed &&
                        wasSelected &&
                        !isCorrectOption && (
                          <IconX
                            size={19}
                            className="shrink-0 text-rose-600"
                          />
                        )}
                    </button>
                  );
                })}
              </div>

              {answerRevealed && (
                <div
                  className={`mt-5 rounded-2xl p-4 ${
                    isCorrect ? "bg-emerald-50" : "bg-amber-50"
                  }`}
                >
                  <p
                    className={`text-sm font-black ${
                      isCorrect ? "text-emerald-700" : "text-amber-700"
                    }`}
                  >
                    {isCorrect ? "Correct answer" : "Review this concept"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {current.explanation}
                  </p>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-600"
                  >
                    {currentQuestion === questions.length - 1
                      ? "View My Result"
                      : "Next Question"}
                    <IconArrowRight size={17} />
                  </button>
                </div>
              )}

              {!answerRevealed && (
                <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                  Select the best answer. You will get instant feedback after
                  each question.
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="mt-8 text-center">
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center rounded-[32px] ${result.background}`}
              >
                <span className={`text-4xl font-black ${result.color}`}>
                  {score}%
                </span>
              </div>

              <p className={`mt-5 text-sm font-black ${result.color}`}>
                {result.label}
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Your {job.role} readiness
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                {result.description}
              </p>
            </div>

            <div
              className={`mt-7 rounded-2xl p-4 ${
                isReadyToApply ? "bg-emerald-50" : "bg-violet-50"
              }`}
            >
              <p
                className={`text-sm font-black ${
                  isReadyToApply
                    ? "text-emerald-700"
                    : "text-violet-700"
                }`}
              >
                {isReadyToApply
                  ? "You have crossed the readiness threshold."
                  : "You should complete focused preparation first."}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                {isReadyToApply
                  ? "You can now review the opportunity and continue with your application."
                  : "Use the course roadmap and projects below, then retake the assessment."}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                Skill result
              </h4>

              <div className="mt-4 space-y-3">
                {questions.map((question) => {
                  const answer = answers[question.id];
                  const correct = answer === question.correctIndex;

                  return (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold text-cyan-600">
                            {question.skill}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-700">
                            {correct ? "Ready" : "Needs improvement"}
                          </p>
                        </div>

                        <span
                          className={`text-sm font-black ${
                            correct
                              ? "text-emerald-600"
                              : "text-violet-600"
                          }`}
                        >
                          {correct ? "100%" : "0%"}
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            correct ? "bg-emerald-500" : "bg-violet-500"
                          }`}
                          style={{
                            width: correct ? "100%" : "18%",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {incorrectQuestions.length > 0 && (
              <div className="mt-6 rounded-[24px] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-black uppercase tracking-wider text-amber-700">
                  Focus areas before applying
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {incorrectQuestions.map((question) => (
                    <span
                      key={question.id}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-amber-800"
                    >
                      {question.skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 rounded-[24px] bg-cyan-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-700">
                    Recommended learning path
                  </p>

                  <h4 className="mt-2 text-lg font-black text-cyan-950">
                    {course.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-cyan-950">
                    {course.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-black text-cyan-700">
                  <IconClock size={15} />
                  {course.duration}
                </div>
              </div>

              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                  <IconBook2 size={16} />
                  Modules
                </p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {course.modules.map((module) => (
                    <div
                      key={module}
                      className="flex items-start gap-2 rounded-xl bg-white p-3 text-xs font-semibold leading-5 text-slate-700"
                    >
                      <IconCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-600"
                      />
                      {module}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Portfolio projects
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {course.projects.map((project) => (
                    <span
                      key={project}
                      className="rounded-lg bg-cyan-100 px-3 py-1.5 text-xs font-bold text-cyan-800"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              {isReadyToApply ? (
                <Link
                  href="/register"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20"
                >
                  Continue to Application
                  <IconArrowRight size={17} />
                </Link>
              ) : (
                <Link
                  href="/programs"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20"
                >
                  View Recommended Training
                  <IconCircleCheck size={17} />
                </Link>
              )}

              <button
                type="button"
                onClick={resetQuiz}
                className="mt-5 flex w-full items-center justify-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-blue-600"
              >
                <IconRefresh size={17} />
                Retake Assessment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}