"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");

    reset();

  };

  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32 min-h-screen">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-5xl">
                  Get in touch with me
                </h1>
                <p className="mt-6 text-lg text-zinc-400 dark:text-zinc-800">
                  Have a question, concern, or feedback for us? Please use our
                  contact form to reach out! I will respond to your message
                  within 24 hours. Thank you for your interest.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="relative isolate">
                  <div className="max-w-2xl mx-auto lg:max-w-5xl">
                    <div className="flex flex-col gap-20 sm:gap-y-24 lg:flex-row mb-12">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="lg:flex-auto"
                        autoComplete="off"
                      >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-semi-bold leading-6 text-zinc-400 dark:text-zinc-600"
                            >
                              First Name
                            </label>
                            <div className="mt-2.5">
                              <input
                                {...register("firstName", {
                                  required: "First Name is required",
                                })}
                                type="text"
                                id="firstName"
                                className="block w-full appearance-none rounded-md border border-zinc-900/10 bg-zinc-700 px-3.5 py-2 shadow-sm shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                              />
                              {errors.firstName && (
                                <span className="text-red-500 text-xs">
                                  {errors.firstName.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-semi-bold leading-6 text-zinc-400 dark:text-zinc-600"
                            >
                              Last Name
                            </label>
                            <div className="mt-2.5">
                              <input
                                {...register("lastName", {
                                  required: "Last Name is required",
                                })}
                                type="text"
                                id="lastName"
                                className="block w-full appearance-none rounded-md border border-zinc-900/10 bg-zinc-700 px-3.5 py-2 shadow-sm shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                              />
                              {errors.lastName && (
                                <span className="text-red-500 text-xs">
                                  {errors.lastName.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-semi-bold leading-6 text-zinc-400 dark:text-zinc-600"
                            >
                              Email
                            </label>
                            <div className="mt-2.5">
                              <input
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format",
                                  },
                                })}
                                type="email"
                                id="email"
                                className="block w-full appearance-none rounded-md border border-zinc-900/10 bg-zinc-700 px-3.5 py-2 shadow-sm shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                              />
                              {errors.email && (
                                <span className="text-red-500 text-xs">
                                  {errors.email.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="message"
                              className="block text-sm font-semi-bold leading-6 text-zinc-400 dark:text-zinc-600"
                            >
                              Message
                            </label>
                            <div className="mt-2.5">
                              <textarea
                                {...register("message", {
                                  required: "Message is required",
                                })}
                                id="message"
                                className="block w-full appearance-none rounded-md border border-zinc-900/10 bg-zinc-700 px-3.5 py-2 shadow-sm shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                              />
                              {errors.message && (
                                <span className="text-red-500 text-xs">
                                  {errors.message.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 w-full"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                      <div className="lg:mt-6 lg:w-96 lg:flex-none">
                        <figure>
                          <blockquote className="text-sm font-semibold leading-8 text-zinc-300 italic dark:text-zinc-100">
                            <p>
                              I've had the pleasure of working with Hassan for several years on multiple projects. He is an incredibly driven engineer who sees the big picture, but also ensures the details are accounted for. I'm constantly impressed by his efforts to become proficient in cloud technologies and infrastructure as code. He is great at elevating teams, and working directly with end consumers and product organizations. Above all, he ensures that quality code ships on time and meets client needs.
                            </p>
                          </blockquote>
                          <figcaption className="flex mt-10 gap-x-6">
                            <Image
                              src="/Kashif.jpeg"
                              alt=""
                              width={800}
                              height={800}
                              className="flex-none w-12 h-12 rounded-full sm:w-14 sm:h-14"
                              loading="lazy"
                            />
                            <div className="text-sm sm:text-base">
                              <div className="font-semibold text-zinc-300 dark:text-zinc-100">
                                Matt Demaray
                              </div>
                              <div className="text-zinc-600 dark:text-zinc-400">
                                Software Architect at PowerSchool
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
