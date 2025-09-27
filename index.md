---
layout: default
title: Home
---

<section class="max-w-4xl mx-auto px-4 pt-8 pb-16 text-center">
  <img src="/assets/images/profile.jpg" alt="Profile" class="mx-auto w-36 h-36 rounded-full shadow-lg object-cover mb-6">
  <h1 class="text-4xl font-bold mb-4">Hello, I'm {{ site.author }}</h1>
  <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">Welcome to my personal website! I share my research, teaching resources, and weekly blog posts here.</p>
  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Connect on LinkedIn</a>
</section>

<section class="bg-gray-50 dark:bg-gray-800 py-16">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-2xl font-bold mb-8 text-center">Recent Blog Posts</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {% for post in site.posts limit:3 %}
      <div class="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition p-4">
        {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="rounded-lg mb-4 object-cover h-40 w-full">
        {% endif %}
        <h3 class="font-semibold text-lg mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        <a href="{{ post.url }}" class="text-blue-600 hover:underline">Read more →</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
