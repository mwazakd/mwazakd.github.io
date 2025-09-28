---
layout: default
title: Blog
---

<div class="max-w-4xl mx-auto px-4 pt-8 pb-16">
  <h1 class="text-4xl font-bold mb-8 text-center">Blog</h1>
  
  <div class="space-y-8">
    {% for post in site.posts %}
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6">
      {% if post.image %}
      <img src="{{ post.image }}" alt="{{ post.title }}" class="w-full h-48 object-cover rounded-lg mb-4">
      {% endif %}
      
      <h2 class="text-2xl font-semibold mb-2">
        <a href="{{ post.url }}" class="hover:text-blue-500 transition">{{ post.title }}</a>
      </h2>
      
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">{{ post.date | date: "%B %-d, %Y" }}</p>
      
      <div class="text-gray-700 dark:text-gray-300 mb-4">
        {{ post.excerpt | strip_html | truncate: 200 }}
      </div>
      
      <a href="{{ post.url }}" class="text-blue-600 hover:underline font-medium">Read more →</a>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="text-center text-gray-500 dark:text-gray-400">
      <p class="text-lg">No blog posts yet. Check back soon!</p>
    </div>
    {% endif %}
  </div>
</div>