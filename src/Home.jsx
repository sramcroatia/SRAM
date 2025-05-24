
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const episodes = [
  {
    title: "Сезон 1 — Эпизод 1",
    description: "Первая серия сериала. Габриэль сталкивается с давлением в школе, а новая ученица Нора вызывает у него интерес.",
    videoLink: "https://vk.com/video-223118971_456239017",
    subsLink: "https://vk.com/wall-223118971_25"
  },
  {
    title: "Сезон 1 — Эпизод 2",
    description: "Отношения между героями усложняются, Габриэль и Нора становятся ближе.",
    videoLink: "https://vk.com/video-223118971_456239018",
    subsLink: "https://vk.com/wall-223118971_28"
  },
  {
    title: "Сезон 1 — Эпизод 3",
    description: "Группа друзей обсуждает свои отношения, появляются первые конфликты и недопонимания.",
    videoLink: "https://vk.com/video-223118971_456239019",
    subsLink: "https://vk.com/wall-223118971_31"
  },
  {
    title: "Сезон 1 — Эпизод 4",
    description: "Нора сталкивается с трудностями в семье, а Габриэль старается поддержать её.",
    videoLink: "https://vk.com/video-223118971_456239020",
    subsLink: "https://vk.com/wall-223118971_34"
  }
];

const characters = [
  {
    name: "Габриэль",
    role: "Главный герой. Скромный, наблюдательный, попадает в водоворот чувств и событий.",
  },
  {
    name: "Нора",
    role: "Новая ученица. Сильная и загадочная, быстро привлекает внимание Габриэля.",
  },
  {
    name: "Роко",
    role: "Лучший друг Габриэля. Ироничный и прямолинейный, поддерживает его в сложные моменты.",
  },
  {
    name: "Мия",
    role: "Подруга Норы, душа компании и источник драмы."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-col items-center justify-center">
        <img src="/sram-logo.jpg" alt="SRAM Logo" className="w-64 mb-6" />
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">SRAM</h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          «SRAM» — хорватский ремейк популярнейшего норвежского сериала о жизни подростков — «SKAM».
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="secondary">Смотреть</Button>
          <Button variant="outline">Субтитры</Button>
          <Button variant="ghost">О проекте</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-16">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">Эпизоды</h2>
              {episodes.map((ep, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-bold text-white">{ep.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{ep.description}</p>
                  <div className="flex gap-4">
                    <a href={ep.videoLink} target="_blank" className="text-yellow-400 underline">Видео</a>
                    <a href={ep.subsLink} target="_blank" className="text-yellow-400 underline">Субтитры</a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">Герои</h2>
              {characters.map((char, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-bold text-white">{char.name}</h3>
                  <p className="text-sm text-gray-300">{char.role}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">Медиа</h2>
              <p className="text-sm">
                Галерея фотографий, трейлеров, гифок и фан-арта из сериала. Всё самое атмосферное в одном месте. Подробнее — в нашем паблике: <a href="https://vk.com/skamcroatia" className="underline text-yellow-400" target="_blank">vk.com/skamcroatia</a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">О нас</h2>
              <p className="text-sm">
                Мы — команда фанатов, создающая субтитры и озвучку для сериала. Присоединяйтесь к нашему сообществу во ВКонтакте: <a href="https://vk.com/skamcroatia" className="underline text-yellow-400" target="_blank">vk.com/skamcroatia</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
