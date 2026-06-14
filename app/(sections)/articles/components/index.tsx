"use client";

import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

type Article = {
  id: number;
  title: string;
  description: string;
  date: string;
  badge: string;
  imageUrl: string;
};

type Props = {
  articles: Article[];
};

const Articles = (props: Props) => {
  if (!props.articles || props.articles.length === 0) {
    return <div className="py-10 text-center text-lg text-gray-500">No articles available.</div>;
  }

  return (
    // Tailwind grid for responsive layout
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.articles.map((article) => (
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

          <Text size="xs" c="dimmed" className="mb-2">
            {article.date}
          </Text>

          <Text size="sm" c="dimmed" className="line-clamp-3 flex-grow">
            {article.description}
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Read More
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Articles;
