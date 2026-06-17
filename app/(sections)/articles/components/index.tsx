"use client";

import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { myArticles } from "@/app/(sections)/articles/article-data";
import Link from "next/link";
import { appRoutes } from "@/app/constatns/app-routes";

export type Article = {
  id: number;
  title: string;
  description: string;
  date: string;
  badge: string;
  imageUrl: string;
  slug: string;
  content?: string;
};

const Articles = () => {
  if (!myArticles || myArticles.length === 0) {
    return <div className="py-10 text-center text-lg text-gray-500">No articles available.</div>;
  }

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">مقالات و آموزش‌ها</h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          جدیدترین مقالات، راهنماها و نکات کاربردی برای روان‌شناسان، مدیران کلینیک‌ها و متخصصان
          سلامت روان.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {myArticles.map((article: Article) => (
          <Card
            key={article.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="flex flex-col transition-shadow duration-200 hover:shadow-lg"
          >
            {article.imageUrl && (
              <Card.Section>
                <Image src={article.imageUrl} height={160} alt={article.title} />
              </Card.Section>
            )}

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500} className="line-clamp-1 text-xl text-gray-800">
                {article.title}
              </Text>
              {article.badge && (
                <Badge color="blue" variant="light">
                  {article.badge}
                </Badge>
              )}
            </Group>
            <Text size="sm" c="dimmed" className="line-clamp-3 flex-grow">
              {article.description}
            </Text>

            <Link href={`${appRoutes.ARTICLES}/${article.slug}`} color="blue">
              مطالعه
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Articles;
