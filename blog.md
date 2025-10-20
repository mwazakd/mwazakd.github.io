---
layout: blog
title: "Blog"
description: "Thoughts, insights, and discoveries in science, technology, and education"
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for post in site.posts %}
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    {% if post.image %}
    <div class="aspect-w-16 aspect-h-9">
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" 
           class="w-full h-48 object-cover">
    </div>
    {% endif %}
    
    <div class="p-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
        {% if post.categories %}
        <span>•</span>
        <span>{{ post.categories | first }}</span>
        {% endif %}
      </div>
      
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
        <a href="{{ post.url | relative_url }}" class="hover:text-blue-600 dark:hover:text-blue-400">
          {{ post.title }}
        </a>
      </h2>
      
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {{ post.excerpt | strip_html | truncate: 120 }}
      </p>
      
      <div class="flex items-center justify-between">
        <a href="{{ post.url | relative_url }}" 
           class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm">
          Read more →
        </a>
        
        {% if post.tags %}
        <div class="flex gap-1">
          {% for tag in post.tags limit:2 %}
          <span class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs">
            {{ tag }}
          </span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="text-center py-12">
  <div class="text-gray-400 dark:text-gray-500 mb-4">
    <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>
  </div>
  <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No posts yet</h3>
  <p class="text-gray-600 dark:text-gray-400">Check back soon for new content!</p>
</div>
{% endif %}