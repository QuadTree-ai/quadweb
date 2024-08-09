// src/app/blog/page.tsx

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Blog
          </h1>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">Blog Post Title {id}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  This is a brief description of the blog post. It provides an overview of the content and encourages readers to explore further.
                </p>
                <CardDescription className="text-gray-500">
                  Detailed content or a preview of the blog post goes here. This section gives a deeper insight into the topic.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-blue-400 hover:underline">
                  Read More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
