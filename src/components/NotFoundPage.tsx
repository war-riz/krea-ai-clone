"use client";

import React from 'react';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import Link from 'next/link';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-pulse">
            404
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
            The page you&#39;re looking for seems to have wandered off into the digital void. Don&#39;t worry, it happens to the best of us!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="group flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Maybe try one of these instead?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/gallery"
              className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/50 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-white">Gallery</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Browse our collection</div>
              </div>
            </a>

            <a
              href="/search"
              className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Search className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-white">Search</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Find what you need</div>
              </div>
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Still need help? Get in touch with us:
            </p>
            <a
              href="mailto:support@example.com"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">support@example.com</span>
            </a>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Error 404: Page not found, but your sense of humor is still intact! 😄
          </p>
        </div>
      </div>
    </div>
  );
}